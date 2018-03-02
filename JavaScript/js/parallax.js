
$(function(){

  //parallax general

    　var parallax = function(){

      flickr_target = $(".flickr_target");
      scrollTop = $(window).scrollTop();
      targetHeight = $(window).height();
      flickr_text = $(".text");
      offSetVal = flickr_text.offset();

        // console.log(offSetVal);

      flickr_target.each(function(index){

          var pos = Math.round((targetHeight * index - scrollTop) / 10);

          flickr_text.eq(0).css({
              "top": pos + "px"
          });
          flickr_text.eq(1).css({
              "left": pos + "px"
          });
          flickr_text.eq(2).css({
            "transform": "rotate(" + pos + "deg)translateX(" + pos * 2 + "px)",
            "-webkit-transform": "rotate(" + pos + "deg)translateX(" + pos * 2 + "px)"
          });
          flickr_text.eq(3).css({
            "transform": "scale(" + -pos / 3 + ")",
            "-webkit-transform": "scale(" + -pos / 3 + ")"
          });
        });

      };

      $(window).scroll(function(){
        parallax();
      });

});
