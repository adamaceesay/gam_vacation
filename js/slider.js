
//Slider function
$(document).ready(function() {
  var currentSlide = 1;
  var $mySlider = $(".image_slides");
  var slideCount = $mySlider.children().length;
  var slideTime = 3000;
  var animationTime = 1500;

  setInterval(function() {
    $mySlider.animate({
      marginLeft : '-=900px'
    }, animationTime, function() {
      currentSlide++;
      if(currentSlide == slideCount) {
        currentSlide = 1;
        $(this).css("margin-left", "0px");
      }
    });
  }, slideTime);

});
