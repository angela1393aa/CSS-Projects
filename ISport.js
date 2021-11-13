// 漢堡選單
$("#menu").on("click", function () {
  $("nav").toggle();
});
//
$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
