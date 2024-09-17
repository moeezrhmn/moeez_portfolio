<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SocialTools\DownloadController;
use App\Http\Controllers\SocialTools\YoutubeController;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->prefix('users')->name('users.')->controller(UserController::class)->group(function (){
    Route::get('/', 'users');
    Route::get('/roles', 'roles')->name('roles');
    Route::get('/user-roles', 'user_roles')->name('user_roles');
    
    Route::post('/create', 'create')->name('create');
    Route::post('/assign-role', 'assign_role')->name('assign_role');
});


Route::prefix('auth')->name('auth.')->controller(AuthController::class)->group(function (){
    Route::post('/login', 'login')->name('login');
});


Route::middleware('auth:sanctum')->prefix('youtube')->name('youtube.')->controller(YoutubeController::class)->group(function (){

    Route::post('/download', 'download')->name('download');

});

// Multi site Video downloader...
Route::middleware('auth:sanctum')->prefix('social')->name('social.')->controller(DownloadController::class)->group(function (){
    Route::post('/download', 'index')->name('download');
});


