"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[101],{101:function(e,t,i){i.r(t),i.d(t,{Particle:function(){return m}});var s=i(4165),n=i(5861),o=i(1413),a=i(9439),r=i(7762),l=i(5671),c=i(3144),h=i(9271),u=i(6949),d=i(5463),f=i(514),v=i(534),p=i(5460),y=i(3747),g=i(4941),b=i(8413),k=.5;function x(e,t,i,s){var n=t.options[e];if(n)return(0,u.ZB)({close:t.close,fill:t.fill},(0,u.wA)(n,i,s))}function w(e,t,i,s){var n=t.options[e];if(n)return(0,u.ZB)({close:t.close,fill:t.fill},(0,u.wA)(n,i,s))}function C(e){if((0,u.dB)(e.outMode,e.checkModes)){var t=2*e.radius;e.coord>e.maxCoord-t?e.setCb(-e.radius):e.coord<t&&e.setCb(e.radius)}}var m=function(){function e(t,i){var s=this;(0,l.Z)(this,e),this.container=i,this._calcPosition=function(e,t,i){var n,o,l,c,u,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,f=(0,r.Z)(e.plugins);try{for(f.s();!(u=f.n()).done;){var v=(0,a.Z)(u.value,2)[1],p=void 0!==v.particlePosition?v.particlePosition(t,s):void 0;if(p)return y.U.create(p.x,p.y,i)}}catch(P){f.e(P)}finally{f.f()}var g=e.canvas.size,b=(0,h.mC)({size:g,position:t}),k=y.U.create(b.x,b.y,i),x=s.getRadius(),w=s.options.move.outModes,m=function(t){C({outMode:t,checkModes:["bounce"],coord:k.x,maxCoord:e.canvas.size.width,setCb:function(e){return k.x+=e},radius:x})},Z=function(t){C({outMode:t,checkModes:["bounce"],coord:k.y,maxCoord:e.canvas.size.height,setCb:function(e){return k.y+=e},radius:x})};if(m(null!==(n=w.left)&&void 0!==n?n:w.default),m(null!==(o=w.right)&&void 0!==o?o:w.default),Z(null!==(l=w.top)&&void 0!==l?l:w.default),Z(null!==(c=w.bottom)&&void 0!==c?c:w.default),s._checkOverlap(k,d)){return s._calcPosition(e,void 0,i,d+1)}return k},this._calculateVelocity=function(){var e=(0,h.lQ)(s.direction).copy(),t=s.options.move;if("inside"===t.direction||"outside"===t.direction)return e;var i=(0,h.Id)((0,h.Gu)(t.angle.value)),n=(0,h.Id)((0,h.Gu)(t.angle.offset)),o={left:n-i*k,right:n+i*k};return t.straight||(e.angle+=(0,h.vd)((0,h.Cs)(o.left,o.right))),t.random&&"number"===typeof t.speed&&(e.length*=(0,h.sZ)()),e},this._checkOverlap=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=s.options.collisions,n=s.getRadius();if(!i.enable)return!1;var o=i.overlap;if(o.enable)return!1;var a=o.retries;if(a>=0&&t>a)throw new Error("".concat(d.gK," particle is overlapping and can't be placed"));return!!s.container.particles.find((function(t){return(0,h.Sp)(e,t.position)<n+t.getRadius()}))},this._getRollColor=function(e){var t;if(!e||!s.roll||!s.backColor&&!s.roll.alter)return e;var i=s.roll.horizontal&&s.roll.vertical?2:1,n=s.roll.horizontal?Math.PI*k:0;return Math.floor(((null!==(t=s.roll.angle)&&void 0!==t?t:0)+n)/(Math.PI/i))%2?s.backColor?s.backColor:s.roll.alter?(0,g.PL)(e,s.roll.alter.type,s.roll.alter.value):e:e},this._initPosition=function(e){var t,i,n=s.container,a=(0,h.Gu)(s.options.zIndex.value);s.position=s._calcPosition(n,e,(0,h.uZ)(a,0,n.zLayers)),s.initialPosition=s.position.copy();var r=n.canvas.size;switch(s.moveCenter=(0,o.Z)((0,o.Z)({},(0,u.bt)(s.options.move.center,r)),{},{radius:null!==(t=s.options.move.center.radius)&&void 0!==t?t:0,mode:null!==(i=s.options.move.center.mode)&&void 0!==i?i:"percent"}),s.direction=(0,h.Gk)(s.options.move.direction,s.position,s.moveCenter),s.options.move.direction){case"inside":s.outType="inside";break;case"outside":s.outType="outside"}s.offset=p.O.origin},this._engine=t}return(0,c.Z)(e,[{key:"destroy",value:function(e){var t;if(!this.unbreakable&&!this.destroyed){this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;var i=this.container,s=this.pathGenerator,n=i.shapeDrawers.get(this.shape);null===n||void 0===n||null===(t=n.particleDestroy)||void 0===t||t.call(n,this);var o,l=(0,r.Z)(i.plugins);try{for(l.s();!(o=l.n()).done;){var c,h=(0,a.Z)(o.value,2)[1];null===(c=h.particleDestroyed)||void 0===c||c.call(h,this,e)}}catch(p){l.e(p)}finally{l.f()}var u,d=(0,r.Z)(i.particles.updaters);try{for(d.s();!(u=d.n()).done;){var f,v=u.value;null===(f=v.particleDestroyed)||void 0===f||f.call(v,this,e)}}catch(p){d.e(p)}finally{d.f()}null===s||void 0===s||s.reset(this),this._engine.dispatchEvent("particleDestroyed",{container:this.container,data:{particle:this}})}}},{key:"draw",value:function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){var i,n,o,l,c,h;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=this.container,n=i.canvas,o=(0,r.Z)(i.plugins),e.prev=2,o.s();case 4:if((l=o.n()).done){e.next=10;break}return c=(0,a.Z)(l.value,2),h=c[1],e.next=8,n.drawParticlePlugin(h,this,t);case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),o.e(e.t0);case 15:return e.prev=15,o.f(),e.finish(15);case 18:return e.next=20,n.drawParticle(this,t);case 20:case"end":return e.stop()}}),e,this,[[2,12,15,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getFillColor",value:function(){var e;return this._getRollColor(null!==(e=this.bubble.color)&&void 0!==e?e:(0,f.gW)(this.color))}},{key:"getMass",value:function(){return Math.pow(this.getRadius(),2)*Math.PI*k}},{key:"getPosition",value:function(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}},{key:"getRadius",value:function(){var e;return null!==(e=this.bubble.radius)&&void 0!==e?e:this.size.value}},{key:"getStrokeColor",value:function(){var e;return this._getRollColor(null!==(e=this.bubble.color)&&void 0!==e?e:(0,f.gW)(this.strokeColor))}},{key:"init",value:function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t,i,n,o){var l,c,p,y,g,k,C,m,Z,P,z,D,_,R,M,G,I,A,F,S,V,E,O,L,T,B,U,W,X,K,Q,j,q,H,J,N,Y,$,ee,te,ie,se,ne,oe,ae,re,le;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D=this.container,_=this._engine,this.id=t,this.group=o,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0,R=D.retina.pixelRatio,M=D.actualOptions,G=(0,b.x)(this._engine,D,M.particles),I=G.effect.type,A=G.shape.type,F=G.reduceDuplicates,this.effect=(0,u.wA)(I,this.id,F),this.shape=(0,u.wA)(A,this.id,F),S=G.effect,V=G.shape,n&&(null!==(E=n.effect)&&void 0!==E&&E.type&&(L=n.effect.type,(T=(0,u.wA)(L,this.id,F))&&(this.effect=T,S.load(n.effect))),null!==(O=n.shape)&&void 0!==O&&O.type&&(B=n.shape.type,(U=(0,u.wA)(B,this.id,F))&&(this.shape=U,V.load(n.shape)))),this.effectData=x(this.effect,S,this.id,F),this.shapeData=w(this.shape,V,this.id,F),G.load(n),(W=this.effectData)&&G.load(W.particles),(X=this.shapeData)&&G.load(X.particles),(K=new v.o(_,D)).load(D.actualOptions.interactivity),K.load(G.interactivity),this.interactivity=K,this.effectFill=null!==(l=null===W||void 0===W?void 0:W.fill)&&void 0!==l?l:G.effect.fill,this.effectClose=null!==(c=null===W||void 0===W?void 0:W.close)&&void 0!==c?c:G.effect.close,this.shapeFill=null!==(p=null===X||void 0===X?void 0:X.fill)&&void 0!==p?p:G.shape.fill,this.shapeClose=null!==(y=null===X||void 0===X?void 0:X.close)&&void 0!==y?y:G.shape.close,this.options=G,Q=this.options.move.path,this.pathDelay=(0,h.Gu)(Q.delay.value)*d.X5,!Q.generator){e.next=44;break}if(this.pathGenerator=this._engine.getPathGenerator(Q.generator),!this.pathGenerator||!D.addPath(Q.generator,this.pathGenerator)){e.next=44;break}return e.next=44,this.pathGenerator.init(D);case 44:if(D.retina.initParticle(this),this.size=(0,u.V0)(this.options.size,R),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(i),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),1,this.moveDecay=1-(0,h.Gu)(this.options.move.decay),(j=D.particles).setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/D.zLayers,this.sides=24,(q=D.effectDrawers.get(this.effect))||(q=this._engine.getEffectDrawer(this.effect))&&D.effectDrawers.set(this.effect,q),null===(g=q)||void 0===g||!g.loadEffect){e.next=62;break}return e.next=62,q.loadEffect(this);case 62:if((H=D.shapeDrawers.get(this.shape))||(H=this._engine.getShapeDrawer(this.shape))&&D.shapeDrawers.set(this.shape,H),null===(k=H)||void 0===k||!k.loadShape){e.next=67;break}return e.next=67,H.loadShape(this);case 67:(J=null===(C=H)||void 0===C?void 0:C.getSidesCount)&&(this.sides=J(this)),this.spawning=!1,this.shadowColor=(0,f.tX)(this.options.shadow.color),N=(0,r.Z)(j.updaters),e.prev=72,N.s();case 74:if((Y=N.n()).done){e.next=80;break}return $=Y.value,e.next=78,$.init(this);case 78:e.next=74;break;case 80:e.next=85;break;case 82:e.prev=82,e.t0=e.catch(72),N.e(e.t0);case 85:return e.prev=85,N.f(),e.finish(85);case 88:ee=(0,r.Z)(j.movers),e.prev=89,ee.s();case 91:if((te=ee.n()).done){e.next=97;break}return se=te.value,e.next=95,null===(ie=se.init)||void 0===ie?void 0:ie.call(se,this);case 95:e.next=91;break;case 97:e.next=102;break;case 99:e.prev=99,e.t1=e.catch(89),ee.e(e.t1);case 102:return e.prev=102,ee.f(),e.finish(102);case 105:return e.next=107,null===(m=q)||void 0===m||null===(Z=m.particleInit)||void 0===Z?void 0:Z.call(m,D,this);case 107:return e.next=109,null===(P=H)||void 0===P||null===(z=P.particleInit)||void 0===z?void 0:z.call(P,D,this);case 109:ne=(0,r.Z)(D.plugins);try{for(ne.s();!(oe=ne.n()).done;)re=(0,a.Z)(oe.value,2),le=re[1],null===(ae=le.particleCreated)||void 0===ae||ae.call(le,this)}catch(s){ne.e(s)}finally{ne.f()}case 111:case"end":return e.stop()}}),e,this,[[72,82,85,88],[89,99,102,105]])})));return function(t,i,s,n){return e.apply(this,arguments)}}()},{key:"isInsideCanvas",value:function(){var e=this.getRadius(),t=this.container.canvas.size,i=this.position;return i.x>=-e&&i.y>=-e&&i.y<=t.height+e&&i.x<=t.width+e}},{key:"isVisible",value:function(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}},{key:"reset",value:function(){var e,t=(0,r.Z)(this.container.particles.updaters);try{for(t.s();!(e=t.n()).done;){var i,s=e.value;null===(i=s.reset)||void 0===i||i.call(s,this)}}catch(n){t.e(n)}finally{t.f()}}}]),e}()}}]);
//# sourceMappingURL=101.bdfe3d3c.chunk.js.map