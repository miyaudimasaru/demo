(function(){

var ID_systemBanner = document.getElementById("systemBanner");
var pageTitle = document.getElementById("pageTitle");
var Selector = ID_systemBanner.querySelectorAll("p");
var index = 1;

var query = window.location.search.replace("?page=" , "");

var systemName = [
  {
    "name" : "CANVAS"
  },
  {
    "name" : "BLiTZ"
  },
  {
    "name" : "兵科"
  },
  {
    "name" : "訓練場"
  },
  {
    "name" : "作戦司令室"
  },
  {
    "name" : "オーダーとポテンシャル"
  },
  {
    "name" : "戦車"
  },
  {
    "name" : "研究開発所と装備変更"
  },
  {
    "name" : "雪上巡洋艦センチュリオン"
  },
  {
    "name" : "総覧"
  }
];

var head_re = function(){
  situation = "page-" + query;
	val = $("#" + situation).index(".section-banner p");
  document.title = "戦場のヴァルキュリア4 ｜ SYSTEM[" + systemName[val].name + "] | SEGA公式サイト";
  $("meta[property='og:description']").attr('content','極寒の地での戦いは、熱い友情の物語だった。「戦場のヴァルキュリア４」公式サイト SYSTEM[' + query.toUpperCase() + ']ページです。PlayStation®4版(2018年3月21日発売予定)/Nintendo Switch™版(2018年夏 発売予定) ');
  $("meta[name='description']").attr('content','極寒の地での戦いは、熱い友情の物語だった。「戦場のヴァルキュリア４」公式サイト SYSTEM[' + query.toUpperCase() + ']ページです。PlayStation®4版(2018年3月21日発売予定)/Nintendo Switch™版(2018年夏 発売予定) ');
}
head_re();

var advTitle = function(){
  situation = query;
	val = $("#" + situation);
  var target = pageTitle.querySelector("." + situation);
  var Before = ID_systemBanner.querySelector(".bnr_" + situation);
  $(target).addClass("active");
  $(Before).addClass("open");
  $(val).addClass("active");
}
advTitle();

var contentsbox_parent = document.getElementsByClassName("contentsbox")[0];
var div = document.createElement("div");
var p = document.createElement("p");
var fragment_List;
var index;

var centurion_arr = [
  {
    "text":["../public/img/ss/centurion-ss08.jpg","../public/img/system/centurion/img01.png","レーダー","一定の範囲内にいる未発見、視界から消えた敵をコマンドモード上に表示します。最初から使用可能なシップオーダーです。"]
  },
  {
    "text":["../public/img/ss/centurion-ss09.jpg","../public/img/system/centurion/img02.png","艦砲射撃","指定した地点に砲撃を実行し、範囲内にいる敵にダメージを与えることができます。"]
  },
  {
    "text":["../public/img/ss/centurion-ss10.jpg","../public/img/system/centurion/img03.png","救護部隊","出撃中の自軍歩兵ユニットHPを回復し、瀕死状態のキャラクターがいた場合、負傷退避さることができます。"]
  },
  {
    "text":["../public/img/ss/centurion-ss11.jpg","../public/img/system/centurion/img04.png","車輌応急修理","ミッション中に撤退した自軍の車輌ユニットを復活させます。車輌は撃破されると基本的に戦闘中は復活できませんがこのシップオーダーを使うと復活することができます。"]
  }
];

function list(){
  var fragment_List = document.createDocumentFragment();
  var centurion_arrlen = centurion_arr.length;

  for(var i = 0; i < centurion_arrlen; i++){
      div_bg = div.cloneNode(true);
      div_first_clone = div.cloneNode(true);
      div_second_clone = div.cloneNode(true);
      a = document.createElement("a");
      img = document.createElement("img");

      $(div_first_clone).addClass("contents");
      $(div_second_clone).addClass("textBox");
      $(div_bg).addClass("bg");
      pA = p.cloneNode(true);
      pB = p.cloneNode(true);
      pC = p.cloneNode(true);
      a.setAttribute("href",centurion_arr[i].text[0]);
      $(a).addClass("fb-movie2 icon isHover");
      a.setAttribute("data-fancybox-type","iframe");
      img.setAttribute("src",centurion_arr[i].text[1]);
      a.appendChild(img);
      pA.appendChild(a);
      pB.textContent = centurion_arr[i].text[2];
      pC.textContent = centurion_arr[i].text[3];;
      $(pB).addClass("aeratitle");
      $(pC).addClass("text");
      div_first_clone.appendChild(pA);
      div_second_clone.appendChild(pB);
      div_second_clone.appendChild(pC);
      div_bg.appendChild(div_first_clone);
      div_bg.appendChild(div_second_clone);

      fragment_List.appendChild(div_bg);
  }
    contentsbox_parent.appendChild(fragment_List);
    return;
}
list();

})();
