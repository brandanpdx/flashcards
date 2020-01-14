$(document).ready(function() {
  $(".panel").click(function() {
    $(".def").fadeOut();
    $(".def", this).fadeToggle();
  })
})