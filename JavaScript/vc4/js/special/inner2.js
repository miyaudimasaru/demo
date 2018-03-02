(function(){

var cdArry = [
  {
  area:["1","戦場のヴァルキュリア　シリーズメインテーマ","崎元仁"]
  },
  {
  area:["1","ガリオ戦線記","崎元仁"]
  },
  {
  area:["1","勇戦","崎元仁"]
  },
  {
  area:["1","ヴァルキュリアの覚醒","崎元仁"]
  },
  {
  area:["1","我ら、第７小隊","崎元仁"]
  },
  {
  area:["1","受け継がれる想い / 歌：豊口めぐみ(ロージー)、作詞：佐藤大平","崎元仁"]
  },
  {
  area:["2","戦場のヴァルキュリア２ メインテーマ","崎元仁"]
  },
  {
  area:["2","級友たちの日々","崎元仁"]
  },
  {
  area:["2","決勝戦","崎元仁"]
  },
  {
  area:["2","練習戦","崎元仁"]
  },
  {
  area:["2","王位士官学校","崎元仁"]
  },
  {
  area:["2","さらば、わが学び舎","崎元仁"]
  },
  {
  area:["3","戦場のヴァルキュリア３ メインテーマ","崎元仁"]
  },
  {
  area:["3","部隊として","崎元仁"]
  },
  {
  area:["3","OPEN FIRE！","崎元仁"]
  },
  {
  area:["3","災禍の鴉","崎元仁"]
  },
  {
  area:["3","信じあえる未来へ","崎元仁"]
  },
  {
  area:["3","ちいさな未来とともに","崎元仁"]
  },
  {
  area:["4","戦場のヴァルキュリア４ メインテーマ","崎元仁"]
  },
  {
  area:["4","E小隊の戦い","崎元仁"]
  },
  {
  area:["4","E小隊のテーマ","崎元仁"]
  },
  {
  area:["4","連邦軍のテーマ","崎元仁"]
  },
  {
  area:["4","アオスブルフ","崎元仁"]
  },
  {
  area:["4","紅き吹雪","崎元仁"]
  },
  {
  area:["4","It will be done","崎元仁"]
  },
];

var cds_list = document.getElementsByClassName("cds-list")[0];
var divPrent;
var fragment;
var span;
var divA;
var divB;
var divC;

function getCreateDom(){
  fragment = document.createDocumentFragment();
  for(var i = 0; i < cdArry.length; i++){
    divPrent = document.createElement("div");
    span = document.createElement("span");
    var span01 = span.cloneNode(true);
    var span02 = span.cloneNode(true);
    var span03 = span.cloneNode(true);

    span.setAttribute("class","num color2");
    span01.setAttribute("class","item color2");
    span02.setAttribute("class","itemName color2");
    span03.setAttribute("class","single color2");

    span.textContent = i + 1;
    span01.textContent = cdArry[i].area[0];
    span02.textContent = cdArry[i].area[1];
    span03.textContent = cdArry[i].area[2];

    divPrent.appendChild(span);
    divPrent.appendChild(span01);
    divPrent.appendChild(span02);
    divPrent.appendChild(span03);

    divPrent.setAttribute("class","listArea");

    fragment.appendChild(divPrent);
  }
    cds_list.appendChild(fragment);

}
getCreateDom();

})();
