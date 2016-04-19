
$(function(){
  $('#getEntry').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: '/entries/show',
      method: 'GET'
    }).success(function(data){
      console.log(data);
      $('#name').text(data.name);
    })
  })
});
