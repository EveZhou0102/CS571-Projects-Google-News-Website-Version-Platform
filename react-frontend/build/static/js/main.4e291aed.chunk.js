(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},166:function(e,t,a){e.exports=a(278)},182:function(e,t,a){},183:function(e,t,a){},187:function(e,t){},189:function(e,t){},223:function(e,t){},224:function(e,t){},274:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(13),i=a.n(r),c=a(14),s=a(15),l=a(16),m=a(17),p=a(69),d=a(40),u=a(165),h=a(44),y=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={selected:void 0},n}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.history.location;"/search"===t.pathname?this.setState({selected:void 0}):this.setState({selected:t.search.slice(3)})}},{key:"handleClick",value:function(e){this.props.history.push("/search?q="+e.value)}},{key:"render",value:function(){var e=this;return o.a.createElement(u.a,{placeholder:"Enter keyword ..",defaultOptions:[],value:this.state.selected,onChange:function(t){return e.handleClick(t)},loadOptions:function(e){return""===e?[]:function(e){return fetch("https://zhouqi-usc.cognitiveservices.azure.com/bing/v7.0/suggestions?q="+e,{headers:{"Ocp-Apim-Subscription-Key":"a7d0bc9b1f7e490aa177f5e042e46187"}}).then((function(e){return e.json()})).then((function(e){return e.suggestionGroups[0].searchSuggestions.map((function(e){return{label:e.displayText,value:e.displayText}}))}))}(e)}})}}]),a}(o.a.Component),g=Object(h.f)(y),E=a(161),f=a(42),v=a(84),k=a(25),b=a(37),S=a(281),w=a(282),C=a(283),O=a(284),x=a(285),N=a(286);a(114);var j=function(e){var t=o.a.useState(!1),a=Object(v.a)(t,2),n=a[0],r=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.d,{onClick:function(e){e.preventDefault(),r(!0)}}),o.a.createElement(b.a,{show:n,onClick:function(e){return e.preventDefault()},onHide:function(){return r(!1)}},o.a.createElement(b.a.Header,{closeButton:!0},o.a.createElement(b.a.Title,null,e.title)),o.a.createElement(b.a.Body,{className:"shareBody"},o.a.createElement("h4",null,"Share via"),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(S.a,{url:e.url,hashtag:"#CSCI_571_NewsApp",target:"_blank"},o.a.createElement(w.a,{round:!0})),o.a.createElement(C.a,{className:"shareButton2",url:e.url,hashtags:["CSCI_571_NewsApp"]},o.a.createElement(O.a,{round:!0})),o.a.createElement(x.a,{url:e.url,subject:"#CSCI_571_NewsApp"},o.a.createElement(N.a,{round:!0}))))))},L=a(159),I=a(5),B=a(160),T=a.n(B);function _(){var e=Object(L.a)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: 20%;\n  border-color: red;\n  border-radius: 100%;\n"]);return _=function(){return e},e}var A=Object(I.css)(_()),J=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loading:e.isLoading},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.isLoading!==e.isLoading&&this.setState({loading:this.props.isLoading})}},{key:"render",value:function(){var e=this.state.loading?"block":"none";return o.a.createElement("div",{className:"sweet-loading"},o.a.createElement(T.a,{css:A,size:60,color:"#2b4fcb",loading:this.state.loading}),o.a.createElement("p",{style:{textAlign:"center",display:e}},"Loading"))}}]),a}(o.a.Component),z=a(12);a(182);function H(e){var t="/article?id="+e.id;return o.a.createElement(z.b,{to:t,key:e.index},o.a.createElement(E.a,{className:"longCard"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-lg-3"},o.a.createElement(f.a,{src:e.image,thumbnail:!0,fluid:!0})),o.a.createElement("div",{className:"col-12 col-lg-9 pl-xs-0 pl-lg-4",width:"100%"},o.a.createElement("h1",null,o.a.createElement("i",null,e.title),o.a.createElement(j,{title:e.title,url:e.url})),o.a.createElement("p",{className:"longCardDesc"},e.description),o.a.createElement("div",null,o.a.createElement("p",{style:{float:"left"}},o.a.createElement("i",null,e.date)),o.a.createElement("div",{className:"sectionTagArea",style:{float:"right"}},o.a.createElement("p",{className:"sectionTag ".concat(e.section.replace(/\s/g,"").toLowerCase())},e.section.toUpperCase())))))))}var D=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),e.checkSwitch(),n.state={isLoading:!0,longCards:[],company:e.company,section:e.section},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){if(this.props.section!==e.section||this.props.company!==e.company){this.setState({isLoading:!0,longCards:[],company:this.props.company});var t,a,n=new XMLHttpRequest;t="nytimes"===this.props.company?"https://rock-park-273800.appspot.com/topstories/"+this.props.section:"https://rock-park-273800.appspot.com/guardianTopstories/"+this.props.section,n.open("GET",t),n.onload=function(e){4===n.readyState&&200===n.status?(a=JSON.parse(n.responseText).map((function(e,t){return H({title:e.title,section:e.section,date:e.date,description:e.description,url:e.url,image:e.image,id:e.id,index:t})})),this.setState({isLoading:!1,longCards:a,section:this.props.section,company:this.props.company})):console.error(n.statusText)}.bind(this),n.send()}}},{key:"componentDidMount",value:function(){this.setState({isLoading:!0,longCards:[],company:this.props.company});var e,t,a=new XMLHttpRequest;e="nytimes"===this.state.company?"https://rock-park-273800.appspot.com/topstories/"+this.props.section:"https://rock-park-273800.appspot.com/guardianTopstories/"+this.props.section,a.open("GET",e),a.onload=function(e){4===a.readyState&&200===a.status?(t=JSON.parse(a.responseText).map((function(e,t){return H({title:e.title,section:e.section,date:e.date,description:e.description,url:e.url,image:e.image,id:e.id,index:t})})),this.setState({isLoading:!1,longCards:t,section:this.props.section,company:this.props.company})):console.error(a.statusText)}.bind(this),a.send()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(J,{isLoading:this.state.isLoading}),o.a.createElement("div",{className:"topNews"},this.state.longCards))}}]),a}(o.a.Component),q=a(27),R=a(29),F=a(82);a(115);function M(e){var t="/article?id="+e.id;return o.a.createElement(z.b,{to:t},o.a.createElement(q.a,{style:{boxShadow:"0px 5px 10px #d4d4d4"}},o.a.createElement(q.a.Body,null,o.a.createElement("h1",null,o.a.createElement("i",null,e.title),o.a.createElement(j,{title:e.title,company:e.company,url:e.url})),o.a.createElement(f.a,{src:e.image,thumbnail:!0,fluid:!0}),o.a.createElement("div",null,o.a.createElement(q.a.Text,{style:{float:"left"}},o.a.createElement("i",null,e.date)),o.a.createElement("div",{className:"sectionTagArea",style:{float:"right"}},o.a.createElement(q.a.Text,{className:"sectionTag ".concat(e.section.replace(/\s/g,"").toLowerCase())},e.section.toUpperCase()))))))}function U(e){for(var t=e.cards,a=[],n=0;n<=t.length/4;n++)a.push(o.a.createElement(R.a,{key:n},t.slice(4*n,4*n+4).map((function(e,t){return o.a.createElement(F.a,{sm:12,lg:3,key:t,style:{padding:"0.1rem 0.5rem"}},e)}))));return o.a.createElement("div",null,a)}var G=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),e.checkSwitch(),n.state={isLoading:!0,rows:[],title:null,company:e.company,keyword:e.keyword},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){if(this.props.keyword!==e.keyword||this.props.company!==e.company){this.setState({isLoading:!0,rows:[],title:null,keyword:this.props.keyword,company:this.props.company});var t,a,n=new XMLHttpRequest;t="nytimes"===this.props.company?"https://rock-park-273800.appspot.com/search?q="+this.props.keyword:"https://rock-park-273800.appspot.com/guardianSearch?q="+this.props.keyword,n.open("GET",t),n.onload=function(e){4===n.readyState&&200===n.status?(a=JSON.parse(n.responseText).map((function(e,t){return M({title:e.title,section:e.section,date:e.date,url:e.url,image:e.image,id:e.id,index:t})})),this.setState({isLoading:!1,rows:o.a.createElement(U,{cards:a}),title:o.a.createElement("p",{style:{color:"#3c3335",fontSize:"2.3rem",paddingLeft:"1rem",fontWeight:"bold",marginBottom:"0"}},"Results"),company:this.props.company,keyword:this.props.keyword})):console.error(n.statusText)}.bind(this),n.send()}}},{key:"componentDidMount",value:function(){this.setState({isLoading:!0,rows:[],title:null,keyword:this.props.keyword,company:this.props.company});var e,t,a=new XMLHttpRequest;e="nytimes"===this.props.company?"https://rock-park-273800.appspot.com/search?q="+this.props.keyword:"https://rock-park-273800.appspot.com/guardianSearch?q="+this.props.keyword,a.open("GET",e),a.onload=function(e){4===a.readyState&&200===a.status?(t=JSON.parse(a.responseText).map((function(e,t){return M({title:e.title,section:e.section,date:e.date,url:e.url,image:e.image,id:e.id,index:t})})),this.setState({isLoading:!1,rows:o.a.createElement(U,{cards:t}),title:o.a.createElement("p",{style:{color:"#3c3335",fontSize:"2.3rem",paddingLeft:"1rem",fontWeight:"bold",marginBottom:"0"}},"Results"),company:this.props.company,keyword:this.props.keyword})):console.error(a.statusText)}.bind(this),a.send()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(J,{isLoading:this.state.isLoading}),o.a.createElement("div",{className:"result"},this.state.title,o.a.createElement("div",{style:{margin:"0 0.5rem"}},this.state.rows)))}}]),a}(o.a.Component),P=(a(183),a(77)),W=a(162),X=a.n(W),V=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(c.a)(this,a);var o="nytimes"!==(n=t.call(this,e)).props.company;return n.state={checked:o},n.handleChange=n.handleChange.bind(Object(P.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({checked:e}),this.props.onclick(e)}},{key:"render",value:function(){return o.a.createElement(X.a,{onChange:this.handleChange,checked:this.state.checked,onColor:"#008efb",offColor:"#d8d9d9",checkedIcon:!1,uncheckedIcon:!1})}}]),a}(n.Component),Y=a(59),K=a(164),Q=a.n(K),Z=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={articleId:e.articleId},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.removeCommentBox=Q()("5768853690777600-proj")}},{key:"componentWillUnmount",value:function(){this.removeCommentBox()}},{key:"render",value:function(){return o.a.createElement("div",{className:"commentbox",id:this.state.articleId})}}]),a}(o.a.Component),$=a(39),ee=a(110),te=a(50);a(273),a(274);function ae(e){for(var t,a,n,r,i=0,c=0,s=0;s<e.description.length;s++){var l=e.description.charAt(s);if(("."===l||"?"===l||"!"===l)&&(s<e.description.length-1&&'"'===e.description.charAt(s+1)&&s++,4===++i)){c=s+1;break}}return 0===c||c===e.description.length?(t=e.description.split("\n").map((function(e,t){return o.a.createElement("p",{key:t},e)})),a=e.description.split("\n").map((function(e,t){return o.a.createElement("p",{key:t},e)}))):(t=(e.description.slice(0,c)+"...").split("\n").map((function(e,t){return o.a.createElement("p",{key:t},e)})),a=e.description.split("\n").map((function(e,t){return o.a.createElement("p",{key:t},e)}))),null===JSON.parse(localStorage.getItem("articles"))||void 0===JSON.parse(localStorage.getItem("articles"))[e.id]?(n="block",r="none"):(n="none",r="block"),o.a.createElement(q.a,{style:{boxShadow:"0px 5px 10px #d4d4d4",margin:"1rem"},key:e.index},o.a.createElement(q.a.Body,null,o.a.createElement(R.a,null,o.a.createElement("p",{style:{fontSize:"1.8rem"}},o.a.createElement("i",null,e.title))),o.a.createElement(R.a,null,o.a.createElement("p",{style:{fontSize:"1.5rem",paddingLeft:"1rem"}},o.a.createElement("i",null,e.date)),o.a.createElement("div",{style:{marginLeft:"auto"}},o.a.createElement(S.a,{url:e.url,hashtag:"#CSCI_571_NewsApp",target:"_blank"},o.a.createElement(w.a,{size:32,round:!0,"data-tip":"Facebook"}),o.a.createElement(Y.a,{className:"tooltip",place:"top",type:"dark",effect:"solid"})),o.a.createElement(C.a,{url:e.url,hashtags:["CSCI_571_NewsApp"]},o.a.createElement(O.a,{size:32,round:!0,"data-tip":"Twitter"}),o.a.createElement(Y.a,{className:"tooltip",place:"top",type:"dark",effect:"solid"})),o.a.createElement(x.a,{url:e.url,subject:"#CSCI_571_NewsApp",className:"mr-sm-2 mr-lg-5"},o.a.createElement(N.a,{size:32,round:!0,"data-tip":"Email"}),o.a.createElement(Y.a,{className:"tooltip",place:"top",type:"dark",effect:"solid"}))),o.a.createElement("div",{className:"bookmark ml-sm-2 ml-lg-5"},o.a.createElement(k.b,{id:"detailNotSaved",size:35,color:"#ef002d",onClick:function(){var t=JSON.parse(localStorage.getItem("articles")),a=e.id;null===t&&(t=new Object),t[a]=e,localStorage.setItem("articles",JSON.stringify(t)),document.getElementById("detailNotSaved").style.display="none",document.getElementById("detailSaved").style.display="block",Object($.c)("Saving "+e.title,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0})},style:{display:n},"data-tip":"Bookmark"}),o.a.createElement(Y.a,{className:"tooltip",place:"top",type:"dark",effect:"solid"}),o.a.createElement(k.a,{id:"detailSaved",size:35,color:"#ef002d",onClick:function(){var t=JSON.parse(localStorage.getItem("articles"));t[e.id]=void 0,localStorage.setItem("articles",JSON.stringify(t)),document.getElementById("detailNotSaved").style.display="block",document.getElementById("detailSaved").style.display="none",Object($.c)("Removing - "+e.title,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,color:"black"})},style:{display:r},"data-tip":"Bookmark"}),o.a.createElement(Y.a,{className:"tooltip",place:"top",type:"dark",effect:"solid"}),o.a.createElement($.a,{position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!1,draggable:!0,pauseOnHover:!1,transition:$.b}))),o.a.createElement(R.a,null,o.a.createElement(f.a,{src:e.image,className:"detailImage"})),o.a.createElement(te.Element,{id:"first",name:"first"},t),o.a.createElement(te.Element,{id:"second",name:"second"},o.a.createElement(R.a,null,o.a.createElement(ee.a,{style:{marginLeft:"auto"},onClick:function(){te.scroller.scrollTo("second",{duration:800,delay:0,smooth:"true"}),document.getElementById("first").style.display="none",document.getElementById("second").style.display="none",document.getElementById("third").style.display="block",document.getElementById("fourth").style.display="block"}}))),o.a.createElement(te.Element,{id:"third",name:"third",style:{display:"none"}},a),o.a.createElement(te.Element,{id:"fourth",name:"fourth",style:{display:"none"}},o.a.createElement(R.a,null,o.a.createElement(ee.b,{style:{marginLeft:"auto"},onClick:function(){te.animateScroll.scrollToTop(),document.getElementById("first").style.display="block",document.getElementById("second").style.display="block",document.getElementById("third").style.display="none",document.getElementById("fourth").style.display="none"}})))))}var ne=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),e.checkSwitch(),n.state={isLoading:!0,detail:[],company:e.company,id:e.id,commentbox:"none"},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){if(this.props.id!==e.id||this.props.company!==e.company){this.setState({isLoading:!0,longCards:[],company:this.props.company,commentbox:"none"});var t,a=new XMLHttpRequest;t="nytimes"===this.state.company?"https://rock-park-273800.appspot.com/article?id="+this.props.id:"https://rock-park-273800.appspot.com/guardianArticle?id="+this.props.id,a.open("GET",t);var n=[];a.onload=function(e){var t=this;if(4===a.readyState&&200===a.status){var o=[];o[0]=JSON.parse(a.responseText),n=o.map((function(e,a){return ae({title:e.title,section:e.section,date:e.date,description:e.description,url:e.url,image:e.image,id:e.id,index:a,company:t.props.company})})),this.setState({isLoading:!1,detail:n,section:this.props.section,id:this.props.id,commentbox:"block"})}else console.error(a.statusText)}.bind(this),a.send()}}},{key:"componentDidMount",value:function(){this.setState({isLoading:!0,longCards:[],company:this.props.company,commentbox:"none"});var e,t=new XMLHttpRequest;e="nytimes"===this.state.company?"https://rock-park-273800.appspot.com/article?id="+this.props.id:"https://rock-park-273800.appspot.com/guardianArticle?id="+this.props.id,t.open("GET",e);var a=[];t.onload=function(e){var n=this;if(4===t.readyState&&200===t.status){var o=[];o[0]=JSON.parse(t.responseText),a=o.map((function(e,t){return ae({title:e.title,section:e.section,date:e.date,description:e.description,url:e.url,image:e.image,id:e.id,index:t,company:n.props.company})})),this.setState({isLoading:!1,detail:a,section:this.props.section,id:this.props.id,commentbox:"block"})}else console.error(t.statusText)}.bind(this),t.send()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(J,{isLoading:this.state.isLoading}),o.a.createElement("div",{style:{display:this.state.commentbox}},this.state.detail,o.a.createElement(Z,{articleId:this.state.id})))}}]),a}(o.a.Component);var oe=function(e){var t=o.a.useState(!1),a=Object(v.a)(t,2),n=a[0],r=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.d,{onClick:function(e){e.preventDefault(),r(!0)}}),o.a.createElement(b.a,{show:n,onClick:function(e){return e.preventDefault()},onHide:function(){return r(!1)}},o.a.createElement(b.a.Header,{closeButton:!0},o.a.createElement("div",{style:{display:"fixed"}},console.log(e),o.a.createElement("h4",null,o.a.createElement("b",null,e.company.toUpperCase())),o.a.createElement("p",{style:{marginBottom:"0"}},e.title))),o.a.createElement(b.a.Body,{className:"shareBody"},o.a.createElement("p",null,"Share via"),o.a.createElement("div",null,o.a.createElement(S.a,{url:e.url,hashtag:"#CSCI_571_NewsApp",target:"_blank"},o.a.createElement(w.a,{round:!0})),o.a.createElement(C.a,{className:"shareButton2",url:e.url,hashtags:["CSCI_571_NewsApp"]},o.a.createElement(O.a,{round:!0})),o.a.createElement(x.a,{url:e.url,subject:"#CSCI_571_NewsApp"},o.a.createElement(N.a,{round:!0}))))))};function re(e){var t="/article?id="+e.id;return o.a.createElement(z.b,{to:t},o.a.createElement(q.a,{style:{boxShadow:"0px 5px 10px #d4d4d4"}},o.a.createElement(q.a.Body,null,o.a.createElement("h1",null,o.a.createElement("i",null,e.title),o.a.createElement(oe,{title:e.title,company:e.company,url:e.url}),o.a.createElement(k.c,{onClick:function(t){!function(t){t.preventDefault();var a=JSON.parse(localStorage.getItem("articles"));a[e.id]=void 0,localStorage.setItem("articles",JSON.stringify(a)),Object($.c)("Removing "+e.title,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,color:"black"})}(t),e.unsaving()}}),o.a.createElement($.a,{position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!1,draggable:!0,pauseOnHover:!1,transition:$.b})),o.a.createElement(f.a,{src:e.image,thumbnail:!0,fluid:!0}),o.a.createElement("div",null,o.a.createElement(q.a.Text,{style:{float:"left"}},o.a.createElement("i",null,e.date)),o.a.createElement(R.a,{className:"sectionTagArea",style:{float:"right"}},o.a.createElement("div",{className:"sectionTag ".concat(e.section.replace(/\s/g,"").toLowerCase()),style:{marginRight:"0.5rem"}},e.section.toUpperCase()),o.a.createElement("div",{className:"sectionTag ".concat(e.company.toLowerCase())},e.company.toUpperCase()))))))}function ie(e){for(var t=e.cards,a=[],n=0;n<=t.length/4;n++)a.push(o.a.createElement(R.a,{key:n},t.slice(4*n,4*n+4).map((function(e,t){return o.a.createElement(F.a,{sm:12,lg:3,key:t,style:{padding:"0.1rem 0.5rem"}},e)}))));return o.a.createElement("div",null,a)}function ce(e){return null===e.result||void 0===e.result||0===e.result.length?o.a.createElement("p",{style:{textAlign:"center"}},"You have no saved articles"):o.a.createElement("p",{style:{color:"#3c3335",fontSize:"2.3rem",paddingLeft:"1rem",fontWeight:"bold",marginBottom:"0"}},"Favorites")}var se=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(c.a)(this,a),n=t.call(this,e),e.checkSwitch();var r,i=JSON.parse(localStorage.getItem("articles"));return r=null===i?null:Object.values(i).map((function(e,t){return o.a.createElement(re,{title:e.title,section:e.section,date:e.date,url:e.url,image:e.image,id:e.id,index:t,unsaving:function(){return n.unsaving()},company:e.company})})),n.state={result:r},n}return Object(s.a)(a,[{key:"unsaving",value:function(){var e,t=this,a=JSON.parse(localStorage.getItem("articles"));e=null===a?null:Object.values(a).map((function(e,a){return o.a.createElement(re,{title:e.title,section:e.section,date:e.date,url:e.url,image:e.image,id:e.id,index:a,unsaving:function(){return t.unsaving()},company:e.company})})),this.setState({result:e})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(ce,{result:this.state.result}),o.a.createElement(ie,{cards:this.state.result}))}}]),a}(o.a.Component),le=a(38),me=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(c.a)(this,a),n=t.call(this,e);var o=void 0===localStorage.company?"guardian":localStorage.company;localStorage.setItem("company",o);var r,i,s=void 0!==localStorage.inFavorite&&localStorage.inFavorite;return localStorage.setItem("inFavorite",s),!0===s?(r="none",i="block"):(r="block",i="none"),n.state={company:o,showSwitch:"flex",inFavorite:s,bookmarkBorder:r,bookmark:i},n}return Object(s.a)(a,[{key:"changeCompany",value:function(e){var t=e?"guardian":"nytimes";this.setState({company:t}),localStorage.setItem("company",t)}},{key:"checkSwitch",value:function(e){var t=this.state.showSwitch,a=["/","/world","/politics","/business","/technology","/sports"].includes(e);a&&"none"===t?this.setState({showSwitch:"flex"}):a||"flex"!==t||this.setState({showSwitch:"none"});var n,o,r="/favorites"===e;r!==this.state.inFavorite&&(!0===r?(n="none",o="block"):(n="block",o="none"),this.setState({inFavorite:r,bookmarkBorder:n,bookmark:o}),localStorage.setItem("inFavorite",r))}},{key:"checkActive",value:function(e){console.log(e),console.log(window.location.href.slice(24));var t=""===window.location.href.slice(24)?"home":window.location.href.slice(24);["home","world","politics","business","technology","sports"].forEach((function(e){console.log(e);var a=document.getElementById(e);console.log(document),e===t?a.classList.contains("active")||a.classList.add("active"):a.classList.contains("active")&&a.classList.remove("active")}))}},{key:"render",value:function(){var e=this;return o.a.createElement("main",null,o.a.createElement(p.a,{variant:"dark",className:"navbar",expand:"lg"},o.a.createElement(p.a.Brand,{style:{width:"13rem",fontSize:"1rem",color:"black"},variant:"light"},o.a.createElement(g,null)),o.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(d.a,{className:"mr-auto"},o.a.createElement(le.a,{id:"home",as:z.b,to:"/"},"Home"),o.a.createElement(le.a,{id:"world",as:z.b,to:"/world"},"World"),o.a.createElement(le.a,{id:"politics",as:z.b,to:"/politics"},"Politics"),o.a.createElement(le.a,{id:"business",as:z.b,to:"/business"},"Business"),o.a.createElement(le.a,{id:"technology",as:z.b,to:"/technology"},"Technology"),o.a.createElement(le.a,{id:"sports",as:z.b,to:"/sports"},"Sports")),o.a.createElement(d.a,null,o.a.createElement(d.a.Link,{as:z.b,to:"/favorites",style:{display:this.state.bookmarkBorder}},o.a.createElement(k.b,{size:23})),o.a.createElement(d.a.Link,{as:z.b,to:"/",style:{display:this.state.bookmark}},o.a.createElement(k.a,{size:23}))),o.a.createElement(d.a,{style:{display:this.state.showSwitch}},o.a.createElement(d.a.Item,{style:{padding:"0.5rem  1rem 0 0"}},"NYTimes"),o.a.createElement(d.a.Item,{style:{padding:"0.5rem  1rem 0 0"}},o.a.createElement(V,{onclick:function(t){return e.changeCompany(t)},company:this.state.company})),o.a.createElement(d.a.Item,{style:{padding:"0.5rem  0.5rem 0 0"}},"Guardian")))),o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",exact:!0,render:function(t){return o.a.createElement(D,{company:e.state.company,section:"home",checkSwitch:function(){return e.checkSwitch(t.location.pathname)}})}}),o.a.createElement(h.a,{path:"/search",exact:!0,render:function(t){return o.a.createElement(G,{keyword:t.location.search.slice(3),company:e.state.company,checkSwitch:function(){return e.checkSwitch(t.location.pathname)}})}}),o.a.createElement(h.a,{path:"/article",exact:!0,render:function(t){return o.a.createElement(ne,{id:t.location.search.slice(4),company:e.state.company,checkSwitch:function(){return e.checkSwitch(t.location.pathname)}})}}),o.a.createElement(h.a,{path:"/favorites",exact:!0,render:function(t){return o.a.createElement(se,{checkSwitch:function(){return e.checkSwitch(t.location.pathname)}})}}),o.a.createElement(h.a,{path:"/:section",render:function(t){return o.a.createElement(D,{company:e.state.company,section:t.match.params.section,checkSwitch:function(){return e.checkSwitch(t.location.pathname)}})}})))}}]),a}(o.a.Component);a(277);i.a.render(o.a.createElement(z.a,null,o.a.createElement(me,null)),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.4e291aed.chunk.js.map