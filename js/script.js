wow = new WOW(
  {
                     
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();








$(document).ready(function(){
   $('.counter').counterUp({
    delay: 10,
    time: 1000
});
})

$(document).ready(function(){

  $("#demo").vc3dEye({
  imagePath:"images/car.png", // the location where you’ve put the images.
  totalImages:51, // the number of images you have.
  imageExtension:"png" // the extension of the images. Make sure all the images have same extension.
});

});