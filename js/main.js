$(document).ready(function(){

  $('h1').hide().delay(500).fadeIn(1400);

console.log('Document Ready!');
  //click on the hamburger menu
  $('.fa-bars').click(function(){
    // log
    console.log('Hamburger clicked!');

  //change visibility of navigation
  $('#mobile-nav').css({
    visibility:'visible'
  });

  });
  //click the 'x'
  //close the mobile navigation

});
