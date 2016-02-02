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

  if ($('one' == 2)) { $('.dial').css('background-color', 'blue');
  }



  });

var checkcombo = function() {
  // Each time a button is clicked, check the combo:
  // If no number are correct, the background should be #d27666
  // If any one number is correct, the background should be #e69458
  // if any two numbers are correct, the background should be #e3cb67
  // If any three numbers are correct, the background should be #bcdd4e

  

};

