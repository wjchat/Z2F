(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Uzbek.d2970ac5.png"},function(e,t,n){e.exports=n.p+"static/media/China.f4247300.png"},function(e,t,n){e.exports=n.p+"static/media/NewYork.d7aca009.png"},,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/shop.96e48f55.svg"},function(e,t,n){e.exports=n.p+"static/media/arrow.90f1a2fd.svg"},,function(e,t,n){e.exports=n.p+"static/media/Shirt.0847adff.png"},function(e,t,n){e.exports=n.p+"static/media/Resources.705ce4e8.png"},function(e,t,n){e.exports=n.p+"static/media/barn.bc2ea15f.svg"},function(e,t,n){e.exports=n.p+"static/media/factory.c5593287.svg"},function(e,t,n){e.exports=n(32)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(3),l=n(4),i=n(6),r=n(5),o=n(2),c=n(7),s=n(0),u=n.n(s),d=n(9),m=n.n(d),h=(n(28),n(29),n(1)),p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).turnInfo=n.turnInfo.bind(Object(o.a)(n)),n.turnJourney=n.turnJourney.bind(Object(o.a)(n)),n.state={showInfo:n.props.infoUp},n.bottomLine=null,n.info=null,n.journey=null,n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"turnInfo",value:function(){this.props.onClick(!0),this.setState({showInfo:!0})}},{key:"turnJourney",value:function(){this.props.onClick(!1),this.setState({showInfo:!1})}},{key:"componentDidUpdate",value:function(){this.props.updating&&(this.myTween=h.e.from(this.info.children,.2,{width:0,x:25,delay:0}),this.myTween=h.e.from(this.journey.children,.2,{width:0,x:-25,delay:0}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"nav "+this.props.zIndex},u.a.createElement("div",{className:"leon container",onClick:this.turnInfo},"Leon Ryn",u.a.createElement("div",{className:"border"})),u.a.createElement("div",{className:"container"}),u.a.createElement("div",{className:"container"},u.a.createElement("div",{ref:function(t){return e.info=t},onClick:this.turnInfo},"Info",this.state.showInfo?u.a.createElement("div",{ref:function(t){return e.bottomLine=t},className:"borderBottom"}):""),u.a.createElement("div",{ref:function(t){return e.journey=t},onClick:this.turnJourney},"Journey",this.state.showInfo?"":u.a.createElement("div",{ref:function(t){return e.bottomLine=t},className:"borderBottom"}))))}}]),t}(u.a.Component),f=(n(30),n(19)),E=n.n(f),v=n(20),b=n.n(v),w=n(8),g=(n(14),function(e){e.image;return u.a.createElement(w.LazyLoadImage,{alt:"shirt",effect:"blur",src:E.a})}),y=function(e){e.image;return u.a.createElement(w.LazyLoadImage,{alt:"resources",effect:"blur",src:b.a})},x=function(e){function t(e){return Object(a.a)(this,t),Object(i.a)(this,Object(r.a)(t).call(this,e))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"title"},u.a.createElement("div",{className:"lines"}),u.a.createElement("div",{className:"t"},"Purple T"),u.a.createElement("div",{className:"lines"})),u.a.createElement("div",{className:"product"},u.a.createElement("div",{className:"shirt"},u.a.createElement(g,null)),u.a.createElement("div",{className:"info"},u.a.createElement("ul",null,u.a.createElement("li",null,"ID: #isa8d7a993ad"),u.a.createElement("li",null,"Materials: 40% Polyester, 60% Himalayan Cotton"),u.a.createElement("li",null,"Total Mileage: 203 miles"),u.a.createElement("li",null,"People Involved: 93")))),u.a.createElement("div",{className:"line"}),u.a.createElement("div",{className:"resources"},u.a.createElement("h3",null,"Resources Used"),u.a.createElement("div",{className:"imageContainer"},u.a.createElement(y,null))))}}]),t}(u.a.Component),C=(n(15),n(21)),k=n.n(C),j=n(11),O=n.n(j),N=function(e){e.image;return u.a.createElement(w.LazyLoadImage,{alt:"shirt",effect:"blur",src:k.a})},I=function(e){e.image;return u.a.createElement(w.LazyLoadImage,{alt:"shirt",effect:"blur",src:O.a})},B=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleClick=function(){n.props.onClick()},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{onClick:this.handleClick,className:"box"},u.a.createElement("h3",null,"Roc Farms"),u.a.createElement("p",null,"Kiva, Uzbekistan ",u.a.createElement("br",null),"245 Employees"),u.a.createElement("div",{className:"img"},u.a.createElement(N,null)))}}]),t}(u.a.Component),z=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleClick=function(){n.tween=h.e.to(n.height,.1,{opacity:0}),n.props.onClick()},n.height=null,n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){var e=this.height.getBoundingClientRect().height;this.props.getHeight(e)}.bind(this),200)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{ref:function(t){return e.height=t},className:"clickedContainer"},u.a.createElement("div",{onClick:this.handleClick,className:"x"},"X"),u.a.createElement("h1",null,"Roc Farms"),u.a.createElement("p",{className:"description"},"Roc farms is where the cotton was sourced for this product. Roc farm grows a number of raw materials for the textile industry. "),u.a.createElement("div",{className:"table"},u.a.createElement("div",{className:"firstRow"},u.a.createElement("div",null,u.a.createElement("p",null,"Parent Company"),u.a.createElement("p",null,"Silverstar")),u.a.createElement("div",null,u.a.createElement("p",null,"Facility Type"),u.a.createElement("p",null,"Material"))),u.a.createElement("div",{className:"secondRow"},u.a.createElement("div",null,u.a.createElement("p",null,"Employees"),u.a.createElement("p",null,"842")),u.a.createElement("div",null,u.a.createElement("p",null,"Female"),u.a.createElement("p",null,"22%")),u.a.createElement("div",null,u.a.createElement("p",null,"Migrant"),u.a.createElement("p",null,"48%")),u.a.createElement("div",null,u.a.createElement("p",null,"Average Age"),u.a.createElement("p",null,"38"))),u.a.createElement("div",{className:"thirdRow"},u.a.createElement("div",null,"Address"),u.a.createElement("div",null,"31 Mosteralia Str, PTL ",u.a.createElement("br",null),"Samagreio-Zemo SVA 4400, ",u.a.createElement("br",null),"Kiva, Uzbekistan"))),u.a.createElement("div",{className:"image"},u.a.createElement(I,null)))}}]),t}(u.a.Component),L=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).getHeight=function(e){n.divHeight=e,n.scrollPosition=window.scrollY,n.props.overLay(!0,e,n.scrollPosition)},n.open=function(){n.windowY=window.scrollY,n.height=window.innerHeight,n.tween=h.e.to(n.shadowBox,.1,{zIndex:300,backgroundColor:"rgba(255,255,255,1)"}),n.tween3=h.e.to(n.fadeBox,.1,{opacity:0}),n.element=n.shadowBox.getBoundingClientRect(),n.tween1=h.e.to(n.shadowBox,.2,{height:n.height,width:"100%",borderColor:"rgba(255,255,255,0)",boxShadow:"0 1px 3px rgba(0,0,0,0), 0 1px 2px rgba(0,0,0,0)",borderRadius:"0px",paddingTop:"4%",y:-1*(n.element.top+n.windowY),bottom:0,delay:.12,ease:h.a.easeIn}),setTimeout(function(){this.props.zIndex(0)}.bind(Object(o.a)(n)),220),setTimeout(function(){this.setState({expanded:!this.state.expanded})}.bind(Object(o.a)(n)),140),n.tween2=h.e.to(n.fadeBox,.1,{opacity:1,delay:.35})},n.close=function(){setTimeout(function(){this.tween1.reverse(),window.scrollTo(0,this.windowY),this.props.zIndex(1)}.bind(Object(o.a)(n)),100),setTimeout(function(){this.setState({expanded:!this.state.expanded})}.bind(Object(o.a)(n)),330),n.tween2=h.e.to(n.fadeBox,.1,{opacity:1,delay:.34}),n.props.overLay(!1,0,0),n.tween.reverse()},n.state={expanded:!1},n.fadeBox=null,n.shadowBox=null,n.element=null,n.height=null,n.divHeight=null,n.scrollPosition=null,n.tween=null,n.tween2=null,n.tween3=null,n.tween1=null,n.windowY=null,n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{ref:function(t){return e.shadowBox=t},className:"shadowContainer"},u.a.createElement("div",{ref:function(t){return e.fadeBox=t},className:this.state.expanded?"clickedYa":"unClickedYa"},this.state.expanded?u.a.createElement(z,{getHeight:this.getHeight,onClick:this.close}):u.a.createElement(B,{onClick:this.open})))}}]),t}(u.a.Component),T=n(22),R=n.n(T),Y=n(12),H=n.n(Y),S=function(e){e.image;return u.a.createElement(w.LazyLoadImage,{alt:"shirt",effect:"blur",src:R.a})},P=function(e){e.image;return u.a.createElement(w.LazyLoadImage,{alt:"shirt",effect:"blur",src:H.a})},A=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleClick=function(){n.props.onClick()},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{onClick:this.handleClick,className:"box"},u.a.createElement("h3",null,"Huafang Textiles"),u.a.createElement("p",null,"Lu\u2019an City, China ",u.a.createElement("br",null),"1328 Employees"),u.a.createElement("div",{className:"img"},u.a.createElement(S,null)))}}]),t}(u.a.Component),M=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleClick=function(){n.tween=h.e.to(n.height,.1,{opacity:0}),n.props.onClick()},n.height=null,n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){var e=this.height.getBoundingClientRect().height;this.props.getHeight(e)}.bind(this),200)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{ref:function(t){return e.height=t},className:"clickedContainer"},u.a.createElement("div",{onClick:this.handleClick,className:"x"},"X"),u.a.createElement("h1",null,"Huafang Textiles"),u.a.createElement("p",{className:"description"},"Huafang Textiles is a factory that processes raw materials and spins them into fabrics. These fabrics are washed and sent to a nearby facility to be turned into clothing. "),u.a.createElement("div",{className:"table"},u.a.createElement("div",{className:"firstRow"},u.a.createElement("div",null,u.a.createElement("p",null,"Parent Company"),u.a.createElement("p",null,"Anhui Cosmo")),u.a.createElement("div",null,u.a.createElement("p",null,"Facility Type"),u.a.createElement("p",null,"Finished goods"))),u.a.createElement("div",{className:"secondRow"},u.a.createElement("div",null,u.a.createElement("p",null,"Employees"),u.a.createElement("p",null,"1328")),u.a.createElement("div",null,u.a.createElement("p",null,"Female"),u.a.createElement("p",null,"48%")),u.a.createElement("div",null,u.a.createElement("p",null,"Migrant"),u.a.createElement("p",null,"37%")),u.a.createElement("div",null,u.a.createElement("p",null,"Average Age"),u.a.createElement("p",null,"29"))),u.a.createElement("div",{className:"thirdRow"},u.a.createElement("div",null,"Address"),u.a.createElement("div",null,"Economic Development Zone, ",u.a.createElement("br",null),"Jinzhai County Lu\u2019an City, ",u.a.createElement("br",null),"China"))),u.a.createElement("div",{className:"image"},u.a.createElement(P,null)))}}]),t}(u.a.Component),F=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).getHeight=function(e){n.divHeight=e,n.scrollPosition=window.scrollY,n.props.overLay(!0,e,n.scrollPosition)},n.open=function(){n.windowY=window.scrollY,n.height=window.innerHeight,n.tween=h.e.to(n.shadowBox,.1,{zIndex:300,backgroundColor:"rgba(255,255,255,1)"}),n.tween3=h.e.to(n.fadeBox,.1,{opacity:0}),n.element=n.shadowBox.getBoundingClientRect(),n.tween1=h.e.to(n.shadowBox,.2,{height:n.height,width:"100%",borderColor:"rgba(255,255,255,0)",boxShadow:"0 1px 3px rgba(0,0,0,0), 0 1px 2px rgba(0,0,0,0)",borderRadius:"0px",paddingTop:"4%",y:-1*(n.element.top+n.windowY),bottom:0,delay:.12,ease:h.a.easeIn}),setTimeout(function(){this.props.zIndex(0)}.bind(Object(o.a)(n)),220),setTimeout(function(){this.setState({expanded:!this.state.expanded})}.bind(Object(o.a)(n)),140),n.tween2=h.e.to(n.fadeBox,.1,{opacity:1,delay:.35})},n.close=function(){setTimeout(function(){this.tween1.reverse(),window.scrollTo(0,this.windowY),this.props.zIndex(1)}.bind(Object(o.a)(n)),100),setTimeout(function(){this.setState({expanded:!this.state.expanded})}.bind(Object(o.a)(n)),330),n.tween2=h.e.to(n.fadeBox,.1,{opacity:1,delay:.34}),n.props.overLay(!1,0,0),n.tween.reverse()},n.state={expanded:!1},n.fadeBox=null,n.shadowBox=null,n.element=null,n.height=null,n.divHeight=null,n.scrollPosition=null,n.tween=null,n.tween2=null,n.tween3=null,n.tween1=null,n.windowY=null,n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{ref:function(t){return e.shadowBox=t},className:"shadowContainer"},u.a.createElement("div",{ref:function(t){return e.fadeBox=t},className:this.state.expanded?"clickedYa":"unClickedYa"},this.state.expanded?u.a.createElement(M,{getHeight:this.getHeight,onClick:this.close}):u.a.createElement(A,{onClick:this.open})))}}]),t}(u.a.Component),J=n(16),U=n.n(J),D=n(13),X=n.n(D),K=function(e){e.image;return u.a.createElement(w.LazyLoadImage,{alt:"shirt",effect:"blur",src:X.a})},W=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleClick=function(){n.props.onClick()},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{onClick:this.handleClick,className:"box"},u.a.createElement("h3",null,"Leon Ryn"),u.a.createElement("p",null,"New York, USA ",u.a.createElement("br",null),"24 Employees"),u.a.createElement("div",{className:"img"},u.a.createElement("img",{src:U.a})))}}]),t}(u.a.Component),Z=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleClick=function(){n.tween=h.e.to(n.height,.1,{opacity:0}),n.props.onClick()},n.height=null,n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){var e=this.height.getBoundingClientRect().height;this.props.getHeight(e)}.bind(this),200)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{ref:function(t){return e.height=t},className:"clickedContainer"},u.a.createElement("div",{onClick:this.handleClick,className:"x"},"X"),u.a.createElement("h1",null,"Leon Ryn"),u.a.createElement("p",{className:"description"},"Leon Ryn is a clothing outlet with locations around the world. We take pride in our transparent approach to sustainability. Welcome. "),u.a.createElement("div",{className:"table"},u.a.createElement("div",{className:"firstRow"},u.a.createElement("div",null,u.a.createElement("p",null,"Parent Company"),u.a.createElement("p",null,"Leon Ryn")),u.a.createElement("div",null,u.a.createElement("p",null,"Facility Type"),u.a.createElement("p",null,"Retail"))),u.a.createElement("div",{className:"secondRow"},u.a.createElement("div",null,u.a.createElement("p",null,"Employees"),u.a.createElement("p",null,"26")),u.a.createElement("div",null,u.a.createElement("p",null,"Female"),u.a.createElement("p",null,"69%")),u.a.createElement("div",null,u.a.createElement("p",null,"Migrant"),u.a.createElement("p",null,"12%")),u.a.createElement("div",null,u.a.createElement("p",null,"Average Age"),u.a.createElement("p",null,"24"))),u.a.createElement("div",{className:"thirdRow"},u.a.createElement("div",null,"Address"),u.a.createElement("div",null,"33 Greene St, New York, , ",u.a.createElement("br",null),"NY 10013, ",u.a.createElement("br",null),"USA"))),u.a.createElement("div",{className:"image"},u.a.createElement(K,null)))}}]),t}(u.a.Component),q=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).getHeight=function(e){n.divHeight=e,n.scrollPosition=window.scrollY,n.props.overLay(!0,e,n.scrollPosition)},n.open=function(){n.windowY=window.scrollY,n.height=window.innerHeight,n.tween=h.e.to(n.shadowBox,.1,{zIndex:300,backgroundColor:"rgba(255,255,255,1)"}),n.tween3=h.e.to(n.fadeBox,.1,{opacity:0}),n.element=n.shadowBox.getBoundingClientRect(),n.tween1=h.e.to(n.shadowBox,.2,{height:n.height,width:"100%",borderColor:"rgba(255,255,255,0)",boxShadow:"0 1px 3px rgba(0,0,0,0), 0 1px 2px rgba(0,0,0,0)",borderRadius:"0px",paddingTop:"4%",y:-1*(n.element.top+n.windowY),bottom:0,delay:.12,ease:h.a.easeIn}),setTimeout(function(){this.props.zIndex(0)}.bind(Object(o.a)(n)),220),setTimeout(function(){this.setState({expanded:!this.state.expanded})}.bind(Object(o.a)(n)),140),n.tween2=h.e.to(n.fadeBox,.1,{opacity:1,delay:.35})},n.close=function(){setTimeout(function(){this.tween1.reverse(),window.scrollTo(0,this.windowY),this.props.zIndex(1)}.bind(Object(o.a)(n)),100),setTimeout(function(){this.setState({expanded:!this.state.expanded})}.bind(Object(o.a)(n)),330),n.tween2=h.e.to(n.fadeBox,.1,{opacity:1,delay:.34}),n.props.overLay(!1,0,0),n.tween.reverse()},n.state={expanded:!1},n.fadeBox=null,n.shadowBox=null,n.element=null,n.height=null,n.divHeight=null,n.scrollPosition=null,n.tween=null,n.tween2=null,n.tween3=null,n.tween1=null,n.windowY=null,n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{ref:function(t){return e.shadowBox=t},className:"shadowContainer"},u.a.createElement("div",{ref:function(t){return e.fadeBox=t},className:this.state.expanded?"clickedYa":"unClickedYa"},this.state.expanded?u.a.createElement(Z,{getHeight:this.getHeight,onClick:this.close}):u.a.createElement(W,{onClick:this.open})))}}]),t}(u.a.Component),G=(n(31),n(17)),V=n.n(G),Q=n(10),$=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).needOverlay=function(e,t,a){e?(n.tween=Q.a.to(n.overlay,0,{overflow:"hidden",height:t,top:0,zIndex:2}),console.log(a+"ok")):n.tween=Q.a.to(n.overlay,0,{overflow:"visible",height:"inherit",top:0,zindex:0})},n.overlay=null,n.tween=null,n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(new Image).src=O.a,(new Image).src=H.a,(new Image).src=X.a}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"containerJ"},u.a.createElement("div",{ref:function(t){return e.overlay=t},className:"overlay"},u.a.createElement("div",{className:"description1"},"Each of our products required many hands to make. From farm to shelf, Leon Ryn shows you the journey this piece took in getting to you. "),u.a.createElement("div",{className:"rocContainer"},u.a.createElement(L,{zIndex:this.props.zIndex,overLay:this.needOverlay}),u.a.createElement("div",{className:"arrow"},u.a.createElement("img",{src:V.a})),u.a.createElement(F,{zIndex:this.props.zIndex,overLay:this.needOverlay}),u.a.createElement("div",{className:"arrow"},u.a.createElement("img",{src:V.a})),u.a.createElement(q,{zIndex:this.props.zIndex,overLay:this.needOverlay}))))}}]),t}(u.a.Component),_=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).zIndex=function(e){1===e?n.setState({zIndex:"one"}):n.setState({zIndex:"zero"})},n.state={showInfo:!0,updating:!0},n.frame=null,n.body=null,n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.tween=h.e.to(this.body,.1,{opacity:0,scale:.98,ease:h.b.easeIn}),setTimeout(function(){this.setState({showInfo:e,updating:!1,zIndex:"one"})}.bind(this),100),this.setState({updating:!0}),this.tween=h.e.to(this.body,.1,{opacity:1,scale:1,delay:.2,ease:h.b.easeIn})}},{key:"componentDidMount",value:function(){this.tween=h.e.from(this.frame,.4,{opacity:0}),(new Image).src=O.a,(new Image).src=H.a,(new Image).src=X.a}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{ref:function(t){return e.frame=t},className:"frame"},u.a.createElement(p,{zIndex:this.state.zIndex,onClick:this.handleClick,infoUp:this.state.showInfo,updating:this.state.updating}),u.a.createElement("div",{ref:function(t){return e.body=t},className:"bodyI"},this.state.showInfo?u.a.createElement(x,null):u.a.createElement($,{zIndex:this.zIndex})))}}]),t}(u.a.Component);m.a.render(u.a.createElement(_,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.f1664563.chunk.js.map