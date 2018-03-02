$(function(){


	var accessToken = '934772120.71b5544.eb80b17ef6e3469ba9fe34685b5e4a82';
    var userid = 934772120; // ユーザーID
    var count = $('#Instagram').find('#insta-list').data('count');

    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + accessToken + '&count=' + count,
        dataType: 'jsonp',
        success: function(data) {
					// console.log(data.url);
            var insert = '';
            for (var i = 0; i < data['data'].length; i++) {
                insert += '<li>';
                    // 画像とリンク先
                    insert += '<a href="' + data['data'][i]['link'] + '" target="_blank">';
                    insert += '<img src="' + data['data'][i]['images']['low_resolution']['url'] + '"  alt="" width="345" height="345">';
                    insert += '</a>';
                insert += '</li>';
            };
            $('#Instagram').find('#insta-list').append(insert);
        }
    });




});
