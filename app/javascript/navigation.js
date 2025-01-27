$(function() {
  $('#toggleButton').on('click', function() {
    $('#sidebar').toggleClass('collapsed');
    $('#content').toggleClass('collapsed');
  });
});