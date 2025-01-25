$(function() {
  $('#toggleButton').on('click', function() {
    console.log('abcd');
    $('#sidebar').toggleClass('collapsed');
    $('#content').toggleClass('collapsed');
  });
});