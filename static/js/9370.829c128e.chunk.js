"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9370],{9370:function(t,i,o){o.r(i),o.d(i,{OutOutMode:function(){return u}});var e=o(4165),n=o(5861),s=o(5671),r=o(3144),a=o(4709),u=function(){function t(i){(0,s.Z)(this,t),this.container=i,this.modes=["out"]}return(0,r.Z)(t,[{key:"update",value:function(){var t=(0,n.Z)((0,e.Z)().mark((function t(i,o,n,s){var r,u,p,d,c,f,h,x,l,y,v,m,b,g,k,C,w,P,M;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.modes.includes(s)){t.next=2;break}return t.abrupt("return");case 2:r=this.container,t.t0=i.outType,t.next="inside"===t.t0?6:20;break;case 6:if(u=i.velocity,p=u.x,d=u.y,(c=a.OW.origin).length=i.moveCenter.radius,c.angle=i.velocity.angle+Math.PI,c.addTo(a.OW.create(i.moveCenter)),f=(0,a.oW)(i.position,c),h=f.dx,x=f.dy,!(p<=0&&h>=0||d<=0&&x>=0||p>=0&&h<=0||d>=0&&x<=0)){t.next=14;break}return t.abrupt("return");case 14:return i.position.x=Math.floor((0,a.vd)({min:0,max:r.canvas.size.width})),i.position.y=Math.floor((0,a.vd)({min:0,max:r.canvas.size.height})),l=(0,a.oW)(i.position,i.moveCenter),y=l.dx,v=l.dy,i.direction=Math.atan2(-v,-y),i.velocity.angle=i.direction,t.abrupt("break",35);case 20:if(!(0,a.Ac)(i.position,r.canvas.size,a.OW.origin,i.getRadius(),o)){t.next=22;break}return t.abrupt("return");case 22:t.t1=i.outType,t.next="outside"===t.t1?25:"normal"===t.t1?30:34;break;case 25:return i.position.x=Math.floor((0,a.vd)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.x,i.position.y=Math.floor((0,a.vd)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.y,m=(0,a.oW)(i.position,i.moveCenter),b=m.dx,g=m.dy,i.moveCenter.radius&&(i.direction=Math.atan2(g,b),i.velocity.angle=i.direction),t.abrupt("break",34);case 30:return k=i.options.move.warp,C=r.canvas.size,w={bottom:C.height+i.getRadius()+i.offset.y,left:-i.getRadius()-i.offset.x,right:C.width+i.getRadius()+i.offset.x,top:-i.getRadius()-i.offset.y},P=i.getRadius(),M=(0,a.M_)(i.position,P),"right"===o&&M.left>C.width+i.offset.x?(i.position.x=w.left,i.initialPosition.x=i.position.x,k||(i.position.y=(0,a.sZ)()*C.height,i.initialPosition.y=i.position.y)):"left"===o&&M.right<-i.offset.x&&(i.position.x=w.right,i.initialPosition.x=i.position.x,k||(i.position.y=(0,a.sZ)()*C.height,i.initialPosition.y=i.position.y)),"bottom"===o&&M.top>C.height+i.offset.y?(k||(i.position.x=(0,a.sZ)()*C.width,i.initialPosition.x=i.position.x),i.position.y=w.top,i.initialPosition.y=i.position.y):"top"===o&&M.bottom<-i.offset.y&&(k||(i.position.x=(0,a.sZ)()*C.width,i.initialPosition.x=i.position.x),i.position.y=w.bottom,i.initialPosition.y=i.position.y),t.abrupt("break",34);case 34:return t.abrupt("break",35);case 35:return t.next=37,Promise.resolve();case 37:case"end":return t.stop()}}),t,this)})));return function(i,o,e,n){return t.apply(this,arguments)}}()}]),t}()}}]);
//# sourceMappingURL=9370.829c128e.chunk.js.map