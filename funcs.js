function explInsertText(e){return()=>{var t=document.getElementById("part-descr");if(document.getElementById("current-part-descr"))t.style.opacity="0",setTimeout(()=>{t.style.opacity="1"},250),setTimeout(()=>{t.innerHTML=getExplDescr(e,!1)},125);else{var n=document.createElement("div");n.innerHTML=`<span id="part-descr">${getExplDescr(e,!1)}</span>`,n.id="current-part-descr",document.getElementById("cmd-expl-descr").parentNode.insertBefore(n,document.getElementById("cmd-expl-descr"))}}}document.getElementById("d-l-s").setAttribute("aria-label","Light Mode"),document.getElementById("d-l-s").addEventListener("click",()=>{document.body.classList.contains("dark-mode")?(document.documentElement.classList.replace("dark-mode","light-mode"),document.getElementById("d-l-s").getElementsByTagName("path")[0].setAttribute("d","m275.4 500.7c-135 0-244.7-109.8-244.7-244.7 0-134.9 109.8-244.7 244.7-244.7 8.2 0 16.4.4 24.6 1.2 7.2.7 13.5 5.2 16.5 11.7s2.4 14.2-1.6 20.2c-23 33.8-35.2 73.3-35.2 114.2 0 105 78.7 192.2 183.2 202.6 7.2.7 13.5 5.2 16.5 11.7 3.1 6.5 2.4 14.2-1.6 20.2-45.8 67.4-121.4 107.6-202.4 107.6z"),document.getElementById("d-l-s").setAttribute("aria-label","Dark Mode")):(document.documentElement.classList.replace("light-mode","dark-mode"),document.getElementById("d-l-s").getElementsByTagName("path")[0].setAttribute("d","m256 501c-8.9 0-16.8-5.8-19.5-14.3-20.5-65.3-36.4-78.1-57.1-78.1-16.1 0-39.4 7.8-73.1 24.5-7.9 3.9-17.3 2.3-23.5-3.9-6.2-6.2-7.7-15.6-3.9-23.5 21.9-44.3 28.7-71.2 21.9-87-6.7-15.7-30-29-75.5-43.3-8.5-2.6-14.3-10.5-14.3-19.4 0-8.9 5.8-16.8 14.3-19.5 45.5-14.3 68.8-27.6 75.5-43.3 6.8-15.8 0-42.7-21.9-87-3.9-7.8-2.3-17.2 3.9-23.4 6.2-6.2 15.6-7.7 23.5-3.9 33.8 16.7 57 24.5 73.1 24.5 16.5 0 34.6-6 57.1-78.1 2.7-8.5 10.6-14.3 19.5-14.3 8.9 0 16.8 5.8 19.5 14.3 20.5 65.3 36.4 78.1 57.1 78.1 16.1 0 39.4-7.8 73.1-24.5 7.9-3.9 17.3-2.3 23.5 3.9 6.2 6.2 7.7 15.6 3.9 23.5-21.9 44.3-28.7 71.2-21.9 87 6.7 15.7 30 29 75.5 43.3 8.5 2.7 14.3 10.6 14.3 19.5 0 8.9-5.8 16.8-14.3 19.5-45.5 14.3-68.8 27.6-75.5 43.3-6.8 15.8 0 42.7 21.9 87 3.9 7.8 2.3 17.3-3.9 23.5-6.2 6.2-15.6 7.8-23.5 3.9-33.8-16.7-57-24.5-73.1-24.5-16.5 0-34.6 6-57.1 78.1-2.7 8.3-10.6 14.1-19.5 14.1z"),document.getElementById("d-l-s").setAttribute("aria-label","Light Mode"))}),window.onload=function(){try{document.getElementById(window.location.hash.slice(1)).scrollIntoView({block:"start",behavior:"smooth"})}catch(e){}},document.getElementById("cmd-expl-prefix").addEventListener("click",explInsertText("prefix")),document.getElementById("cmd-expl-name").addEventListener("click",explInsertText("name")),document.getElementById("cmd-expl-param1").addEventListener("click",explInsertText("param1")),document.getElementById("cmd-expl-param2").addEventListener("click",explInsertText("param2")),document.getElementById("cmd-expl-prefix").setAttribute("aria-label",getExplDescr("prefix",!0)),document.getElementById("cmd-expl-name").setAttribute("aria-label",getExplDescr("name",!0)),document.getElementById("cmd-expl-param1").setAttribute("aria-label",getExplDescr("param1",!0)),document.getElementById("cmd-expl-param2").setAttribute("aria-label",getExplDescr("param2",!0));var menu=document.getElementById("content-list"),menu_b=document.getElementById("mobile-menu");document.getElementById("mobile-menu").addEventListener("click",trigger_menu);var s,l,list_items=document.getElementById("content-list-list").getElementsByTagName("a");for(i=0;i<list_items.length;i++)list_items[i].addEventListener("click",trigger_menu);function trigger_menu(){menu.classList.contains("opened")?(menu.classList.remove("opened"),menu_b.classList.remove("opened")):(menu.classList.add("opened"),menu_b.classList.add("opened"))}function getExplDescr(e,t){if(t)switch(e){case"prefix":return"Der einzigartige Prefix";case"name":return"Der im Bot einzigartige Name";case"param1":return"1. Erforderlicher Parameter, nimmt Wörter an";case"param2":return"2. Optionaler Parameter, nimmt eines von Optionen an"}switch(e){case"prefix":return"Das ist der Prefix der vor jedem Command steht (dieser ist einzigartig unter allen Bots)";case"name":return"Das ist der Command Name der für diesen Bot einzigartig ist. Durch ihn wird bestimmt welcher Command ausgeführt wird";case"param1":return'Das ist der 1. Parameter. Er ist erforderlich was du an den <code class="cmd-expl-code">[]</code> erkennen kannst (die Klammern musst du wenn du den Command eingibst natürlich weglassen).<br/>Betitelt ist er mit "Name" und nimmt nur den Typ <a href="#param-type-wörter">Wörter</a> an';case"param2":return'Das ist der 2. Parameter. Er ist optional was du an den <code class="cmd-expl-code">()</code> erkennen kannst (die Klammern musst du wenn du den Command eingibst natürlich weglassen).<br/>Betitelt ist er mit "Typ" und nimmt nur den Typ <a href="#param-type-option">Option</a> an. <br/>Bei dem Typ Option ist unter dem Command angegeben welche Optionen akzeptiert werden (<a href="#discord-together">Gutes Beispiel</a> :) )'}}for(var i=0;i<(s=document.getElementsByClassName("param-descr")).length;i++)s[i].addEventListener("click",e=>{openModal("Beschreibung von "+e.currentTarget.innerText,e.currentTarget.getAttribute("aria-label"),"modal-param-descr")});function openModal(e,t,n){(l=document.createElement("div")).id=n,l.classList.add("modal"),l.innerHTML=`<div id="modal-boundary"><h4 id="modal-title">${e}</code></h4><button id="modal-close" role="button">×</button><div class="divider"></div><span id="modal-content">${t}</span></div>`,l.getElementsByTagName("button")[0].addEventListener("click",()=>{document.getElementById("modals").classList.add("closing"),setTimeout(()=>{document.getElementById("modals").removeChild(l),document.getElementById("modals").classList.remove("closing","opened")},125)}),document.getElementById("modals").appendChild(l),document.getElementById("modals").classList.add("opening"),setTimeout(()=>{document.getElementById("modals").classList.replace("opening","opened")},1),document.getElementById("modals").addEventListener("click",e=>{var t=e.target;do{if(t==l)return;t=t.parentNode}while(t);document.getElementById("modals").classList.add("closing"),setTimeout(()=>{try{document.getElementById("modals").removeChild(l)}catch(e){}document.getElementById("modals").classList.remove("closing","opened")},125)})}fetch("https://raw.githubusercontent.com/FlexGamesGitHub/FlexBot/gh-pages/status.json").then(e=>e.json()).then(e=>{e.update&&!e.faults?openModal("Update im Gange",'Aktuell wird die Website im Hintergrund weiterentwickelt für neue und bessere Funktionalität.<br/>\n\t\t\tSolltest du also einen Fehler oder Bug finden oder einen Verbesserungsvorschlag haben, bitte schaue dich erstmal auf GitHub um oder \n\t\t\tschreibe FileX direkt an<br/><br/>\n\t\t\t<a target="_blank" href="https://github.com/FlexGamesGitHub/FlexBot/issues">GitHub Issues</a><br/>\n\t\t\t<a target="_blank" href="https://discord.com/channels/@me/738695430140985365">FileX schreiben</a>',"modal-update"):!e.update&&e.faults?openModal("Fehler der Website",'Es ist bekannt, dass aktuell Fehler auftreten. Es wird sich bald mit einem Update darum gekümmert.<br/>\n\t\t\tSolltest du dennoch einen Fehler melden wollen, schau dich erstmal auf GitHub um oder schreibe FileX direkt an<br/><br/>\n\t\t\t<a target="_blank" href="https://github.com/FlexGamesGitHub/FlexBot/issues">GitHub Issues</a><br/>\n\t\t\t<a target="_blank" href="https://discord.com/channels/@me/738695430140985365">FileX schreiben</a>',"modal-faults"):e.update&&e.faults&&openModal("Update zur Fehlerbehebung",'Es wird aktuell schon an einem Update gearbeitet um die bestehenden Fehler zu fixen.<br/>\n\t\t\tSolltest du noch einen Fehler melden wollen, schau dich mal auf GitHub um oder schreibe FileX direkt<br/><br/>\n\t\t\t<a target="_blank" href="https://github.com/FlexGamesGitHub/FlexBot/issues">GitHub Issues</a><br/>\n\t\t\t<a target="_blank" href="https://discord.com/channels/@me/738695430140985365">FileX schreiben</a>',"modal-faults-fix")});