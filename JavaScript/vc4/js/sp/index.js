(function(){

  var langageList = document.getElementById('langageList');
  var langElement = langageList.querySelectorAll('li');

  var path = location.pathname.split("/");
  var Add = path[2];

  var play = function(){
    i = "";
    for(var i = 0;i < langElement.length; i++){
      elementsClass = langElement[i].getAttribute('class');
      element = langElement[i];

      if(Add === elementsClass){
        text = element.textContent;
        mainTitle.innerHTML = "<p class='" + elementsClass + "'>" + text +"</p>";
        mainTitle.appendChild(element);
      }
    }
    mainTitle.removeChild(mainTitle.lastChild);
  }
  play();

  var clickEvent = function(){
  	var _clientH;
    var clickTarget = document.getElementById('mainTitle');
  	var _toggleMenu = document.getElementById("langageList");

  	_toggleMenu.style.height = 'auto';
  	_clientH = _toggleMenu.clientHeight;
  	_toggleMenu.style.height = '0px';

  	clickTarget.addEventListener("click",function(){
  		var _toggleMenu = document.getElementById("langageList");
      var chi = this.children;
  		$(chi).toggleClass("rotate");
  		lastH = _toggleMenu.style.height;
  		_toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';
  	},false);

  }
  clickEvent();

  //anime

    var playAnime = function(){

      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      num = 2;
      mainBg = document.getElementById('mainBg');
      clientH = mainBg.clientHeight;

      mainContents = document.getElementById('mainContents');
      pallax = mainContents.querySelectorAll('.pallax');
      selects = Array.prototype.slice.call(pallax);

      selects.forEach(function (v,i,a){
        if(scrollTop >= clientH / num){
          $(a[0]).addClass("opacityUp");
        }
        if(scrollTop >= clientH + a[0].clientHeight / num|| a[0].innerHeight / num){
          $(a[1]).addClass("opacityUp");
        }
        if(scrollTop >= clientH + a[0].clientHeight + a[1].clientHeight / num || clientH + a[0].innerHeight + a[1].innerHeight / num){
          $(a[2]).addClass("opacityUp");
        }
        if(scrollTop >= clientH + a[0].clientHeight + a[1].clientHeight + a[2].clientHeight / num || clientH + a[0].innerHeight + a[1].innerHeight + a[2].innerHeight / num){
          $(a[3]).addClass("opacityUp");
        }
        if(scrollTop >= clientH + a[0].clientHeight + a[1].clientHeight + a[2].clientHeight + a[3].clientHeight / num || clientH + a[0].innerHeight + a[1].innerHeight + a[2].innerHeight + a[3].innerHeight / num){
          $(a[4]).addClass("opacityUp");
        }
      });
    }
    window.addEventListener("scroll",function(){
      playAnime();
    },false);

  var firstMovie = function(){
      if ($.cookie('bnrRead') != 'on') {
        $('#modalMovie').html('<p><iframe class="video" id="popup-YouTube-player" src="https://www.youtube.com/embed/FJZU-BgRUaI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p><div class="cookie"><p id="close" class="close"></p><p>次回から動画を表示しない</p></div><p id="movieClose" class="isHover"><img src="../../public/img/movieClose.png" alt=""></p>');
      } else {
        $('.modalMovie-o').hide();
        playAnime();
        getAjax();
      }
      $('#movieClose').click(function() {
        playAnime();
        getAjax();
        $('.modalMovie-o').hide();
        });
      $('#close').click(function(){
        $(this).toggleClass("check");
        if($(this).hasClass("check")){
          $.cookie('bnrRead', 'on');
        } else {
          $.removeCookie('bnrRead');
        }
      });
    }
firstMovie();

function videoControl(action){
    var $playerWindow = $('#popup-YouTube-player')[0].contentWindow;
    $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
  }


var arrNum = [];
var origin = 0;
var maxLength = 7;

function getAjax(){
  $.when(
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=FJZU-BgRUaI&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY'),
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=mkT00zOh2h4&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY'),
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=U5XObY9_M_c&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY'),
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=LGL5EzrHm_U&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY'),
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=9faGp5REbEc&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY'),
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=5D2g54EXDBE&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY'),
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=QTKjdfOyQAg&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY'),
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=bGTDcVf8CTk&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY'),
    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=58BxlgHSqoY&fields=items%2Fstatistics&key=AIzaSyBPxMpKavMDlmV3hjaZPSqy4jk8rO8ALVY')
  )
  .done(function(object_a,object_b,object_c,object_d,object_e,object_f,object_g,object_h,object_story) {
    count01 = object_a[0].items[0].statistics.viewCount;
    count02 = object_b[0].items[0].statistics.viewCount;
    count03 = object_c[0].items[0].statistics.viewCount;
    count04 = object_d[0].items[0].statistics.viewCount;
    count05 = object_e[0].items[0].statistics.viewCount;
    count06 = object_f[0].items[0].statistics.viewCount;
    count07 = object_g[0].items[0].statistics.viewCount;
    count08 = object_h[0].items[0].statistics.viewCount;
    count09 = object_story[0].items[0].statistics.viewCount;
    AddviewCount = parseInt(count01) + parseInt(count02) + parseInt(count03) + parseInt(count04) + parseInt(count05) + parseInt(count06) + parseInt(count07) + parseInt(count08) + parseInt(count09) - (100);
    stringNum = String(AddviewCount);
    arrNum = Array.prototype.slice.call(stringNum);
    origin = arrNum.length;

   for(var f = 0; f < maxLength-origin; f++){
     arrNum.unshift(0);
   }
    shuffle(arrNum);
  });
}

function shuffle(data){
  var listId = document.getElementById('conutNum');
  var li = listId.querySelectorAll('li');
  var liLength = li.length;
  var f;
  var target = [];
  var shuffleTimer = [];
  var value = maxLength;

    for(var f = maxLength-1; f >= 0; f--){
      target[f] = li[f].getElementsByTagName('img');
      function timer(x){
        shuffleTimer[f] = setInterval(function(){
          var j = Math.floor(Math.random()*(9))+1;
          $(x).attr("src", "../../public/img/" + j + ".png");
        },100);
      };timer(target[f]);

      var i = -f + liLength + 1;

      function stopTimer(x,y){
        setTimeout(function(){
          clearInterval(shuffleTimer[value]);
          $(target[value]).attr("src", "../../public/img/" + y[value] + ".png");
            value--;
          if(value == 0){
            setTimeout(function(){
            playAjax();
          },1000);
          }
        },300 + (i * 600));
      }
      stopTimer(shuffleTimer[f],data);
    }
}

var num = 0;
var playAjaxnum = 0;
var numMax = 100;

function playAjax(){
    conutNum = document.getElementById('conutNum');
    ul = conutNum.querySelector('ul');
    ul.innerHTML = "";

    var callback = function(object){

        fragment = document.createDocumentFragment();

        for(var i = 0; i < arrNum.length; i++){
          li = document.createElement("li");
          p = document.createElement("p");
          img = document.createElement("img");
          img.setAttribute("src", "../../public/img/" + arrNum[i] + ".png");
          img.className = "shuffle";
          li.appendChild(p);
          p.appendChild(img);
          fragment.appendChild(li);
        }
        ul.appendChild(fragment);
    }
      callback()
//1ずつ
function rand(){
  var min = 500;
  var max = 3000;
  var l = Math.floor( Math.random() * (max + 1 - min) ) + min;
  return l;
}

    var numchange = function(){
      if(playAjaxnum <= (numMax)){
          playAjaxnum++;
          numAdd = AddviewCount + playAjaxnum;
          stringNum = String(numAdd);
          arrNum = Array.prototype.slice.call(stringNum);
          xxx=arrNum.length;
         for(var f = 0; f < maxLength-xxx; f++){
           arrNum.unshift(0);
         }
        for(var i = maxLength-1; i >= 0; i--){
          target = conutNum.querySelectorAll('li')[i].getElementsByTagName('img');
          $(target).attr("src", "../../public/img/" + arrNum[i] + ".png");
        }
      }
    }
    var looplimed = 0;
    function originloop(){
      looplimed++;
      var randamNum = rand();
      numchange();
      if(looplimed < 100){
        setTimeout(function(){
          originloop();
        },randamNum);
      }
    }
  originloop();

};
})();
