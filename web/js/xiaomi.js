$(function () {
    //鼠标移入改变颜色并显示对应分类下的所有物品
    $("#body-left>ul>li").mouseover(function () {
        $(this).css("background","orange")
        $("#body-right").show()
    }).mouseout(function () {
        $(this).css("background","#a5a3a3")
        $("#body-right").hide()
    })

    $("#nav>ul>li").mouseover(function () {
        $(this).css("color","orange")
        $("#showH").stop().slideDown()
    }).mouseout(function () {
        $(this).css("color","#333")
        $("#showH").stop().slideUp()
    })

    $("#showH").mouseover(function () {
        $("#showH").stop().show()
    }).mouseout(function () {
        $("#showH").stop().hide()
    })
    //登入注册改变
    $("#login").click(function () {
        $("#LForm").slideDown()
        $("#RForm").hide()
    }).mouseover(function () {
        $(this).css("color","#3c88ff")
    }).mouseout(function () {
        $(this).css("color","#9081F1")
    })
    $("#register").click(function () {
        $("#LForm").hide()
        $("#RForm").slideDown()
    }).mouseover(function () {
        $(this).css("color","#3c88ff")
    }).mouseout(function () {
        $(this).css("color","#9081F1")
    })
})