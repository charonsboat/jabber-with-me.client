;(function (window, document, undefined)
{ 'use strict';

	var helloText1 = 'Hello, World 1!', 
		helloText2 = 'Hello, World 2!';

	var hello1 = function ()
	{
		var html = window.JST['app/templates/hello.us']({text: helloText1});
		
		document.body.innerHTML += html;
	};

	var hello2 = function ()
	{
		var html = window.JST['app/templates/hello2.us']({text: helloText2});

		document.body.innerHTML += html;
	};

	var testMessage1 = function ()
	{
		var html = window.JST['app/templates/message.us']({
			avatar: {
				source: 'http://placehold.it/100x100'
			},
			owner: 'self',
			text: 'This is a test message.'
		});

		document.getElementById('test-chat').querySelector('.conversation').innerHTML += html;
	};

	var testMessage2 = function ()
	{
		var html = window.JST['app/templates/message.us']({
			avatar: {
				source: 'http://placehold.it/100x100'
			},
			owner: 'other',
			text: 'This is another test message.'
		});

		document.getElementById('test-chat').querySelector('.conversation').innerHTML += html;
	};

	var init = function ()
	{
		hello1();
		hello2();
		testMessage1();
		testMessage2();
	};

	if (window.addEventListener)
	{
		window.addEventListener('DOMContentLoaded', init, false);
	}
	else
	{
		window.attachEvent('onload', init);
	}
})(window, document);