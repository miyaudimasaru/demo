// JavaScript Document
$(function(){
	$(".select li").on("click",setPlace);
	imageChange();
	$(".midasi a").on("click",setPlace2);
});

function setPlace(){
	var id = $(this).attr('id');
	$(".place").removeClass("active");
	$(".menu-list ul"+"#"+id).addClass("active");
}
function setPlace2(){
	$("#normal li ul").toggleClass("active");
}

function imageChange() {
    var $rep = $(".js-replace");
    var flag = false;
    var type = "";
    var reg = /(.*)(?:\.([^.]+$))/;

    $(window).resize(function () {
        if (resizeValue.getNowWindowWidth() <= 640) {

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
    })
    $(window).resize();
}

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