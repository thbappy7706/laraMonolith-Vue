<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');


Route::get('/', function (){
    return inertia('Home');
})->name('home');
Route::get('settings',function (){
    return inertia('Settings');
})->name('settings');

Route::get('users',[\App\Http\Controllers\UserController::class,'index'])->name('users.index');
Route::get('user-create',[\App\Http\Controllers\UserController::class,'create'])->name('users.create');
Route::post('user-store',[\App\Http\Controllers\UserController::class,'store'])->name('users.store');




Route::get('hello', function () {
//    sleep(0);
    return inertia('Hello', [
        'name' =>'Tanvir Hossen Bappy',
        'profession' =>'BackEnd Developer',
        'skills' =>['Laravel','Vue','Inertia',' FlowBite', 'LiveWire']
        ]);
})->name('hello');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/preserve',function (){
    return inertia('Preserve',[
        'time'=>now()->toTimeString()
        ]);
})->name('preserve');

//Route::post('/log-out', function () {
////    dd(request('foo'));
//    dd("Please Logout from here");
//    return inertia('Settings');
//})->name('test.log');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
