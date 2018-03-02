(function(){

  var btnOpan = document.getElementById('btnOpan');
  var BtnOpan = document.getElementById('_btnOpan');

  var clickEvent = function(){
    var _clientH;
    var _toggleMenu = document.getElementById("newsList");

    _toggleMenu.style.height = 'auto';
    _clientH = _toggleMenu.clientHeight;
    _toggleMenu.style.height = '0px';

    btnOpan.addEventListener("click",function(){
      var _toggleMenu = document.getElementById("newsList");
      var chi = this.children;
      $(chi).toggleClass("rotate");
      lastH = _toggleMenu.style.height;
      _toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';
    },false);

  }

  var clickEvent_sp = function(){
    var _clientH;
    var toggleMenu = document.getElementById("_newsList");

    toggleMenu.style.height = 'auto';
    _clientH = toggleMenu.clientHeight;
    toggleMenu.style.height = '0px';

    BtnOpan.addEventListener("click",function(){
      var toggleMenu = document.getElementById("_newsList");
      var _chi = this.children;
      lastH = toggleMenu.style.height;
      toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';
    },false);

  }

  var click_sp = function(){
    var close = document.getElementById("close");
    var newsBtn = document.getElementById("newsBtn");
    var newsArea = document.getElementById("newsArea");
    var newsAreaSlecter = newsArea.querySelector(".monthSelect");

    newsBtn.addEventListener("click", function(){
      $(newsAreaSlecter).addClass("monthSelect_transX");
    },false);
    close.addEventListener("click", function(){
      $(newsAreaSlecter).removeClass("monthSelect_transX");
    },false);
  }

  clickEvent();
  function ScriptNav(){
    $(window).resize(function() {
    if ($(window).width() <= 1024) {
      clickEvent_sp();
      click_sp();
    }
  });
  $(window).resize();
  }
  ScriptNav();

})();
