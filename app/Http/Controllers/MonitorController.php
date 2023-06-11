<?php

namespace App\Http\Controllers;

use App\Models\Monitor;
use Illuminate\Http\Request;

class MonitorController extends Controller
{
    public function index()
    {
        $monitors = Monitor::paginate();
        return inertia()->render('Home', [
            'monitors' => $monitors,
        ]);
    }


    public function createSite()
    {

        return inertia()->render('Site/Create');

//        $monitors = Monitor::all();
//        return inertia()->render('Home', [
//            'monitors' => $monitors,
//        ]);
    }
}
