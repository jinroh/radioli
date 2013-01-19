$(function() {
  var play = $('#play');
  play.click(function(event) {
    $.post('/play', { id: 123 });
    event.preventDefault();
  });
});
