/**
 * Created by pangang on 2017/2/16.
 */
//    轮播组件
$(function () {
    //轮播组件
    (function () {

        function Carousel($ct) {
            this.$ct = $ct;
            this.init();
            this.bind();
        }

        Carousel.prototype.init = function () {
            var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
                $preBtn = this.$preBtn = this.$ct.find('.btn-pre'),
                $nextBtn = this.$nextBtn = this.$ct.find('.btn-next'),
                $bullet = this.$bullet = this.$ct.find('.bullet');

            var $firstImg = $imgCt.find('li').first(),
                $lastImg = $imgCt.find('li').last();

            this.curPageIndex = 0;  //记录当前页面
            this.imgLength = $imgCt.children().length;  //轮播页面的个数
            this.isAnimate = false;  //阻止连按
            this.imgWidth = $firstImg.width();  //单个页面的宽

            //hover时显示pre,next按钮
            (this.$ct).hover(function () {
                //显示pre,next按钮
                $preBtn.css('visibility', 'visible');
                $nextBtn.css('visibility', 'visible');
            }, function () {
                //不显示pre,next按钮
                $preBtn.css('visibility', 'hidden');
                $nextBtn.css('visibility', 'hidden');
            })
            //5-0~5-0
            $imgCt.prepend($lastImg.clone())
            $imgCt.append($firstImg.clone())
            $imgCt.width($firstImg.width() * this.$imgCt.children().length)
            $imgCt.css('left', '-' + this.imgWidth + 'px')
        }
        Carousel.prototype.bind = function () {
            var _this = this;
            var timer = null;
            timer = window.setInterval(function () {
                _this.playNext(1);
            }, 1000);

            this.$preBtn.on('click', function (e) {
                e.preventDefault();
                clearInterval(timer);
                _this.playPre(1);

            })
            this.$nextBtn.on('click', function (e) {
                e.preventDefault();
                clearInterval(timer);
                _this.playNext(1);
            });

            this.$bullet.children().each(function (index, element) {
                $(this).hover(function (e) {
                    var number = $(this).index();
                    clearInterval(timer);
                    if (_this.curPageIndex < number) {
                        _this.playNext(number - _this.curPageIndex)
                    } else if (_this.curPageIndex > number) {
                        _this.playPre(_this.curPageIndex - number)
                    }
                }, function (e) {

                })
            })
        }
        //暂时没有想到比较好的方法
        Carousel.prototype.playPre = function (index) {
            var _this = this;
            //阻止连按
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '+=' + _this.imgWidth * index + 'px'
            }, function () {
                _this.curPageIndex -= index;
                if (_this.curPageIndex < 0) {
                    _this.$imgCt.css('left', -(_this.imgLength * _this.imgWidth) + 'px');
                    _this.curPageIndex = _this.imgLength - 1
                }
                _this.isAnimate = false;
                _this.setBullet()
            })
        }
        Carousel.prototype.playNext = function (index) {
            var _this = this;
            //阻止连按
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '-=' + _this.imgWidth * index + 'px'
            }, function () {
                _this.curPageIndex += index;
                if (_this.curPageIndex === _this.imgLength) {
                    _this.$imgCt.css({
                        'left': '-' + _this.imgWidth + 'px'
                    })
                    _this.curPageIndex = 0
                }
                _this.isAnimate = false;
                _this.setBullet();
            })
        }
        Carousel.prototype.setBullet = function () {
            var _this = this;
            this.$bullet.children()
                .removeClass('active')
                .eq(this.curPageIndex)
                .addClass('active')
        }
        $('.carousel').each(function () {
            new Carousel($(this));
        })
    })();

    //搜索框
    (function () {
        var searchClose = $('.search_close');
        var searchBtn = $('.search_contaioner .search_image');
        var searchBar = $('.search_bar');
        var searchContainer = $('.search_contaioner');
        var navbar = $('.navigation_bar');
        $(function () {
            searchBtn.on('click', function () {
                navbar.css('display', 'none');
                searchContainer.css('display', 'none');
                searchBar.css('display', 'block')
                searchClose.css('display','block')
            })
            searchClose.on('click', function () {
                $(this).css('display','none');
                navbar.css('display', 'flex');
                searchContainer.css('display', 'flex');
                searchBar.css('display', 'none')
            })
        })
        //有网时发ajax请求,获取搜索提示
        
    })();
    
})

