$(function(){

	"use strict";

	// When the user scrolls down 100px from the top of the document, header will be fixed
	window.onscroll = function() {scrollFunction();};
	var navigation = document.getElementById("navigation");
	function scrollFunction() {
	    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
	        navigation.classList.add("fixed-top");
	    } else {
			navigation.classList.remove("fixed-top");
	    }
	}

	// Backstretch Slider
	$.backstretch([
		"assets/images/slider/banner-kickboxing-1.jpg",
		"assets/images/slider/Inferno-Martial-Arts.jpg",
		"assets/images/slider/Inferno-Martial-Arts_Header-Banner.jpg"
	], {duration: 3800, fade: 1500});


});