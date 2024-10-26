<?php

namespace App\Http\Controllers;

use App\Mail\NewQuoteRequestNotification;
use App\Models\QuoteRequest;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function home()
    {
        return view('frontend.index');
    }

    public function about()
    {
        return view('frontend.about');
    }

    public function services()
    {
        return view('frontend.services');
    }

    public function blogs()
    {
        return view('frontend.blogs');
    }

    public function contact()
    {
        return view('frontend.contact');
    }


    public function quote_requests(Request $request)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'industry_or_buisness' => 'required|string|max:255',
            'organization_type' => 'nullable|string|max:255',
            'primary_goal_of_project' => 'required|string|max:255',
            'links' => 'nullable|url',
            'budget' => 'required|numeric',
            'number_of_pages' => 'nullable|integer',
            'brief_of_requirements' => 'nullable|string',
            'relevant_file' => 'nullable|file|mimes:pdf,doc,docx,jpg,jpeg,webp,png,zip|max:2147483',
        ]);

        if ($request->hasFile('relevant_file')) {
            $file = $request->file('relevant_file');
            $filePath = $file->store('quote_requests', 'public');
            $validatedData['relevant_file'] = $filePath;
        }
        try {

            $quoteRequest = QuoteRequest::create($validatedData);
            Mail::to('baabaylog@gmail.com')->send(new NewQuoteRequestNotification($validatedData));
        } catch (\Throwable $th) {
            
            Log::channel('quote_requests')->info('Error:' . $th->getMessage() . ' in file ' . $th->getFile() . ' at line ' . $th->getLine());
        }

        return redirect()->back()->with('success', 'Quote request submitted successfully!');
    }
}
