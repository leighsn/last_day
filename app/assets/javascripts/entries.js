
$(function(){
  $('#getEntry').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: '/entries/show',
      method: 'GET'
    }).success(function(data){
      $('#welcome').hide();
      $('#name').text(data.name + " says...")
      if (data.memory) {
        $('#memory').text("My favorite Ian memory is " + data.memory).show()
      }
      else {
        $('#memory').hide()
      }
      if (data.quote){
        $('#quote').text("my favorite Ian quote is " + data.quote).show()
      }
      else {
        $('#quote').hide()
      }
      if (data.grateful){
        $('#grateful').text("I'm grateful to Ian for " + data.grateful).show()
      }
      else {
        $('#grateful').hide()
      }
      if (data.learned){
        $('#learned').text("Ian taught me " + data.learned).show()
      }
      else {
        $('#learned').hide()
      }
    })
  })
});
