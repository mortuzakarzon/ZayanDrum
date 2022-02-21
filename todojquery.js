$(document).ready(function(){
  $('#input').change(function(){
    var input = $(this).val();
    $('ul').append('<li>' + input + ' <img src="images/check.png"> <img src="images/delete.png"></li>');
    $(this).val('');

  });
});
