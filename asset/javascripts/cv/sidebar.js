/**
 * Created by pangang on 2017/1/20.
 */
$(function () {
    $('.sideNavbar nav').on('click',function (e) {
        var target = $( e.target );
        console.log(target);
        var str = '.' + target.attr('id') + '_section';
        $('html,body').animate({
            scrollTop: $(str).offset().top
        },1000);
    })
})
