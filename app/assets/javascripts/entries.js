
$(function(){
  $('#getEntry').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: '/entries/show',
      method: 'GET'
    }).success(function(data){
      console.log(data);
      $('#name').text(data.name)
      if(data.memory !== null){
         $('#memory').text(data.memory).show()}
         else {
           $('#memory').hide()}
        if(data.quote !== null){
              $('#quote').text(data.quote).show()}
              else {
                $('#quote').hide()}
        if(data.grateful !== null){
                   $('#grateful').text(data.grateful).show()}
                   else {
                     $('#grateful').hide()}
      if(data.learned !== null){
            $('#learned').text(data.learned).show()}
              else {
                  $('#learned').hide()}
    })
  })

});
