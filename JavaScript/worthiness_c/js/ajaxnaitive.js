// JavaScript Document
//------------------------------------ 
//ajax実行関数
//------------------------------------ 
function sendAjax( request ){
	console.log("ajax実行関数");
	request.open( "POST" , "/wp-content/themes/worthiness-clothing/ajaxcontent.php" , true );
	request.setRequestHeader( "content-type" , "application/json; charset=UTF-8" );
	request.send( ajaxRequestsJson() );
	console.log("Json = "+ ajaxRequestsJson());
	console.log("リクエスト = "+request.status);
}

//------------------------------------
//リクエストデータをjsonにする関数
//------------------------------------
function ajaxRequestsJson(){
	console.log("リクエストデータをjsonにする関数");
	var loopLength = elementObj().indexLoop.length;
	var requestJson = JSON.stringify({
		//グローバルに出したオブジェクトから受け取る
		nonce : AjaxData.nonce,
		category : AjaxData.category,
		tag : AjaxData.tag,
		post_type : AjaxData.post_type,
		search : AjaxData.search,
		looplength : loopLength,
		year : AjaxData.year,
		month : AjaxData.month
	});
	return requestJson;
}



//------------------------------------
//エレメントオブジェクトまとめ関数
//------------------------------------
function elementObj(){
	var body = document.querySelectorAll( "body" )[0];
	var html = document.querySelectorAll( "html" )[0];
	var indexLoop = document.querySelectorAll( ".article_list" );
	var indexLoop0 = document.querySelectorAll( ".article_list" )[0];
	var responseArea = document.querySelectorAll( ".article_box" );
	var responseArea0 = document.querySelectorAll( ".article_box" )[0];
	var responseAreaChild = document.querySelector(".more_btn a");
	var single = document.querySelectorAll( "#single" );
	var windowHeight = $( window ).height();
	return{
		"body" : body,
		"html" : html,
		"indexLoop" : indexLoop,
		"indexLoop0" : indexLoop0,
		"responseArea" : responseArea,
		"responseArea0" : responseArea0,
		"responseAreaChild" : responseAreaChild,
		"single" : single,
		"windowHeight" : windowHeight
	};
}




//------------------------------------
//スクロール取得
//------------------------------------
function bodyScrollSenser(){
	var obj = elementObj();
	var bodyScroll;
	
	if( obj.body.scrollTop === 0 || obj.body.scrollTop === false ){
		bodyScroll = obj.html.scrollTop;
	}else{
		bodyScroll = obj.body.scrollTop;
	}
	return bodyScroll;
}


//------------------------------------
//ajax発動位置算出関数
//------------------------------------
function processPoint(){
	var obj = elementObj();
	if( !obj.indexLoop0 ){
		return { "bodyPoint" : 0 , "endPoint" : 0 };
	}else{
		var ratio = Math.floor( obj.responseArea0.offsetWidth / obj.indexLoop0.offsetWidth );
		var endPoint = ( allLoopHeight() / ratio );
		var bodyPoint = bodyScrollSenser() + obj.windowHeight + ( obj.windowHeight * 0.1 );
		return { "bodyPoint" : bodyPoint , "endPoint" : endPoint };
	}
}




//------------------------------------
//要素の高さ計算関数
//------------------------------------
function allLoopHeight(){
	var obj = elementObj();
	var allLoopHeight = 0;
	for( var i = 0 ; i < obj.indexLoop.length ; i++){
		allLoopHeight = allLoopHeight + obj.indexLoop[i].offsetHeight;
	}
	return allLoopHeight;
}




//------------------------------------
//クリック検知関数
//------------------------------------
function scrollSenser( request ){
	console.log("スクロール検知関数="+AjaxData.flag);
	var flag = AjaxData.flag;
	var obj = elementObj();
	var point = processPoint();
	
	console.log(obj.indexLoop.length);
	if( obj.indexLoop.length === 0 && AjaxData.is_single === "false" ){
		console.log("初回");
		sendAjax( request );
	}else if( obj.indexLoop.length > 1 ){
		if( flag === false ){
			
		}else if( flag === true ){
			//スクロールが基準値に達したらajax発動
			if( point.endPoint < point.bodyPoint ) {
				//通信中はajaxをスタートさせないようにする。
				if( request.readyState === 0 /* 初期化前状態 */ || request.readyState === 4 /* 通信終了状態 */ ){
					sendAjax( request );
				}
			}
		}
	}
}



//------------------------------------
//XMLHttpRequestオブジェクト作成
//------------------------------------
var Request = new XMLHttpRequest();



//------------------------------------
//通信実行    
//------------------------------------
window.addEventListener("load", function(){ 
	scrollSenser( Request );
	var more_btn = document.querySelector(".more_btn");
	more_btn.addEventListener("click", function(){ scrollSenser( Request ); return false;});
} , false);



//------------------------------------
//通信開始イベントハンドラ
//------------------------------------
Request.onloadstart = function(e){
	console.log("スタート")
	var obj = elementObj();
	if( AjaxData.registered !== true ){
		obj.responseArea0.style.opacity = "0.5";
		var element = document.createElement( "div" );
		element.id = "loading";
        //element.innerHTML = "<img src='http://fladance.jp/newpofp/wp-content/themes/pofp/img/topics/loading.gif'>";
		obj.body.appendChild( element );
		AjaxData.registered = true;
	}
}




//------------------------------------
//通信中イベントハンドラ
//------------------------------------
Request.onreadystatechange = function(){
	console.log("現在" + Request.readyState);
}



//------------------------------------
//通信終了イベントハンドラ
//------------------------------------
Request.onloadend = function(e){
	console.log("load 終了");
	var obj = elementObj();
	//topics_ajax.moreClickSetUp(topics_ajax);
	obj.responseArea0.style.opacity = "1.0";
	if(AjaxData.flag == false){
		obj.responseAreaChild.parentNode.style.display = "none";
		console.log(obj.responseAreaChild);
	}
	var loading = document.getElementById("loading");
	obj.body.removeChild( loading );
	AjaxData.registered = false;
	
}



//------------------------------------
//通信成功イベントハンドラ
//------------------------------------
Request.onload = function(){
	console.log("記事をload");
	//jsonデータをパース
	var obj = elementObj();
	var responceData = JSON.parse(Request.response);
	console.log(responceData);
	AjaxData.flag = responceData.flag;
	var element = document.createElement( "div" );
	element.className += "section_group"
	element.innerHTML = responceData.html;
	obj.responseArea0.appendChild( element );
}



//------------------------------------
//通信失敗イベントハンドラ
//------------------------------------
Request.onerror = function(e){
	console.log("erroe");
}



//------------------------------------
//通信タイムアウトイベントハンドラ
//------------------------------------
Request.ontimeout = function(){
	console.log("タイムアウト");
}



//------------------------------------
//通信中断イベント
//------------------------------------
Request.onabort = function(){
	console.log("中断しました");
}
