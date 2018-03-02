(function(){

var ID_systemBanner = document.getElementById("Banner");
var Selector = ID_systemBanner.querySelectorAll("p");
var index = 1;

var query = window.location.search.replace("?page=" , "");
var advName = [
  {
    "name" : "手書きイラストが３Dで動く、グラフィック表現「CANVAS」"
  },
  {
    "name" : "戦略×アクション、バトルシステム「BLiTZ」"
  },
  {
    "name" : "特徴を見極めて自分だけの部隊を編成"
  }
];

var advTitle = function(){
  situation = query;
	val = $("#" + situation);
  $(val).addClass("active");
}
advTitle();

})();
