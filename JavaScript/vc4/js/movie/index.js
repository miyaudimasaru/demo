(function () {

  var getArry = [
    {
      list: ["https://www.youtube.com/embed/ZSGG63IIR_8?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie11.png", "『戦場のヴァルキュリア４」CM映像", "new"]
    },
    {
      list: ["https://www.youtube.com/embed/GMAjDHp7ErA?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie10.png", "連邦軍キャラクター紹介映像②"]
    },
    {
      list: ["https://www.youtube.com/embed/jO6T9daerWo?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie09.png", "帝国軍キャラクター紹介映像"]
    },
    {
      list: ["https://www.youtube.com/embed/MzkobAuqj9Y?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie08.png", "連邦軍キャラクター紹介映像①"]
    },
    {
      list: ["https://www.youtube.com/embed/G0MVYBnxlgc?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie07.png", "『戦場のヴァルキュリア４』世界観紹介映像"]
    },
    {
      list: ["https://www.youtube.com/embed/JxdjWfK36mY?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie06.png", "倉木麻衣さんのビデオメッセージ"]
    },
    {
      list: ["https://www.youtube.com/embed/PgLlmikrDLc?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie05.png", "初回特典DLC「先行特別作戦」限定版同梱DLC「第７小隊との共同戦線」紹介映像"]
    },
    {
      list: ["https://www.youtube.com/embed/Xkiwv2bk1ts?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie04.png", "プロモーション映像"]
    },
    {
      list: ["https://www.youtube.com/embed/voC1WXVdODQ?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie03.png", "ゲームトレーラー"]
    },
    {
      list: ["https://www.youtube.com/embed/psOP5iJOZn0?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie02.png", "ストーリートレーラー"]
    },
    {
      list: ["https://www.youtube.com/embed/58BxlgHSqoY?rel=0&amp;controls=0&amp;showinfo=0", "../public/img/movie/movie01.png", "タイトル発表映像"]
    }
  ];

  var createdom = document.getElementsByClassName("movieList")[0];
  var fragment;
  var p;
  var a;
  var img;


  function getCreateDom() {

    fragment = document.createDocumentFragment();

    for (var i = 0; i < getArry.length; i++) {
      p = document.createElement("p");
      a = document.createElement("a");
      img = document.createElement("img");
      p_clone = p.cloneNode(true);
      a_clone = a.cloneNode(true);
      img_clone = img.cloneNode(true);
      img_clone.setAttribute("src", getArry[i].list[1]);
      img_clone.setAttribute("alt", getArry[i].list[2]);
      $(a_clone).addClass("fb-movie icon isHover");
      $(a_clone).addClass(getArry[i].list[3]);
      a_clone.setAttribute("href", getArry[i].list[0]);
      a_clone.setAttribute("data-fancybox-type", "iframe");
      a_clone.setAttribute("frameborder", "0");
      a_clone.setAttribute("allowfullscreen", "");
      a_clone.appendChild(img_clone);
      p_clone.appendChild(a_clone);
      fragment.appendChild(p_clone);
    }
    createdom.appendChild(fragment);
    return;
  }

  getCreateDom();

})();