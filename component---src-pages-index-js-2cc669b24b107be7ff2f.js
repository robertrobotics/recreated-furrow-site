(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),a=n("Bl7J"),r=n("vOnD"),l=n("ZMKu"),s=r.default.div.withConfig({displayName:"homeStyles__Banner",componentId:"hqtwjy-0"})(["background:",";height:100vh;width:100%;position:relative;margin-bottom:296px;"],(function(e){return e.theme.background})),c=r.default.div.withConfig({displayName:"homeStyles__Video",componentId:"hqtwjy-1"})(["height:100%;width:100%;video{object-fit:cover;}"]),d=r.default.canvas.withConfig({displayName:"homeStyles__Canvas",componentId:"hqtwjy-2"})(["position:absolute;height:100%;top:0;left:0;display:block;"]),u=Object(r.default)(l.b.h1).withConfig({displayName:"homeStyles__BannerTitle",componentId:"hqtwjy-3"})(["position:absolute;bottom:-120px;left:-18px;color:",";pointer-events:none;"],(function(e){return e.theme.text})),f=Object(r.default)(l.b.span).withConfig({displayName:"homeStyles__HeadLine",componentId:"hqtwjy-4"})(["display:block;font-size:23rem;font-weight:900;line-height:.76;"]);var h=n("6ysj"),m=function(e){var t,a,r,l=e.onCursor,m=Object(i.useRef)(null),p=(t=Object(i.useState)({width:window.innerWidth,height:window.innerHeight}),a=t[0],r=t[1],Object(i.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),a),w=Object(h.c)().currentTheme;Object(i.useEffect)((function(){var e,t,n=m.current,i=n.cloneNode(),o=i.getContext("2d"),a=n.getContext("2d"),r=!1;a.globalCompositeOperation="source-over",a.fillStyle="dark"===w?"#000000":"#ffffff",a.fillRect(0,0,p.width,p.height),n.addEventListener("mouseover",(function(i){r=!0,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("mouseup",(function(i){r=!1,e=i.pageX-n.offsetLeft,t=i.pageY-n.offsetTop})),n.addEventListener("mousemove",(function(l){if(r){o.globalCompositeOperation="source-over",a.globalCompositeOperation="destination-out";var s=l.pageX-n.offsetLeft,c=l.pageY-n.offsetTop;o.lineJoin="round",o.moveTo(e,t),o.lineTo(s,c),o.closePath(),o.lineWidth=120,o.stroke(),e=s,t=c,a.drawImage(i,0,0)}}))}),[w]);return o.a.createElement(s,null,o.a.createElement(c,null,o.a.createElement("video",{height:"100%",width:"100%",loop:!0,autoPlay:!0,src:n("V0Cn")})),o.a.createElement(d,{height:p.height,width:p.width,ref:m,onMouseEnter:function(){return l("hovered")},onMouseLeave:l}),o.a.createElement(u,{variants:{initial:{y:800},animate:{y:0,transition:{staggerChildren:.2}}},initial:"initial",animate:"animate"},o.a.createElement(f,{variants:{initial:{y:800},animate:{y:0,transition:{duration:1,ease:[.6,.05,-.01,.1]}}}},"DIG"),o.a.createElement(f,null,"DEEP")))};t.default=function(e){var t=Object(h.c)(),n=(t.currentTheme,t.cursorStyles),i=Object(h.b)();return o.a.createElement(a.a,null,o.a.createElement(m,{onCursor:function(e){e=n.includes(e)&&e||!1,i({type:"CURSOR_TYPE",cursorType:e})}}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2cc669b24b107be7ff2f.js.map