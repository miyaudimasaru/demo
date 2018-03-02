// JavaScript Document
$(function(){
	var menu = new HamburgerMenu({
		body : $('.hamburger_menu')
	});
	var responsive = new Responsive();
	var $replace = $(".js-replace");
	
	$(window).on("load resize",function(){
		var r = responsive;
		r.w = r.win.innerWidth;
		r.h = r.win.height;
		r.deviceCheck();
		
		if((r.w <= r.breakpoint.SP) && (r.flag === false)){
				r.flag = true;
				r.responsiveReprese($replace,"src",/img\/(.*)\//,/img\/$1\/sp/);
		}else if((r.w > r.breakpoint.SP) && (r.flag === true)){
				r.flag = false;
				r.responsiveReprese($replace,"src","assets/img/sp/","assets/img/");
		}
	});
	
	menu.body.find('.site_navigation ul').on('click',function(event){
		event.stopPropagation();
	});
});

function Main(){
	this.parent = $('body');
}
Main.prototype.getWindowSize = function(){
	this.w = $(window).width();
	this.h = $(window).height();
}


/*******************************
 HamburgerMenu
*******************************/
function HamburgerMenu(option){
	var o = option;
	this.body = o.body;
	this.flag = false;//メニューが閉じている状態かどうか
	
	this.body.before('<div class="hamburger_menu_trigger"><div class="inner_box"></div>');
	this.trigger = $('.hamburger_menu_trigger');
	
	this.trigger.on('click', {_this : this}, this.openCloseSwitch);
	this.body.on('click', {_this: this}, this.closeMenu);
}
HamburgerMenu.prototype = new Main();
HamburgerMenu.prototype.openCloseSwitch = function(e){
	var _this = e.data._this;
	
	if(_this.flag === false){
		_this.flag = true;
		_this.parent.addClass("hamburger_menu_open");
		
	}else if(_this.flag === true){
		_this.flag = false;
		_this.parent.removeClass("hamburger_menu_open");
	}
}
HamburgerMenu.prototype.openMenu = function(){
	if(this.flag === false){
		this.flag = true;
		this.parent.addClass("hamburger_menu_open");
	}
}
HamburgerMenu.prototype.closeMenu = function(e){
	var _this = e.data._this || this;
	
	if(_this.flag === true){
		_this.flag = false;
		_this.parent.removeClass("hamburger_menu_open");
	}
}



/*******************************
 archiveLinkList
*******************************/
function ArchiveLinkList(option){
	var o = option;
	this.body = o.body;
	this.list = this.body.find('.list li');
	this.body.find('.list').append('<span class="cursor"></span>');
	this.cursor = this.body.find('.cursor');
	this.list.on('mouseenter mouseleave click', {_this : this}, this.moveCursor);
	
	if(this.list.length > 1){ //archiveが1件しかないなら
		this.body.show(0);
	}
	this.default_position = this.getCursorPosition();
	this.cursor.css('top',this.default_position);
}
ArchiveLinkList.prototype = new Main();
ArchiveLinkList.prototype.moveCursor = function(e){
	var _this = e.data._this;
	var type = e.type;
	
	switch(type){
		case 'mouseenter' : 
			setCursorPosition.call($(this));
			break;
			
		case 'click' :
			setCursorPosition.call($(this));
			_this.list.removeClass('active');
			$(this).addClass('active');
			_this.default_position = _this.getCursorPosition();
			break;
		
		case 'mouseleave' :
			resetCursorPosition.call($(this));
			break;
		
		default :
		break;
	}
	
	function setCursorPosition(){
		var position = ($(this).position().top) + ($(this).height() / 2) - (_this.cursor.height() / 2);
		_this.cursor.css('top',position);
	}
	function resetCursorPosition(){
		var position = 0;
		_this.cursor.css('top',_this.default_position);
	}
}
ArchiveLinkList.prototype.getCursorPosition = function(){
	var obj = this.body.find('.list .active');
	var position = (obj.position().top) + (obj.height() / 2) - (this.cursor.height() / 2);
	return position;
}



/*******************************
 LoadMoreElement
*******************************/
function LoadMoreElement(option){
	var o = option;
	this.target = o.target;
	this.trigger = o.trigger;
	this.post_per_page = o.post_per_page;
	this.multiple = o.multiple || 1;
	this.active_counter = this.post_per_page;
	this.length = this.target.children().length;
	
	for(var i = this.post_per_page; i < this.length; i++){
		this.target.children().eq(i).fadeOut();
	}
	
	if(this.post_per_page >= this.length){
		this.trigger.closest('.more_btn').fadeOut(0);
	}
	
	this.trigger.on('click', {_this : this}, this.addElement);
	
}
LoadMoreElement.prototype = new Main();
LoadMoreElement.prototype.addElement = function(e){
	var _this = e.data._this;
	
	if(_this.active_counter < _this.length){
		
		for(var i = 0; i < _this.post_per_page; i++){
			_this.target.children().eq((_this.active_counter) + i).fadeIn();
		}
		
		_this.active_counter = _this.active_counter + _this.multiple;
	}
	
	if(_this.active_counter >= _this.length){
		_this.trigger.closest('.more_btn').fadeOut(0);
	}
	return false;
	
}



/*******************************
 	Responsive
 	*******************************/
function Responsive(){
	this.win = window;
	this.w = this.win.innerWidth;
	this.h = this.win.height;
	this.breakpoint = {
			PC : 960,
			SP : 640
	};
	this.device = this.deviceCheck();
	this.flag = false;
}
Responsive.prototype.deviceCheck = function(){
		if(this.w <= this.breakpoint.SP){
				this.device = "sp";
		}else{
				this.device = "PC";
		}
};
Responsive.prototype.responsiveReprese = function(o,a,p,r){
	var obj = o, attr = a, pattern = p, replacement = r;

	thisReplace(attr, pattern, replacement);

	function thisReplace(attr,pattern,replacement){
		for(var i = 0; i < obj.length; i++){
			$(obj[i]).attr(attr,$(obj[i]).attr(attr).replace(pattern,replacement));
		}
	}
};