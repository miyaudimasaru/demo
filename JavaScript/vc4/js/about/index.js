(function(){
  function opanHeader(){
    var menuBtn = document.getElementById("menuBtn");
    var menuTarget = menuBtn.querySelector(".menu");
    var opan = document.getElementById("opan");
    var close = opan.querySelector(".close");
    $(opan).addClass("slideUp");

    menuTarget.addEventListener('click', function() {
      if($(opan).hasClass("slideUp")){
        $(opan).removeClass("slideUp");
        $(opan).addClass("slideDown");
      }
    },false);

    close.addEventListener('click', function() {
      if($(opan).hasClass("slideDown")){
        $(opan).removeClass("slideDown");
        $(opan).addClass("slideUp");
      }
    },false);
  }
  opanHeader();

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
})();
