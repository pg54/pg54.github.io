(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eeae93d"],{"1fb7":function(t,e,a){"use strict";var i=a("efdf"),s=a.n(i);s.a},"7f7f":function(t,e,a){var i=a("86cc").f,s=Function.prototype,n=/^\s*function ([^ (]*)/,c="name";c in s||a("9e1e")&&i(s,c,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},e379:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"课程1","left-text":"返回","right-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.vip,expression:"vip"}],staticClass:"chimee-container"},[a("video",{attrs:{tabindex:"-1"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.vip,expression:"!vip"}],staticClass:"alive_img"},[a("img",{attrs:{src:t.bannerImg,alt:"",srcset:""}})]),a("div",{staticClass:"relate-lesson"},[t._m(0),a("div",{staticClass:"item"},[t._m(1),a("van-icon",{staticClass:"item-right",attrs:{name:"arrow",size:"16px"}})],1),a("div",{staticClass:"item"},[t._m(2),a("van-icon",{staticClass:"item-right",attrs:{name:"arrow",size:"16px"}})],1)]),t._m(3),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.vip,expression:"!vip"}],staticClass:"muti_btn_box"},[a("div",{staticClass:"btn-item one green",on:{click:t.buy}},[t._v("购买¥199.00")])]),a("div",{staticClass:"navigation_menu",on:{click:t.gohome}},[a("van-icon",{attrs:{name:"home-o",color:"#FFFFFF",size:"12"}}),a("span",{staticClass:"navigation_menu_txt"},[t._v("回到首页")])],1),a("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-loading",{attrs:{type:"spinner"}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-title"},[t._v("相关频道")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-left"},[a("img",{staticClass:"item-img",attrs:{src:"http://wechatapppro-1252524126.file.myqcloud.com/image/4df1174fdce97d903ac18da1094d1718.png",alt:""}}),a("div",{staticClass:"item-text__wrap"},[a("div",{staticClass:"item-title"},[t._v("桃子课堂年费VIP")]),a("div",{staticClass:"item-tip"},[t._v("39期更新")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-left"},[a("img",{staticClass:"item-img",attrs:{src:"http://wechatapppro-1252524126.file.myqcloud.com/appzUsu9tFv6907/image/970fbaf25505060aa8d9a189a5e9e401.png",alt:""}}),a("div",{staticClass:"item-text__wrap"},[a("div",{staticClass:"item-title"},[t._v("十天分享训练营（价值2万）")]),a("div",{staticClass:"item-tip"},[t._v("11期更新")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alive_word"},[a("div",{staticClass:"aliveSummary"},[a("p",{staticClass:"aliveTitle"},[t._v("直通车定向投产如何优化")])]),a("div",{staticClass:"aliveDesc-cnt"},[a("div",{staticClass:"aliveDesc "},[a("div",{staticClass:"aliveDesc_summary"},[t._v("直通车定向投产如何优化")]),a("div",{staticClass:"aliveDesc_count"},[a("img",{attrs:{src:"https://static-resource.xiaoeknow.com/images/alive_icon/icon_liveNumber_desc.png",alt:""}}),a("span",[t._v("203人次")])])])])])}],n=(a("7f7f"),{name:"prd",data:function(){return{vip:!1,show:!1,userId:this.$route.params.userId,bannerImg:"http://wechatapppro-1252524126.file.myqcloud.com/appzUsu9tFv6907/image/5d6e6e90a57ea6b226d56c72968045a4.png"}},methods:{buy:function(){var t=this;t.show=!0,setTimeout(function(){t.show=!1,t.$toast.success("购买成功"),t.vip=!0},1200)},onClickLeft:function(){this.$router.go(-1)},gohome:function(){this.$router.push({path:"/"})}},mounted:function(){var t=ChimeePlayer.popupFactory({name:"time-ad",className:"time-ad",title:!1,body:'<em>广告示例</em><a href="https://jia.360.cn" target="_blank"><img src="https://p.ssl.qhimg.com/t018fe4570caeb23e44.png"></a>',offset:"0px 10px auto auto",operable:!1});ChimeePlayer.install(t);new ChimeePlayer({wrapper:".chimee-container",src:"http://poa939ahj.bkt.clouddn.com/1.mp4",isLive:!1,box:"native",autoplay:!1,controls:!0,plugin:[t.name]})}}),c=n,r=(a("1fb7"),a("2877")),o=Object(r["a"])(c,i,s,!1,null,null,null);o.options.__file="prd.vue";e["default"]=o.exports},efdf:function(t,e,a){}}]);