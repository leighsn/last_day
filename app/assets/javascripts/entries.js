
$(function(){
  $('#getEntry').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: '/entries/show',
      method: 'GET'
    }).success(function(data){
      console.log(data);
      $('#name').text(data.name)
      $('#memory').text(data.memory)
      $('#quote').text(data.quote),
      $('#grateful').text(data.grateful),
      $('#learned').text(data.learned);
    })
  })
});
