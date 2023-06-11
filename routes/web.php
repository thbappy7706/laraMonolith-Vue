<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('home',[\App\Http\Controllers\MonitorController::class,'index']);
Route::get('create-site',[\App\Http\Controllers\MonitorController::class,'createSite'])->name('sites.create');

Route::get('about', function () {
    return inertia()->render('About');
});

Route::get('login', function () {
    return inertia()->render('Login');
});

Route::post('/auth/login', function (\Illuminate\Http\Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    return inertia()->location('home');
});


