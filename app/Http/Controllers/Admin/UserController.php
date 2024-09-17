<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function users(Request $request){

        $users = User::all();
        return response()->json(data:[
            'message'=>'Users request processing.',
            'users' => $users
        ], status:200);
    }

    public function create(Request $request) {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Password::min(8)],
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return response()->json([
                'message' => 'User created successfully',
                'user' => $user,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ], 500);
        }
    }
    public function roles(Request $request){

        $roles = Role::all();
        return response()->json(data:[
            'roles' => $roles
        ], status:200);
    }

    public function assign_role(Request $request){

        $role = $request->input('role');
        $user = $request->input('user');

        try {
            
            $user = User::find($user);
            $role = Role::findById($role, 'web');

            $user->assignRole($role);

            return response()->json(data:[
                'status' => true, 
                'user' => $user, 
                'message' => 'Successfully assign role to user. ', 
            ], status:200);

        } catch (\Throwable $th) {

            return response()->json(data:[
                'message' => $th->getMessage(),
                'status' => false
            ], status:500);
        }


 
    }

    public function user_roles() {
        $user_id = request()->query('user_id'); // Correct way to retrieve query parameters
    
        if (!$user_id) {
            return response()->json([
                'status' => false,
                'message' => 'User id not found!!',
            ], 500);
        }
    
        try {
            $user = User::find($user_id);
            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'User not found!!',
                ], 404);
            }
    
            $roles = $user->getRoleNames(); 
    
            return response()->json([
                'status' => true,
                'roles' => $roles
            ], 200);
    
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'status' => false
            ], 500);
        }
    }
    


  


}
