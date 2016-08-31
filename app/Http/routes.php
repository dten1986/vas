<?php

$config = array(
	'profiles' => json_decode(file_get_contents(__DIR__.'/../../public/includes/profiles.json'), true),
	'projects' => json_decode(file_get_contents(__DIR__.'/../../public/includes/projects.json'), true)
);

Route::get('/', function () use ($config) {
    return view('main', $config);
	//return View::make('main');
});

Route::get('/admin', ['middleware' => 'auth', function () use ($config) {
	return view('admin.main', $config);
	//return View::make('admin.main', $config);
}]);

/*Route::get('/register', ['middleware' => 'auth', function () use ($config) {
        return view('main', $config);
}]);*/

Route::post('/edit', ['middleware' => 'auth', function () use ($config) {
	//return view('admin.main', $config);
	//return View::make('admin.main', $config);
	
	$res = json_decode($_POST['data'], true);
	
	if ($res['index'] >= 0) {
		$config[$res['table']][$res['index']] = $res['value'];
	} else {
		array_push($config[$res['table']], $res['value']);
	}
	
	file_put_contents(__DIR__.'/../../public/includes/'.$res['table'].'.json', json_encode($config[$res['table']]));
	
	return; 
}]);

Route::post('/remove', function() use ($config) {
	//return $_POST['data'];
	$res = json_decode($_POST['data'], true);
	//return $res;
	
	
	unset($config[$res['table']][$res['index']]);
	
	file_put_contents(__DIR__.'/../../public/includes/'.$res['table'].'.json', json_encode($config[$res['table']]));
	
	return; //json_encode($config[$res['table']], true);
});

Route::get('/404', ['middleware' => 'auth', function () {
	return view('404');
	
}]);

Route::auth();

Route::get('/home', 'HomeController@index');
