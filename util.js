'use strict'

function load_href (obj, targetId) {
    fetch(obj.href, {mode: 'no-cors'})
    .then((response) => response.text())
    .then((html) => {
        document.getElementById(targetId).innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}
function load_html (html, targetId) {
    document.getElementById(targetId).innerHTML = html;
}
function switch_style_lang() {
	let link = document.getElementsByTagName('link')[0];
	if(link.href.endsWith('stylesRU.css')) 		link.href='stylesEN.css';
	else if(link.href.endsWith('stylesEN.css')) link.href='stylesRU.css';	
}
function set_style_lang() {
	let lang = window.navigator.language;
	let link = document.getElementsByTagName('link')[0];
	if(lang.endsWith('RU')) 		link.href='stylesRU.css';
	else if(lang.endsWith('EN'))	link.href='stylesEN.css';
}



