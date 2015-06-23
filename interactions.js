$('document').ready(function(){

  $('.toggle_nav').on('mouseover', function(){
    $(this).children(':nth-child(2)').removeClass('hidden');
  });
  $('.toggle_nav').on('mouseleave', function(){
    $(this).children(':nth-child(2)').addClass('hidden');
  });

});
