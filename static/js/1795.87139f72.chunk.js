"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1795],{1795:function(e,t,n){n.r(t),n.d(t,{NoneOutMode:function(){return c}});var i=n(4165),o=n(5861),r=n(5671),s=n(3144),a=n(4709),c=function(){function e(t){(0,r.Z)(this,e),this.container=t,this.modes=["none"]}return(0,s.Z)(e,[{key:"update",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n,o,r){var s,c,u,p,v,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.modes.includes(r)){e.next=2;break}return e.abrupt("return");case 2:if(!(null!==(s=t.options.move.distance.horizontal&&("left"===n||"right"===n))&&void 0!==s?s:t.options.move.distance.vertical&&("top"===n||"bottom"===n))){e.next=4;break}return e.abrupt("return");case 4:if(c=t.options.move.gravity,u=this.container,p=u.canvas.size,v=t.getRadius(),c.enable){e.next=11;break}if(!(t.velocity.y>0&&t.position.y<=p.height+v||t.velocity.y<0&&t.position.y>=-v||t.velocity.x>0&&t.position.x<=p.width+v||t.velocity.x<0&&t.position.x>=-v)){e.next=8;break}return e.abrupt("return");case 8:(0,a.Ac)(t.position,u.canvas.size,a.OW.origin,v,n)||u.particles.remove(t),e.next=13;break;case 11:h=t.position,(!c.inverse&&h.y>p.height+v&&"bottom"===n||c.inverse&&h.y<-v&&"top"===n)&&u.particles.remove(t);case 13:return e.next=15,Promise.resolve();case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,i,o){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=1795.87139f72.chunk.js.map