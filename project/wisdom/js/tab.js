/**
 * Created by pangang on 2017/2/13.
 */
(function () {
    function Tab($ct) {
        this.ct = $ct;
        this.init();
        this.bind();
    }
    Tab.prototype.init = function () {
        this.$tablist = $ct.find('.leveOne li');
        this.$tabPanels = $ct.find('.navList li');
        
        
        
    }
    Tab.prototype.bind = function () {
        var _this = this;
        
        this.$tablist.each(function (tabli) {
            
            tabli.on('click',function (e)
                var target = e.target;
                var index = [].indexOf.call(_this.$tablist,target);
                _this.$tablist.each(function (li) {
                    li.classList.remove('active');
                })
                target.classList.add('active');
                _this.$tabPanels.each(function (panel) {
                    panel.classList.remove('active');
                })
                _this.$tabPanels[index].classList.add('active');
                
            })
        })
        
    }
    var tab1 = new Tab('.levelOne');
    
    
    
})()