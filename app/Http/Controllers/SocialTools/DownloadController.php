<?php

namespace App\Http\Controllers\SocialTools;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DownloadController extends Controller
{
    protected $sites = ['youtube.com', 'linkedin.com', 'facebook.com', 'instagram.com', 'x.com'];
    protected $file_types = ['mp4', 'webm'];
    private $file_type = 'webm';

    public function index( Request $request ){
        $url = $request->input('url');
        $file_type = $request->input('file_type');
        if (!isset($file_type) || empty($file_type) || !in_array($file_type, $this->file_types)) {
            $file_type = $this->file_type;
        }
        $output =  $this->get_info($url);
        $site = $this->site($url);

        return response()->json([
            'output' => json_decode($output),
            'site' => $site,
            'type' => $file_type,
        ]); 

        $file_name = Str::random(15);
        $outputPath = storage_path("app/public/$site/$file_name.mp4");
        if (!Storage::disk('public')->exists($site)) {
            Storage::disk('public')->makeDirectory($site);
        }

        $command = "yt-dlp ";
        $command .= " -f bestvideo[ext=$file_type]+bestaudio[ext=m4a] ";
        
        $command .=  " -o " . escapeshellarg($outputPath) . " " . escapeshellarg($url) . " 2>&1 ";


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

        if (Storage::disk('public')->exists("$site/" . $file_name . ".$file_type")) {

            return response()->json([
                'status' => true,
                'path' => Storage::url("$site/" . $file_name . ".$file_type"),
            ]);
        } else {

            return response()->json([
                'status' => false,
                'command' => $command,
                'message' => 'Failed to download the video.',
                'output' => $output
            ], 500);
        }
    }



    protected function get_info($url){

        if (!$url) {
            throw new \Exception('Required Paramter $url not found', 404);
        }

        $command = "yt-dlp --dump-json " . escapeshellarg($url) . " 2>&1";
        try {
            $output = shell_exec($command);
            return $output;
        } catch (\Throwable $th) {
            throw new \Exception($th->getMessage(), 1);
        }
    }

    protected function site($url){
        $sites = $this->sites;
        $url = strtolower($url);
        foreach ($sites as $site) {
            if (str_contains($url, $site)) {
                return $site;
            }
        }
    }
}
