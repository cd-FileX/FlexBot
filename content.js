function add_content(e){for(var t in e.normal_cmd_data){var n="",a="",s="",c=[],d=[],l=e.normal_cmd_data[t];for(i=0;i<l.parameters.length;i++){for(n+="."+((o=l.parameters[i]).required?"[":"(")+o.name.toUpperCase()+": "+`<a href="#param-type-${get_type(o.type)}">`+(get_type(o.type).charAt(0).toUpperCase()+get_type(o.type).slice(1))+"</a>"+(o.required?"]":")"),s+=o.option_types.length>0?`<b>Optionen <code class="normal-cmd-code">${o.name.toUpperCase()}</code>: </b>`:"",x=0;x<o.option_types.length;x++)s+=o.option_types[x].charAt(0).toUpperCase()+o.option_types[x].slice(1)+(x<o.option_types.length-1?" / ":i<l.parameters?"<br/>":"")}for(var r in a=`<code class="normal-cmd-code">${l.alias}</code>`,l.channels)c[c.length]=`<code class="normal-cmd-code"><a href="https://discord.com/channels/493472231691780117/${r}/">`+l.channels[r]+"</a></code>";for(var r in c=c.join(" & "),l.forbidden_channels)d[d.length]=`<code class="normal-cmd-code"><a href="https://discord.com/channels/493472231691780117/${r}/">`+l.channels[r]+"</a></code>";d=d.join(" & "),(m=document.createElement("li")).classList.add("normal-cmd-item","cmd-item"),m.id=t,m.innerHTML=`\n\t\t<h6 class="normal-cmd cmd">\n\t\t\t_${t}${n.length>0?n:""}\n\t\t</h6>\n\t\t<div class="normal-cmd-data cmd-data">\n\t\t\t${null!=l.alias?`<span class="normal-cmd-aliases cmd-aliases"><b>Alias:</b> ${a}</span>`:""}\n\t\t\t${s.length>0?`<span class="normal-cmd-opt-types cmd-opt-types">${s}</span>`:""}\n\t\t\t${c.length>0?`<span class="normal-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${c}`:d.length>0?"":"</span>"}\n\t\t\t${d.length>0?c.length>0?'<br/><b><span style="color: red;">Verbotene</span> Channels:</b> ${forbidden_channels}</span>':`<span class="normal-cmd-channels cmd-channels"><b>Verbotene Channels:</b> ${d}</span>`:""}\n\t\t</div>\n\t\t<span class="normal-cmd-descr cmd-descr">${l.description}</span>`,document.getElementById("normal-cmd-list").appendChild(m),(m=document.createElement("li")).classList.add("content-list-item"),m.addEventListener("click",()=>{window.location.href=`#${t}`}),m.innerHTML=`<a href="#${t}">${t}</a>`,document.getElementById("normal-list").appendChild(m)}for(var t in e.mod_cmd_data){n="",a="",s="",c=[],d=[],l=e.mod_cmd_data[t];for(i=0;i<l.parameters.length;i++){for(n+="."+((o=l.parameters[i]).required?"[":"(")+o.name.toUpperCase()+": "+`<a href="#param-type-${get_type(o.type)}">`+(get_type(o.type).charAt(0).toUpperCase()+get_type(o.type).slice(1))+"</a>"+(o.required?"]":")"),s+=o.option_types.length>0?`<b>Optionen <code class="mod-cmd-code">${o.name.toUpperCase()}</code>: </b>`:"",x=0;x<o.option_types.length;x++)s+=o.option_types[x].charAt(0).toUpperCase()+o.option_types[x].slice(1)+(x<o.option_types.length-1?" / ":i<l.parameters?"<br/>":"")}for(var r in a=`<code class="mod-cmd-code">${l.alias}</code>`,l.channels)c[c.length]=`<code class="mod-cmd-code"><a href="https://discord.com/channels/493472231691780117/${r}/">`+l.channels[r]+"</a></code>";for(var r in c=c.join(" & "),l.forbidden_channels)d[d.length]=`<code class="mod-cmd-code"><a href="https://discord.com/channels/493472231691780117/${r}/">`+l.channels[r]+"</a></code>";d=d.join(" & "),(m=document.createElement("li")).classList.add("mod-cmd-item","cmd-item"),m.id=t,m.innerHTML=`\n\t\t<h6 class="mod-cmd cmd">\n\t\t\t_${t}${n.length>0?n:""}\n\t\t</h6>\n\t\t<div class="mod-cmd-data cmd-data">\n\t\t\t${null!=l.alias?`<span class="mod-cmd-aliases cmd-aliases"><b>Alias:</b> ${a}</span>`:""}\n\t\t\t${s.length>0?`<span class="mod-cmd-opt-types cmd-opt-types">${s}</span>`:""}\n\t\t\t${c.length>0?`<span class="mod-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${c}`:d.length>0?"":"</span>"}\n\t\t\t${d.length>0?c.length>0?`<br/><b><span style="color: red;">Verbotene</span> Channels:</b> ${d}</span>`:`<span class="mod-cmd-channels cmd-channels"><b>Verbotene Channels:</b> ${d}</span>`:""}\n\t\t</div>\n\t\t<span class="mod-cmd-descr cmd-descr">${l.description}</span>`,document.getElementById("mod-cmd-list").appendChild(m),(m=document.createElement("li")).classList.add("content-list-item"),m.addEventListener("click",()=>{window.location.href=`#${t}`}),m.innerHTML=`<a href="#${t}">${t}</a>`,document.getElementById("mod-list").appendChild(m)}if(0===e.event_cmd_data.code)(m=document.createElement("li")).classList.add("event-cmd-item","cmd-item"),m.innerHTML=`<h6 class="event-cmd cmd">${e.event_cmd_data.message.format(e.event_cmd_data.replace["733662705096982568"])}</h6>`,document.getElementById("event-cmd-list").appendChild(m);else for(var t in e.event_cmd_data){n="",a="",s="",c=[],d=[],l=e.event_cmd_data[t];for(i=0;i<l.parameters.length;i++){var o;for(n+="."+((o=l.parameters[i]).required?"[":"(")+o.name.toUpperCase()+": "+`<a href="#param-type-${get_type(o.type)}">`+(get_type(o.type).charAt(0).toUpperCase()+get_type(o.type).slice(1))+"</a>"+(o.required?"]":")"),s+=o.option_types.length>0?`<b>Optionen <code class="event-cmd-code">${o.name.toUpperCase()}</code>: </b>`:"",x=0;x<o.option_types.length;x++)s+=o.option_types[x].charAt(0).toUpperCase()+o.option_types[x].slice(1)+(x<o.option_types.length-1?" / ":i<l.parameters?"<br/>":"")}for(var r in a=`<code class="event-cmd-code">${l.alias}</code>`,l.channels)c[c.length]=`<code class="event-cmd-code"><a href="https://discord.com/channels/493472231691780117/${r}/">`+l.channels[r]+"</a></code>";for(var r in c=c.join(" & "),l.forbidden_channels)d[d.length]=`<code class="event-cmd-code"><a href="https://discord.com/channels/493472231691780117/${r}/">`+l.channels[r]+"</a></code>";d=d.join(" & "),(m=document.createElement("li")).classList.add("event-cmd-item","cmd-item"),m.id=t,m.innerHTML=`\n\t\t\t<h6 class="event-cmd cmd">\n\t\t\t\t_${t}${n.length>0?n:""}\n\t\t\t</h6>\n\t\t\t<div class="event-cmd-data cmd-data">\n\t\t\t\t${null!=l.alias?`<span class="event-cmd-aliases cmd-aliases"><b>Alias:</b> ${a}</span>`:""}\n\t\t\t\t${s.length>0?`<span class="event-cmd-opt-types cmd-opt-types">${s}</span>`:""}\n\t\t\t\t${c.length>0?`<span class="event-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${c}`:d.length>0?"":"</span>"}\n\t\t\t\t${d.length>0?c.length>0?`<br/><b><span style="color: red;">Verbotene</span> Channels:</b> ${d}</span>`:`<span class="event-cmd-channels cmd-channels"><b>Verbotene Channels:</b> ${d}</span>`:""}\n\t\t\t</div>\n\t\t\t<span class="event-cmd-descr cmd-descr">${l.description}</span>`,document.getElementById("event-cmd-list").appendChild(m),(m=document.createElement("li")).classList.add("content-list-item"),m.innerHTML=`<a href="#${t}">${t}</a>`,document.getElementById("event-list").appendChild(m)}for(var t in e.param_type_data){var m;(m=document.createElement("li")).classList.add("param-type-item","cmd-item"),m.id="param-type-"+t,m.innerHTML=`\n\t\t<h6 class="param-type cmd">\n\t\t\t${t}\n\t\t</h6>\n\t\t<span class="param-type-descr cmd-descr">${e.param_type_data[t]}</span>`,document.getElementById("param-type-list").appendChild(m),(m=document.createElement("li")).classList.add("content-list-item"),m.innerHTML=`<a href="#param-type-${t}">`+t.charAt(0).toUpperCase()+t.slice(1)+"</a>",document.getElementById("type-list").appendChild(m)}}function get_type(e){switch(e){case 1:return"sub_command";case 2:return"sub_command_group";case 3:return"string";case 3.1:return"text";case 3.2:return"wörter";case 3.3:return"option";case 4:return"zahl";case 5:return"boolean";case 6:return"user";case 7:return"channel";case 8:return"rolle";case 9:return"mentionable";case 10:return"kommazahl";default:return}}fetch("https://raw.githubusercontent.com/FlexGamesGitHub/FlexBot/main/WS/cd.json").then(e=>e.json()).then(e=>{add_content(e)}),String.prototype.format=function(){var e=arguments;return this.replace(/{(\d+)}/g,function(t,n){return void 0!==e[n]?e[n]:t})};