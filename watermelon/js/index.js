$(function(){
    getWindow();
    $(window).resize(function(){
        getWindow();
    });
    
    // 点击弹出框外区域关闭
    $(document).click(function(){
        closeDialog();   
    })
    // 防止弹出框div和按钮div冒泡
    $(".dialogBox,.btn").click(function(){
        return false;
    })
});

// 获取可视化窗口宽高
function getWindow(){
    let innerHeight = $(window).height();
    let innerWidth = $(window).width();
    let headerHeight = $("header").height();
    let footerHeight = $("footer").height();
    let leftWidth = $("#left").width();

    let contentHeight = innerHeight - headerHeight -footerHeight;
    $("#content").height(contentHeight);
    let rightWidth = innerWidth - leftWidth;
    $("#right").width(rightWidth);
}

// 弹出倒计时对话框
function openDialog(){
    $(".dialogBox").fadeIn();
}
// 关闭倒计时对话框
function closeDialog(){
    $(".dialogBox").fadeOut();
}

// 倒计时功能开始
function start(){
    closeDialog();
    $(".btn").attr("disabled",true);
    $(".countBox").show();
    $(".countBox").animate({
        'top':'50%'
    },1000);
    setTimeout(function(){
        $(".countBox span.minute").text("00:");
        $(".countBox span.second").text("59");
        countDown();
    },1000)
}
function countDown(){
    var count = 59;
    var timer;
    timer = setInterval(function () {
      if (count > 0) {
        count--;
        if(count < 10){
            $(".countText > span.second").text("0"+count);
            $(".countText").css({"color":"red"});
        }else{
            $(".countText > span.second").text(count);
            $(".countText").css({"color":"#000"});
        }
      }else {
        clearInterval(timer);
        $(".countBox").fadeOut(1000);
        setTimeout(function(){
            $(".countBox").css({
                'top':'0%'
            });
        },1000);
        $(".btn").attr("disabled",false);
      }
    }, 1000);
    
    
}
