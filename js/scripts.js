$(function() {
  $('a.dale').click(function() {
    $('div.text').removeClass("on").addClass("off");
    $('div.cooper').removeClass("off").addClass("on");
  });
  $('a.windom').click(function() {
    $('div.text').removeClass("on").addClass("off");
    $('div.earle').removeClass("off").addClass("on");
  });
  $('a.james').click(function() {
    $('div.text').removeClass("on").addClass("off");
    $('div.donna').removeClass("off").addClass("on");
  });
  $('a.margaret').click(function() {
    $('div.text').removeClass("on").addClass("off");
    $('div.log').removeClass("off").addClass("on");
  });
  smoothScroll.init();
});