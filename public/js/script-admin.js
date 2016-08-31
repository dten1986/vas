$(function() {
	$(document).ready(function() {
		var $popup = $('.b-popup'),
			popupTpl = _.template('' +
			'<div class="b-popup__head panel-heading">' +
				'<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
				'<%=title %>' +
				'</div>' +
			'<div class="b-popup__body panel body">' +
				'<form class="b-popup__form" data-index="<%=index %>" data-table="<%=table %>">' +
					'<% for (var k in items) { %>' +
						'<div class="b-popup__form-item m-popup__form-item_<%=k %>">' +
							'<span class="b-popup__form-item-title" data-id="<%=k %>"><%=k %>: </span>' +
							'<% if (k == \'contacts\' && typeof items[k] == \'object\') { %>' +
								'<% for (var j = 0; j < items[k].length; j++) { %>' +
									'<div class="b-popup__form-item-contact">' +
										'<span class="b-popup__form-item-contact-id" data-id="<%=items[k][j].id %>"><%=items[k][j].id %>: </span>' +
										'<input class="b-popup__form-item-contact-value form-control" type="text" value="<%=items[k][j].link %>">' +
										'<a href="#" class="b-popup__form-item-contact-remove btn btn-danger"><i class="icon-remove"></i> Remove</a> ' +
									'</div>' +
								'<% } %>' +
								'<a href="#" class="b-popup__form-item-add-contact btn btn-success"><i class="icon-plus"></i> Add contact</a>' +
							'<% } else if (k == \'details\') { %>' +
								'<div class="m-table__item_tabbed">' +
									'<% for (var m in items[k]) { %>' +
										'<div class="b-popup__form-item-details m-popup__form-item-details_<%=m %>">' +
											'<span class="b-popup__form-item-details-id" data-id="<%=m %>"><%=m %>: </span>' +
											'<% if (typeof items[k][m] == \'object\') { %>' +
												'<% for (var n = 0; n < items[k][m].length; n++) { %>' +
													'<div class="b-popup__form-item-details-stats">' +
														'<span>value: </span>' +
														'<input class="b-popup__form-item-details-stats-value form-control" name="v<%=n %>" type="text" value="<%=items[k][m][n].value %>">' +
														'<span>text: </span>' +
														'<input class="b-popup__form-item-details-stats-text form-control" name="t<%=n %>" type="text" value="<%=items[k][m][n].text %>">' +
														'<a href="#" class="b-popup__form-details-stats-remove btn btn-danger"><i class="icon-remove"></i> Remove</a> ' +
													'</div>' +
												'<% } %>' +
												'<a href="#" class="b-popup__form-item-add-stat btn btn-success"><i class="icon-plus"></i> Add stat</a>' +
											'<% } else { %>' +
												'<input class="b-popup__form-item-value form-control" name="<%=m %>" type="text" value="<%=items[k][m] %>">' +
											'<% } %>' +
										'</div>' +
									'<% } %>' +
								'</div>' +
							'<% } else if (k == \'video\') { %>' +
								'<% for (var l in items[k]) { %>' +
									'<div class="b-popup__form-item-video">' +
										'<span class="b-popup__form-item-video-id" data-id="<%=l %>"><%=l %>: </span>' +
										'<input class="b-popup__form-item-video-value form-control" type="text" value="<%=items[k][l] %>">' +
										'<a href="#" class="b-popup__form-item-video-remove btn btn-danger"><i class="icon-remove"></i> Remove</a> ' +
									'</div>' +
								'<% } %>' +
								'<a href="#" class="b-popup__form-item-add-video btn btn-success"><i class="icon-plus"></i> Add video</a>' +
							'<% } else { %>' +
								'<input class="b-popup__form-item-value form-control" name="<%=k %>" type="text" value="<%=items[k] %>">' +
							'<% } %>' +
						'</div>' +
					'<% } %>' +
					'<button type="submit" class="b-popup__form-submit btn btn-success">Ok</button>' +
					'<button type="reset" class="b-popup__form-reset btn btn-danger">Cancel</button>' +
				'</form>' +
			'</div>');
			
		function _resizePopup() {
			var $body = $('.b-popup__body', $popup);
			
			if ($popup.height() > $(window).height() - 100) {
				$body.css({
					'max-height': $(window).height() - 152,
					'overflow-y': 'scroll'
				});
			} else {
				$body.css({
					'max-height': 'none',
					'overflow-y': 'auto'
				});
			}
		}
					
		// Remove item
		$('.b-table__item-remove').on('click', function() {
			if (confirm('Confirm removal')) {
				var $element = $(this).parents('tr');
				
				var data = {
					table: $element.data('table'),
					index: $element.data('index')
				};
				
				$.ajax({
					url: '/remove',
					method: 'POST',
					data: {_token: $('input[name="_token"]').data('session'), data: JSON.stringify(data)},
		//			dataType: 'html',
					success: function(data){
						//alert(data);
						location.reload();
					}
				})
			}
			
			return false;
		});
		
		// Edit item
		$('.b-table__item-edit').on('click', function() {
			var $element = $(this).parents('tr');
			
			$popup.html(popupTpl({
				'index': $element.data('index'),
				'table': $element.data('table'),
				'title': 'Edit item in \'' + $element.data('table') + '\'',
				'items': window._data[$element.data('table')][$element.data('index')]
			}));
			
			$popup.show('fast', function() {
				$popup.css('opacity', 1);
				_resizePopup();
			});
			
			
			return false;
		});
		
		// Add Item
		$('.b-add-item').on('click', function() {
			var data;
			switch($(this).data('table')) {
				case 'projects':
					data = {
						name: 'New project',
						description: '',
						keywords: '',
						details: {
							stats: [],
							text: '',
							contacts: ''
						},
						theme: 1,
						video: {},
						image: ''
					};
					break;
				case 'profiles':
					data = {
						name: 'New profile',
						'description-short': '',
						'description-full': '',
						foto: '',
						contacts: {}
					};
					break;
			}
			
			if (typeof data == 'object') {
				$popup.html(popupTpl({
					'index': -1,
					'table': $(this).data('table'),
					'title': 'Create new item in \'' + $(this).data('table') + '\'',
					'items': data
				}));
				
				$popup.show('fast', function() {
					$popup.css('opacity', 1);
					_resizePopup();
				});
			}
			
			return false;
		});
		
		
		// Ok (submit)
		$popup.on('click', '.b-popup__form-submit', function() {
			var $form = $(this).parent(),
				value = {},
				noData = false;
			
			$.each($('.b-popup__form-item'), function(i, v) {
		//		console.log(i, v, this);
				if ($(v).hasClass('m-popup__form-item_contacts')) {
		//			console.log($(v).children('input').attr('name'), $(v).children('input').val());
					value.contacts = [];
					$.each($('.b-popup__form-item-contact'), function(i, v) {
						if ($(v).children('input').val() != '' && $(v).children('span').data('id')) {
							value.contacts.push({
								id: $(v).children('span').data('id'),
								link: $(v).children('input').val()
							});
						} else {
							noData = true;
							alert('No data for contact "' + $(v).children('span').data('id') + '"');
						}
					});
				} else if ($(v).hasClass('m-popup__form-item_details')) {
					value.details = {};
					$.each($('.b-popup__form-item-details'), function(i, v) {
						if ($(v).hasClass('m-popup__form-item-details_stats')) {
							value.details.stats = [];
							$.each($('.b-popup__form-item-details-stats'), function(i, v) {
								if ($(v).children('input').val() != '') {
									value.details.stats.push({
										value: $(v).children('input.b-popup__form-item-details-stats-value').val(),
										text: $(v).children('input.b-popup__form-item-details-stats-text').val()
									});
								} else {
									noData = true;
									alert('No data for position "stats"');
								}
							});
						} else {
							if ($(v).children('input').val() != '') {
								value.details[$(v).children('span').data('id')] = $(v).children('input').val();
							} else {
								noData = true;
								alert('No data for position "' + $(v).children('span').data('id') + '"');
							}
						}
					});
				} else if ($(v).hasClass('m-popup__form-item_video')) {
					value.video = {};
					$.each($('.b-popup__form-item-video'), function(i, v) {
						if ($(v).children('input').val() != '' && $(v).children('span').data('id')) {
							value.video[$(v).children('span').data('id')] = $(v).children('input').val();
						} else {
							noData = true;
							alert('No data for video "' + ($(v).children('span').data('id') ? $(v).children('span').data('id') : 'with not selected format')  + '"');
						}
					});
				} else {
					
					if ($(v).children('input').val() != '') {
						value[$(v).children('input').attr('name')] = $(v).children('input').val();
					} else {
						noData = true;
						alert('No data for position "' + $(v).children('span').data('id') + '"');
					}
				}
			});
			
			console.log(value);
			
			if (!noData) {
				console.log(value);
			
				var data = {
					table: $form.data('table'),
					index: $form.data('index'),
					value: value
				};
				
				$.ajax({
					url: '/edit',
					method: 'POST',
					data: {_token: $('input[name="_token"]').data('session'), data: JSON.stringify(data)},
		//			dataType: 'html',
					success: function(data){
						location.reload();
					}
				});
				
				
			} else {
				console.log('no data');
			}
			
			return false;
		});
		
		// Cancel (reset)
		$popup.on('click', '.b-popup__form-reset, .b-popup__head .close', function() {
			$popup.css('opacity', 0);
			
			setTimeout(function() {
				$popup.html('').hide();
			}, 500);
			
			return false;
		});
		
		// Remove contact/video/details stat
		$popup.on('click', '.b-popup__form-item-contact-remove, .b-popup__form-item-video-remove, .b-popup__form-details-stats-remove', function() {
			$(this).parent().remove();
		});
		
		// Add contact
		$popup.on('click', '.b-popup__form-item-add-contact', function() {
			$('' +
				'<div class="b-popup__form-item-contact" data-id="">' +
					'<span class="b-popup__form-item-contact-new">' +
						'<span class="b-popup__form-item-contact-id"><i class="icon-chevron-down"></i> Choose type: </span>' +
						'<ul class="b-popup__form-item-contact-list">' +
							'<li>fb</li>' +
							'<li>in</li>' +
							'<li>vk</li>' +
							'<li>tw</li>' +
						'</ul>' +
					'</span>' +
					'<input class="b-popup__form-item-contact-value form-control" type="text" value="">' +
					'<a href="#" class="b-popup__form-item-contact-remove btn btn-danger"><i class="icon-remove"></i> Remove</a> ' +
				'</div>'
			).insertBefore($(this));
		});
		
		// Add video
		$popup.on('click', '.b-popup__form-item-add-video', function() {
			$('' +
				'<div class="b-popup__form-item-video" data-id="">' +
					'<span class="b-popup__form-item-video-new">' +
						'<span class="b-popup__form-item-video-id"><i class="icon-chevron-down"></i> Choose type: </span>' +
						'<ul class="b-popup__form-item-video-list">' +
							'<li>ogg</li>' +
							'<li>mp4</li>' +
							'<li>webm</li>' +
						'</ul>' +
					'</span>' +
					'<input class="b-popup__form-item-video-value form-control" type="text" value="">' +
					'<a href="#" class="b-popup__form-item-video-remove btn btn-danger"><i class="icon-remove"></i> Remove</a> ' +
				'</div>'
			).insertBefore($(this));
		});
		
		// Add stat
		$popup.on('click', '.b-popup__form-item-add-stat', function() {
			$('' +
				'<div class="b-popup__form-item-details-stats">' +
					'<span>value: </span>' +
					'<input class="b-popup__form-item-details-stats-value form-control" type="text" value="">' +
					'<span>text: </span>' +
					'<input class="b-popup__form-item-details-stats-text form-control" name="" type="text" value="">' +
					'<a href="#" class="b-popup__form-details-stats-remove btn btn-danger"><i class="icon-remove"></i> Remove</a> ' +
				'</div>'
			).insertBefore($(this));
		});
		
		// Contact/Video dropdown
		$popup.on('click', '.b-popup__form-item-contact-list li, .b-popup__form-item-video-list li', function() {
			$(this).parents('span').attr('data-id', $(this).html());
			$(this).parent().siblings('span').html($(this).html() + ':');
		});
	});
});