



$(document).ready(function(){

	function openHideMenu(){
		var menuOpener = $('#main-menu-opener');
		var mainMenu = $('#main-menu');

		mainMenu.toggleClass('menu-active');
		menuOpener.toggleClass('menu-active');
	}


	$('#main-menu-opener').click(openHideMenu);
});

