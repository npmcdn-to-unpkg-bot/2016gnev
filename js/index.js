//创建地图
map = new BMap.Map("map_point");
map.centerAndZoom(new BMap.Point(121.572673,31.212917),15);
//设置地图事件
map.enableScrollWheelZoom();
map.enableKeyboard();
map.enableDragging();
map.enableDoubleClickZoom()
//向地图添加覆盖物
var marker = new BMap.Marker(new BMap.Point(121.572673, 31.212917));
map.addOverlay(marker);
//向地图添加控件
var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
map.addControl(scaleControl);
var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
map.addControl(navControl);

!(function(){

    function scrollTo(target) {
        var $target = $(target);
        $("html,body").animate({
            scrollTop: $target.offset().top-80
        }, 'slow')
    }
//拿到sectionTopList
    var $amTopbar = $('.am-collapse');
//nav click
    $amTopbar.on('click', '.am-nav a', function (e) {
        e.preventDefault();
        var $a = $(this);
        var target = $a.attr('href');
        $target = $(target);
        scrollTo($target)
    });
    $amTopbar.on('click','.am-nav',function(){
        $(this).closest('.am-collapse').removeClass('am-in')
    });
    $amTopbar.on('touchmove',function(){
        var $Topbar=$(this);
        setTimeout(function(){
            $Topbar.closest('.am-collapse').removeClass('am-in')
        },1000)
    });
    $('.jion').click(function(){
        $(this).find(".jion--re").toggleClass("jion--rev")
    })

})();


