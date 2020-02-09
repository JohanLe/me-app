(this["webpackJsonpme-app-front"]=this["webpackJsonpme-app-front"]||[]).push([[0],{49:function(e,t,a){e.exports=a(90)},54:function(e,t,a){},87:function(e,t){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(45),l=a.n(s),o=(a(54),a(18)),c=a(11),i=a(1),m=a(2),u=a(4),p=a(3),h=a(5),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(o.b,{exact:!0,to:this.props.url,className:this.props.className}," ",this.props.text," ")}}]),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"link_container"},r.a.createElement(d,{exact:!0,url:"/",text:"Home",class:"header_link"}),r.a.createElement(d,{url:"/reports/week/1",text:"Reports",class:"header_link"}),r.a.createElement(d,{url:"/register",text:"Register",class:"header_link"}),r.a.createElement(d,{url:"/login",text:"Login",class:"header_link"}),r.a.createElement(d,{url:"/chat",text:"Chat",class:"header_link"})))}}]),t}(r.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header_reports"},r.a.createElement(d,{url:"/reports/week/1",text:"Week1",className:"report_week_link"}),r.a.createElement(d,{url:"/reports/week/2",text:"Week2",className:"report_week_link"}),r.a.createElement(d,{url:"/reports/week/3",text:"Week3",className:"report_week_link"}),r.a.createElement(d,{url:"/reports/week/4",text:"Week4",className:"report_week_link"}),r.a.createElement(d,{url:"/reports/week/5",text:"Week5",className:"report_week_link"}),r.a.createElement(d,{url:"/reports/week/6",text:"Week6",className:"report_week_link"}),r.a.createElement(d,{url:"/reports/week/7",text:"Week7",className:"report_week_link"}))}}]),t}(r.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null," \xa92019 Johan Ledel"))}}]),t}(r.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"home article"},r.a.createElement("div",{className:"article_header"},r.a.createElement("h2",null,"Om mig")),r.a.createElement("div",{className:"article_main_content"},r.a.createElement("p",null,"Mitt namn \xe4r Johan Ledel, 27\xe5r gammal. Bor I halmstad och l\xe4ser Webbprogrammering p\xe5 BTH p\xe5 Distans sedan h\xf6sten 2018."),r.a.createElement("p",null,"N\xe4r jag inte studerar eller arbetar p\xe5 Clas Ohlson spenderar jag mycket tid p\xe5 golfbanan. Mycket av min tid och planering av gym tr\xe4ning g\xe5r till att f\xf6rb\xe4ttra min golf \xe4ven om det bara \xe4r p\xe5 en hobby niv\xe5. M\xe5let \xe4r att komma ner under 4hcp innan s\xe4songen 2021 \xe4r \xf6ver.")))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).getReport=function(){var e=a.props.match.params.kmom;fetch("http://localhost:8333/reports/"+e,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return console.log("Success I guess"),e.json()})).then((function(e){if(console.log(e),e.data){var t=JSON.parse(e.data.text);a.setState({report:t})}else{var n=JSON.parse('[{"question":"Press edit to add new report"}]');a.setState({report:n})}}))},a.state={report:[],kmom:a.props.match.params.kmom},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getReport()}},{key:"componentDidUpdate",value:function(e){e.match.params.kmom!==this.props.match.params.kmom&&this.getReport()}},{key:"render",value:function(){var e="/reports/edit/"+this.props.match.params.kmom,t=this.state.report;return r.a.createElement("article",{className:"article"},r.a.createElement("div",{className:"article_header"},r.a.createElement("h2",null,"REPORTS"),r.a.createElement(b,null),r.a.createElement(d,{url:e,text:"Edit report",className:"report_week_link"})),r.a.createElement("div",{className:"article_main_content"},r.a.createElement((function(){return t.map((function(e,t){return r.a.createElement("div",{className:"question",key:t},r.a.createElement("p",null,r.a.createElement("strong",null,e.question)),r.a.createElement("p",null,e.answer))}))}),null)))}}]),t}(r.a.Component),k=a(19);function j(e){console.log("Term and conditions"),e.preventDefault()}var O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).validateYear=function(e){return isNaN(e)?(a.setState({errorMessage:"Not a number"}),!1):!(e.length<4)&&(a.setState({errorMessage:!1}),!0)},a.validateMonth=function(e){var t=e.slice(-2);return isNaN(t)?(a.setState({errorMessage:"Not a number"}),!1):!(e.length<7)&&(a.setState({errorMessage:!1}),!0)},a.validateDay=function(e){var t=e.slice(5,7);return isNaN(t)?(a.setState({errorMessage:"Not a number"}),!1):(a.setState({errorMessage:!1}),!0)},a.validateBirthdate=function(e){var t=e.target.value;t.length<a.state.birthdate.length||(t.length<5&&a.validateYear(t)?t+="-":5<t.length&&t.length<8&&a.validateMonth(t)?t+="-":t.length>7&&a.validateDay(t)),a.setState({birthdate:t})},a.changeHandler=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(k.a)({},t,n))},a.handleSubmit=function(e){console.log("HANDLE SUBMIT!"),e.preventDefault(),fetch("http://localhost:8333/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({fullname:a.state.fullname,email:a.state.email,password:a.state.password,birthdate:a.state.birthdate})}).then((function(){console.log("WHAHSH"),console.log("APP "),console.log("Success")})).catch((function(e){console.log(e),console.log("error")}))},a.state={email:"",password:"",fullname:"",birthdate:"",errorMessage:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"register_container"},r.a.createElement("form",{className:"form_register",method:"post",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"input_label"},"Name",r.a.createElement("input",{required:!0,name:"fullname",type:"text",onChange:this.changeHandler})),r.a.createElement("label",{className:"input_label"},"Email",r.a.createElement("input",{required:!0,name:"email",type:"email",onChange:this.changeHandler})),r.a.createElement("label",{className:"input_label"},"Password",r.a.createElement("input",{required:!0,name:"password",type:"password",onChange:this.changeHandler})),r.a.createElement("div",{className:"date_picker_container"},r.a.createElement("label",{className:"input_label"},r.a.createElement("span",null,"Birthdate "),r.a.createElement("span",{className:"small_description_text"},"e.g. 1900-01-01 (Y-M-D)"),r.a.createElement("input",{required:!0,type:"year",name:"birthdate",value:this.state.birthdate,onChange:this.validateBirthdate,maxLength:"10"}),r.a.createElement("p",{className:"error_message"},this.state.errorMessage," "))),r.a.createElement("div",{className:"terms_and_conditions_text"},r.a.createElement("label",null,"I accept ",r.a.createElement("a",{href:"/register",onClick:j,className:"form_link"}," Terms and Conditions")),r.a.createElement("input",{name:"gdpr",required:!0,type:"checkbox"})),r.a.createElement("input",{name:"register",type:"Submit",defaultValue:"Register",className:"button_submit"})))}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleOnChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(k.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault(),fetch("http://localhost:8333/auth/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){console.log(e),console.log("Save token"),localStorage.setItem("jwt",e.data.token),console.log(localStorage.getItem("jwt"))}))},a.state={email:"",password:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login_container"},r.a.createElement("form",{className:"form_login",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"input_label"},"Email",r.a.createElement("input",{required:!0,name:"email",type:"email",onChange:this.handleOnChange})),r.a.createElement("label",{className:"input_label"},"Password",r.a.createElement("input",{required:!0,name:"password",type:"password",onChange:this.handleOnChange})),r.a.createElement("input",{name:"register",type:"Submit",defaultValue:"Register",className:"button_submit"})))}}]),t}(r.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"question_input_container"},r.a.createElement("label",null,"Question",r.a.createElement("textarea",{id:this.props.index,name:"question",type:"textarea",onChange:this.props.triggerQuestion,defaultValue:this.props.question})),r.a.createElement("label",null,"Answer",r.a.createElement("textarea",{id:this.props.index,name:"answer",type:"textarea",onChange:this.props.triggerAnswer,defaultValue:this.props.answer})))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).getReport=function(){fetch("http://localhost:8333/reports/"+a.state.kmom,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if(e.data){var t=JSON.parse(e.data.text).map((function(e,t){return e.id=t,e}));a.setState({reportData:t}),a.setState({editFields:a.createReportQuestion(t)})}}))},a.postReport=function(e){fetch("http://localhost:8333/reports",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({kmom:a.state.kmom,data:e,token:localStorage.getItem("jwt")})}).then((function(e){return e.json()})).then((function(e){if(console.log(e),"ok"===e.data.status){var t="/reports/week/"+a.state.kmom;window.location.replace(t)}}))},a.createReportQuestion=function(e){var t=e.map((function(e,t){return r.a.createElement(y,{key:t,index:e.id,question:e.question,answer:e.answer,triggerQuestion:a.handleOnChange,triggerAnswer:a.handleOnChange})})),n=a.state.editFields;n.push(t),a.setState({editFields:n})},a.addQuestion=function(e){e&&e.preventDefault();var t={id:a.state.reportData.length,question:"New",answer:"New"};a.createReportQuestion([t]);var n=a.state.reportData;n.push(t),a.setState({reportData:n})},a.handleSubmit=function(e){e.preventDefault(),a.postReport(JSON.stringify(a.state.reportData))},a.handleOnChange=function(e){var t=e.target.name,n=e.target.value,r=e.target.id,s=a.state.reportData,l=[];s.forEach((function(e){e.id===r&&(e[t]=n),l.push(e)})),a.setState({reportData:l})},a.state={kmom:a.props.match.params.kmom,reportData:[],editFields:[]},a.getReport(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"edit_report_container"},r.a.createElement("form",{className:"edit-question-form",onSubmit:this.handleSubmit},r.a.createElement("div",null,this.state.editFields),r.a.createElement("button",{onClick:this.addQuestion},"Add question"),r.a.createElement("input",{type:"submit",value:"Spara"})))}}]),t}(r.a.Component),_=a(12),w=a(48),C=a.n(w)()("http://localhost:3000"),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={text:"",username:"",messages:[]},a.handleChangeUsername=a.handleChangeUsername.bind(Object(_.a)(a)),a.handleChangeText=a.handleChangeText.bind(Object(_.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(_.a)(a)),a.handleDataRecived=a.handleDataRecived.bind(Object(_.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){C.on("connect",(function(){console.info("Connected")})),C.on("chat message",this.handleDataRecived),C.on("disconnect",(function(){console.info("Disconnected")}))}},{key:"handleDataRecived",value:function(e){var t=this.state.messages;t.push(e),this.setState({messages:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),C.emit("chat message",{username:this.state.username,text:this.state.text})}},{key:"handleChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handleChangeText",value:function(e){this.setState({text:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"chat-container"},r.a.createElement("h4",null,"Chat"),r.a.createElement("div",{className:"all-messages"},this.state.messages.map((function(e,t){return r.a.createElement("div",{key:t,className:"message"},r.a.createElement("p",{className:"all-messages-text"},"  ",e.text),r.a.createElement("p",{className:"all-messages-username"}," ",e.username))}))),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"message-form"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",className:"message-form-username",onChange:this.handleChangeUsername}),r.a.createElement("label",null,"Message"),r.a.createElement("input",{type:"text",className:"message-form-text",onChange:this.handleChangeText}),r.a.createElement("input",{type:"submit",value:"Skicka"})))}}]),t}(r.a.Component);var D=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"app_content"},r.a.createElement(c.a,{exact:!0,path:"/",component:E}),r.a.createElement(c.a,{path:"/reports/week/:kmom",component:v}),r.a.createElement(c.a,{path:"/register",component:O}),r.a.createElement(c.a,{path:"/login",component:N}),r.a.createElement(c.a,{path:"/chat",component:x}),r.a.createElement(c.a,{path:"/reports/edit/:kmom",component:S})),r.a.createElement(f,null)))};l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.246160f6.chunk.js.map