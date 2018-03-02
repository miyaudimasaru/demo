(function(){

  var titleBg = document.getElementById("titleBg");
  var allTitleBg = titleBg.querySelector(".section-inner")
  var path = location.pathname.split("/");
  var Add = path[2];
  $(allTitleBg).addClass(Add);


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

})();
