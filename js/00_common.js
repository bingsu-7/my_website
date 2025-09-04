$(".menu, .snb").hover(
  function () {
    $(".snb").css("display", "block");
  },
  function () {
    $(".snb").css("display", "none");
  }
);
// fab
 // 천천히 위로 사용법: $("html").animate({scrollTop: 0},시간);
    $(function () {
        $("#fab").click(function () {
            //#fab 를 클릭하면
            $("html,body").animate({scrollTop: 0},1000);
        })
    })