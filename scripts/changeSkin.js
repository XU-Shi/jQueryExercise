$(function () {
    var $li = $("#skin li");
    $li.click(function () {
        switchSkin(this.id);
    });
    // var cookie_skin = $.cookie("MyCssSkin");
    // if (cookie_skin) {
    //     switchSkin(cookie_skin);
    // }
});

function switchSkin(skinName) {
    $("#" + skinName).addClass("selected")
        .siblings().removeClass("selected");    //siblings()选取除自己外所有同级元素,即对同级元素进行反选
    $("#cssfile").attr("href", "styles/skin/" + skinName + ".css");//设置不同皮肤
    $.cookie("MyCssSkin", skinName, {path: '/', expires: 10});
}