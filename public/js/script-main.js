$(function() {
$(document).ready(function(){
	var isFullPageOff = false,
		enableScrollPage = true,
		enableAutoScrolling = true,
		enableScrollBar = false,
		$sectionCurrent,
		$sectionPrevious,
		isOpenKeyboard = false,
		directScroll,
		durationScroll = 600,
		fitToSection = 1000,
		WIDTH_WINDOW_ONE_PHOTO = 1024,
		cssScrollingEnable = true,
		enableCanvas = true,
		positionCurrent,
		isCompactDevice = false,
		isTabletDevice = false,
		isMobileDevice = false,
		isIE = false,
		isSafariMobile = false,
		isSafari = false,
		isChrome = false,
		darkFlag = false,
		heightWindow,
		widthWindow,
		photoOnPage,
		onePhoto = false,
		scaleElement,
		sumMember,
		indexSlideScroll,
		swiperOn = false,
		swiper,
		isCssVhUnit = true,
		currentSlideX = 0,
		sumProjects = 0;

		_initBrauser();
		if(isTabletDevice || isMobileDevice) {
		swiper = new Swiper('.swiper-container',
				{
					onSlideChangeEnd: function (swiper) {
						$('.m-slide_angels-slide_left').removeClass('m-slide_angels-slide_left');
							controllSlideSwipe(swiper.activeIndex)
							$('.b-slide_angels-slide').eq(swiper.activeIndex).addClass('m-slide_angels-slide_left');
						}
					})
		}
		
	window.addEventListener("orientationchange", function() {
		location.reload();
	}, false);
	_init();
	$(window).on('load resize', function(){
		_init();
		canvasLogoAnimation();
	});
// Debug iOS scroll fixed element when open keyboard
	$(document).on('blur', 'input, textarea', function () {
		if(isMobileDevice || isTabletDevice) {
			setTimeout(function () {
				window.scrollTo(document.body.scrollTop);
			}, 0);
		}
	});
/* Disable/enable scroll */
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
/* --------------------- */
/* == Скроллер ================================================================================== */
	if( widthWindow > 640 ) {
		$('#fullpage').fullpage({
			autoScrolling: enableAutoScrolling,
			sectionSelector: 'section',
			css3: enableAutoScrolling,
			scrollingSpeed: durationScroll,
			fitToSectionDelay: fitToSection,
			scrollBar: enableScrollBar,
			touchSensitivity: 20,
			normalScrollElementTouchThreshold: 1,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			scrollOverflow: false,
			onLeave: function(index, nextIndex, direction){
				$('body').addClass('load');
				$('body').removeClass('open-slide');
				if($('body').hasClass('open-details-project')) {
					$('.b-slide__projects-text-details-close').trigger('click');
				}
				directScroll = direction;
				$sectionPrevious = $('section').eq(index-1);
				$sectionCurrent = $('section').eq(nextIndex-1);
				// Close slide when go from page
				if($sectionPrevious.index() == 2) {
					$('.b-slide__wrap-full-close').trigger('click');
				}
				enableCanvas = (nextIndex == 2)? true : false;
				willScroll(index, nextIndex);
				// Switch color logo/ Right title
				switchColorLogo();
				rightTitleBlock();
			},
			afterLoad: function(anchorLink, index){
				$('.b-main__video-tag').show();
				$('body').removeClass('load');
				$('body').removeClass('load-up');
				$('body').removeClass('load-down');
			},
			afterRender: function(){
				//disabling scrollilng  until page is loaded
				$.fn.fullpage.setAllowScrolling(false);
			}
		});
	} else {
		isFullPageOff = true;
	}
	/* Mobile device */
	if(isFullPageOff) {
		var sectionEl = [];
		var start = $('.m-slide_mission').offset().top;
		$(window).on('scroll', function(){
			distanceScroll = window.pageYOffset || document.documentElement.scrollTop;
			if(distanceScroll < 1 ) {
				$('.l-scroll').removeClass('hide');
			} else {
				$('.l-scroll').addClass('hide');
			}
		});
		var i = 0;
		$('section').each(function(){
			sectionEl[i] = $(this).offset().top;
			i++;
		});
		function goToSection(index){
			$(window).scrollTop(sectionEl[index]);
		}
	}
	if(isSafariMobile) {
		$('.b-main__video-tag')[0].play();
	}
	function switchColorLogo(index,nextIndex) {
		if($sectionCurrent.hasClass('m-slide_light-bg')) {
			$('body').addClass('m-bg_light');
			darkFlag = true;
			positionCurrent = nextIndex;
		} else {
			$('.m-bg_light').removeClass('m-bg_light');
			darkFlag = false;
		}
		if(directScroll == 'down') {
			$('body').addClass('load-down');
		} else {
			$('body').addClass('load-up');
		}
	}
// Switch right title
	function rightTitleBlock() {
		$('.m-right-title_active').removeClass('m-right-title_active');
		$('.b-slide__wrap-right-tittle-item').eq($sectionPrevious.index()-1).addClass('m-right-title_prev');
		if($sectionCurrent.index() > 0) {
			$('.b-slide__wrap-right-tittle-item').eq($sectionCurrent.index()-1).addClass('m-right-title_active');
		}
	}
	// Create list right title
	$('section').each(function(index, elem){
		var attrValue = $('section').eq(index).attr('data-name');
		if(!attrValue.match('Projects-')) {
			var str = '<div class="b-slide__wrap-right-tittle-item"><span>' + attrValue + '</span></div>';
		} else {
			var str = '<div class="b-slide__wrap-right-tittle-item"><span>Projects</span></div>';
		}
		if(index != 0) $('.b-slide__wrap-right-tittle').append(str);
	});
// Optimization system
	// scroll
	function willScroll(index,nextIndex) {
		$('.b-slide__wrap-right-tittle-item').css('will-change','opacity, border-left-color');
		$('.b-slide__wrap-right-tittle-item p').css('will-change','color');
	}
	// menu
	willChangeMenu();
	function willChangeMenu() {
		$('.b-menu__button').on('mouseenter', function() {						// курсор над кнопкой меню
			$('.b-menu__inner').css('will-change','opacity, background-size');
			$('.b-menu__inner li').css('will-change','transform, opacity');
		});
		$('.b-menu__button').on('mouseleave', function() {						// курсор покинул кнопку меню,
			if(!$('body').hasClass('m-menu__button_active'))					// но меню не открыто
			removeChangeMenu();
		});
		if(!$('body').hasClass('m-menu__button_active')){									// закрыто меню
			removeChangeMenu();
		}
	// Kill will change
		function removeChangeMenu() {
			$('.b-menu__inner').css('will-change','auto');
			$('.b-menu__inner li').css('will-change','auto');
		}
	}
	willChangeScrollSlide();
	function willChangeScrollSlide() {
		$('.b-slide__angels-control').on('mouseenter', function(){
			$('.b-slide__angels-viewport-container').css('will-change', 'transform');
		});
		$('.b-slide__angels-control').on('mouseleave', function(){
			$('.b-slide__angels-viewport-container').css('will-change', 'auto');
		});
	}
	willChangeOpenSlide();
	function willChangeOpenSlide() {
		$('.b-slide_angels-slide').on('mouseenter', function(){
			$('.b-slide_angels-slide').css('will-change', 'transform');
			var $this = $(this);
			$this.find('img').css('will-change', 'transform, opacity');
			$this.find('.b-slide__wrap-full').css('will-change', 'transform, opacity');
			return false;
		});
		$('.b-slide_angels-slide').on('mouseleave', function(){
			$('.b-slide_angels-slide').css('will-change', 'auto');
			var $this = $(this);
			$this.find('img').css('will-change', 'auto');
			$this.find('.b-slide__wrap-full').css('will-change', 'auto');
			return false;
		});
	}
/* == Работа меню =============================================================================== */
	$('.b-menu__button').on('click', function(){
		$('body').toggleClass('m-menu__button_active');
		enableScrollPage = $('.m-menu__button_active').length ? false : true;
		if(!isFullPageOff) {
			$.fn.fullpage.setAllowScrolling(enableScrollPage);
		} else {
			disableScroll();
		}
		if($('.m-menu__button_active').length) {
			$('.m-bg_light').removeClass('m-bg_light');
		} else {
			if(darkFlag) $('body').addClass('m-bg_light');
			enableScroll();
		}
		return false;
	});
	$('.b-menu__inner').children().children().on('click', function(){
		enableScrollPage = true;
		var nameAttr = $(this).parent().attr('data-menuanchor');
		var nextPage = $('section[data-anchor = ' + nameAttr + ']').index() + 1;
		if(!isFullPageOff) {
			$.fn.fullpage.setAllowScrolling(enableScrollPage);
			$.fn.fullpage.moveTo(nextPage);
		} else {
			enableScroll();
			goToSection(nextPage-1);
		}
		$('.m-slide__projects-text-details-open').removeClass('m-slide__projects-text-details-open');
		if(positionCurrent == nextPage && darkFlag) {
			$('body').addClass('m-bg_light');
		}
		$('body').removeClass('m-menu__button_active');
		return false;
	});
/* == Анимаци лого на canvas ==================================================================== */
	canvasLogoAnimation();
	function canvasLogoAnimation(){
		var elementaryX = 3*scaleElement,
			elementaryY = 3*scaleElement;
		var canvas = document.getElementById('canvas-logo-element');
		var context = canvas.getContext('2d');
		var maxRightPointX;
		var rotatePoint = 0,
			flagDirect,
			stepAnimation = 0.7;
		maxRightPointX = 100*scaleElement+5*scaleElement;
		function drawLogo(rotatePoint) {
			context.beginPath();
			context.moveTo((elementaryX + 50)*scaleElement, (elementaryY + 0)*scaleElement); // 1
			context.lineTo((elementaryX + 100)*scaleElement - rotatePoint, (elementaryY + 70)*scaleElement); // 2
			context.lineTo((elementaryX + 0)*scaleElement + rotatePoint, (elementaryY + 210)*scaleElement); // 3
			context.lineTo((elementaryX + 43)*scaleElement + rotatePoint*0.14, (elementaryY + 269)*scaleElement); // 4
			context.moveTo((elementaryX + 43)*scaleElement + rotatePoint*0.14, (elementaryY + 11)*scaleElement); // 5
			context.lineTo((elementaryX + 0)*scaleElement + rotatePoint, (elementaryY + 70)*scaleElement); // 6
			context.lineTo((elementaryX + 43)*scaleElement + rotatePoint*0.14, (elementaryY + 130)*scaleElement); // 7
			context.moveTo((elementaryX + 57)*scaleElement - rotatePoint*0.14, (elementaryY + 150)*scaleElement); // 8
			context.lineTo((elementaryX + 100)*scaleElement - rotatePoint, (elementaryY + 210)*scaleElement); // 9
			context.lineTo((elementaryX + 50)*scaleElement, (elementaryY + 280)*scaleElement); // 10
			context.moveTo((elementaryX + 16)*scaleElement + rotatePoint*0.68, (elementaryY + 48)*scaleElement); // 11
			context.lineTo((elementaryX + 84)*scaleElement - rotatePoint*0.68, (elementaryY + 48)*scaleElement); // 12
			context.moveTo((elementaryX + 16)*scaleElement + rotatePoint*0.68, (elementaryY + 232)*scaleElement); //13
			context.lineTo((elementaryX + 84)*scaleElement - rotatePoint*0.68, (elementaryY + 232)*scaleElement); //14
			context.moveTo((elementaryX + 16)*scaleElement + rotatePoint*0.68, (elementaryY + 92)*scaleElement); // 15
			context.lineTo((elementaryX + 84)*scaleElement - rotatePoint*0.68, (elementaryY + 92)*scaleElement); // 16
			context.moveTo((elementaryX + 16)*scaleElement + rotatePoint*0.68, (elementaryY + 188)*scaleElement); // 17
			context.lineTo((elementaryX + 84)*scaleElement - rotatePoint*0.68, (elementaryY + 188)*scaleElement); // 18
			context.closePath();
			context.lineWidth = 15;
			context.strokeStyle = '#A7AEBC';
			context.lineCap = 'round';
			context.stroke();
		}
		window.requestAnimFrame = (function() {
		return  window.requestAnimationFrame       ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				window.oRequestAnimationFrame      ||
				window.msRequestAnimationFrame     ||
				function( callback ){ 
					window.setTimeout(callback, 1000 / 60); 
				};
		})();
		function animationLogo() {
			window.requestAnimFrame(animationLogo);
			context.clearRect(0,0,canvas.width,canvas.height);
			if(rotatePoint <= 0) {
				flagDirect = true;
			}
			if(rotatePoint >= maxRightPointX) {
				flagDirect = false;
			}
			if(flagDirect) {
				rotatePoint = rotatePoint + stepAnimation*scaleElement;
			} else {
				rotatePoint = rotatePoint - stepAnimation*scaleElement;
			}
			drawLogo(rotatePoint);
		}
		animationLogo();
	}
/* Changed 23.08.2016 */
/* == Слайдер фото ============================================================================== */
	indexSlideScroll = 0;
	if(isMobileDevice || isTabletDevice) {
		var strControlMobile = '<span></span>',
			pointSpan = sumMember;
		if(photoOnPage == 2) { pointSpan = sumMember - 1; }
		for(var i = 0 ; i < pointSpan ; i++ ) {
			$('.b-slide__angels-control-mobile').append(strControlMobile);
		}
	}
	controllSlideSwipe(indexSlideScroll);
	$('.b-slide_angels-slide').on('click', function(){
		if(!$('body').hasClass('open-slide')) {
			var $this = $(this);
			$('body').addClass('hide');
			$('.b-slide__angels-control').css('pointer-events','none');
			$('.m-slide_angels .b-slide__wrap-right-tittle').addClass('hide');
			if(isMobileDevice) $('body').addClass('m-bg_light');
			if($this.hasClass('m-slide_angels-slide_left')) {
				$this.next().addClass('m-slide_angels-slide_hover');
			} else {
				$this.prev().addClass('m-slide_angels-slide_hover');
			}
			if(!$this.hasClass('m-slide_angels-slide_left')) {
				$('body').addClass('open-right-slide');
			}
			$this.addClass('m-slide__wrap_open');
			$('body').addClass('open-slide');
			if(!Modernizr.cssvhunit) {
				$('.m-slide_angels').css({'height': heightWindow + 'px'});
				$('.b-slide__angels-viewport').css({'height': heightWindow + 'px'});
				$('.b-slide__angels-viewport-container').css({'height': heightWindow + 'px'});
			}
		} else {
			$('.m-slide_angels').css({'height': '550px'});
			$('.b-slide__angels-viewport').css({'height': '550px'});
			$('.b-slide__angels-viewport-container').css({'height': '550px'});
			$('.b-slide__wrap-full-close').trigger('click');
			if(isMobileDevice) enableScrollPage = true;
		}
			if(swiperOn) {
				swiper.lockSwipes();
				$('body,html').css({
					'overflow':'hidden'
				});
	}
		return false;
	});
	// click on social button
	$('.b-slide__wrap-full-social a, .m-slide__wrap_open .b-slide__wrap-image').on('click', function(){
		$('.b-slide__wrap-full-close').trigger('click');
		return false;
	});
	$('.b-slide__wrap-full-close').on('click',function(){
		if(swiperOn) {
			swiper.unlockSwipes();
			$('body,html').css({
					'overflow':'auto'
			});
		}
		$('.m-slide_angels-slide_hover').removeClass('m-slide_angels-slide_hover');
		$('.m-slide__wrap_open').removeClass('m-slide__wrap_open');
		$('.b-slide__angels-control').css('pointer-events','auto');
		$('.m-bg_light').removeClass('m-bg_light');
		$('.m-slide_angels .b-slide__wrap-right-tittle').removeClass('hide');
		$('body').removeClass('open-right-slide');
		$('body').removeClass('hide');
		$('body').removeClass('open-slide');
		return false;
	});
	$('.m-slide__angels-control-prev').on('click',function(){
		$('.m-slide_angels-slide_left').removeClass('m-slide_angels-slide_left');
		if(indexSlideScroll > 0) {
			indexSlideScroll--;
			currentSlideX = (photoOnPage == 1) ? currentSlideX - widthWindow : currentSlideX - widthWindow/2;
			$('.b-slide__angels-viewport-container').css({
				'transform': 'translateX(' + -currentSlideX + 'px)',
				'-webkit-transform': 'translateX(' + -currentSlideX + 'px)',
				});
			$('.b-slide_angels-slide').eq(indexSlideScroll).addClass('m-slide_angels-slide_left');
		}
		if(indexSlideScroll == 0) {
			$('.m-slide__angels-control-prev').addClass('m-hide_controll');
		}
		if( indexSlideScroll < sumMember) {
			$('.m-slide__angels-control-next').removeClass('m-hide_controll');
		}
		controllSlideSwipe(indexSlideScroll);
		return false;
	});
	$('.m-slide__angels-control-next').on('click',function(){
		$('.m-slide_angels-slide_left').removeClass('m-slide_angels-slide_left');
		if(indexSlideScroll < sumMember) {
			indexSlideScroll++;
			currentSlideX = (photoOnPage == 1) ? currentSlideX + widthWindow : currentSlideX + widthWindow/2;
			$('.b-slide__angels-viewport-container').css({
				'transform': 'translateX(' + -currentSlideX + 'px)',
				'-webkit-transform': 'translateX(' + -currentSlideX + 'px)',
				});
			$('.b-slide_angels-slide').eq(indexSlideScroll).addClass('m-slide_angels-slide_left');
		}
		if(indexSlideScroll == sumMember-2 && photoOnPage == 2) {
			$('.m-slide__angels-control-next').addClass('m-hide_controll');
		}
		if(indexSlideScroll == sumMember-1 && photoOnPage == 1) {
			$('.m-slide__angels-control-next').addClass('m-hide_controll');
		}
		if( 0 < indexSlideScroll ) {
			$('.m-slide__angels-control-prev').removeClass('m-hide_controll');
		}
		controllSlideSwipe(indexSlideScroll);
		return false;
	});
	function controllSlideSwipe(indexSlideScroll) {
		if(isMobileDevice || isTabletDevice) {
			$('.current-photo').removeClass('current-photo');
			$('.b-slide__angels-control-mobile span').eq(indexSlideScroll).addClass('current-photo');
		}
	}
	function initSlideScroll() {
		sumMember = $('.m-slide_angels').find('figure').length;
		$('.b-slide_angels-slide').css('width',widthWindow/photoOnPage +'px');
		$('.b-slide_angels-slide').eq(indexSlideScroll).addClass('m-slide_angels-slide_left');
		$('.b-slide__angels-viewport-container').css('width', sumMember*100+'%');
		if(sumMember <= 2) {
			$('.m-slide__angels-control-prev').addClass('m-hide_controll');
			$('.m-slide__angels-control-next').addClass('m-hide_controll');
		}
		if(isMobileDevice || isTabletDevice) {
			swiperOn = true;
			swiper.params.slidesPerView = photoOnPage;
			swiper.params.spaceBetween = 0;
			swiper.update();
		}
		if(indexSlideScroll == 0) {
			$('.m-slide__angels-control-prev').addClass('m-hide_controll');
		}
		if(indexSlideScroll >= sumMember) {
			$('.m-slide__angels-control-next').addClass('m-hide_controll');
		}
	}
/* /Changed 23.08.2016 */
/* == Окно проектов ============================================================================= */
	if(isMobileDevice) {
		$('.b-slide__projects-video-inner').remove();
	}
	var $activeProject;
	$('.b-slide__projects-text-details-link').on('click',function(){
		$('body').addClass('open-details-project');
		$activeProject = $(this).parents('section');
		$activeProject.addClass('m-open-detail-project-current');
		$activeProject.find('.b-slide__projects-text-details').addClass('m-slide__projects-text-details-open');
		if(!isCssVhUnit) {
			$('.m-open-detail-project-current .tringle-right-1').css({
				'transform': 'translateX(-' + widthWindow * 0.5 + 'px)',
				'-webkit-transform': 'translateX(-' + widthWindow * 0.5 + 'px)'
			});
		}
		return false;
	});
	$('.b-slide__projects-text-details-close').on('click',function(){
		$activeProject = $(this).parents('section');
		$activeProject.removeClass('m-open-detail-project-current');
		$('body').removeClass('open-details-project');
		$activeProject.find('.b-slide__projects-text-details').removeClass('m-slide__projects-text-details-open');
		if(!isCssVhUnit) {
			$('.tringle-right-1').css({
				'transform': 'translateX(-' + widthWindow * 0 + 'px)',
				'-webkit-transform': 'translateX(-' + widthWindow * 0 + 'px)'
			});
		}
		return false;
	});
/* == Окно опроса =============================================================================== */
	var sumQuestion = $('.b-slide__apply-question').length;
	var currentQuestion = 0;
	$('.b-slide__apply-button').on('click', function(){
		printProgressQuestion();
		if(currentQuestion == 0) {
			$('.m-slide__question-button_finish').addClass('hide');
			$('.m-slide__question-button_subm').addClass('hide');
			$('.m-slide__question-button_prev').addClass('hide');
		}
		$('.m-slide_apply').addClass('form-open');
		$('.m-slide__apply-question_active').removeClass('m-slide__apply-question_active');
		$('.b-slide__apply-question').eq(0).addClass('m-slide__apply-question_active');
		return false;
	});
	$('.m-slide__question-button_next').on('click', function(){
		currentQuestion++;
		printProgressQuestion();
		$('.m-slide__apply-question_active').removeClass('m-slide__apply-question_active');
		$('.b-slide__apply-question').eq(currentQuestion).addClass('m-slide__apply-question_active');
		if(currentQuestion >= sumQuestion - 2 ){
			$('.m-slide__question-button_next').addClass('hide');
			$('.m-slide__question-button_finish').removeClass('hide');
		}
		if(currentQuestion > 0) {
			$('.m-slide__question-button_prev').removeClass('hide');
		}
		return false;
	});
	$('.m-slide__question-button_finish').on('click', function(){
		currentQuestion++;
		$('.b-slide__apply-question-indicator').addClass('hide');
		$('.m-slide__question-button_next').addClass('hide');
		$('.m-slide__apply-question_active').removeClass('m-slide__apply-question_active');
		$('.b-slide__apply-question').eq(currentQuestion).addClass('m-slide__apply-question_active');
		$('.m-slide__question-button_finish').addClass('hide');
		$('.m-slide__question-button_subm').removeClass('hide');
		return false;
	});
	$('.m-slide__question-button_prev').on('click', function(){
		if($('.b-slide__apply-finish').addClass('m-slide__apply-question_active')) {
			$('.m-slide__question-button_subm').addClass('hide');
		}
		$('.b-slide__apply-question-indicator').removeClass('hide');
		currentQuestion--;
		printProgressQuestion();
		$('.m-slide__apply-question_active').removeClass('m-slide__apply-question_active');
		$('.b-slide__apply-question').eq(currentQuestion).addClass('m-slide__apply-question_active');
		if(currentQuestion == sumQuestion-2 ) {
			$('.m-slide__question-button_next').addClass('hide');
			$('.m-slide__question-button_finish').removeClass('hide');
		} else {
			$('.m-slide__question-button_next').removeClass('hide');
			$('.m-slide__question-button_finish').addClass('hide');
		}
		if(currentQuestion == 0) {
			$('.m-slide__question-button_prev').addClass('hide');
		}
		return false;
	});
	$(this).on('blur', function(){
		isOpenKeyboard = false;
	});
	function printProgressQuestion () {
		var widthIndicator = $('.b-slide__apply-question-indicator').width();
		var oneQuestion = widthIndicator / sumQuestion;
		$('#progress-question').css('width',oneQuestion * (currentQuestion+1) + 'px' );
		$('#current-question').html(currentQuestion+1);
		$('#sum-question').html(sumQuestion);
		
	}
	$('.input__field').on('focus',function(){
		$(this).parent().addClass('input--filled');
	});
	$('.input__field').on('blur',function(){
		if($(this).val() == '') $(this).parent().removeClass('input--filled');
	});
	// Обработка файла drag'n'drop
	$(document).ready(function() {
		var dropZone = $('.b-slide__apply-finish-upload'),
		maxFileSize = 1000000; // максимальный размер фалйа - 1 мб.

		//var dropZone = new Dropzone($('.b-submit__upload'),{url:'/v2/gravia.php',autoProcessQueue:false});

		//dropZone.autoProcessQueue=false;

		// Проверка поддержки браузером
		if (typeof(window.FileReader) == 'undefined') {
			dropZone.text('Не поддерживается браузером!');
			dropZone.addClass('m-submit__upload-error');
		}
		// Добавляем класс hover при наведении
		dropZone[0].ondragover = function() {
			dropZone.addClass('m-submit__upload-hover');
			return false;
		};
		// Убираем класс hover
		dropZone[0].ondragleave = function() {
			dropZone.removeClass('m-submit__upload-hover');
			return false;
		};
		// Обрабатываем событие Drop
		dropZone[0].ondrop = function(event) {
			event.preventDefault();
			dropZone.removeClass('m-submit__upload-hover');
			dropZone.addClass('m-submit__upload-drop');
			var file = event.dataTransfer.files[0];
			var stringFile = '<tr><td class="upload-name-file">' + file + '</td><td id="remove-file"><p>Remove</p></td></tr>';
			$('.upload-file-container').append(stringFile);
			 
			// Проверяем размер файла
			if (file.size > maxFileSize) {
			dropZone.text('Your file is too large');
			dropZone.addClass('m-submit__upload-error');
			return false;
			}
			// Создаем запрос
			var xhr = new XMLHttpRequest();
			xhr.upload.addEventListener('progress', uploadProgress, false);
			xhr.onreadystatechange = stateChange;
			xhr.open('POST', '/v2/gravia.php');
			xhr.setRequestHeader('X-FILE-NAME', file.name);
			xhr.send(file);
		};
		$( "#fform" ).submit(function( event ) {
			event.preventDefault();
			dropZone.processQueue();
		});
		// Показываем процент загрузки
		function uploadProgress(event) {
			var percent = parseInt(event.loaded / event.total * 100);
			dropZone.text('Uploading: ' + percent + '%');
		}
		// Пост обрабочик
		function stateChange(event) {
			if (event.target.readyState == 4) {
				if (event.target.status == 200) {
					dropZone.text('Upload complete!');
				} else {
					dropZone.text('We have problem with your upload: file has unsupported format (we accept documents and images only)');
					dropZone.addClass('m-submit__upload-error');
				}
			}
		}
	});
	// Валидация формы
	$.validator.setDefaults({
		submitHandler: function(form) {
			var queryString = "";
			$('.b-slide__apply-question').not('.m-slide__apply-finish').each(function(index){
				var i = +index + 1;
				queryString = queryString  + i + '. ' + $('.b-slide__apply-question').eq(index).children().html()  + ' - '+ $('.b-slide__apply-question').eq(index).children().find('input').val() + '\n';
			});
			queryString = queryString + 'Name: ' + $('input[name=name]', $(form)).val() + '\n' + 'E-mail: ' + $('input[name=email]', $(form)).val() + '\n' + 'Phone: ' + $('input[name=phone]', $(form)).val();
			$.ajax({
				url: '/PHPmailer.php',
				type: 'POST',
				data: queryString,
				success: function(data) {
					console.log('success!', data);
				},
				error: function(e) {
					console.log('error: ', e);
				}
			});
			$('.m-slide_apply').addClass('form-submit');
			$('.b-slide__apply-question-indicator').addClass('hide');
			$('.l-menu, .l-logo').removeClass('hide');
			$('.m-slide__apply-question_active').removeClass('m-slide__apply-question_active');
			$('.b-slide__apply-thank').addClass('m-slide__apply-question_active');
			$('.b-slide__apply-question-title').hide();
			$('.m-slide__question-button_prev').addClass('hide');
			$('.b-slide__question-button').addClass('hide');
		}
	});
	$('#form').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 5
			},
		},
		messages: {
			name: {
				required: 'Enter name',
			},
			email: {
				required: 'Enter e-mail'
			},
			phone: {
				required: 'Enter phone',
			},
		}
	});
	function _initBrauser() {
		var user = detect.parse(navigator.userAgent);
		isFirefox = user.browser.family == 'Firefox' ? true : false;
		isIE = user.browser.family == 'IE' ? true : false;
		isChrome = user.browser.family == 'Chrome' ? true : false;
		isSafari = user.browser.family == 'Safari' ? true : false;
		isSafariMobile = user.browser.family == 'Mobile Safari' ? true : false;
		isCompactDevice = (user.device.type == 'Tablet' || user.device.type == "Mobile") ? true : false;
		isMobileDevice = (user.device.type == "Mobile") ? true : false;
		isTabletDevice = (user.device.type == 'Tablet') ? true : false;
	}
