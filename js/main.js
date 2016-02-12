// The current combination:
var dial1 = 5;
var dial2 = 6;
var dial3 = 2;

$('button')
  .on('click', function() {
    // Increase the number on the dial
    $(this).text((parseInt($(this).text()) + 1) % 10);
    // Check the combination
    checkcombo();
  });

var checkcombo = function() {

  if(($('.one').text() == dial1) && ($('.two').text() == dial2) && ($('.three').text() == dial3)
  ){
  $('body').css('background-color','#bcdd4e');}
    else if(
      (($('.one').text() == dial1) && ($('.two').text() == dial2)) ||
      (($('.one').text() == dial1) && ($('.three').text() == dial3)) ||
      (($('.two').text() == dial2) && ($('.three').text() == dial3)) 
        ){
        $('body').css('background-color','#e3cb67');}

    else if(($('.one').text() == dial1) || ($('.two').text() == dial2) || ($('.three').text() == dial3)){
      $('body').css('background-color','#e69458');}

    else{
      $('body').css('background-color','#d27666');}         


};

