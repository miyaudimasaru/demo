(function(){
  var fadeA = {
    width : 1000,
    height : 600,
    index : 0,
    parent : document.getElementById("slider-main"),
    activeA : document.querySelectorAll(".slider_img"),

    play : function(){

      for(var i = 0; i < fadeA.activeA.length-1; i++){
          fi = fadeA.activeA[i].classList;
          fi.add("fadeIn");
      }

      function interVal(){

        g = fadeA.parent.firstElementChild;
        j = g.nextElementSibling;
        j_ = j.classList;
        j_.add("fadeIn");
        d = fadeA.parent.appendChild(g);

      }
      // interVal();
      setInterval(interVal, 2000)
    },
  }
  fadeA.play();

  var Json = {

  	$message : document.getElementById('col-news-main'),
    jsonPlay : function(){
      var request = new XMLHttpRequest();
      request.open("GET","http://" + "localhost:8888" + "/js/font.json",true);
      // request.open("GET","http://" + location.hostname + "/cp_newproject/js/campaign.json",true);
        request.onreadystatechange = function(){
          if(request.readyState == 4){
            if(request.status == 200){
              elementArrTitle = Json.$message.querySelectorAll('.title');
              elementArrText = Json.$message.querySelectorAll('.text');
              var data = JSON.parse(request.responseText)
                for(var i = 0; i < elementArrTitle.length; i++){
                  elementArrTitle[i].innerHTML = data[i].title;
                }
                for(var i = 0; i < elementArrText.length; i++){
                  elementArrText[i].innerHTML = data[i].text;
                }
              } else {
            }
          }
        }
      request.send(null);
    },
  }
Json.jsonPlay();

})();
