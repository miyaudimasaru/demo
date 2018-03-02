$(function(){

	//insta ajax

      var accessToken = '934772120.71b5544.eb80b17ef6e3469ba9fe34685b5e4a82';
      var userid = "934772120"; // ユーザーID
      var count = $('#Instagram').find('#insta-list').data('count');

	    var playAjax = function(){

	      $.ajax({
	        type: 'POST',
	        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + accessToken + '&count=' + count,
	        dataType: 'jsonp',
	      })
	      .done(function(object) {
          console.log(object);
	        var insert = '';
	        for (var i = 0; i < object['data'].length; i++) {
	            insert += '<li class="insta_target fleft">';
	                // 画像とリンク先
	                // insert += '<a href="' + object['data'][i]['link'] + '" target="_blank">';
	                insert += '<img src="' + object['data'][i]['images']['low_resolution']['url'] + '"  alt="" width="345" height="345">';
	                // insert += '</a>';
	            insert += '</li>';
	        };
					$('#Instagram').find('#insta-list').append(insert);
	      });


	    };
	    playAjax();


//fricer ajax

				var apiKey = "e6df422f114dae74edcead1ffebb80e8";

				var getUrl = function(photo, size) {
				    var url = "https://farm" + photo.farm + ".staticflickr.com/" +
				        photo.server + "/" + photo.id + "_" + photo.secret;
				    if (size) {
				        url += "_" + size;
				    }
				    url += ".jpg";
				    return url;
				};

				var parameters = $.param({
				    method: "flickr.photos.search",
				    api_key: apiKey,
				    text: "sea",
				    per_page: 4,
				    sort: "interestingness-desc",
				    license: "3",
				    format: "json",
				    nojsoncallback: 1,
				});

				var flickr_url_1 = "https://api.flickr.com/services/rest/?" + parameters;

				var callback = function(data) {

				    var ul = $("<ul class='flickr_box'>");
				    var md = $("#flickr_ajax");

				        for (var i = 0; i <= data.photos.photo.length-1; i++) {
				            var pict = data.photos.photo[i];
				            ul.append($("<li class=flickr_target>").append($("<img>", {
				                src: getUrl(pict, "q"),
				            }))
				          );
				        }

			        md.append(ul);
							var appendP = $('.flickr_box').find('.flickr_target').append("<p class=text>");
							var textP = $('.flickr_box').find('.text');
							var Intext = textP.html("TEXT TEXT TEXT TEXT TEXT TEXT");


				}

				var call_api = function(data){

				  $.ajax({
				    url:flickr_url_1,
				      type: "POST",
				      dataType: "json",
				  })
					.done(function(data){
				    callback(data);
				  })
					.fail(function(data){
				    callback(data);
				  });
				}
				call_api();


});
