jQuery(document).ready(function($){
  $('.main').css('margin-top', function() {
    return ($(window).height() - $(this).height()) / 2;
  });
});
