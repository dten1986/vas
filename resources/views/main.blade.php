@extends('layouts.default')
@section('content')
<nav class="l-menu">
	<div class="b-menu__button">
		<div></div>
		<div></div>
		<div></div>
	</div>

	<ul class="b-menu__inner">
		<li data-menuanchor="Home"><span>Home</span></li>
		<li data-menuanchor="Mission"><span>Mission</span></li>
		<li data-menuanchor="Investors"><span>Investors</span></li>
		<li data-menuanchor="Projects"><span>Projects</span></li>
		<li data-menuanchor="Apply"><span>Apply</span></li>
		<li data-menuanchor="ContactUs"><span>Contact Us</span></li>
	</ul>

</nav>


<div class="l-logo">
	<div class="b-logo-light"></div>
	<div class="b-logo-dark"></div>
</div>

<div class="b-slide__wrap-right-tittle">

</div>

<div class="l-scroll"></div>

<main id="fullpage" class="l-wrapper container">

	<section class="b-slide m-slide_home" data-anchor="Home" data-name="Home">
		<div class="b-slide__wrap row row-center">
			<h1 class="col sm-12">A collaboration between experienced leaders helping online businesses to succeed</h1>
		</div>
		<div class="b-next-page m-slide__item-scroll">
			<div class="b-slide__item-scroll-inner">
				<div class="b-slide__item-scroll-inner-points m-slide__item-scroll-inner-points_1"></div>
				<div class="b-slide__item-scroll-inner-points m-slide__item-scroll-inner-points_2"></div>
				<div class="b-slide__item-scroll-inner-points m-slide__item-scroll-inner-points_3"></div>
				<div class="b-slide__item-scroll-inner-points m-slide__item-scroll-inner-points_4"></div>
			</div>
			<div class="b-slide__item-scroll-text">SCROLL</div>
		</div>
	</section>

	<section class="b-slide m-slide_mission m-slide_light-bg" data-anchor="Mission" data-name="Mission">
		<div class="b-slide__wrap row row-center">
			<canvas id="canvas-logo-element" class="col sm-12"></canvas>
			<div class="b-slide__wrap-inner-text-block col xs-12">
				<h1>We stand for innovations</h1>
				<p>Our mission is to make venture investments transparent and successful by applying diverse backgrounds, result-oriented approach and clear vision of the market off valuable partners.</p>
			</div>
		</div>
	</section>

	<section class="b-slide m-slide_angels" data-anchor="Investors" data-name="Investors">
		<div class="b-slide__angels-viewport swiper-container">
			<div class="b-slide__angels-viewport-container swiper-wrapper">
				@for ($i = 0; $i < count($profiles); $i++)
				<div class="b-slide_angels-slide swiper-slide">
					<figure>
						<div class="b-slide__wrap-image">
							<div class="b-slide__wrap-image-filter-dark">
								<img src="{{ $profiles[$i]['foto'] }}">
							</div>
							<figcaption>
								<h1>{{ $profiles[$i]['name'] }}</h1>
								<p class="b-slide__wrap-image-short">{{ $profiles[$i]['description-short'] }}</p>
							</figcaption>
						</div>
						<div class="b-slide__wrap-full">
							<div class="b-slide__wrap-full-close"></div>
							<div class="b-slide__wrap-full-about">{{ $profiles[$i]['description-full'] }}</div>
							@if ($profiles[$i]['contacts'])
							<div class="b-slide__wrap-full-social">
								@for ($j = 0; $j < count($profiles[$i]['contacts']); $j++)
								<a href="{{ $profiles[$i]['contacts'][$j]['link'] }}" class="m-slide__wrap-full-{{ $profiles[$i]['contacts'][$j]['id'] }}"></a>
								@endfor
							</div>
							@endif
						</div>
					</figure>
				</div>
				@endfor
			</div>
		</div>
		<div class="b-slide__angels-control m-slide__angels-control-prev">
			<svg x="0px" y="0px" viewBox="0 0 28 48">
				<polyline stroke-miterlimit="10" points="24.4,46.1 2.8,23.8 24.4,1.4"/>
			</svg>
		</div>
		<div class="b-slide__angels-control m-slide__angels-control-next">
			<svg x="0px" y="0px" viewBox="0 0 28 48">
				<polyline stroke-miterlimit="10" points="1.4,1.4 23.1,23.8 1.4,46.1"/>
			</svg>
		</div>
		<p class="b-slide__angels-control-mobile">
		</p>
	</section>

	@for ($i = 0; $i < count($projects); $i++)
	<section class="b-slide m-slide_projects m-slide_projects_{{ $projects[$i]['theme'] }}" data-anchor="Projects-{{ $i + 1}}" data-name="Projects">
		<figure class="triangles-container">
			<div class="b-slide__projects-video-inner" style="background-image: url('{{ $projects[$i]['image'] }}')">
				@if ($projects[$i]['video'])
				<div class="b-slide__projects-video-item">
					<video class="b-main__video-tag" loop="loop" autoplay="autoplay">
						@foreach ($projects[$i]['video'] as $key => $value)
						<source src="{{ $value }}" type="video/{{ $key }}">
						@endforeach
					</video>
				</div>
				@endif
			</div>
			<div>
				<div class="tringle-right-bg"></div>
				<div class="tringle-right-1"></div>
				<div class="tringle-right-3"></div>
				<div class="tringle-right-4"></div>
			</div>
		</figure>
		<div class="b-slide__wrap b-slide__projects-item row row-center">
			<div class="b-slide__projects-text row">
				<div class="b-slide__projects-text-left-column col sm-offset-1 sm-4">
					<h1>{{ $projects[$i]['name'] }}</h1>
					<p>{{ $projects[$i]['description'] }}</p>
					<div class="b-slide__projects-text-details-link">Learn more</div>
				</div>
				<div class="b-slide__projects-text-right-column col sm-offset-1 sm-4">{{ $projects[$i]['keywords'] }}</div>
			</div>
			<div class="b-slide__projects-text-details col sm-5">
				<div class="b-slide__projects-text-details-close"><div class="b-slide__projects-text-details-close-inner"></div></div>
				<div class="b-slide__projects-text-details-description">
					<table class="b-slide__projects-text-details-table">
						<tr>
						@for ($j = 0; $j < count($projects[$i]['details']['stats']); $j++)
							@if ($j != 0 && $j%2 == 0) 
							</tr><tr>
							@endif
							<td>
								<h1>{{ $projects[$i]['details']['stats'][$j]['value'] }}</h1>
								<p>{{ $projects[$i]['details']['stats'][$j]['text'] }}</p>
							</td>
						@endfor
						</tr>
					</table>
					<p>{{ $projects[$i]['details']['text'] }}</p>
					<p class="b-slide__projects-text-details-email"><a href="#">{{ $projects[$i]['details']['contacts'] }}</a></p>
				</div>
			</div>
		</div>
	</section>
	@endfor
	
	<section class="b-slide m-slide_apply" data-anchor="Apply" data-name="Apply">
		<div class="b-slide__wrap row">
			<div class="b-slide__apply-inner sm-offset-1 col sm-7">
				<div class="b-slide__apply-title m-slide__apply-question_active">
					<h1>Investment Quote</h1>
					<p>With more than 2M USD portfolio our angels are supporting innovative projects globally. Leave your quote if you’re looking for experienced partners and expertise.</p>
					<div type="button" class="b-slide__apply-button">Apply for investments</div>
				</div>
				<form method="post" id="form" name="connect-form">
					<div>
						<div class="b-slide__apply-question m-slide__apply-question_1">
							<h3>What is the barrier to entry for your competitors?</h3>
							<label><input type="radio" name="answer1" value="My project the best" checked><span>My project the best</span></label>
							<label><input type="radio" name="answer1" value="I dont know"><span>I dont know</span></label>
						</div>
						<div class="b-slide__apply-question m-slide__apply-question_2">
							<h3>What will stop major monster companies in your arena from copying you?</h3>
							<label><input type="radio" name="answer2" value="We’re able to move more rapidly" checked><span>We’re able to move more rapidly.</span></label>
							<label><input type="radio" name="answer2" value="That major brand is too busy managing what it is doing to innovate."><span>That major brand is too busy managing what it is doing to innovate.</span></label>
							<label><input type="radio" name="answer2" value="They will acquire us instead of copying us."><span>They will acquire us instead of copying us.</span></label>
						</div>
						<div class="b-slide__apply-question m-slide__apply-question_3">
							<h3>Why are you raising the funds you want to raise?</h3>
							<label><input type="radio" name="answer3" value="Yes" checked><span>Yes</span></label>
							<label><input type="radio" name="answer3" value="No"><span>No</span></label>
							<label><input type="radio" name="answer3" value="I dont know"><span>I dont know</span></label>
						</div>
						<div class="b-slide__apply-question m-slide__apply-question_4">
							<h3>How far will the funds get you?</h3>
							<label><input type="radio" name="answer4" value="Project is on-air and business-model is proven" checked><span>Project is on-air and business-model is proven</span></label>
							<label><input type="radio" name="answer4" value="1000000"><span>1000000</span></label>
							<label><input type="radio" name="answer4" value="100000"><span>100000</span></label>
							<label><input type="radio" name="answer4" value="10000"><span>10000</span></label>
						</div>
						<div class="b-slide__apply-question m-slide__apply-question_5">
							<h3>Have you acquired any customers?</h3>
							<label><input type="radio" name="answer5" value="Yes" checked><span>Yes</span></label>
							<label><input type="radio" name="answer5" value="No"><span>No</span></label>
							<label><input type="radio" name="answer5" value="I dont know"><span>I dont know</span></label>
						</div>
						<div class="b-slide__apply-question m-slide__apply-question_6">
							<h3>What is your strategy for marketing?</h3>
							<label><input type="radio" name="answer6" value="Good" checked><span>Good</span></label>
							<label><input type="radio" name="answer6" value="Bad"><span>Bad</span></label>
							<label><input type="radio" name="answer6" value="I dont know"><span>I dont know</span></label>
						</div>
						<div class="b-slide__apply-question m-slide__apply-finish">
							<h3>Please provide your contact information</h3>
							<p class="input b-slide__apply-question-finish">
								<input class="input__field input__field--hoshi" type="text" name="name" tabindex="1" id="input-1" required>
								<label class="input__label input__label--hoshi" for="input-1">
									<span class="input__label-content--hoshi">Name</span>
								</label>
							</p>
							<p class="input b-slide__apply-question-finish">
								<input class="input__field input__field--hoshi" type="tel" name="phone" tabindex="2" id="input-2" required>
								<label class="input__label input__label--hoshi" for="input-2">
									<span class="input__label-content--hoshi">Telephone</span>
								</label>
							</p>
							<p class="input b-slide__apply-question-finish">
								<input class="input__field input__field--hoshi" type="email" name="email" tabindex="3" id="input-3" required>
								<label class="input__label input__label--hoshi" for="input-3">
									<span class="input__label-content--hoshi">E-mail</span>
								</label>
							</p>
							<p class="input b-slide__apply-question-finish m-slide__apply-question-item_textarea">
								<textarea class="input__field input__field--hoshi" name="textare" tabindex="4" id="input-4"></textarea>
								<label class="input__label input__label--hoshi" for="input-4">
									<span class="input__label-content--hoshi">Comment</span>
								</label>
							</p>
							<div class="input b-slide__apply-finish-upload">
								<div class="" id="upload" onchange="show_file()">
									<label>
									<p>Drag your project presentation or related files here or <span>click for upload</span> (documents and images only)</p>
									<table class="upload-file-container">
										<tr>
											<td class="upload-name-file"></td><td id="remove-file"><p></p></td>
										</tr>
										<tr><td></tr>
									</table>
									<input type="file" id="upload" name="upload" multiple='multiple' class="b-slide__apply-finish-upload-input">
									</label>
								</div>
							</div>
							
						</div>
					</div>
					<div class="b-slide__apply-thank">
						<h1>Quote sent</h1>
						<h3>Thank you!</h3>
						<p>We will review your quote and will contact you shortly!</p>
					</div>
					<h1 class="b-slide__apply-question-title">Investment Quote</h1>
					<div class="b-slide__apply-question-indicator">
						<p class="b-slide__apply-question-indicator-text">Step <span id='current-question'></span>/<span id='sum-question'></span></p>
						<p class="b-slide__apply-question-indicator-line" id='progress-question'></p>
					</div>
					<div class="b-slide__question-button m-slide__question-button_prev">Previous question</div>
					<div class="b-slide__question-button m-slide__question-button_next">Next question</div>
					<div class="b-slide__question-button m-slide__question-button_finish">Finish</div>
					<button type="submit" tabindex="5" class="b-slide__question-button m-slide__question-button_subm" >Send quote</button>
				</form>
			</div>
		</div>
	</section>

	<section class="b-slide m-slide_contact" data-anchor="ContactUs" data-name="Contact Us">
		<div class="b-slide__wrap row row-center">
			<div class="b-slide__contact-inner col sm-12">
				<h1 class="">Lets make something great together!</h1>
				<p><a href="mailto:hello@angelssyndicate.com?subject=E-mail" class="b-slide__contact-email">hello@angelssyndicate.com</a></p>
			</div>
		</div>
	</section>

</main>
@stop