<?php

namespace App\Http\Controllers\SocialTools;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class YoutubeController extends Controller
{

    public function download(Request $request)
    {
        $url = $request->input('url');
        
        $output =  $this->get_info($url);
        return response()->json([
            'output' => json_decode($output)
        ]); 
        
        $file_name = Str::random(15);
        $outputPath = storage_path("app/public/youtube_videos/$file_name.mp4");

        if (!Storage::disk('public')->exists('youtube_videos')) {
            Storage::disk('public')->makeDirectory('youtube_videos');
        }

        $command = "yt-dlp -f bestvideo[ext=mp4]+bestaudio[ext=m4a] -o " . escapeshellarg($outputPath) . " " . escapeshellarg($url) . " 2>&1 ";

        try {
            
            $output = shell_exec($command);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => true,
                'command' => $command,
                'url' => $url,
                'error' => $th->getMessage()
            ]);
        }
      

        if (Storage::disk('public')->exists('youtube_videos/' . $file_name . '.mp4')) {
            return response()->json([
                'status' => true,
                'path' => Storage::url('youtube_videos/' . $file_name . '.mp4'),
            ]);
        } else {

            if (Storage::disk('public')->exists('youtube_videos/' . $file_name . '.webm')) {
                return response()->json([
                    'status' => true,
                    'path' => Storage::url('youtube_videos/' . $file_name . '.webm')
                ]);
            }

            return response()->json([
                'status' => false,
                'command' => $command,
                'message' => 'Failed to download the video.',
                'output' => $output
            ], 500);
        }
    }

    protected function get_info($url){

        if(!$url){
            throw new \Exception('Required Paramter $url not found', 404);
        }

        $command = "yt-dlp --dump-json " . escapeshellarg($url) . " 2>&1";
        try {
            $output = shell_exec($command);
            
            return $output;
        } catch (\Throwable $th) {
            throw new \Exception( $th->getMessage(), 1);
        }

    }
}
