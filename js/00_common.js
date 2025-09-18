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
// 버튼 누르면 내용 바뀜
    $(function () {
        $(".btn").click(function () {
          $(".btn,.content").removeClass("active");
          $(this).addClass("active");
          $("#" + $(this).data("tab")).addClass("active").css("text-decoration","none")
        });
      });