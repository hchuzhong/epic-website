(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[12],{335:function(e,a,n){"use strict";n.r(a);var t=n(17),r=n(0),s=n.n(r),i=n(337),l=n(339),o=n(161),u=n(18),c=n(64),m=n(3);function p(){var e=Object(t.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]);return p=function(){return e},e}function d(){var e=Object(t.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 20px;\n"]);return d=function(){return e},e}var f=u.a.div(d()),b=u.a.h1(p()),g={labelCol:{span:6},wrapperCol:{span:18}},h={wrapperCol:{offset:6,span:18}};a.default=function(){var e=Object(c.a)().AuthStore,a=Object(m.f)();return s.a.createElement(f,null,s.a.createElement(b,null,"\u6ce8\u518c"),s.a.createElement(i.a,Object.assign({},g,{name:"basic",onFinish:function(n){e.setUsername(n.username),e.setPassword(n.password),e.register().then((function(){a.push("/")})).catch((function(){}))},onFinishFailed:function(e){}}),s.a.createElement(i.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u7528\u6237\u540d\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\uff0c\u6570\u5b57\u548c\u4e0b\u5212\u7ebf"):a.length<4||a.length>10?Promise.reject("\u7528\u6237\u540d\u7684\u957f\u5ea6\u57284~10\u4e2a\u5b57\u7b26\u4e4b\u95f4"):Promise.resolve()}}]},s.a.createElement(l.a,null)),s.a.createElement(i.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u591a10\u4e2a\u5b57\u7b26"}]},s.a.createElement(l.a.Password,null)),s.a.createElement(i.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u8bf7\u518d\u6b21\u786e\u8ba4\u5bc6\u7801"},function(e){var a=e.getFieldValue;return{validator:function(e,n){return a("password")===n?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}]},s.a.createElement(l.a.Password,null)),s.a.createElement(i.a.Item,h,s.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}}]);
//# sourceMappingURL=12.c34304fe.chunk.js.map