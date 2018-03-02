$(function(){
 imageChange()
var slide = {
  get : $(".hanba-ga"),
  classA : $(".non-active"),
  play : function(){
    if(slide.classA.css("display") === "none"){
      slide.classA.stop().slideDown();
    } else {
      slide.classA.stop().slideUp();
    }
  },

}
function event(){
  slide.get.click(function(){
    slide.play();
  });
}
event();

  var resizeValue = (function () {
      var w, h;
      return {
          getNowWindowWidth: function () {
              return w = $(window).width();
          },
          getNowWindowHeight: function () {
              return h = $(window).height();
          }
      }
  })();

  function imageChange() {
      var $rep = $(".js-replace");
      var flag = false;
      var type = "";
      var reg = /(.*)(?:\.([^.]+$))/;

      $(window).resize(function(){
          if (resizeValue.getNowWindowWidth() <= 980) {

              if (flag == false) {
                  $rep.each(function (index, element) {
                      type = $(this).attr("src").match(reg)[2];
                      $(this).attr("src", $(this).attr("src").replace("." + type, "_sp." + type));
                  });
                  flag = true;
              }
          } else {
              if (flag == true) {
                  $rep.each(function (index, element) {
                      type = $(this).attr("src").match(reg)[2];
                      $(this).attr("src", $(this).attr("src").replace("_sp." + type, "." + type));
                  });
                  flag = false;
              }
          }
      });
  };

});
