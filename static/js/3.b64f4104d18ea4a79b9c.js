webpackJsonp([3],{"1a1w":function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,".send-btn[data-v-4c1f2366]{height:26px;line-height:24px}.button-con[data-v-4c1f2366]{margin-top:36px}.top-area[data-v-4c1f2366]{margin:30px 0}.login-con[data-v-4c1f2366]{background-size:100% 100%;height:calc(100vh - 46px)}.login-btn[data-v-4c1f2366]{width:60%;margin:12px}.top-logo[data-v-4c1f2366]{width:100px;margin:16px 0}",""])},"3juO":function(n,t,e){var a=e("1a1w");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=e("rjj0").default;o("c4d70b2a",a,!0,{})},X3Oi:function(n,t,e){"use strict";var a=e("mvHQ"),o=e.n(a);t.a={name:"login-page",data:function(){return{userName:"",password:"",smsCode:"",showPassword:!1,loginWay:1,smsCountDown:0,smsCountInterval:null}},computed:{isSendSMSEnable:function(){return this.smsCountDown<=0&&this.userName.length>4},getSendBtnText:function(){return this.smsCountDown>0?this.smsCountDown+"秒后发送":"发送验证码"},canSMSLogin:function(){return this.userName.length>4&&this.smsCode.length>4},canPwdLogin:function(){return this.userName.length>4&&this.password.length>4}},mounted:function(){},beforeDestroy:function(){this.smsCountInterval&&clearInterval(this.smsCountInterval)},methods:{onSMSSend:function(){var n=this;this._showLoading(),setTimeout(function(){n._dismissLoading(),n._showToast("已发送"),n.smsCountDown=60,n.startSMSTimer()},300)},startSMSTimer:function(){var n=this;this.smsCountInterval=setInterval(function(){--n.smsCountDown<=0&&clearInterval(n.smsCountInterval)},1e3)},onSMSLogin:function(){this.onLoginClick()},onLoginClick:function(){var n=this;this._showLoading(),setTimeout(function(){n._dismissLoading(),n.saveUserInfo(),n._showConfirm("登陆成功, 去设置手势密码？",function(){n._routeReplace("GestureCreate")},n._routerBack)},1e3)},saveUserInfo:function(){var n={userName:this.userName};this.$store.commit("setUserInfo",n),localStorage.setItem("userInfo",o()(n))}}}},jYQ7:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("van-nav-bar",{attrs:{"left-arrow":"",title:"登录",fixed:"","z-index":10},on:{"click-left":n._routerBack}}),n._v(" "),e("div",{staticClass:"nav-con align-center login-con",style:{"background-image":"url(static/img/login/login_back.png)"}},[e("div",{staticClass:"top-area"},[e("van-image",{staticClass:"top-logo",attrs:{src:"static/img/login/vant_logo.png"}}),n._v(" "),e("div",[n._v("Vant Finance")])],1),n._v(" "),1==n.loginWay?e("div",[e("van-cell-group",[e("van-field",{attrs:{"left-icon":"static/img/login/login_user.png",required:"",clearable:"",label:"用户名",placeholder:"请输入手机号/用户名(随便填)","label-align":"left",size:"large",maxlength:"20"},model:{value:n.userName,callback:function(t){n.userName=t},expression:"userName"}}),n._v(" "),e("van-field",{attrs:{"left-icon":"static/img/login/login_pass.png",label:"密　码",placeholder:"请输入密码(随便填)",size:"large",required:"",clearable:"",type:n.showPassword?"text":"password",maxlength:"20","right-icon":"static/img/login/eye_"+(n.showPassword?"open":"close")+".png"},on:{"click-right-icon":function(t){n.showPassword=!n.showPassword}},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}})],1),n._v(" "),e("div",{staticClass:"button-con"},[e("van-button",{staticClass:"login-btn",attrs:{type:"danger",round:"",disabled:!n.canPwdLogin},on:{click:n.onLoginClick}},[n._v("登录\n        ")]),n._v(" "),e("van-button",{staticClass:"login-btn",attrs:{type:"danger",plain:"",round:""},on:{click:function(t){n.loginWay=3-n.loginWay}}},[n._v("短信登录")])],1)],1):e("div",[e("van-cell-group",[e("van-field",{attrs:{"left-icon":"static/img/login/login_user.png",required:"",clearable:"",label:"手机号",placeholder:"请输入手机号(随便填)","label-align":"left",size:"large",maxlength:"11"},model:{value:n.userName,callback:function(t){n.userName=t},expression:"userName"}}),n._v(" "),e("van-field",{attrs:{clearable:"",label:"验证码",placeholder:"请输入短信验证码",size:"large","left-icon":"envelop-o",maxlength:"6",required:""},model:{value:n.smsCode,callback:function(t){n.smsCode=t},expression:"smsCode"}},[e("van-button",{staticClass:"send-btn",attrs:{slot:"button",size:"small",plain:"",type:"danger",disabled:!n.isSendSMSEnable},on:{click:n.onSMSSend},slot:"button"},[n._v("\n            "+n._s(n.getSendBtnText)+"\n          ")])],1)],1),n._v(" "),e("div",{staticClass:"button-con"},[e("van-button",{staticClass:"login-btn",attrs:{type:"danger",round:"",disabled:!n.canSMSLogin},on:{click:n.onSMSLogin}},[n._v("登录\n        ")]),n._v(" "),e("van-button",{staticClass:"login-btn",attrs:{type:"danger",plain:"",round:""},on:{click:function(t){n.loginWay=3-n.loginWay}}},[n._v("账号登录")])],1)],1)])],1)},o=[]},kEht:function(n,t,e){"use strict";function a(n){e("3juO")}Object.defineProperty(t,"__esModule",{value:!0});var o=e("X3Oi"),s=e("jYQ7"),i=e("XyMi"),l=a,r=Object(i.a)(o.a,s.a,s.b,!1,l,"data-v-4c1f2366",null);t.default=r.exports},mvHQ:function(n,t,e){n.exports={default:e("qkKv"),__esModule:!0}},qkKv:function(n,t,e){var a=e("FeBl"),o=a.JSON||(a.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}}});