/**
 * Created by pangang on 2017/2/16.
 */
//    轮播组件
$(function () {
    (function () {

        function Carousel($ct) {
            this.$ct = $ct;
            this.init();
            this.bind();
        }

        Carousel.prototype.init = function() {
            var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
                $preBtn = this.$preBtn = this.$ct.find('.btn-pre'),
                $nextBtn = this.$nextBtn = this.$ct.find('.btn-next'),
                $bullet = this.$bullet = this.$ct.find('.bullet');

            var $firstImg = $imgCt.find('li').first(),
                $lastImg = $imgCt.find('li').last();

            this.curPageIndex = 0;
            this.imgLength = $imgCt.children().length;
            this.isAnimate = false;
            this.imgWidth = $firstImg.width();
            this.autoShow = true;

            //自动滚动
            if (this.autoShow) {
                setInterval(function () {
                    $nextBtn.click();

                },3500)
            }

            $imgCt.prepend($lastImg.clone())
            $imgCt.append($firstImg.clone())

            $imgCt.width($firstImg.width() * this.$imgCt.children().length)
            $imgCt.css({
                'left': '-'+$firstImg.width()
            })
        }
        Carousel.prototype.bind = function() {
            var _this = this;
            this.$preBtn.on('click', function(e) {
                e.preventDefault();
                _this.playPre();
            })

            this.$nextBtn.on('click', function(e) {
                e.preventDefault();
                _this.playNext();
            })
        }
        Carousel.prototype.playPre = function() {
            var _this = this;
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '+='+_this.imgWidth
            }, function() {
                _this.curPageIndex--;
                if (_this.curPageIndex < 0) {
                    _this.$imgCt.css('left', -(_this.imgLength * _this.imgWidth));
                    _this.curPageIndex = _this.imgLength - 1
                    console.log('上一个'+ _this.curPageIndex);
                }
            })
            this.isAnimate = false;
            this.setBullet()
        }
        Carousel.prototype.playNext = function() {
            var _this = this;
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '-='+_this.imgWidth
            }, function() {
                _this.curPageIndex++;
                console.log('_this.curPageIndex 1:'+_this.curPageIndex);
                if (_this.curPageIndex === _this.imgLength) {
                    console.log('_this.imgWidth:'+_this.imgWidth)
                    _this.$imgCt.css({
                        'left': '-'+_this.imgWidth
                    })
                    _this.curPageIndex = 0
                }
            })
            _this.isAnimate = false;
            _this.setBullet();
        }
        Carousel.prototype.setBullet = function() {
            var _this = this;
            console.log('_this.curPageIndex 2:'+_this.curPageIndex)
            this.$bullet.children()
                .removeClass('active')
                .eq(this.curPageIndex)
                .addClass('active')
        }

        $('.carousel').each(function () {
            new  Carousel($(this));
        })
    })()

//搜索框
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
            navbar.css('display', 'block');
            searchContainer.css('display', 'flex');
            searchBar.css('display', 'none')
        })
    })
})

