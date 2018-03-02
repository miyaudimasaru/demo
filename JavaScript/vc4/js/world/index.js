(function(){

var worldBanner = document.getElementById("worldBanner");
var Selector = worldBanner.querySelectorAll("p");
var index = 1;
var situation = 0;
var val = 0;
var Before = 0;
var query = window.location.search.replace("?page=" , "");
var metaDiscre = document.head.children;
var metaLength = metaDiscre.length;

var worldName = [
  {
    "name" : "Prologue-プロローグ-"
  },
  {
    "name" : "序盤ストーリー紹介"
  },
  {
    "name" : "「クライマリア戦」紹介"
  },
  {
    "name" : "「断章」紹介"
  }
];

function head_re(){
  situation = "page-" + query;
	val = $("#" + situation).index(".section-banner p");
  document.title = "戦場のヴァルキュリア4 ｜ WORLD[" + worldName[val].name + "] | SEGA公式サイト";

  for(var i = 0;i < metaLength;i++){
    var name = metaDiscre[i].getAttribute('name');
    var property = metaDiscre[i].getAttribute('property');
    if(name === 'description'){
  		var dis = metaDiscre[i];
      metaDiscre[i].setAttribute('content','極寒の地での戦いは、熱い友情の物語だった。「戦場のヴァルキュリア４」公式サイト WORLD[' + worldName[val].name + ']ページです。PlayStation®4版(2018年3月21日発売予定)/Nintendo Switch™版(2018年夏 発売予定) ');
  	}
    if(property === 'og:description'){
  		var dis = metaDiscre[i];
      metaDiscre[i].setAttribute('content','極寒の地での戦いは、熱い友情の物語だった。「戦場のヴァルキュリア４」公式サイト WORLD[' + worldName[val].name + ']ページです。PlayStation®4版(2018年3月21日発売予定)/Nintendo Switch™版(2018年夏 発売予定) ');
  	}
  }

}
head_re();

function worldTitle(){
  situation = query;
  Before = worldBanner.querySelector(".bnr_" + situation);
	val = $("#" + situation);
  $(val).addClass("active");
  $(Before).addClass("open");
}
worldTitle();

function ruthing() {
  var request = [{
      url: "prologue.html"
    },
    {
      url: "story.html"
    },
    {
      url: "kuraimaria.html"
    },
    {
      url: "fragments.html"
    },
  ];

  var jqXHRList = [];

  for(var i = 0; i < request.length; i++){
    jqXHRList.push($.ajax({
      type: "GET",
      url: request[i].url,
      dataType: "html",
    }));
  }
  $.when.apply($, jqXHRList).done(function(){
    var prologue = arguments[0][0];
    var story = arguments[1][0];
    var kuraimaria = arguments[2][0];
    var fragments = arguments[3][0];
      var target = window.location.search.replace("?page=" , "");
      switch(target){
        case "prologue":
        $("#rute").html(prologue);
          break;
        case "story":
        $("#rute").html(story);
          break;
        case "kuraimaria":
        $("#rute").html(kuraimaria);
          break;
        case "fragments":
        $("#rute").html(fragments);
          break;
        }

  }).fail(function (ex) {
    alert("Ajax通信に失敗しました");
  });

};
ruthing();

})();
