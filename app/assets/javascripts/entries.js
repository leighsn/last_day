
$(function(){
      $('.new_message').on('submit', function(event){
        event.preventDefault();
        event.stopPropagation();
        $.ajax({
          url: '/entries/index',
          method: 'GET',
          data: data
        }).success(function(data){
          $('#message_content').val("data");
        })
      });
