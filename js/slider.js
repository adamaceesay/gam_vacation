
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

//when the user scroll the page, execute myFunction
window.onscroll = function() {myFunction()};

//Get the header
var header = document.getElementById("myHeader");

//Get the offset position of the navbar
var sticky = headeroffsetTop

//Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if(window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky")
  }
}