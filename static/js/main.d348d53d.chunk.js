(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],[,,,,function(t,i,e){t.exports=e(18)},function(t,i,e){},,function(t,i,e){var s={"./0.svg":8,"./1.svg":9,"./2.svg":10,"./3.svg":11,"./4.svg":12,"./5.svg":13,"./6.svg":14,"./7.svg":15,"./8.svg":16,"./9.svg":17};function n(t){var i=o(t);return e(i)}function o(t){if(!e.o(s,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id=7},function(t,i,e){t.exports=e.p+"static/media/0.ebdcdbec.svg"},function(t,i,e){t.exports=e.p+"static/media/1.8fa5f7f4.svg"},function(t,i,e){t.exports=e.p+"static/media/2.07c3340a.svg"},function(t,i,e){t.exports=e.p+"static/media/3.80cc9e7a.svg"},function(t,i,e){t.exports=e.p+"static/media/4.bdf518bb.svg"},function(t,i,e){t.exports=e.p+"static/media/5.fd099edc.svg"},function(t,i,e){t.exports=e.p+"static/media/6.9c8ae5f5.svg"},function(t,i,e){t.exports=e.p+"static/media/7.bdf88d54.svg"},function(t,i,e){t.exports=e.p+"static/media/8.a9ffa91a.svg"},function(t,i,e){t.exports=e.p+"static/media/9.2762c7ff.svg"},function(t,i,e){"use strict";e.r(i);e(5);var s=e(1),n=e(3),o=e(0),h=e(2),a=o.Engine.create(),r=function(){return window.document.body.getBoundingClientRect()},c=function(){function t(i,e){Object(s.a)(this,t),this.x=0,this.y=0,this.height=0,this.txt="do yer best";var n,h,c=r();this.x=(n=0,h=c.width-100,n=Math.ceil(n),h=Math.floor(h),Math.floor(Math.random()*(h-n+1))+n),this.txt=e||this.txt,this.ctx=i,this.height=c.width/c.height*60,this.ctx.font="".concat(this.height,"px itc-avant-garde-gothic-pro");var d=i.measureText(e);this.width=d.width,this.ctx.fillText(e,this.x,this.y),this.body=o.Bodies.rectangle(this.x,this.y,this.width,this.height,{restitution:.9}),o.World.add(a.world,this.body)}return Object(h.a)(t,[{key:"display",value:function(t){this.ctx.save(),this.ctx.font="".concat(this.height,"px itc-avant-garde-gothic-pro");var i=this.ctx.measureText(this.txt);this.width!==i.width&&(o.Body.scale(this.body,i.width/this.width,1),this.width=i.width),this.ctx.textBaseline="middle",this.ctx.textAlign="center",this.ctx.translate(this.body.position.x,this.body.position.y),this.ctx.rotate(this.body.angle),this.ctx.fillText(this.txt,0,0),this.ctx.restore()}}]),t}(),d=function(){function t(){Object(s.a)(this,t),this.resizeBounds()}return Object(h.a)(t,[{key:"resizeBounds",value:function(){var t=r(),i=t.width,e=t.height;this.ground&&o.World.remove(a.world,[this.ground,this.leftWall,this.rightWall]);var s={isStatic:!0};this.ground=o.Bodies.rectangle(0,e,2*i,32,s),this.leftWall=o.Bodies.rectangle(0,0,10,3*e,s),this.rightWall=o.Bodies.rectangle(i,0,10,3*e,s),o.World.add(a.world,[this.ground,this.leftWall,this.rightWall])}}]),t}();function l(t){var i=window.devicePixelRatio||1,e=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return{ratio:i/e,backingStoreRatio:e}}function g(t,i,e,s){var n=l(i),o=n.ratio,h=n.backingStoreRatio;devicePixelRatio!==h?(t.width=e*o,t.height=s*o,t.style.width=e+"px",t.style.height=s+"px"):(t.width=e,t.height=s,t.style.width="",t.style.height=""),i.scale(o,o)}var u=function(){function t(i,e,n,h){Object(s.a)(this,t),this.ctx=i,this.x=e,this.y=n;var c=r();this.img=window._sketch_image_sources[h-1];var d,l,g=c.width/c.height,u=this.img.height>=this.img.width?this.img.width/this.img.height:this.img.height/this.img.width,f=g*(d=.1,l=2,Math.random()*(l-d)+d);console.log(f),this.height=this.img.height*u*g*f,this.width=this.img.width*u*g*f,this.body=o.Bodies.rectangle(this.x,this.y,this.width,this.height),o.World.add(a.world,this.body)}return Object(h.a)(t,[{key:"display",value:function(){var t=l(this.ctx).ratio;this.ctx.setTransform(t,0,0,t,this.body.position.x*t,this.body.position.y*t),this.ctx.rotate(this.body.angle),this.ctx.drawImage(this.img,-this.width/2,-this.height/2,this.width,this.height),this.ctx.setTransform(t,0,0,t,0,0)}}]),t}(),f=Object(n.a)(Array(10)).map((function(t,i){return i+1}));var v=function(t){return function(t){for(var i,e,s=t.length;s;)e=Math.floor(Math.random()*s--),i=t[s],t[s]=t[e],t[e]=i;return t}(Object(n.a)(t))},x=["Hello.","I am a product designer","and AI enthusiast.","Solving problems","big and small","@snap"],p=function t(){var i=this;Object(s.a)(this,t),this.movers=[],this.options=[],this.handleResize=function(){var t=r(),e=t.width,s=t.height;g(i.canvas,i.ctx,e,s),i.boundaries.resizeBounds()},this.draw=function(){i.ctx.clearRect(0,0,i.canvas.width,i.canvas.height),o.Engine.update(a),requestAnimationFrame(i.draw);for(var t=0;t<i.movers.length;t++)i.movers[t].display()},this.handleClick=function(t){t.preventDefault(),i.options.length<=0&&(i.options=v(f));var e=i.options.pop();i.movers.push(new u(i.ctx,t.clientX,t.clientY,e))};var e=r(),n=e.width,h=e.height;this.canvas=document.createElement("canvas"),this.canvas.setAttribute("data-pixel-ratio","2"),this.ctx=this.canvas.getContext("2d"),g(this.canvas,this.ctx,n,h),document.body.appendChild(this.canvas),x.forEach((function(t){var e=new c(i.ctx,t);i.movers.push(e)})),this.boundaries=new d,o.Engine.run(a),window.addEventListener("resize",this.handleResize),document.body.addEventListener("click",this.handleClick),requestAnimationFrame(this.draw)},m=function(){var t=new Array(10).fill().map((function(t,i){return function(t){return new Promise((function(i,e){var s=new Image;s.style.position="fixed",s.style.left="-9999px",s.style.visibility="hidden",document.body.appendChild(s),s.onload=function(t){i(s)},s.src=t}))}(e(7)("./".concat(i,".svg")))}));Promise.all(t).then((function(t){window._sketch_image_sources=t;new p}))};window.onload=function(){document&&document.fonts?setTimeout((function(){document.fonts.load("16px itc-avant-garde-gothic-pro").then((function(){m()}))}),0):m()}}],[[4,1,2]]]);
//# sourceMappingURL=main.d348d53d.chunk.js.map