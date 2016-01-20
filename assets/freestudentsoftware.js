$(function() {
  setTimeout(function() {
    $('#splash').fadeOut(function() {
      $(this).remove();
    });
  }, 1000);
});