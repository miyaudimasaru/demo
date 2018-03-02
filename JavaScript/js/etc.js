(function(){

//slider_area
  var anime = function() {
    index = 0; // 現在、表示している画像の順番
    width = 960; // 画像１つの幅
    left = 0; // 画像一覧の左端のポジション
    parent = $(".slide_main ul");
    child = parent.children();
    len = child.length;

  // index が 全ての画像枚数より小さい場合は、 indexを１つ大きくする
  if (index < len -1) {
    index++;
    // index が 全ての画像枚数まできたら、 index を 0 にする
  }
  // index に応じた left のポジションを計算し、アニメーションさせる
  parent.animate({
    left: -width + "px"
  }, 1000, function(){
    child.filter(':first-child').appendTo(parent);
    parent.css('left', '');
  });
};
// 2500ms に１度 callという関数を実行する
setInterval(anime, 5000);

//hover_area

var btnEvent = {

  btn_box : $(".btn_box"),
  hoverTarget : $(".slider_area"),

  play : function(){
   btnEvent.hoverTarget.hover
   (function(){
     btnEvent.btn_box.css({
       "opacity": "1",
     });
   },function(){
     btnEvent.btn_box.css({
       "opacity": "0",
     });
   });
  },
}
btnEvent.play();

//slider_area btn-click

var btnEventB = {

  width : 960,
  left : 0,
  index: 0,
  parent : $(".slide_main ul"),
  next : $(".next.btn"),
  prev : $(".prev.btn"),

  playA : function(){
    child = btnEventB.parent.children("li");
    len = child.length-1;
    btnEventB.parent.stop().animate({
      left: -btnEventB.width + "px"
    }, 600, function() {
      child.filter(':first-child').appendTo(btnEventB.parent);
      btnEventB.parent.css('left', '');
    });
  },

  playB : function(){
    child = btnEventB.parent.children("li");
    len = child.length-1;
    btnEventB.parent.stop().animate({
      left: btnEventB.width + "px"
    }, 600, function() {
      child.filter(':last-child').prependTo(btnEventB.parent);
      btnEventB.parent.css('left', '');
    });
  },

}

var clickEvent = function() {
  btnEventB.next.click(function() {
    btnEventB.index++;
    btnEventB.playA();
  });
  btnEventB.prev.click(function() {
    btnEventB.index--;
    btnEventB.playB();
  });
};
clickEvent();

});
