<!DOCTYPE HTML>
<html>
	<head>

		<meta charset="utf-8">
		<title>Angel Syndicate</title>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
		<meta name="format-detection" content="telephone=no">
		<meta http-equiv="x-rim-auto-match" content="none">
		<!-- Favicon -->
		<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16">
		<link rel="manifest" href="favicon/manifest.json">
		<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
		<meta name="theme-color" content="#ffffff">

		<!-- Styles -->
		<link rel="stylesheet" type="text/css" href="css/gird-column.css">
		<link rel="stylesheet" type="text/css" href="css/reset-min.css">
		<link rel="stylesheet" type="text/css" href="css/jquery.fullPage.css">
		<!-- <link rel="stylesheet" type="text/css" href="css/jquery.mCustomScrollbar.min.css"> -->
		<link rel="stylesheet" type="text/css" href="css/styles-main.css">
		<link rel="stylesheet" type="text/css" href="css/projects-styles.css">
		<link rel="stylesheet" type="text/css" href="css/styles-1150.css" media="(min-width: 737px) and (max-width: 1150px)">
		<link rel="stylesheet" type="text/css" href="css/styles-414.css" media="all and (max-width: 736px)">
		<style>
			#page-preloader {
				position: fixed;
				display: flex;
				display: -webkit-flex;
				justify-content: center;
				-webkit-justify-content: center;
				align-items: center;
				-webkit-align-items: center;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				background: #031436;
				z-index: 100500;
				}

			.spinner {
				width: 80%;
				height: 150px;
				text-align: center;
				background: url('../img/smloader.gif') center no-repeat;
				}

		</style>

		<!-- Scripts -->
		<!--[if lt IE 9]>
			<script src="js/html5shiv.min.js"></script>
		<![endif]-->
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Detect.js/2.2.2/detect.min.js"></script>
		<script type="text/javascript" src="js/jquery.easing.min.js"></script>
		<script type="text/javascript" src="js/modernizr-angel-syndicate.js"></script>
		<script type="text/javascript" src="js/swiper.min.js"></script>
		<script type="text/javascript" src="js/jquery.fullPage.min.js"></script>
		<script type="text/javascript" src="js/jquery.validate.min.js"></script>
		<script type="text/javascript" src="js/script-main.js"></script>
	</head>
	<body>
		<!-- Прелоадер -->
		<div id="page-preloader"><span class="spinner"></span></div>
		<script>
				var keys = {37: 1, 38: 1, 39: 1, 40: 1};

				function preventDefault(e) {
					e = e || window.event;
					if (e.preventDefault)
						e.preventDefault();
					e.returnValue = false;  
				}

				function preventDefaultForScrollKeys(e) {
					if (keys[e.keyCode]) {
						preventDefault(e);
						return false;
					}
				}

				function disableScroll() {
					if (window.addEventListener) // older FF
						window.addEventListener('DOMMouseScroll', preventDefault, false);
					window.onwheel = preventDefault; // modern standard
					window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
					window.ontouchmove  = preventDefault; // mobile
					document.onkeydown  = preventDefaultForScrollKeys;
				}

				function enableScroll() {
					if (window.removeEventListener)
						window.removeEventListener('DOMMouseScroll', preventDefault, false);
					window.onmousewheel = document.onmousewheel = null; 
					window.onwheel = null; 
					window.ontouchmove = null;  
					document.onkeydown = null;  
				}

				disableScroll();

				$(window).on('load', function () {
				var $preloader = $('#page-preloader'),
					$spinner	= $preloader.find('.spinner');
				$spinner.delay(2700).fadeOut('slow');
				$preloader.delay(3000).fadeOut('slow');
				window.setTimeout(function(){
					$('html').addClass('load-finish');
					enableScroll();
				}, 3000);
			})
		</script>
