(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("Message",{attrs:{show:s.msgShow,type:s.msgType,msg:s.msg},on:{"update:show":function(t){s.msgShow=t}}})],1)},n=[],a=(e("053b"),{name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1}},beforeRouteEnter:function(s,t,e){var o=t.name,n=s.params.logout;e((function(s){if(s.$store.state.auth)switch(o){case"Register":s.showMsg("注册成功");break;case"Login":s.showMsg("登录成功")}else n&&s.showMsg("操作成功")}))},computed:{auth:function(){return this.$store.state.auth}},watch:{auth:function(s){s||this.showMsg("操作成功")}},methods:{showMsg:function(s){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=s,this.msgType=t,this.msgShow=!0}}}),h=a,u=e("9ca4"),c=Object(u["a"])(h,o,n,!1,null,"2ba2271e",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.c797cd5f.js.map