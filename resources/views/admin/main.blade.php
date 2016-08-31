@extends('layouts.app')
@section('content')
<!--{{-- <?=var_dump($profiles) ?> --}}-->
<div class="container">
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-default">
				<div class="panel-heading">Projects</div>
				<div class="panel-body">
					<table class="b-table table table-bordered table-striped">
					@for ($i = 0; $i < count($projects); $i++)
						<tr class="b-table__item" data-index="{{ $i }}" data-table="projects">
							<td>{{ $i + 1 }}</td>
							<td>
								<div class="b-table__item-name">Name: {{ $projects[$i]['name'] }}</div>
								<div class="b-table__item-keywords">Keywords: {{ $projects[$i]['keywords'] }}</div>
								<div class="b-table__item-description">Description: {{ $projects[$i]['description'] }}</div>
								<div class="b-table__item-details">
									Details:
									<div class="m-table__item_tabbed">
										<div class="b-table__item-details-stats">
											Stats:
											<div class="m-table__item_tabbed">
											@for ($j = 0; $j < count($projects[$i]['details']['stats']); $j++)
												<div>Value: {{ $projects[$i]['details']['stats'][$j]['value'] }}; Text: {{ $projects[$i]['details']['stats'][$j]['text'] }}</div>
											@endfor
											</div>
										</div>
										<div class="b-table__item-details-text">Text: {{ $projects[$i]['details']['text'] }}</div>
										<div class="b-table__item-details-contacts">Contacts: {{ $projects[$i]['details']['contacts'] }}</div>
									</div>
								</div>
								<div class="b-table__item-theme">Theme: {{ $projects[$i]['theme'] }}</div>
								<div class="b-table__item-video">
									Video:
									@if ($projects[$i]['video'])
									@foreach ($projects[$i]['video'] as $key => $value)
										{{ $key }}: {{ $value }};
									@endforeach
									@else
										No video
									@endif
								</div>
								<div class="b-table__item-image">Image: {{ $projects[$i]['image'] }}</div>
							</td>
							<td>
								<a href="/edit" target="_blank" class="b-table__item-edit btn btn-primary"><i class="icon-pencil"></i> Edit</a>
								<a href="/remove" target="_blank" class="b-table__item-remove btn btn-danger"><i class="icon-remove"></i> Remove</a>
							</td>
						</tr>
					@endfor
					</table>
					<a href="#" class="b-add-item btn btn-success" data-table="projects"><i class="icon-plus"></i> Add new Project</a>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-default">
				<div class="panel-heading">Profiles</div>
				<div class="panel-body b-table">
					<table class="b-table table table-bordered table-striped">
					@for ($i = 0; $i < count($profiles); $i++)
						<tr class="b-table__item" data-index="{{ $i }}" data-table="profiles">
							<td>{{ $i + 1 }}</td>
							<td>
								<div class="b-table__item-name">Name: {{ $profiles[$i]['name'] }}</div>
								<div class="b-table__item-short-descr">Short description: {{ $profiles[$i]['description-short'] }}</div>
								<div class="b-table__item-full-descr">Full description: {{ $profiles[$i]['description-full'] }}</div>
								<div class="b-table__item-foto-preview">Foto: {{ $profiles[$i]['foto'] }}</div>
								<div class="b-table__item-contacts">
									Contacts:
									<div class="m-table__item_tabbed">
									@for ($j = 0; $j < count($profiles[$i]['contacts']); $j++)
										<div class="b-table__item-contact m-table__item-contact_{{ $profiles[$i]['contacts'][$j]['id'] }}"></div>
										<div>Id: {{ $profiles[$i]['contacts'][$j]['id'] }}; Link: {{ $profiles[$i]['contacts'][$j]['link'] }}</div>
									@endfor
									</div>
								</div>
							</td>
							<td>
								<a href="/edit" target="_blank" class="b-table__item-edit btn btn-primary"><i class="icon-pencil"></i> Edit</a>
								<a href="/remove" target="_blank" class="b-table__item-remove btn btn-danger"><i class="icon-remove"></i> Remove</a>
							</td>
						</tr>
					@endfor
					</table>
					<a href="#" class="b-add-item btn btn-success" data-table="profiles"><i class="icon-plus"></i> Add new Profile</a>
				</div>
			</div>
		</div>
	</div>
	
	<!-- TOKEN -->
	<input name="_token" val="{{ Session::token() }}" type="hidden" data-session="{{ Session::token() }}">
</div>
<div class="b-popup panel panel-default"></div>
<script type="text/javascript">
	window._data = {
		projects: JSON.parse('<?=json_encode($projects) ?>'),
		profiles: JSON.parse('<?=json_encode($profiles) ?>')
	};
	console.log(window._data);
</script>
@stop