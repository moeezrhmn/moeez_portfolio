<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    
    public function login(Request $request){
        $request->validate([
            'email' => 'required|email|max:255|exists:users,email',
            'password' => ['required', Password::min(8)],
        ]);
        
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return [
                'status' => false,
                'message'=>'Crendentials does not match'
            ];
        }

        $token = $user->createToken('auth_token');
        return response()->json([
            'status'=>true,
            'user'=>$user,
            'access_token'=> $token->plainTextToken
        ]);
    }
   
}

