(function(){

  var btnOpan = document.getElementById('_btnOpan');

  var clickEvent = function(){
    var _clientH;
    var _toggleMenu = document.getElementById("_newsList");

    _toggleMenu.style.height = 'auto';
    _clientH = _toggleMenu.clientHeight;
    _toggleMenu.style.height = '0px';

    btnOpan.addEventListener("click",function(){
      var _toggleMenu = document.getElementById("_newsList");
      var chi = this.children;
      $(chi).toggleClass("rotate");
      var lastH = _toggleMenu.style.height;
      _toggleMenu.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px';

    },false);

  };

  clickEvent();


  var getArry = [
    {
      list:["../world/","../public/img/common/img-news39.png","2018.3.5 ［WORLD］","「クライマリア戦」「断章」を公開","list01"]
    },
    {
      list:["../movie/","../public/img/common/img-news38.png","2018.2.27 ［MOVIE］","『戦場のヴァルキュリア４』CM映像を公開！","list02"]
    },
    {
      list:["../news/2/#news1","../public/img/common/img-news36.png","2018.2.26 ［NEWS］","序盤体験版配信中！本編へのセーブデータ引き継ぎも可能！","list02"]
    },
    {
      list:["../movie/","../public/img/common/img-news37.png","2018.2.23 ［MOVIE］","連邦軍キャラクター紹介映像(2)を公開","list02"]
    },
    {
      list:["../guide/","../public/img/common/img-news35.png","2018.2.20 ［SPECIAL］","販売店別予約特典の全デザインを公開！","list02"]
    },
    {
      list:["../world/","../public/img/common/img-news32.png","2018.2.19 ［WORLD］","「序盤ストーリー紹介」を公開","list02"]
    },
    {
      list:["../system/","../public/img/common/img-news31.png","2018.2.19 ［SYSTEM］","SYSTEM「総覧」を公開","list02"]
    },
    {
      list:["../character/","../public/img/common/img-news30.png","2018.2.19 ［CHARACTER］","CHARACTER２名を公開","list02"]
    },
    {
      list:["../cp/tw/","../public/img/common/img-news29.png","2018.2.19 ［CAMPAIGN］","Twitterキャンペーン「第８弾」フォルセ役「石川界人さん」サイン色紙を抽選でプレゼント！","list02"]
    },
    {
      list:["../movie/","../public/img/common/img-news34.png","2018.2.16 ［MOVIE］","帝国軍キャラクター紹介映像","list02"]
    },
    {
      list:["../movie/","../public/img/common/img-news33.png","2018.2.9 ［MOVIE］","連邦軍キャラクター紹介映像(1)を公開","list02"]
    },
    {
      list:["https://twitter.com/val4_PR","../public/img/common/img-news28.png","2018.2.9 ［SPECIAL］","ニコラとキアラの潜入日誌スタート！開発現場からのヒミツ情報をお届け！","list02"]
    },
    {
      list:["../cp/tw/","../public/img/common/img-news27.png","2018.2.5 ［CAMPAIGN］","Twitterキャンペーン「第７弾」ニコラ役「大空直美さん」サイン色紙を抽選でプレゼント！","list02"]
    },
    {
      list:["../system/","../public/img/common/img-news26.png","2018.2.5 ［SYSTEM］","戦闘SYSTEM「雪上巡洋艦センチュリオン」を公開","list02"]
    },
    {
      list:["../character/","../public/img/common/img-news25.png","2018.2.5 ［CHARACTER］","CHARACTER４名を公開","list02"]
    },
    {
      list:["../movie/","../public/img/common/img-news24.jpg","2018.2.2 ［MOVIE］","世界観紹介映像を公開","list02"]
    },
    {
      list:["../cp/play/","../public/img/common/img-news23.png","2018.2.1 ［SPECIAL］","『戦場のヴァルキュリア４』 メディア先行体験会にご招待！","list02"]
    },
    {
      list:["../movie/","../public/img/common/img-news22.png","2018.1.31 ［MOVIE］","倉木麻衣さんビデオメッセージを公開","list03"]
    },
    {
      list:["../system/","../public/img/common/img-news21.png","2018.1.22 ［SYSTEM］","戦闘SYSTEM「戦車」「研究開発所と装備変更」を公開","list03"]
    },
    {
      list:["../character/","../public/img/common/img-news20.png","2018.1.22 ［CHARACTER］","CHARACTER３名を公開","list03"]
    },
    {
      list:["../cp/tw/","../public/img/common/img-news19.png","2018.1.22 ［CAMPAIGN］","Twitterキャンペーン「第６弾」ヴォルツ役「東地広樹さん」サイン色紙を抽選でプレゼント！","list03"]
    },
    {
      list:["../movie/","../public/img/common/img-news18.png","2018.1.19 ［MOVIE］","初回特典DLC「先行特別作戦」限定版同梱DLC「第７小隊との共同戦線」紹介映像を公開","list03"]
    },
    {
      list:["http://www.sony.jp/playstation/store/special/ps4/valkyria4/?s_tc=st_co_ext_vc/","../public/img/common/img-news17.png","2018.1.19 ［SPECIAL］］","『戦場のヴァルキュリア４』とPS4®のコラボモデルが数量限定で3月21日発売決定！ 予約受付中！","list03"]
    },
    {
      list:["../cp/tw/","../public/img/common/img-news16.png","2018.1.9 ［CAMPAIGN］","Twitterキャンペーン「第５弾」クライマリア役「ゆかなさん」サイン色紙を抽選でプレゼント！","list03"]
    },
    {
      list:["../movie/","../public/img/common/img-news15.png","2017.12.28 ［MOVIE］","「プロモーション映像」「ゲームトレーラ」を公開","list04"]
    },
    {
      list:["../special/inner.html","../public/img/common/img-news14.png","2017.12.28 ［SPECIAL］","限定版の詳細情報を公開","list04"]
    },
    {
      list:["../system/","../public/img/common/img-news09.png","2017.12.25 ［SYSTEM］","戦闘SYSTEM「訓練場」「作戦司令室」「オーダーとポテンシャル」を公開","list04"]
    },
    {
      list:["../character/","../public/img/common/img-news10.png","2017.12.25 ［CHARACTER］","追加CHARACTER４名を公開","list04"]
    },
    {
      list:["../special/inner.html#United_front","../public/img/common/img-news11.png","2017.12.25 ［SPECIAL］","DLCストーリー「第７小隊との共同戦線」のあらすじを公開","list04"]
    },
    {
      list:["../cp/tw/","../public/img/common/img-news12.png","2017.12.25 ［CAMPAIGN］","Twitterキャンペーン「第４弾」カイ役「坂本真綾さん」サイン色紙を抽選でプレゼント！","list04"]
    },
    {
      list:["../news/12/#news1","../public/img/common/img-news13.png","2017.12.20 ［NEWS］","『戦場のヴァルキュリア４』実機プレイを初公開！12月27日（水）20時～ スペシャル生放送配信決定！","list04"]
    },
    {
      list:["../system/","../public/img/common/img-news02.png","2017.12.11 ［SYSTEM］","戦闘SYSTEM「BLiTZ」「兵科」を公開","list04"]
    },
    {
      list:["../character/","../public/img/common/img-news03.png","2017.12.11 ［CHARACTER］","追加CHARACTER６名を公開","list04"]
    },
    {
      list:["../cp/tw/","../public/img/common/img-news04.png","2017.12.11 ［CAMPAIGN］","Twitterキャンペーン「第３弾」レイリィ役「中井和哉さん」サイン色紙を抽選でプレゼント！","list04"]
    },
    {
      list:["../world/","../public/img/common/img-news07.png","2017.12.11 ［WORLD］","Worldを公開","list04"]
    },
    {
      list:["../movie/","../public/img/common/img-news05.png","2017.12.11 ［MOVIE］","「ストーリートレーラー」を公開中","list04"]
    },
    {
      list:["../cp/pre/","../public/img/common/img-news06.png","2017.12.11 ［CAMPAIGN］","無料でDLCが貰える、事前登録キャンペーン実施中！","list04"]
    },
  ];

  var createdom = document.getElementsByClassName("targetDomCreate")[0];
  var fragment;
  var li;
  var span;
  var spanA;
  var spanB;
  var spanC;
  var p;
  var a;
  var img;
  var classDAY = "day";
  var classTEXT = "text";
  var classHOVER = "isHover";
  var sortParent;
  var sortTarget;
  var _btnOpan = document.getElementById("_btnOpan");
  var indexNUM;


  function getCreateDom(){

    fragment = document.createDocumentFragment();

    for(var i = 0; i < getArry.length; i++){
      li = document.createElement("li");
      span = document.createElement("span");
      img = document.createElement("img");
      spanA = span.cloneNode(true);
      spanB = span.cloneNode(true);
      spanC = span.cloneNode(true);
      p = document.createElement("p");
      a = document.createElement("a");
      $(li).addClass(getArry[i].list[4]);
      $(li).addClass("list");
      a.setAttribute("class",classHOVER);
      a.setAttribute("href",getArry[i].list[0]);
      img.setAttribute("src",getArry[i].list[1]);
      spanB.setAttribute("class",classDAY);
      spanC.setAttribute("class",classTEXT);
      spanB.textContent = getArry[i].list[2];
      spanC.textContent = getArry[i].list[3];

      spanA.appendChild(img);
      a.appendChild(spanA);
      a.appendChild(spanB);
      a.appendChild(spanC);
      p.appendChild(a);
      li.appendChild(p);
      fragment.appendChild(li);
    }
      createdom.appendChild(fragment);
      return;
  }

getCreateDom();

function sortCreate(){
  var sortParent = document.getElementById("_newsList");
  var targetDomCreate = document.getElementsByClassName("targetDomCreate")[0];
  var _btnOpanAll = document.getElementsByClassName("all")[0];
  var targetDomCreate_li = targetDomCreate.getElementsByTagName("li");
  var sortTarget = sortParent.getElementsByTagName("li");
  var sortTargetLen = sortTarget.length;
  for(var li = 0; li < sortTargetLen; li++){
    sortTarget[li].addEventListener("click", function(){
      indexNUM = $(this).index();
      if(this){
        var TEXT = this.textContent.split("年");
        _btnOpan.innerHTML = "<p class=text>" + TEXT[1] +"</p>";
        if(TEXT[1] == undefined || TEXT[1] == null){
          _btnOpan.innerHTML = "<p class=text>" + "すべての記事" +"</p>";
        }
        if (!targetDomCreate_li[li].contains(this)) {
          var _toggleMenu = document.getElementById("_newsList");
          var lastH = _toggleMenu.style.height = '0px';      
          $(targetDomCreate_li).addClass("none");
          $(targetDomCreate_li).removeClass("on");
            $(".list0" + indexNUM).removeClass("none");
            $(".list0" + indexNUM).addClass("on");
          } 
        if(indexNUM == 0){
          $(targetDomCreate_li).removeClass("on none");
        }
      } 
    },false);
  }
}
sortCreate();
})();
