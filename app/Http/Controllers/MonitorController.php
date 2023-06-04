<?php

namespace App\Http\Controllers;

use App\Models\Monitor;
use Illuminate\Http\Request;

class MonitorController extends Controller
{
    public function index()
    {
        $monitors = Monitor::all();
        return inertia()->render('Home', [
            'monitors' => $monitors,
        ]);
    }
}
