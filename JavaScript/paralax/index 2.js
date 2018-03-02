(function(){

var $ = jQuery;

var element = {
  Contai: document.getElementById("container"),
  section_w: document.getElementById("section-wrapper"),
  a_Top: document.getElementById('areaTop'),
  a_01: document.getElementById('area01'),
  a_02: document.getElementById('area02'),
  a_03: document.getElementById('area03'),
  footer: document.getElementById('footer'),
}

var resize = function(){
  x = element.a_01.clientHeight || element.a_01.innerHeight;
  element.a_01.style.marginTop = x + "px";
  element.a_02.style.marginTop = x * 2 + "px";
  element.a_03.style.marginTop = x * 3 + "px";
}

$(window).on("load resize",function(){
  resize();
});

var value = function(){
 // 垂直スクロール量を取得する
 scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
 // 表示領域の高さを取得する
 clientHeight = document.body.clientHeight || document.documentElement.clientHeight || window.innerHeight;
 // スクロールバーで隠れた領域を含むコンテンツ領域の高さを取得する
 scrollHeight = document.body.scrollHeight || document.docomentElement.scrollHeight;
 // Firefox・Chrome対応
 if(scrollHeight === clientHeight) {
   clientHeight = window.innerHeight;
 }

 remain = scrollHeight - clientHeight - scrollTop; // コンテンツ領域の底までの残り領域

 if(scrollTop <= 0){
   $(element.a_Top).removeClass("fixed");
   $(element.a_01).removeClass("fixed");
   $(element.a_02).removeClass("fixed");
 }

}


var selecter = element.section_w.querySelectorAll('.parallax');
var selecter_arr = Array.prototype.slice.call(selecter);
var playDown = function(){
  value();

selecter_arr.forEach(function(v,i,a){

  if(scrollTop >= a[0].offsetTop){
      $(element.a_Top).addClass("fixed");
    }
  if(scrollTop >= a[1].offsetTop){
      $(element.a_01).addClass("fixed");
    }
  if(scrollTop >= a[2].offsetTop){
      $(element.a_02).addClass("fixed");
    }
  if(scrollTop >= a[3].offsetTop){
    element.footer.style.opacity = "1";
  } else {
    element.footer.style.opacity = "0";
  }
});
}

var playUp = function(){

selecter_arr.forEach(function(v,i,a){
  if(scrollTop >= a[1].clientHeight + a[2].clientHeight || a[1].innerHeight + a[2].innerHeight){
    $(element.a_02).removeClass("fixed");
  }
  if(scrollTop >= a[1].clientHeight || a[1].innerHeight){
    $(element.a_01).removeClass("fixed");
  }

});

}

value();

var animeFade = function(){
    $(".areabgBox img:nth-of-type(1)").removeClass("fade");
    $(".areabgBox img:nth-of-type(2)").addClass("fade");
  setTimeout(function(){
    $(".areabgBox img:nth-of-type(2)").removeClass("fade");
    $(".areabgBox img:nth-of-type(1)").addClass("fade");
  },4000);
}

var parallax = function(){
  value();

  if(remain > 0){
    window.addEventListener("scroll",function(){
      playDown();
      setInterval(animeFade,8000);
    },false);
  }
}
window.addEventListener("scroll",playUp,false);

parallax();

})();
