$(function(){
	var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	var slider = new Slider({
		body : $('.main_container'),
		element : [
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider01.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider02.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider03.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider04.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider05.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider06.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider07.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider08.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider09.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider10.jpg',
			'/wp-content/themes/worthiness-clothing/assets/img/index/bg-slider11.jpg',
		]
	});
	var menu = new HamburgerMenu({
		body : $('.hamburger_menu')
	});
	
	slider.init();
	
	
	$(document).on(mousewheelevent,function(e){
		e.preventDefault();
		var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
		menu.openMenu();
	});
	$(document).on('touchmove',function(e){
		e.preventDefault();
		var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
		menu.openMenu();
	});
	
});

function Slider(option){
	var o = option;
	this.body = o.body;
	this.element = o.element;
	this.length = o.element.length;
	this.body.after('<div class="slider_box"></div>');
	this.target = $('.slider_box');
	
	for(var i = 0; i < this.element.length; i++){
		this.target.append('<img src="'+ this.element[i] +'">');
	}
	
	this.target.find('img').fadeOut(0);
	this.target.find('img').eq(0).fadeIn(0);
}
Slider.prototype = new Main();
Slider.prototype.init = function(){
	var counter = 1;
	var timer
	var _this = this;
	
	timer = setInterval(function(){
		_this.target.find('img').fadeOut(6000);
		_this.target.find('img').eq(counter).fadeIn(5000);
		counter++;
		if(counter >= _this.length){
			counter = 0;
		}
	},7000);
}
