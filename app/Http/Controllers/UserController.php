<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Request as Req;
use Inertia\Response;

class UserController extends Controller
{
    public function index():Response
    {
        return inertia('Users/Index',[
        'users'=> User::query()
            ->when(Req::input('search'),function ($query,$search){
                $query->where('name','like',"%{$search}%");
            })
            ->paginate(10)
            ->withQueryString()
            ->through(fn($user)=>[
            'id'=>$user->id,
            'name'=>$user->name
        ]),
        'filters'=> Req::only(['search'])
//    'users'=> \App\Models\User::paginate(10)
    ]);
    }

    public function create():Response
    {
        return inertia('Users/Create');
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email:rfc,dns'],
            'phone' => ['required'],
            'password' => ['required', 'string', 'min:6',],
        ]);

        $user = User::create($validatedData);
        if ($user){
            return redirect()->route('users.index');
    }else{
            return redirect()->back();

        }
    }
}
