(function(){

//
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
		var spPega = 'index_sp.html';
		location.href = spPega;
		}

//acco
var slide = {

  get : document.getElementById("efrAreaTitleClick"),
  live : document.getElementById("liveTitleClick"),
  reading : document.getElementById("readingAreaTitle"),

  play : function(){

    addClassB = slide.get.classList;
    addClassD = slide.live.classList;
    addClassF = slide.reading.classList;

    function clickEvent(){
			var _clientH;
			var _toggleMenu = document.getElementById("efrAreaTextSlide");
			_toggleMenu.style.height = 'auto';
			_clientH = _toggleMenu.clientHeight;
			_toggleMenu.style.height = '0px';
			slide.get.addEventListener("click",function(){
				var _toggleMenu = document.getElementById("efrAreaTextSlide");
				$('#efrAreaTitleClick').toggleClass("rotate");
				lastH = _toggleMenu.style.height;
				_toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';
			},false);
    }
    function clickEventlive(){
			var _clientH;
			var _toggleMenu = document.getElementById("liveTextSlide");
			_toggleMenu.style.height = 'auto';
			_clientH = _toggleMenu.clientHeight;
			_toggleMenu.style.height = '0px';
			slide.live.addEventListener("click",function(){
				var _toggleMenu = document.getElementById("liveTextSlide");
				$('#liveTitleClick').toggleClass("rotate");
				lastH = _toggleMenu.style.height;
				_toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';
			},false);
    }
    function clickEventreading(){
			var _clientH;
			var _toggleMenu = document.getElementById("reading");
			_toggleMenu.style.height = 'auto';
			_clientH = _toggleMenu.clientHeight;
			_toggleMenu.style.height = '0px';
			slide.reading.addEventListener("click",function(){
				var _toggleMenu = document.getElementById("reading");
				$('#readingAreaTitle').toggleClass("rotate");
				lastH = _toggleMenu.style.height;
				_toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';
			},false);
    }
		clickEvent();
  	clickEventlive();
	  clickEventreading();
  },
}
slide.play();

//mainKV girlAnimation
var girlEvent = function(){
  girl = document.getElementById('girl');
  targetId = girl.classList;
  $('#girl').addClass("scrollEvent");
}
girlEvent();
//bgThreaten
var bgThreaten = function(){
    get = document.getElementById('jsAnimation');
    getSlector1 = get.querySelector(".bgnagareruLeft.bgnagareruRight");
    Add = getSlector1.classList;
    $('.bgnagareruLeft.bgnagareruRight').addClass("buruburu");
}
bgThreaten();

//pallax
var pallax = function(){
  getSlectorPallax = getSlector.querySelector(".pallax");
  getSlectorPallax.style.opacity = "1";
};

var mainId = document.getElementById('jsAnimation');

var introductionArea = function(){
    getSlector = mainId.querySelector('.introductionArea');
    pallax();
    Add = getSlector.classList;
    $('.introductionArea').addClass("animeintoro");
  };

var tweetArea = function(){
    getSlector = document.getElementById("tweetArea");
    pallax();
		Add = getSlector.classList;
		$('#tweetArea').addClass("animeTweet");
  };

var liveArea = function(){
  getSlector = document.getElementById("liveArea");
  pallax();
  Add = getSlector.classList;
  $('#liveArea').addClass("animeliveArea");
};

var StoryTellerArea = function(){
    getSlector = document.getElementById("sectionStoryTeller");
    pallax();
    Add = getSlector.classList;
    $('#sectionStoryTeller').addClass("animeStoryTeller");
  };

var sectionMovie = function(){
    getSlector = document.getElementById("sectionMovie");
    pallax();
    Add = getSlector.classList;
    $('#sectionMovie').addClass("animesMovie");
  };

//pallaxAnime Timing
var pallaxAnime = function(){
  var num = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if(num > 570){
      introductionArea();
    }
    if(num > 1000){
      tweetArea();
    }
    if(num > 1532){
      liveArea();
    }
    if(num > 2200){
      StoryTellerArea();
    }
    if(num > 3550){
      sectionMovie();
    }
};

	window.addEventListener("scroll",pallaxAnime,false);

//mainKV
	var hoverEvent = function(){
		var Id = document.getElementById("StoryMoviebox");
		var getSelector = Id.querySelectorAll(".moviearea a");
		for (var i = 0; i < getSelector.length; i++) {
			getSelector[i].addEventListener("mouseover", function(){
					var image = this.querySelector('img');
					var h = image.classList;
					$(this).find('img').addClass("filterOut");
					var target = this.classList;
					$(this).addClass("hoverE");
			});
			getSelector[i].addEventListener("mouseout", function(){
					var image = this.querySelector('img');
					var h = image.classList;
					$(this).find('img').removeClass("filterOut");
					var target = this.classList;
					$(this).removeClass("hoverE");
			});
		}
	}
	hoverEvent();

})();


window.onload = function () {
	var timeOutOkada = function(){
	  Id = document.getElementById("sectionMainArea");
		var okada = Id.querySelector('.okada');
		var AddOkada = okada.classList;
		$('#sectionMainArea .okada').addClass("slideUp");
	}

	var timeOutSugihara = function(){
	  Id = document.getElementById("sectionMainArea");
		var sugihara = Id.querySelector('.sugihara');
		var AddSugihara = sugihara.classList;
		$('#sectionMainArea .sugihara').addClass("slideUp");
	}

	var timeOutTopTitle = function(){
	  Id = document.getElementById("sectionMainArea");
		var topTitle = Id.querySelector('.topBox p:first-child');
		var AddtopTitle = topTitle.classList;
		$('#sectionMainArea .topBox p').eq(0).addClass("slideDown");
	}

	timeOutOkada();
	setTimeout(timeOutSugihara,500);
	setTimeout(timeOutTopTitle,1000);

};
//hover
//jQuery↓�?��?��?��?��?��?��??
$(function(){
	$('.go_movie a[href^="#"]').click(function(){
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 80;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
		$('.navi a[href^="#"]').click(function(){
	      var speed = 800;
	      var href= $(this).attr("href");
	      var target = $(href == "#" || href == "" ? 'html' : href);
	      var position = target.offset().top - 80;
	      $("html, body").animate({scrollTop:position}, speed, "swing");
	      return false;
	    });

		var topBtn = $('#scrollTop');
	     topBtn.hide();
	     //スクロールが100に達したらボタン表示
	     $(window).scroll(function () {
	         if ($(this).scrollTop() > 100) {
	             topBtn.fadeIn();
							 if($(this).scrollTop() > 5300) {
								 topBtn.addClass("change");
							 } else {
								 topBtn.removeClass("change");
							 }
	         } else {
	             topBtn.fadeOut();
	         }
	     });
	     //スクロールしてトップ
	     topBtn.click(function () {
	         $('body,html').animate({
	             scrollTop: 0
	         }, 500);
	         return false;
	     });

});