/* == Инициализация ============================================================================= */
	function _init(){
		var user = detect.parse(navigator.userAgent);
		widthWindow = (window.innerHeight && isSafariMobile && isMobileDevice) ? window.innerHeight : $(window).width();
		photoOnPage = ( widthWindow < WIDTH_WINDOW_ONE_PHOTO ) ? 1 : 2;
		if(widthWindow < WIDTH_WINDOW_ONE_PHOTO) {
			$('.width-large').removeClass('width-large');
			$('html').addClass('width-small');
		} else {
			$('.width-large').removeClass('width-small');
			$('html').addClass('width-large');
		}
		heightWindow =  (window.innerHeight && isSafariMobile && isMobileDevice) ? window.innerHeight : $(window).height();
		if(isCompactDevice)  $('html').addClass('compact-device');
		if(isIE) $('html').addClass('IE');
		if(isSafariMobile) $('html').addClass('mobile-safari');
		if(isFirefox) $('html').addClass('firefox');
		if(isTabletDevice) $('html').addClass('tablet');
		if(isMobileDevice) {
			$('html').addClass('mobile-device');
			enableScrollBar = true;
			durationScroll = 100;
			fitToSection = 500;
		}
		if(!Modernizr.csstransforms3d || user.os.family == 'iOS' && user.device.type == 'Desktop') {
			cssScrollingEnable = false;
			}
		if(!isMobileDevice) {
			$('.b-slide__apply-inner').css({
				'height': heightWindow * 0.5 + 'px'
			});
		}
/* Браузер не поддерживает размеры в vh и vw */
		if(!Modernizr.cssvhunit) {
			isCssVhUnit = false;
			$('.tablet .b-slide__apply-question, .tablet .m-slide__apply-finish').css({
				'top': heightWindow * 0.20 + 20 + 'px'
			});
			if(isMobileDevice) {
				$('.b-slide__angels-viewport').css({
					'window': widthWindow + 'px'
				});
			}
			$('.tablet .b-slide__apply-inner').css({
				'height': heightWindow * 0.7 + 'px'
			});
			$('.tablet .b-slide__question-button').css({
				'top': heightWindow * 0.7 + 'px'
			});
			$('.b-slide__apply-finish').css({
				'top': -heightWindow * 0.1 + 'px',
			});
			//$('.b-slide__wrap-image').css('height',heightWindow+'px');
			$('.b-slide__wrap-bottom').css({
				'height': heightWindow * 0.13 + 'px',
				'left': widthWindow * 0.12 + 'px'
			});
			if(!isMobileDevice){
				$('.b-slide__wrap-image figcaption').css({
					'top': heightWindow * 0.5 + 'px'
				});
			}
		}
		if ( !Modernizr.csscalc) {
			$('.b-slide__apply-inner form').css({
				'height': $('.m-slide_apply').height() - 90 + 'px'
			});
		}
/* Браузер не поддерживает object-fit */
		if ( !Modernizr.objectfit) {
			var elemDgObjectFit = '<div></div>'
			$('.b-slide__wrap-image-filter-dark').each(function () {
				var $container = $(this),
					imgUrl = $container.find('img').prop('src');
				if (imgUrl) {
					$container.find('img').remove();
					$(elemDgObjectFit).appendTo($container);
					$container.children().css('backgroundImage', 'url(' + imgUrl + ')').addClass('compat-object-fit');
				}
			});
		}
		var canvasHeight = $(window).height()*0.9;
		scaleElement = heightWindow/350;
		$('#canvas-logo-element').attr('height',canvasHeight).attr('width',100*scaleElement+20*scaleElement);
		sumProjects = $('.b-slide__projects-item').length;
		initSlideScroll();
		/* == Маска на экран проектов ================================================== */
		if(!isCssVhUnit || isSafariMobile) {
			if(!isMobileDevice) {
				$('.b-slide__wrap-right-tittle').css({
					'top': heightWindow*0.5 + 'px'
				});
				$('.b-slide__projects-text').css({
					'top': heightWindow*0.13 + 'px'
				});
				$('.triangles-container').css({
					'width': widthWindow*0.8 + 'px',
					'height': heightWindow + 'px'
				});
				$('.tringle-right-1').css({
					'border-top-width': heightWindow*0.5+ 'px',
					'border-left-width': widthWindow*0.25+ 'px',
					'border-right-width': widthWindow*0.25+ 'px',
					'border-bottom-width': heightWindow*0.5+ 'px'
				});
				$('.tringle-right-3').css({
					'height': heightWindow + 'px',
					'width': widthWindow*0.3 + 'px'
				});
				$('.tringle-right-4').css({
					'border-top-width': heightWindow*0.5+ 'px',
					'border-left-width': widthWindow*0.25+ 'px',
					'border-right-width': widthWindow*0.25+ 'px',
					'border-bottom-width': heightWindow*0.5+ 'px'
				});
			} else {
					$('.m-open-detail-project-current .tringle-right-1').css({
						'transform': 'translateX(-' + widthWindow + 'px)',
						'-webkit-transform': 'translateX(-' + widthWindow  + 'px)'
					});
			}
		}
	}
});
});
