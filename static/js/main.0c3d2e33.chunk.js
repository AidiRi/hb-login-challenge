(this["webpackJsonphomebinder-login"]=this["webpackJsonphomebinder-login"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(8),l=r.n(o),s=(r(14),r(15),r(6)),c=r(1),i=r(2),m=r(4),u=r(3),p=r(5),d=function(){return n.a.createElement("div",{className:"card-footer"},n.a.createElement("p",{id:"help-links"},n.a.createElement("a",{href:"https://www.homebinder.com/passwords/reset",className:"orange-text"},"Forgot my password")," | ",n.a.createElement("a",{href:"https://www.homebinder.com/homeowners/register",className:"orange-text"},"Sign Up")),n.a.createElement("p",{id:"copyright"},"\xa9 2019 HomeBinder"))},h=function(e){var t;return(t=e.Error)?n.a.createElement("p",{className:"error-message"},t):null},b=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:function(t){e.props.handleSubmit(t)}},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"Email Address",value:this.props.FormData.email,required:!0,onChange:function(t){return e.props.handleForm(t)}}),n.a.createElement(h,{Error:this.props.FormData.errors.email}),n.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(t){return e.props.handleForm(t)},value:this.props.FormData.password,onBlur:function(){e.props.validate(null,e.props.FormData.password)}}),n.a.createElement(h,{Error:this.props.FormData.errors.password})),n.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Login")))}}]),t}(a.Component);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleForm=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var r=e.state,a=r.email,n=r.password;return e.validate(a,n)?e.redirect():null},e.validate=function(t,r){var a=!0;e.setState(w({},e.state,{errors:{email:null,password:null}}));return r&&r.length<8&&(e.setState(w({},e.state,{errors:w({},e.state.errors,{password:"Too short"})})),a=!1),a},e.redirect=function(){return alert("Submitted!"),window.location="https://www.homebinder.com/"},e.state={email:"",password:"",errors:{email:null,password:null}},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"card text-center row col-lg-5 col-md-10 "},n.a.createElement("div",{className:"card-header"},n.a.createElement("img",{alt:"HomeBinder Logo",src:"https://www.homebinder.com/img/flatlogo.png"})),n.a.createElement(b,{FormData:this.state,handleForm:this.handleForm,handleSubmit:this.handleSubmit,validate:this.validate}),n.a.createElement(d,null))}}]),t}(a.Component),E=function(e){return n.a.createElement("div",{className:"info-line"},n.a.createElement("p",null,"Need help? No problem!"),n.a.createElement("p",null,"Email ",n.a.createElement("a",{href:"mailto:support@homebinder.com",target:"_top",className:"orange-text"},"support@homebinder.com")," or Call 800-377-6915"))};var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0c3d2e33.chunk.js.map