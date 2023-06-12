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

Route::get('home',[\App\Http\Controllers\MonitorController::class,'index'])->name('home');
Route::get('create-site',[\App\Http\Controllers\MonitorController::class,'createSite'])->name('sites.create');

Route::get('about', function () {
    return inertia()->render('About');
});

Route::get('login', function () {
    return inertia()->render('Login');
})->name('login');

Route::post('/auth/login', function (\Illuminate\Http\Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (\Illuminate\Support\Facades\Auth::attempt($credentials)) {
        $request->session()->regenerate();

//        return inertia()->location('home');
        return to_route('home');

    }

    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ])->onlyInput('email');

});

Route::post('/auth/logout',function (){
    auth()->logout();
    return to_route('login');
});


