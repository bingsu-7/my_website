$(function () {
        $(".btn").click(function () {
          $(".btn,.content").removeClass("active");
          $(this).addClass("active");
          $("#" + $(this).data("tab")).addClass("active").css("text-decoration","none")
        });
      });