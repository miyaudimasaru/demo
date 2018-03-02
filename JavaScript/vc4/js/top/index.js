(function() {
  function opanHeader() {
    var menuBtn = document.getElementById("menuBtn");
    var menuTarget = menuBtn.querySelector(".menu");
    var opan = document.getElementById("opan");
    var close = opan.querySelector(".close");
    $(opan).addClass("slideUp");

    menuTarget.addEventListener('click', function() {
      if ($(opan).hasClass("slideUp")) {
        $(opan).removeClass("slideUp");
        $(opan).addClass("slideDown");
      }
    }, false);

    close.addEventListener('click', function() {
      if ($(opan).hasClass("slideDown")) {
        $(opan).removeClass("slideDown");
        $(opan).addClass("slideUp");
      }
    }, false);
  }
  opanHeader();

  var firstMovie = function() {
    if ($.cookie('bnrRead') != 'on') {
      $('#modalMovie').html('<p><iframe class="video" id="popup-YouTube-player" src="https://www.youtube.com/embed/Xkiwv2bk1ts?rel=0&amp;controls=0&amp;showinfo=0&enablejsapi=1" frameborder="0" allowfullscreen></iframe></p><div class="cookie"><p id="close" class="close"></p><p>次回から動画を表示しない</p></div><p id="movieClose" class="isHover"><img src="public/img/top/movieClose.png" alt=""></p>');
    } else {
      $('.modalMovie-o').hide();
      loadFirst();
      load();
    }
    $('#movieClose').click(function() {
      videoControl("stopVideo");
      $('.modalMovie-o').hide();
      loadFirst();
      load();
    });
    $('#close').click(function() {
      $(this).toggleClass("check");
      if ($(this).hasClass("check")) {
        $.cookie('bnrRead', 'on', {expires: 180,path:'/'});
      } else {
        $.removeCookie('bnrRead');
      }
    });
  }
  firstMovie();

  function videoControl(action) {
    var $playerWindow = $('#popup-YouTube-player')[0].contentWindow;
    $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
  }

  var name = document.getElementById("slider");
  var sliderBullets = document.getElementsByClassName("sliderBullets")[0];
  var rightBox = document.getElementsByClassName("rightBox")[0];
  var targetLeft = sliderBullets.getElementsByTagName("span")[0];
  var targetRight = sliderBullets.getElementsByTagName("span")[1];
  var target = document.getElementById("target");
  var taegetPrev = document.getElementById("prev");
  var taegetNext = document.getElementById("next");
  var a_classChange = target.getElementsByTagName("a")[0];

  function rightClick_sp() {
    var imgChange01 = rightBox.getElementsByTagName("p")[1];
    var imgChange02 = rightBox.getElementsByTagName("p")[0];
    $(imgChange01).fadeIn();
    $(imgChange02).fadeOut();
    $(targetRight).addClass("bg-active");
    $(targetLeft).removeClass("bg-active");
  }
  function leftClick_sp() {
    var imgChange01 = rightBox.getElementsByTagName("p")[0];
    var imgChange02 = rightBox.getElementsByTagName("p")[1];
    $(imgChange01).fadeIn();
    $(imgChange02).fadeOut();
    $(targetLeft).addClass("bg-active");
    $(targetRight).removeClass("bg-active");
  }
  function rightClick() {
    var imgChange01 = target.getElementsByTagName("p")[1];
    var imgChange02 = target.getElementsByTagName("p")[0];
    $(imgChange01).fadeIn();
    $(imgChange02).fadeOut();
    $(targetRight).addClass("bg-active");
    $(targetLeft).removeClass("bg-active");
  }
  function leftClick() {
    var imgChange01 = target.getElementsByTagName("p")[0];
    var imgChange02 = target.getElementsByTagName("p")[1];
    $(imgChange01).fadeIn();
    $(imgChange02).fadeOut();
    $(targetLeft).addClass("bg-active");
    $(targetRight).removeClass("bg-active");
  }

  taegetPrev.addEventListener("click", function() {
    if ($(window).width() <= 1024) {
      leftClick_sp();
    }
    leftClick();
  }, false);

  taegetNext.addEventListener("click", function() {
    if ($(window).width() <= 1024) {
      rightClick_sp();
    }
    rightClick();
  }, false);

  targetLeft.addEventListener("click", function() {
    leftClick();
  }, false);

  targetRight.addEventListener("click", function() {
    rightClick();
  }, false);

  var leftTime = 10000;
  var rightTime = 5000;
  var totalTime = 10000;
  var loadFirstTime = 0;

  function load() {
    setTimeout(function() {
      load();
      changePic01(5000);
      changePic02(10000);
    }, totalTime);
  };

  function loadFirst() {
    setTimeout(function() {
      changePic02(5000);
    }, loadFirstTime);
  };


  function changePic01(leftTime) {
    setTimeout(function() {
      if ($(window).width() <= 1024) {
        leftClick_sp();
      }
      leftClick();
    }, leftTime);
  };
  function changePic02(rightTime) {
    setTimeout(function() {
      if ($(window).width() <= 1024) {
        rightClick_sp();
      }
      rightClick();
    }, rightTime);
  };
})();
