var React = require('react');
var ReactDOM = require('react-dom');
var createReactclass = require('create-react-class');
// pc header
var Area02Box = createReactclass({
  getInitialState:function(){
    return {data:[]};
  },
  render : function(){
    return (
        <div className="Area02">
          <div className="section-inner">
              <p className="title">
                <img className="pc-none" src="../public/img/world/ufront/title.png" alt=""/>
                <img className="sp-none" src="../public/img/world/ufront/title_sp.png" alt=""/>
              </p>
              <p className="movie">
                <a href="../public/img/ss/special-ss.jpg" className="fb-movie2 isHover" target="_blank" data-fancybox-type="iframe"><img src="../public/img/world/ufront/img02.png" alt=""/>
                </a>
              </p>
              <p className="text text02">ノーザンクロス作戦の難所を越えたクロードたちは、<br />連邦の特命全権大使ジャン・タウンゼントの要請で<br className="sp-none"/>ガリアへと出向することとなった。<br />
              そこでタウンゼントから聞いた彼らの任務とは……。</p>
              <p className="text text03"><img src="../public/img/world/ufront/text.png" alt="あの日の僕たちは、命を懸けうるものがあると信じていた。それがどんな代償を払うものか、知りもしないで。あの戦争こそが、僕たちの青春だった。――「クロード・ウォレスの手記」より"/></p>
              <p className="pict pict01">
                <img className="pc-none" src="../public/img/world/ufront/charas.png" alt=""/>
                <img className="sp-none" src="../public/img/world/ufront/charas_sp.png" alt=""/>
              </p>
              <p className="text text01"><span className="oofont">〈第７小隊のキャラクター〉</span><br />ウェルキン・ギュンター CV:千葉進歩 / アリシア・メルキオット CV:井上麻里奈 / <br className="sp-none"/>イサラ・ギュンター CV:桑島法子<br />ロージー（ブリジット・シュターク） CV:豊口めぐみ / ラルゴ・ポッテル CV:江川央生</p>
          </div>

        </div>
    );
  }
});

// レンダリング
ReactDOM.render(
  <Area02Box />,
  document.getElementById("United_front")
);


var Area01Box = createReactclass({
  getInitialState:function(){
    return {data:[]};
  },
  render : function(){
    return (
        <div className="Area01">
          <div className="bg front">
            <div className="section-inner">
              <div className="main">
                <p className="title-logo"><img src="../public/img/special/inner/title-logo.png" alt="夏服で参戦！ 追加ストーリーDLC「第７小隊との共同戦線」"/></p>
              </div>
            </div>
          </div>
          <div className="section-inner mainArea">
            <div className="area01">
              <div className="bg">
                <div className="pictArea">
                  <p><a href="https://www.youtube.com/embed/PgLlmikrDLc?rel=0&controls=0&showinfo=0" className="fb-movie isHover" target="_blank" data-fancybox-type="iframe"><img src="../public/img/special/inner/pict.png" alt=""/></a></p>
                  <p class="btn"><a href="../special/inner.html#United_front" className="isHover"><img src="../public/img/special/inner/btn.png" alt=""/></a></p>
                </div>
              </div>
            </div>
            <div className="area02">
              <div className="bg">
              </div>
            </div>
            <div className="area03">
              <div className="bg">
              </div>
            </div>
            <div className="area04">
              <div className="bg">
              </div>
            </div>
            <p className="text">※商品内容は予告なく変更することがあります。予めご了承ください。</p>
          </div>
        </div>
    );
  }
});

// レンダリング
ReactDOM.render(
  <Area01Box />,
  document.getElementById("United")
);
