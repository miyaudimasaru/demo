$(function(){

    var header = function(){
      $.ajax({
          url　: 'header.html',
          dataType : 'html',
      })
      .done(function(data){
        $("#header_ajax").html(data);

      })
      .fail(function(data){
        $('#header_ajax').html(data);

      });
    };
    header();

});
