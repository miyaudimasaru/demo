$(function(){$.ajax({url:"header.html",dataType:"html"}).done(function(a){$("#header_ajax").html(a)}).fail(function(a){$("#header_ajax").html(a)})});