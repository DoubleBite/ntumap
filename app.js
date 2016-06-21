$(function () {


    var $spot = $(".spot"); //地圖上的一個美食據點
    var $thumbnail = $(".thumbnail");
    var $option_value = $(".inner_option_item");

    //平常隱藏題目與按鈕
    $(".thumbnail").hide();
    $(".btn_to_blog").hide();



    /////////////////////////////////////
    //滑鼠移到美食據點或保持在題目之中，題目彈出來
    $spot.mouseenter(function () {
        $(".thumbnail").hide();
        $(this)
            .find(".thumbnail")
            .slideDown();
    });

    $thumbnail.mouseenter(function () {

        $(this)
            .parent()
            .find(".thumbnail")
            .slideDown();
    });

    //滑鼠移開美食據點，題目縮出回去
    $spot.mouseleave(function () {
        $(this)
            .find(".thumbnail")
            .hide();
    });
    //////////////////////////////////////////




    //檢測選項是否答對
    $option_value.change(function () {

        if (($("input[name='q1']:checked").val()) === "1") {
            $(this)
                .parent()
                .parent()
                .find(".btn_to_blog")
                .show()
                .parent()
                .find(".inner_item")
                .hide();
        } else {
            $(this)
                .parent()
                .parent()
                .find(".btn_to_blog")
                .hide()
                .parent()
                .find(".inner_item")
                .show()
                .text("你這個假文青?")
        }
    });

    //打開地圖
    $(".map").hide();
    $("h1").click(function () {
        $(this)
            .parent()
            .find(".map")
            .slideToggle();
    });





    //    ======
    var _titleHeight = 55;
    $('.abgne_tip_gallery_block').each(function () {
        // 先取得區塊的高及標題區塊等資料
        var $this = $(this),
            _height = $this.height(),
            $caption = $('.caption', $this),
            _captionHeight = $caption.outerHeight(true),
            _speed = 200;

        // 當滑鼠移動到區塊上時
        $this.hover(function () {
            // 讓 $caption 往上移動
            $caption.stop().animate({
                top: _height - _captionHeight
            }, _speed);
        }, function () {
            // 讓 $caption 移回原位
            $caption.stop().animate({
                top: _height - _titleHeight
            }, _speed);
        });
    });

});
