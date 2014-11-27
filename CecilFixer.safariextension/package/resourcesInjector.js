function loadInternal(tag, name){
	var tag = document.createElement(tag);
	tag.src = chrome.extension.getURL(name);
	return tag;
}


$('head').prepend(loadInternal('script', 'jquery-1.7.2.min.js'));
$('head').prepend(loadInternal('script', 'resourcesFixer.js'));