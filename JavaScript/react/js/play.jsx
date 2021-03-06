var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
// pc header

var FooterBox = createReactClass({
  getInitalState: function(){
    return {_dataBox:[]};
  },
  render: function(){
    var _dataBox = [];
    var imgUrl = "../../public/img/common/f-banner.png";
    var urlTop = "http://portal.valkyria.jp/";
    var data = [
    {image: "../../public/img/sp/sega.png",
    alt01: "sega",
  },{image: "../../public/img/sp/ps4.png",
      alt01: "ps4",
    },{image: "../../public/img/sp/swich_asia.png",
      alt01: "swich",
    },{image: "../../public/img/sp/cero.png",
    alt01: "cero",
    }
  ];
    for(var i = 0;i < data.length;i++){
      _dataBox.push(
        <li key={i}>
          <p>
            <a href={data[i].url01} className="list"><img ref="" src={data[i].image} alt={data[i].alt01}/></a>
          </p>
        </li>);
      }
    return (
      <div className="footerInner">
        <div className="banenr">
          <div className="section-inner">
            <p><a href={urlTop} className="isHover" target="_blank"><img ref="" src={imgUrl}/></a></p>
          </div>
        </div>
        <div className="shousai">
          <div className="section-inner">
            <ul className="clearfix conp">{_dataBox}</ul>
          </div>
        </div>
        <div className="textBox">
          <p>“<span><img ref="" src="../../public/img/common/textin01.png" alt=""/></span>
            “、“PlayStation”および “
            <span><img ref="" src="../../public/img/common/textin02.png" alt=""/></span>
            “は株式会社ソニー・インタラクティブエンタテインメントの登録商標または商標です。
          </p>
          <p>Nintendo Switchのロゴ・Nintendo Switchは任天堂の商標です。</p>
          <p>©SEGA　サイトで使用されている画像、文章、情報、音声、動画、等は株式会社セガの著作権により保護されております。</p>
          <p>著作権者の許可なく、複製、転載等の行為を禁止いたします。本サイトは、株式会社セガゲームスが運営しております。</p>
        </div>
      </div>
    );
  }
});
// レンダリング
ReactDOM.render(
  <FooterBox />,
  document.getElementById('footer')
);

var FooterBox_sp = createReactClass({
  render: function(){

    var dataBox = [];
    var imgUrl = "../../public/img/common/f-banner.png";
    var urlTop = "http://portal.valkyria.jp/";
    var data = [
    {image: "../../public/img/sp/sega.png",
    alt01: "sega",
  },{image: "../../public/img/sp/ps4.png",
      alt01: "ps4",
    },{image: "../../public/img/sp/swich_asia.png",
      alt01: "swich",
    },{image: "../../public/img/sp/cero.png",
    alt01: "cero",
    }
  ];
    for(var i = 0;i < data.length;i++){
      dataBox.push(
        <li key={i}>
          <p>
            <a href={data[i].url01} className="list"><img ref="" src={data[i].image} alt={data[i].alt01}/></a>
          </p>
        </li>);
      }
    return (
      <div className="footerInner">
        <div className="banenr">
          <div className="section-inner">
            <p>
              <a href={urlTop} target="_blank"><img ref="" src={imgUrl}/></a>
            </p>
          </div>
        </div>
        <div className="shousai">
          <div className="section-inner">
            <ul className="clearfix conp">{dataBox}</ul>
          </div>
        </div>
        <div className="textBox">
          <p>“<span><img ref="" src="../../public/img/about/textin01.png" alt=""/></span>“、“PlayStation”および “<span><img ref="" src="../../public/img/about/textin02.png" alt=""/></span>“は株式会社ソニー・インタラクティブ<br />エンタテインメントの登録商標または商標です。 </p>
          <p>Nintendo Switchのロゴ・Nintendo Switchは任天堂の商標です。</p>
          <p>©SEGA　サイトで使用されている画像、文章、情報、音声、動画、等は株式<br />会社セガの著作権により保護されております。</p>
          <p>著作権者の許可なく、複製、転載等の行為を禁止いたします。本サイトは、株式<br />会社セガゲームスが運営しております。</p>
        </div>
      </div>
    );
  }
});

// レンダリング
ReactDOM.render(
  <FooterBox_sp />,
  document.getElementById('footer-sp')
);
