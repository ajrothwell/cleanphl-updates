(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tcg_pvc_AnyHeader"],{"4cd6":function(t,e,n){"use strict";n("6762"),n("2fdb");var s,r,i=n("a4bb"),o=n.n(i),a=n("5d73"),l=n.n(a),u=n("7618"),h={props:{slots:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}}},beforeCreate:function(){},created:function(){},computed:{nullValue:function(){var t=this.options||{};return t.nullValue}},methods:{evaluateSlot:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!t)return t;var r,i=Object(u["a"])(t);if("function"===i){var a=this.$store.state,h=this.$controller,d=t,c=this.item;r=c?d(a,c,h):d(a)}else r=t;if(!1===r);else if(!r)return s;var f=!0,p=!1,y=void 0;try{for(var v,m=function(){var t=v.value,n=e.$config.transforms[t],s=void 0,i=n.globals;i&&(s=o()(window).filter(function(t){return i.includes(t)}).reduce(function(t,e){return t[e]=window[e],t},{}));var a=n.transform;r=a(r,s)},T=l()(n);!(f=(v=T.next()).done);f=!0)m()}catch(g){p=!0,y=g}finally{try{f||null==T.return||T.return()}finally{if(p)throw y}}return r}}},d=h,c=n("2877"),f=Object(c["a"])(d,s,r,!1,null,null,null);e["a"]=f.exports},c4c1:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["h1"===this.headerType?n("h1",{style:this.style,domProps:{innerHTML:t._s(this.message)}}):t._e(),"h2"===this.headerType?n("h2",{style:this.style,domProps:{innerHTML:t._s(this.message)}}):t._e(),"h3"===this.headerType?n("h3",{style:this.style,domProps:{innerHTML:t._s(this.message)}}):t._e(),"h4"===this.headerType?n("h4",{style:this.style,domProps:{innerHTML:t._s(this.message)}}):t._e(),"h5"===this.headerType?n("h5",{style:this.style,domProps:{innerHTML:t._s(this.message)}}):t._e(),"h6"===this.headerType?n("h6",{style:this.style,domProps:{innerHTML:t._s(this.message)}}):t._e()])},r=[],i=n("5d73"),o=n.n(i),a=n("4cd6"),l={name:"AnyHeader",mixins:[a["a"]],computed:{headerType:function(){return this.$props.options.headerType},additionalTags:function(){return this.$props.slots.additionalTags||[]},message:function(){var t="",e=!0,n=!1,s=void 0;try{for(var r,i=o()(this.additionalTags);!(e=(r=i.next()).done);e=!0){var a=r.value;t=t+"<"+a+">"}}catch(p){n=!0,s=p}finally{try{e||null==i.return||i.return()}finally{if(n)throw s}}t+=this.evaluateSlot(this.$props.slots.text,this.$props.slots.transforms);var l=!0,u=!1,h=void 0;try{for(var d,c=o()(this.additionalTags);!(l=(d=c.next()).done);l=!0){var f=d.value;t=t+"</"+f+">"}}catch(p){u=!0,h=p}finally{try{l||null==c.return||c.return()}finally{if(u)throw h}}return t},style:function(){if(this.$props.options)return this.$props.options.style||""}}},u=l,h=n("2877"),d=Object(h["a"])(u,s,r,!1,null,"30d96ef3",null);e["default"]=d.exports}}]);
//# sourceMappingURL=tcg_pvc_AnyHeader.cfe298ba.js.map