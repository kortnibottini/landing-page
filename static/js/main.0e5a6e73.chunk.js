(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],[,,,,function(t,i,e){t.exports=e(18)},function(t,i,e){},,function(t,i,e){var n={"./0.svg":8,"./1.svg":9,"./2.svg":10,"./3.svg":11,"./4.svg":12,"./5.svg":13,"./6.svg":14,"./7.svg":15,"./8.svg":16,"./9.svg":17};function s(t){var i=o(t);return e(i)}function o(t){if(!e.o(n,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=o,t.exports=s,s.id=7},function(t,i,e){t.exports=e.p+"static/media/0.b47eddbc.svg"},function(t,i,e){t.exports=e.p+"static/media/1.5de0e29b.svg"},function(t,i,e){t.exports=e.p+"static/media/2.579fd197.svg"},function(t,i,e){t.exports=e.p+"static/media/3.8f9850cc.svg"},function(t,i,e){t.exports=e.p+"static/media/4.aba1920a.svg"},function(t,i,e){t.exports=e.p+"static/media/5.bb659f69.svg"},function(t,i,e){t.exports=e.p+"static/media/6.5722e8ca.svg"},function(t,i,e){t.exports=e.p+"static/media/7.4368c096.svg"},function(t,i,e){t.exports=e.p+"static/media/8.d3c2656a.svg"},function(t,i,e){t.exports=e.p+"static/media/9.2396eea4.svg"},function(t,i,e){"use strict";e.r(i);e(5);var n=e(1),s=e(3),o=e(0),a=e(2),h=o.Engine.create(),r=function(){return window.document.body.getBoundingClientRect()},c=function(){function t(i,e){Object(n.a)(this,t),this.x=0,this.y=0,this.height=0,this.txt="do yer best";var s,a,c=r();this.x=(s=0,a=c.width-100,s=Math.ceil(s),a=Math.floor(a),Math.floor(Math.random()*(a-s+1))+s),this.txt=e||this.txt,this.ctx=i,this.height=c.width/c.height*60,this.ctx.font="".concat(this.height,"px itc-avant-garde-gothic-pro");var d=i.measureText(e);this.width=d.width,this.ctx.fillText(e,this.x,this.y),this.body=o.Bodies.rectangle(this.x,this.y,this.width,this.height,{restitution:.9}),o.World.add(h.world,this.body)}return Object(a.a)(t,[{key:"display",value:function(t){this.ctx.save(),this.ctx.font="".concat(this.height,"px itc-avant-garde-gothic-pro");var i=this.ctx.measureText(this.txt);this.width!==i.width&&(o.Body.scale(this.body,i.width/this.width,1),this.width=i.width),this.ctx.textBaseline="middle",this.ctx.textAlign="center",this.ctx.translate(this.body.position.x,this.body.position.y),this.ctx.rotate(this.body.angle),this.ctx.fillText(this.txt,0,0),this.ctx.restore()}}]),t}(),d=function(){function t(){Object(n.a)(this,t),this.resizeBounds()}return Object(a.a)(t,[{key:"resizeBounds",value:function(){var t=r(),i=t.width,e=t.height;this.ground&&o.World.remove(h.world,[this.ground,this.leftWall,this.rightWall]);var n={isStatic:!0};this.ground=o.Bodies.rectangle(0,e,2*i,32,n),this.leftWall=o.Bodies.rectangle(0,0,10,3*e,n),this.rightWall=o.Bodies.rectangle(i,0,10,3*e,n),o.World.add(h.world,[this.ground,this.leftWall,this.rightWall])}}]),t}();function l(t){var i=window.devicePixelRatio||1,e=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return{ratio:i/e,backingStoreRatio:e}}function u(t,i,e,n){var s=l(i),o=s.ratio,a=s.backingStoreRatio;devicePixelRatio!==a?(t.width=e*o,t.height=n*o,t.style.width=e+"px",t.style.height=n+"px"):(t.width=e,t.height=n,t.style.width="",t.style.height=""),i.scale(o,o)}var g=function(){function t(i,e,s,a){Object(n.a)(this,t),this.ctx=i,this.x=e,this.y=s;var c=r();this.img=window._sketch_image_sources[a-1];var d=c.width/c.height;this.height=150*d,this.img.height=this.height,this.width=this.img.height,this.body=o.Bodies.rectangle(this.x,this.y,this.width,this.height),o.World.add(h.world,this.body)}return Object(a.a)(t,[{key:"display",value:function(){var t=l(this.ctx).ratio;this.ctx.setTransform(t,0,0,t,this.body.position.x*t,this.body.position.y*t),this.ctx.rotate(this.body.angle),this.ctx.drawImage(this.img,-this.width/2,-this.height/2,this.height,this.width),this.ctx.setTransform(t,0,0,t,0,0)}}]),t}(),v=Object(s.a)(Array(10)).map((function(t,i){return i+1}));var f=function(t){return function(t){for(var i,e,n=t.length;n;)e=Math.floor(Math.random()*n--),i=t[n],t[n]=t[e],t[e]=i;return t}(Object(s.a)(t))},x=["Hello.","I am a product designer","and AI enthusiast.","Solving problems","big and small","@snap"],p=function t(){var i=this;Object(n.a)(this,t),this.movers=[],this.options=[],this.handleResize=function(){var t=r(),e=t.width,n=t.height;u(i.canvas,i.ctx,e,n),i.boundaries.resizeBounds()},this.draw=function(){i.ctx.clearRect(0,0,i.canvas.width,i.canvas.height),o.Engine.update(h),requestAnimationFrame(i.draw);for(var t=0;t<i.movers.length;t++)i.movers[t].display()},this.handleClick=function(t){t.preventDefault(),i.options.length<=0&&(i.options=f(v));var e=i.options.pop();i.movers.push(new g(i.ctx,t.clientX,t.clientY,e))};var e=r(),s=e.width,a=e.height;this.canvas=document.createElement("canvas"),this.canvas.setAttribute("data-pixel-ratio","2"),this.ctx=this.canvas.getContext("2d"),u(this.canvas,this.ctx,s,a),document.body.appendChild(this.canvas),x.forEach((function(t){var e=new c(i.ctx,t);i.movers.push(e)})),this.boundaries=new d,o.Engine.run(h),window.addEventListener("resize",this.handleResize),document.body.addEventListener("click",this.handleClick),requestAnimationFrame(this.draw)},m=function(){var t=new Array(10).fill().map((function(t,i){var n=-1!==navigator.userAgent.indexOf("Chrome")||-1!==navigator.userAgent.indexOf("Safari")?"svg":"png";return function(t){return new Promise((function(i,e){var n=new Image;n.style.position="fixed",n.style.left="-9999px",n.style.visibility="hidden",document.body.appendChild(n),n.onload=function(t){i(n)},n.src=t}))}(e(7)("./".concat(i,".").concat(n)))}));Promise.all(t).then((function(t){window._sketch_image_sources=t;new p}))};window.onload=function(){document&&document.fonts?setTimeout((function(){document.fonts.load("16px itc-avant-garde-gothic-pro").then((function(){m()}))}),0):m()}}],[[4,1,2]]]);
//# sourceMappingURL=main.0e5a6e73.chunk.js.map