"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6911],{6911:function(n,e,t){t.r(e),t.d(e,{Linker:function(){return v}});var r=t(4165),i=t(7762),a=t(5861),s=t(5671),o=t(3144),l=t(136),u=t(516),c=t(4709),k=t(3419),p=0,d=0;function f(n,e,t,r,i){var a=(0,c.oW)(n,e),s=a.dx,o=a.dy,l=a.distance;if(!i||l<=t)return l;var u={x:Math.abs(s),y:Math.abs(o)},k={x:Math.min(u.x,r.width-u.x),y:Math.min(u.y,r.height-u.y)};return Math.sqrt(Math.pow(k.x,2)+Math.pow(k.y,2))}var v=function(n){(0,l.Z)(v,n);var e=(0,u.Z)(v);function v(n){var t;return(0,s.Z)(this,v),(t=e.call(this,n))._setColor=function(n){if(n.options.links){var e=t.linkContainer,r=n.options.links,i=void 0===r.id?e.particles.linksColor:e.particles.linksColors.get(r.id);if(!i){var a=r.color;i=(0,c.Dt)(a,r.blink,r.consent),void 0===r.id?e.particles.linksColor=i:e.particles.linksColors.set(r.id,i)}}},t.linkContainer=n,t}return(0,o.Z)(v,[{key:"clear",value:function(){}},{key:"init",value:function(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}},{key:"interact",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var a,s,o,l,u,k,v,h,b,x,y,w,C,g,Z,M=this;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.options.links){n.next=2;break}return n.abrupt("return");case 2:if(e.links=[],s=e.getPosition(),o=this.container,l=o.canvas.size,!(s.x<p||s.y<d||s.x>l.width||s.y>l.height)){n.next=6;break}return n.abrupt("return");case 6:if(u=e.options.links,k=u.opacity,v=null!==(a=e.retina.linksDistance)&&void 0!==a?a:0,!(h=u.warp)){n.next=15;break}return n.next=10,t.e(1037).then(t.bind(t,1037));case 10:x=n.sent,y=x.CircleWarp,b=new y(s.x,s.y,v,l),n.next=16;break;case 15:b=new c.Cd(s.x,s.y,v);case 16:w=o.particles.quadTree.query(b),C=(0,i.Z)(w),n.prev=18,Z=(0,r.Z)().mark((function n(){var t,i,a,o,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=g.value,i=t.options.links,e!==t&&null!==i&&void 0!==i&&i.enable&&u.id===i.id&&!t.spawning&&!t.destroyed&&t.links&&!e.links.some((function(n){return n.destination===t}))&&!t.links.some((function(n){return n.destination===e}))){n.next=4;break}return n.abrupt("return",0);case 4:if(!((a=t.getPosition()).x<p||a.y<d||a.x>l.width||a.y>l.height)){n.next=7;break}return n.abrupt("return",0);case 7:if(!((o=f(s,a,v,l,h&&i.warp))>v)){n.next=10;break}return n.abrupt("return",0);case 10:c=(1-o/v)*k,M._setColor(e),e.links.push({destination:t,opacity:c});case 13:case"end":return n.stop()}}),n)})),C.s();case 21:if((g=C.n()).done){n.next=28;break}return n.delegateYield(Z(),"t0",23);case 23:if(0!==n.t0){n.next=26;break}return n.abrupt("continue",26);case 26:n.next=21;break;case 28:n.next=33;break;case 30:n.prev=30,n.t1=n.catch(18),C.e(n.t1);case 33:return n.prev=33,C.f(),n.finish(33);case 36:case"end":return n.stop()}}),n,this,[[18,30,33,36]])})));return function(e){return n.apply(this,arguments)}}()},{key:"isEnabled",value:function(n){var e;return!(null===(e=n.options.links)||void 0===e||!e.enable)}},{key:"loadParticlesOptions",value:function(n){n.links||(n.links=new k.y);for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];for(var i=0,a=t;i<a.length;i++){var s=a[i];n.links.load(null===s||void 0===s?void 0:s.links)}}},{key:"reset",value:function(){}}]),v}(c.$S)}}]);
//# sourceMappingURL=6911.dd1ff679.chunk.js.map