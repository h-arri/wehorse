(this.webpackJsonpcourses=this.webpackJsonpcourses||[]).push([[0],{63:function(e,t,n){e.exports=n(97)},68:function(e,t,n){},69:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(32),c=n.n(o),s=(n(68),n(69),n(14)),u=n(42),i=n.n(u),l=n(55),p=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("courseList.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=n(111),m=n(56),h=n.n(m),f=n(57),E=n.n(f),b=n(33),g=n.n(b),C=n(112),S=n(110),O=g()((function(){return{root:{height:"10vh",width:"70vw",backgroundColor:"white",color:"#9b5cc4",margin:"1%",borderRadius:"10px",transition:"all 0.3s cubic-bezier(.25, .8, .25, 1)",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",cursor:"pointer","&:hover":{boxShadow:"0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"}},content:{display:"flex",justifyContent:"space-between","& h4":{fontWeight:400}}}})),j=function(e){var t=e.course,n=t.courseId,r=t.courseName,o=t.wishListFlag,c=Object(s.c)(),u=O(),i=function(){c(function(e){return{type:"UPDATE_WISH_FLAG",courseId:e}}(n))};return a.a.createElement(C.a,{className:u.root},a.a.createElement(S.a,{className:u.content},a.a.createElement("h4",null,r),o?a.a.createElement(h.a,{onClick:i}):a.a.createElement(E.a,{onClick:i})))};j.displayName="CourseCard";var v=j,w=g()((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},title:{fontWeight:400}}})),y=function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.courses.courses})),n=w();return Object(r.useEffect)((function(){e((function(e){e({type:"FETCH_COURSES"}),p().then((function(t){return e({type:"FETCH_COURSES_SUCCESS",payload:t.courseList})})).catch((function(t){return e(function(e){return{type:"FETCH_COURSES_FAILURE",error:e}}(t))}))}))}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{className:n.title},"Meine Kurse"),a.a.createElement(d.a,{className:n.root},t.map((function(e){return a.a.createElement(v,{key:e.courseId,course:e})}))))};y.displayName="Courses";var x=Object(s.b)()(y),F=n(12),_=n(60),U=n(23),I={courses:[],loading:!1,error:null},N=Object(F.combineReducers)({courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COURSES":return Object(U.a)({},e,{loading:!0,error:null});case"FETCH_COURSES_SUCCESS":return Object(U.a)({},e,{courses:t.payload,loading:!1});case"FETCH_COURSES_FAILURE":return Object(U.a)({},e,{loading:!1,error:t.error});case"UPDATE_WISH_FLAG":return Object(U.a)({},e,{courses:Object(_.a)(e.courses.map((function(e){return e.courseId===t.courseId?Object(U.a)({},e,{wishListFlag:!e.wishListFlag}):e})))});default:return e}}}),R=n(58),T=n(59),k=Object(F.createStore)(N,Object(T.composeWithDevTools)(Object(F.applyMiddleware)(R.a))),H=function(){return a.a.createElement(s.a,{store:k},a.a.createElement("div",{className:"app"},a.a.createElement("header",{className:"app-header"},a.a.createElement("h1",null,"Horses")),a.a.createElement(x,null)))};H.displayName="App";var L=H;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.e99acd9f.chunk.js.map