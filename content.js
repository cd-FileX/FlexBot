fetch("https://raw.githubusercontent.com/FlexGamesGitHub/FlexBot/main/WS/cd.json")
	.then(response => response.json())
	.then((data) => {add_content(data);});


function add_content(data) {
    for (var key in data.normal_cmd_data) {
		var parameters = '';
		var aliases = '';
		var parameter_opts = '';
		var channels = [];
		var forbidden_channels = [];
		var key_data = data.normal_cmd_data[key];

		for (i = 0; i < key_data.parameters.length; i++) {
			var param_data = key_data.parameters[i];
			parameters += (param_data.point ? '.' : ' ')+(param_data.required ? '[' : '(')+(param_data.name.toUpperCase())+': '+`<a href="#param-type-${param_data.type}">`+(param_data.type.charAt(0).toUpperCase() + param_data.type.slice(1))+'</a>'+(param_data.required ? ']' : ')');
			parameter_opts += param_data.option_types.length>0 ? `<b>Optionen <code class="normal-cmd-code">${param_data.name.toUpperCase()}</code>: </b>` : '';
			for (x = 0; x < param_data.option_types.length; x++) parameter_opts += (param_data.option_types[x].charAt(0).toUpperCase() + param_data.option_types[x].slice(1))+(x < param_data.option_types.length-1 ? ' / ' : i < key_data.parameters ? '<br/>' : '');
		}
		aliases = '<code class="normal-cmd-code">'+key_data.aliases.join('</code> / <code class="normal-cmd-code">')+'</code>';
		
		for (var channel_id in key_data.channels) {
			channels[channels.length] = `<code class="normal-cmd-code"><a href="https://discord.com/channels/493472231691780117/${channel_id}/">`+key_data.channels[channel_id]+'</a></code>';
		} channels = channels.join(' & ');
		for (var channel_id in key_data.forbidden_channels) {
			forbidden_channels[forbidden_channels.length] = `<code class="normal-cmd-code"><a href="https://discord.com/channels/493472231691780117/${channel_id}/">`+key_data.channels[channel_id]+'</a></code>';
		} forbidden_channels = forbidden_channels.join(' & ');
		var list_item = document.createElement('li');
		list_item.classList.add('normal-cmd-item', 'cmd-item');
		list_item.id = key;
		list_item.innerHTML = `
		<h6 class="normal-cmd cmd">
			_${key}${parameters.length > 0 ? parameters : ''}
		</h6>
		<div class="normal-cmd-data cmd-data">
			${key_data.aliases.length > 0 ? `<span class="normal-cmd-aliases cmd-aliases"><b>Aliase:</b> ${aliases}</span>` : ''}
			${parameter_opts.length > 0 ? `<span class="normal-cmd-opt-types cmd-opt-types">${parameter_opts}</span>` : ''}
			${channels.length > 0 ? `<span class="normal-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${channels}</span>` : ''}
			${forbidden_channels.length>0 ? '<span class="normal-cmd-channels cmd-channels">'+(channels.length > 0 ? '<br/>' : '')+`<b>Verbotene Channels:</b> ${forbidden_channels}</span>` : ''}
		</div>
		<span class="normal-cmd-descr cmd-descr">${key_data.description}</span>`
		document.getElementById('normal-cmd-list').appendChild(list_item);

		list_item = document.createElement('li');
		list_item.classList.add('content-list-item');
		list_item.addEventListener('click', () => { window.location.href = `#${key}` })
		list_item.innerHTML = `<a href="#${key}">${key}</a>`;
		document.getElementById('normal-list').appendChild(list_item);
	}
	for (var key in data.mod_cmd_data) {
		var parameters = '';
		var aliases = '';
		var parameter_opts = '';
		var channels = [];
		var forbidden_channels = [];
		var key_data = data.mod_cmd_data[key];

		for (i = 0; i < key_data.parameters.length; i++) {
			var param_data = key_data.parameters[i];
			parameters += (param_data.point ? '.' : ' ')+(param_data.required ? '[' : '(')+(param_data.name.toUpperCase())+': '+`<a href="#param-type-${param_data.type}">`+(param_data.type.charAt(0).toUpperCase() + param_data.type.slice(1))+'</a>'+(param_data.required ? ']' : ')');
			parameter_opts += param_data.option_types.length>0 ? `<b>Optionen <code class="mod-cmd-code">${param_data.name.toUpperCase()}</code>: </b>` : '';
			for (x = 0; x < param_data.option_types.length; x++) parameter_opts += (param_data.option_types[x].charAt(0).toUpperCase() + param_data.option_types[x].slice(1))+(x < param_data.option_types.length-1 ? ' / ' : i < key_data.parameters ? '<br/>' : '');
		}
		aliases = '<code class="mod-cmd-code">'+key_data.aliases.join('</code> / <code class="mod-cmd-code">')+'</code>';
		
		for (var channel_id in key_data.channels) {
			channels[channels.length] = `<code class="mod-cmd-code"><a href="https://discord.com/channels/493472231691780117/${channel_id}/">`+key_data.channels[channel_id]+'</a></code>';
		} channels = channels.join(' & ');
		for (var channel_id in key_data.forbidden_channels) {
			forbidden_channels[forbidden_channels.length] = `<code class="mod-cmd-code"><a href="https://discord.com/channels/493472231691780117/${channel_id}/">`+key_data.channels[channel_id]+'</a></code>';
		} forbidden_channels = forbidden_channels.join(' & ');
		var list_item = document.createElement('li');
		list_item.classList.add('mod-cmd-item', 'cmd-item');
		list_item.id = key;
		list_item.innerHTML = `
		<h6 class="mod-cmd cmd">
			_${key}${parameters.length > 0 ? parameters : ''}
		</h6>
		<div class="mod-cmd-data cmd-data">
			${key_data.aliases.length > 0 ? `<span class="mod-cmd-aliases cmd-aliases"><b>Aliase:</b> ${aliases}</span>` : ''}
			${parameter_opts.length > 0 ? `<span class="mod-cmd-opt-types cmd-opt-types">${parameter_opts}</span>` : ''}
			${channels.length > 0 ? `<span class="mod-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${channels}</span>` : ''}
			${forbidden_channels.length>0 ? '<span class="normal-cmd-channels cmd-channels">'+(channels.length > 0 ? '<br/>' : '')+`<b>Verbotene Channels:</b> ${forbidden_channels}</span>` : ''}
		</div>
		<span class="mod-cmd-descr cmd-descr">${key_data.description}</span>`
		document.getElementById('mod-cmd-list').appendChild(list_item);

		list_item = document.createElement('li');
		list_item.classList.add('content-list-item');
		list_item.addEventListener('click', () => { window.location.href = `#${key}` })
		list_item.innerHTML = `<a href="#${key}">${key}</a>`;
		document.getElementById('mod-list').appendChild(list_item);
    }
	if (data.event_cmd_data.code === 0) {
		var list_item = document.createElement('li');
		list_item.classList.add('event-cmd-item', 'cmd-item');
		list_item.innerHTML = `<h6 class="event-cmd cmd">${data.event_cmd_data.message.format(data.event_cmd_data.replace['733662705096982568'])}</h6>`;
		document.getElementById('event-cmd-list').appendChild(list_item)
	} else {
		for (var key in data.event_cmd_data) {
			var parameters = '';
			var aliases = '';
			var parameter_opts = '';
			var channels = [];
			var forbidden_channels = [];
			var key_data = data.event_cmd_data[key];
	
			for (i = 0; i < key_data.parameters.length; i++) {
				var param_data = key_data.parameters[i];
				parameters += (param_data.point ? '.' : ' ')+(param_data.required ? '[' : '(')+(param_data.name.toUpperCase())+': '+`<a href="#param-type-${param_data.type}">`+(param_data.type.charAt(0).toUpperCase() + param_data.type.slice(1))+'</a>'+(param_data.required ? ']' : ')');
				parameter_opts += param_data.option_types.length>0 ? `<b>Optionen <code class="event-cmd-code">${param_data.name.toUpperCase()}</code>: </b>` : '';
				for (x = 0; x < param_data.option_types.length; x++) parameter_opts += (param_data.option_types[x].charAt(0).toUpperCase() + param_data.option_types[x].slice(1))+(x < param_data.option_types.length-1 ? ' / ' : i < key_data.parameters ? '<br/>' : '');
			}
			aliases = '<code class="event-cmd-code">'+key_data.aliases.join('</code> / <code class="event-cmd-code">')+'</code>';
			
			for (var channel_id in key_data.channels) {
				channels[channels.length] = `<code class="event-cmd-code"><a href="https://discord.com/channels/493472231691780117/${channel_id}/">`+key_data.channels[channel_id]+'</a></code>';
			} channels = channels.join(' & ');
			for (var channel_id in key_data.forbidden_channels) {
				forbidden_channels[forbidden_channels.length] = `<code class="event-cmd-code"><a href="https://discord.com/channels/493472231691780117/${channel_id}/">`+key_data.channels[channel_id]+'</a></code>';
			} forbidden_channels = forbidden_channels.join(' & ');
			var list_item = document.createElement('li');
			list_item.classList.add('event-cmd-item', 'cmd-item');
			list_item.id = key;
			list_item.innerHTML = `
			<h6 class="event-cmd cmd">
				_${key}${parameters.length > 0 ? parameters : ''}
			</h6>
			<div class="event-cmd-data cmd-data">
				${key_data.aliases.length > 0 ? `<span class="event-cmd-aliases cmd-aliases"><b>Aliase:</b> ${aliases}</span>` : ''}
				${parameter_opts.length > 0 ? `<span class="event-cmd-opt-types cmd-opt-types">${parameter_opts}</span>` : ''}
				${channels.length > 0 ? `<span class="event-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${channels}</span>` : ''}
				${forbidden_channels.length>0 ? '<span class="normal-cmd-channels cmd-channels">'+(channels.length > 0 ? '<br/>' : '')+`<b>Verbotene Channels:</b> ${forbidden_channels}</span>` : ''}
			</div>
			<span class="event-cmd-descr cmd-descr">${key_data.description}</span>`
			document.getElementById('event-cmd-list').appendChild(list_item);
	
			list_item = document.createElement('li');
			list_item.classList.add('content-list-item');
			list_item.innerHTML = `<a href="#${key}">${key}</a>`;
			document.getElementById('event-list').appendChild(list_item);
		}
	}
	for (var key in data.param_type_data) {
		var list_item = document.createElement('li');
		list_item.classList.add('param-type-item', 'cmd-item');
		list_item.id = 'param-type-'+key;
		list_item.innerHTML = `
		<h6 class="param-type cmd">
			${key}
		</h6>
		<span class="param-type-descr cmd-descr">${data.param_type_data[key]}</span>`;
		document.getElementById('param-type-list').appendChild(list_item);

		list_item = document.createElement('li');
		list_item.classList.add('content-list-item');
		list_item.innerHTML = `<a href="#param-type-${key}">`+key.charAt(0).toUpperCase() + key.slice(1)+'</a>';
		document.getElementById('type-list').appendChild(list_item);
	}
}


String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) { 
	return typeof args[number] != 'undefined'
		? args[number]
		: match
	;
	});
};
