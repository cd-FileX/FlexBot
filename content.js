function add_content(e){for(var n in e.normal_cmd_data){var a,t="",s="",c="",d=[],l=[],r=e.normal_cmd_data[n];for(i=0;i<r.parameters.length;i++)for(t+=((a=r.parameters[i].description)?`<span class="normal-param-descr param-descr" aria-label="${a}">`:"")+"."+((p=r.parameters[i]).required?"[":"(")+p.name.toUpperCase()+": "+`<a href="#param-type-${get_type(p.type)}">`+(get_type(p.type).charAt(0).toUpperCase()+get_type(p.type).slice(1))+"</a>"+(p.required?"]":")")+(a?"</span>":""),c+=p.option_types.length>0?`<b>Optionen <code class="normal-cmd-code">${p.name.toUpperCase()}</code>: </b>`:"",x=0;x<p.option_types.length;x++)c+=p.option_types[x].charAt(0).toUpperCase()+p.option_types[x].slice(1)+(x<p.option_types.length-1?" / ":i<r.parameters?"<br/>":"");for(var o in s=`<code class="normal-cmd-code">${r.alias}</code>`,r.channels)d.push(`<code class="normal-cmd-code"><a target="_blank" href="https://discord.com/channels/493472231691780117/${o}/">#${r.channels[o]}</a></code>`);for(var o in d=d.join(" & "),r.forbidden_channels)l.push(`<code class="normal-cmd-code"><a target="_blank" href="https://discord.com/channels/493472231691780117/${o}/">#${r.forbidden_channels[o]}</a></code>`);l=l.join(" & "),(m=document.createElement("li")).classList.add("normal-cmd-item","cmd-item"),m.id=n,m.innerHTML=`\n<h6 class="normal-cmd cmd">\n_${n}${t.length>0?t:""}\n</h6>\n<div class="normal-cmd-data cmd-data">\n${null!=r.alias?`<span class="normal-cmd-aliases cmd-aliases"><b>Alias:</b> ${s}</span>`:""}\n${c.length>0?`<span class="normal-cmd-opt-types cmd-opt-types">${c}</span>`:""}\n${d.length>0?`<span class="normal-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${d}`:l.length>0?"":"</span>"}\n${l.length>0?d.length>0?`<br/><b><span style="color: red;">Verbotene</span> Channels:</b> ${l}</span>`:`<span class="event-cmd-channels cmd-channels"><b><span style="color: red;">Verbotene</span> Channels:</b> ${l}</span>`:""}\n${0==l.length&&0==d.length?'<span class="normal-cmd-channels cmd-channels"><b>Alle Channels erlaubt</b></span>':""}\n</div>\n<span class="normal-cmd-descr cmd-descr">${r.description}</span>`,document.getElementById("normal-cmd-list").appendChild(m),(m=document.createElement("li")).classList.add("content-list-item"),m.addEventListener("click",()=>{window.location.href=`#${n}`}),m.innerHTML=`<a href="#${n}">${n}</a>`,document.getElementById("normal-list").appendChild(m)}for(var n in e.mod_cmd_data){for(t="",s="",c="",d=[],l=[],r=e.mod_cmd_data[n],i=0;i<r.parameters.length;i++)for(t+=((a=r.parameters[i].description)?`<span class="mod-param-descr param-descr" aria-label="${a}">`:"")+"."+((p=r.parameters[i]).required?"[":"(")+p.name.toUpperCase()+": "+`<a href="#param-type-${get_type(p.type)}">`+(get_type(p.type).charAt(0).toUpperCase()+get_type(p.type).slice(1))+"</a>"+(p.required?"]":")")+(a?"</span>":""),c+=p.option_types.length>0?`<b>Optionen <code class="mod-cmd-code">${p.name.toUpperCase()}</code>: </b>`:"",x=0;x<p.option_types.length;x++)c+=p.option_types[x].charAt(0).toUpperCase()+p.option_types[x].slice(1)+(x<p.option_types.length-1?" / ":i<r.parameters?"<br/>":"");for(var o in s=`<code class="mod-cmd-code">${r.alias}</code>`,r.channels)d.push(`<code class="mod-cmd-code"><a target="_blank" href="https://discord.com/channels/493472231691780117/${o}/">#${r.channels[o]}</a></code>`);for(var o in d=d.join(" & "),r.forbidden_channels)l.push(`<code class="mod-cmd-code"><a target="_blank" href="https://discord.com/channels/493472231691780117/${o}/">#${r.forbidden_channels[o]}</a></code>`);l=l.join(" & "),(m=document.createElement("li")).classList.add("mod-cmd-item","cmd-item"),m.id=n,m.innerHTML=`\n<h6 class="mod-cmd cmd">\n_${n}${t.length>0?t:""}\n</h6>\n<div class="mod-cmd-data cmd-data">\n${null!=r.alias?`<span class="mod-cmd-aliases cmd-aliases"><b>Alias:</b> ${s}</span>`:""}\n${c.length>0?`<span class="mod-cmd-opt-types cmd-opt-types">${c}</span>`:""}\n${d.length>0?`<span class="mod-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${d}`:l.length>0?"":"</span>"}\n${l.length>0?d.length>0?`<br/><b><span style="color: red;">Verbotene</span> Channels:</b> ${l}</span>`:`<span class="event-cmd-channels cmd-channels"><b><span style="color: red;">Verbotene</span> Channels:</b> ${l}</span>`:""}\n${0==l.length&&0==d.length?'<span class="mod-cmd-channels cmd-channels"><b>Alle Channels erlaubt</b></span>':""}\n</div>\n<span class="mod-cmd-descr cmd-descr">${r.description}</span>`,document.getElementById("mod-cmd-list").appendChild(m),(m=document.createElement("li")).classList.add("content-list-item"),m.addEventListener("click",()=>{window.location.href=`#${n}`}),m.innerHTML=`<a href="#${n}">${n}</a>`,document.getElementById("mod-list").appendChild(m)}if(0===e.event_cmd_data.code)(m=document.createElement("li")).classList.add("event-cmd-item","cmd-item"),m.innerHTML=`<h6 class="event-cmd cmd">${e.event_cmd_data.message.format('<code class="event-cmd-code">'+e.event_cmd_data.replace["733662705096982568"]+"</code>")}</h6>`,document.getElementById("event-cmd-list").appendChild(m);else for(var n in e.event_cmd_data){for(t="",s="",c="",d=[],l=[],r=e.event_cmd_data[n],i=0;i<r.parameters.length;i++){var p;for(t+=((a=r.parameters[i].description)?`<span class="event-param-descr param-descr" aria-label="${a}">`:"")+"."+((p=r.parameters[i]).required?"[":"(")+p.name.toUpperCase()+": "+`<a href="#param-type-${get_type(p.type)}">`+(get_type(p.type).charAt(0).toUpperCase()+get_type(p.type).slice(1))+"</a>"+(p.required?"]":")")+(a?"</span>":""),c+=p.option_types.length>0?`<b>Optionen <code class="event-cmd-code">${p.name.toUpperCase()}</code>: </b>`:"",x=0;x<p.option_types.length;x++)c+=p.option_types[x].charAt(0).toUpperCase()+p.option_types[x].slice(1)+(x<p.option_types.length-1?" / ":i<r.parameters?"<br/>":"")}for(var o in s=`<code class="event-cmd-code">${r.alias}</code>`,r.channels)d.push(`<code class="event-cmd-code"><a target="_blank" href="https://discord.com/channels/493472231691780117/${o}/">#${r.channels[o]}</a></code>`);for(var o in d=d.join(" & "),r.forbidden_channels)l.push(`<code class="event-cmd-code"><a target="_blank" href="https://discord.com/channels/493472231691780117/${o}/">#${r.forbidden_channels[o]}</a></code>`);l=l.join(" & "),(m=document.createElement("li")).classList.add("event-cmd-item","cmd-item"),m.id=n,m.innerHTML=`\n<h6 class="event-cmd cmd">\n_${n}${t.length>0?t:""}\n</h6>\n<div class="event-cmd-data cmd-data">\n${null!=r.alias?`<span class="event-cmd-aliases cmd-aliases"><b>Alias:</b> ${s}</span>`:""}\n${c.length>0?`<span class="event-cmd-opt-types cmd-opt-types">${c}</span>`:""}\n${d.length>0?`<span class="event-cmd-channels cmd-channels"><b>Erlaubte Channels:</b> ${d}`:l.length>0?"":"</span>"}\n${l.length>0?d.length>0?`<br/><b><span style="color: red;">Verbotene</span> Channels:</b> ${l}</span>`:`<span class="event-cmd-channels cmd-channels"><b><span style="color: red;">Verbotene</span> Channels:</b> ${l}</span>`:""}\n${0==l.length&&0==d.length?'<span class="event-cmd-channels cmd-channels"><b>Alle Channels erlaubt</b></span>':""}\n</div>\n<span class="event-cmd-descr cmd-descr">${r.description}</span>`,document.getElementById("event-cmd-list").appendChild(m),(m=document.createElement("li")).classList.add("content-list-item"),m.innerHTML=`<a href="#${n}">${n}</a>`,document.getElementById("event-list").appendChild(m)}for(var n in e.param_type_data){var m;(m=document.createElement("li")).classList.add("param-type-item","cmd-item"),m.id="param-type-"+n,m.innerHTML=`\n<h6 class="param-type cmd">\n${n}\n</h6>\n<span class="param-type-descr cmd-descr">${e.param_type_data[n]}</span>`,document.getElementById("param-type-list").appendChild(m),(m=document.createElement("li")).classList.add("content-list-item"),m.innerHTML=`<a href="#param-type-${n}">`+n.charAt(0).toUpperCase()+n.slice(1)+"</a>",document.getElementById("type-list").appendChild(m)}}function get_type(e){switch(e){case 1:return"sub_command";case 2:return"sub_command_group";case 3:return"string";case 3.1:return"text";case 3.2:return"wörter";case 3.3:return"option";case 4:return"zahl";case 5:return"boolean";case 6:return"user";case 7:return"channel";case 8:return"rolle";case 9:return"mentionable";case 10:return"kommazahl";default:return}}console.log("^ Du kannst das hier ignorieren, das bedeutet nur dass deine Daten nicht an Google gesendet werden (glaube ich 😅)"),console.log("(Wenn da nichts ist, dann ignorier die Logs hier einfach auch)");String.prototype.format=function(){var e=arguments;return this.replace(/{(\d+)}/g,(n,a)=>void 0!==e[a]?e[a]:n)};var request=new XMLHttpRequest;request.open("GET","https://raw.githubusercontent.com/FlexGamesGitHub/FlexBot/main/WS/cd.json",!1),request.send(null),200===request.status&&add_content(JSON.parse(request.responseText)),document.getElementById("copyright").innerHTML+=(new Date).getFullYear();