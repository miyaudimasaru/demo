(function(){

var Banner= document.getElementById("Banner");
var ID_systemBanner = document.getElementById("Banner");
var Selector = Banner.querySelectorAll("p");
var index = 1;

var query = window.location.search.replace("?page=" , "");

var charaName = [
  {
    "name" : "クロード・ウォレス"
  },
  {
    "name" : "レイリィ・ミラー"
  },
  {
    "name" : "ラズ"
  },
  {
    "name" : "カイ・シュレン"
  },
  {
    "name" : "アンジュリカ・ファーナビー"
  },
  {
    "name" : "ミネルバ・ウィクトル"
  },
  {
    "name" : "カレン・スチュアート"
  },
  {
    "name" : "ラグナロック"
  },
  {
    "name" : "マイルズ・アーベック"
  },
  {
    "name" : "ダン・ベントレー"
  },
  {
    "name" : "ロナルド・オールビー"
  },
  {
    "name" : "ローランド・モーガン"
  },
  {
    "name" : "ブライアン・ハドック"
  },
  {
    "name" : "マリー・ベネット"
  },
  {
    "name" : "ルフ"
  },
  {
    "name" : "アルドレ・デュノア"
  },
  {
    "name" : "セルジオ・マスキュラー"
  },
  {
    "name" : "クライマリア・レヴィン"
  },
  {
    "name" : "クラウス・ヴォルツ"
  },
  {
    "name" : "フォルセ"
  },
  {
    "name" : "ベルガー"
  },
  {
    "name" : "ニコラ・グレフ"
  },
  {
    "name" : "キアラ・ロジーノ"
  }
];

var metaDiscre = document.head.children;
var metaLength = metaDiscre.length;
var val;
var _val;
var situation;

var advTitle = function(){
  situation = query;
	_val = $("#" + situation);
  var Before = Banner.querySelector(".bnr_" + situation);
  $(Before).addClass("open");
  $(_val).addClass("active");
};
advTitle();

var head_re = function(){
  situation = "page-" + query;
	val = $("#" + situation).index(".section-banner .chara");
  document.title = "戦場のヴァルキュリア4 ｜ CHARACTER[" + charaName[val].name + "] | SEGA公式サイト";

  for(var i = 0;i < metaLength;i++){
    var name = metaDiscre[i].getAttribute('name');
    var property = metaDiscre[i].getAttribute('property');
    if(name === 'description'){
  		var dis = metaDiscre[i];
      metaDiscre[i].setAttribute('content','極寒の地での戦いは、熱い友情の物語だった。「戦場のヴァルキュリア４」公式サイト CHARACTER[' + charaName[val].name + ']ページです。PlayStation®4版(2018年3月21日発売予定)/Nintendo Switch™版(2018年夏 発売予定) ');
  	}
    if(property === 'og:description'){
  		var dis = metaDiscre[i];
      metaDiscre[i].setAttribute('content','極寒の地での戦いは、熱い友情の物語だった。「戦場のヴァルキュリア４」公式サイト CHARACTER[' + charaName[val].name + ']ページです。PlayStation®4版(2018年3月21日発売予定)/Nintendo Switch™版(2018年夏 発売予定) ');
  	}
  }
};
head_re();

})();
