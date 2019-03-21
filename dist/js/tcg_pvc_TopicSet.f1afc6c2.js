(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tcg_pvc_TopicSet"],{1394:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.shouldShowTopic?o("div",[t.shouldShowHeader?o("a",{staticClass:"topic-header",attrs:{href:"#","data-topic-key":t.topicKey},on:{click:function(e){return e.preventDefault(),t.handleTopicHeaderClick(e)}}},[o("div",{staticClass:"topic-header-content"},[o("font-awesome-icon",{attrs:{icon:t.icon}}),o("div",{staticClass:"topic-header-label-holder"},[t._v("\n        "+t._s(t.topic.label)+"\n      ")])],1),o("span",{directives:[{name:"show",rawName:"v-show",value:"waiting"===t.status,expression:"status === 'waiting'"}],staticClass:"loading"},[o("font-awesome-icon",{staticClass:"fa-lg spin",attrs:{icon:"spinner"}})],1)]):t._e(),o("transition",{attrs:{name:"topic-body"}},[t.shouldShowBody?o("div",{staticClass:"topic-body",attrs:{"data-topic-key":t.topicKey}},[o("topic-component-group",{attrs:{"topic-components":t.topic.components}})],1):t._e()]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowError,expression:"shouldShowError"}],staticClass:"topic-body",domProps:{innerHTML:t._s(this.errorMessage)}})],1):t._e()},i=[],n=o("a4bb"),s=o.n(n),a=o("5d73"),c=o.n(a),u=(o("6762"),o("db0c")),l=o.n(u),h=o("2bae"),f={name:"Topic",props:["topicKey"],components:{},beforeCreate:function(){this.$options.components.TopicComponentGroup=h["default"]},computed:{topic:function(){var t=this,e=this.$props.topicKey,o=this.$config.topics.filter(function(e){return e.key===t.$props.topicKey});if(1!==o.length)throw"Could not get single config object for topic '".concat(e,"'.");var r=o[0];return r},icon:function(){return this.topic.icon},isActive:function(){var t=this.topic.key,e=this.$store.state.activeTopic;return e===t},shouldShowHeader:function(){return this.$config.topics.length>1},dataSources:function(){return this.topic.dataSources||[]},hasData:function(){var t=this,e=this.dataSources.every(function(e){var o=t.$config.dataSources[e].targets;if(o){var r=t.$store.state.sources[e].targets,i=l()(r);return 0!==i.length&&i.every(function(t){return"waiting"!==t.status})}return!!t.$store.state.sources[e].data});return e},shouldShowBody:function(){var t="success"===this.status,e=this.hasData,o=t&&e&&this.isActive;return o},shouldShowTopic:function(){return!this.topic.showTopicOnlyIfDataExists||(!!this.showTopicBasedOnOtherData||this.showTopicOnlyIfDataExists)},shouldShowError:function(){var t=this.isActive&&("error"===this.status||"waiting"!==this.status&&!this.hasData);return t&&console.log("BINGO BINGO BINGO:",this.topicKey,"shouldShowError:",t,"status:",this.status,"hasData:",this.hasData),t},errorMessage:function(){return this.topic.errorMessage?this.topic.errorMessage(this.$store.state):"Could not locate records for that address."},status:{cache:!1,get:function(){var t,e=this,o=this.topic.dataSources||[];if(0===o.length)return"success";var r=o.map(function(t){var o=e.$config.dataSources[t].targets;if(o){var r=e.$store.state.sources[t].targets,i=l()(r);if(0===i.length)return;return i.map(function(t){return t.status})}return[e.$store.state.sources[t].status]}),i=[],n=!0,s=!1,a=void 0;try{for(var u,h=c()(r);!(n=(u=h.next()).done);n=!0){var f=u.value;if(f){var p=!0,d=!1,v=void 0;try{for(var y,w=c()(f);!(p=(y=w.next()).done);p=!0){var g=y.value;i.push(g)}}catch(m){d=!0,v=m}finally{try{p||null==w.return||w.return()}finally{if(d)throw v}}}}}catch(m){s=!0,a=m}finally{try{n||null==h.return||h.return()}finally{if(s)throw a}}return t=i.includes("waiting")?"waiting":i.includes("error")?"error":"success",t}},showTopicBasedOnOtherData:function(){if(!this.topic.showTopicBasedOnOtherData)return!1;var t=this.topic.showTopicBasedOnOtherData.requiredData,e=this.checkForData(t);if(!e)return!1;var o=s()(this.topic.showTopicBasedOnOtherData.otherData),r=[],i=!0,n=!1,a=void 0;try{for(var u,l=c()(o);!(i=(u=l.next()).done);i=!0){var h=u.value,f=this.topic.showTopicBasedOnOtherData.otherData[h],p=s()(f),d=!0,v=!1,y=void 0;try{for(var w,g=c()(p);!(d=(w=g.next()).done);d=!0){var m=w.value;this.$store.state.sources[h][m]===f[m]?r.push(!0):r.push(!1)}}catch($){v=!0,y=$}finally{try{d||null==g.return||g.return()}finally{if(v)throw y}}}}catch($){n=!0,a=$}finally{try{i||null==l.return||l.return()}finally{if(n)throw a}}return!r.includes(!1)},showTopicOnlyIfDataExists:function(){return this.checkForData(this.topic.showTopicOnlyIfDataExists)}},methods:{checkForData:function(t){var e=s()(t),o=!0,r=!0,i=!1,n=void 0;try{for(var a,u=c()(e);!(r=(a=u.next()).done);r=!0){var l=a.value,h=t[l].pathToDataArray,f=t[l].minDataLength,p=void 0;if(!this.$store.state.sources[l].data)return!1;h?1===h.length&&(p=this.$store.state.sources[l].data[h[0]]):p=this.$store.state.sources[l].data,p.length<f&&(o=!1)}}catch(d){i=!0,n=d}finally{try{r||null==u.return||u.return()}finally{if(i)throw n}}return o},configForBasemap:function(t){return this.$config.map.basemaps[t]},handleTopicHeaderClick:function(t){var e,o=this.$props.topicKey;o!==this.$store.state.activeTopic&&(e=o),this.$controller.handleTopicHeaderClick(e)}}},p=f,d=(o("d867"),o("2877")),v=Object(d["a"])(p,r,i,!1,null,"278b8daa",null);e["default"]=v.exports},"13c8":function(t,e,o){var r=o("c3a1"),i=o("36c3"),n=o("355d").f;t.exports=function(t){return function(e){var o,s=i(e),a=r(s),c=a.length,u=0,l=[];while(c>u)n.call(s,o=a[u++])&&l.push(t?[o,s[o]]:s[o]);return l}}},"4cd6":function(t,e,o){"use strict";o("6762"),o("2fdb");var r,i,n=o("a4bb"),s=o.n(n),a=o("5d73"),c=o.n(a),u=o("7618"),l={props:{slots:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}}},beforeCreate:function(){},created:function(){},computed:{nullValue:function(){var t=this.options||{};return t.nullValue}},methods:{evaluateSlot:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!t)return t;var i,n=Object(u["a"])(t);if("function"===n){var a=this.$store.state,l=this.$controller,h=t,f=this.item;i=f?h(a,f,l):h(a)}else i=t;if(!1===i);else if(!i)return r;var p=!0,d=!1,v=void 0;try{for(var y,w=function(){var t=y.value,o=e.$config.transforms[t],r=void 0,n=o.globals;n&&(r=s()(window).filter(function(t){return n.includes(t)}).reduce(function(t,e){return t[e]=window[e],t},{}));var a=o.transform;i=a(i,r)},g=c()(o);!(p=(y=g.next()).done);p=!0)w()}catch(m){d=!0,v=m}finally{try{p||null==g.return||g.return()}finally{if(d)throw v}}return i}}},h=l,f=o("2877"),p=Object(f["a"])(h,r,i,!1,null,null,null);e["a"]=p.exports},"562f":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(this.$config.topics,function(t){return o("topic",{key:t.key,attrs:{topicKey:t.key}})}),1)},i=[],n=o("1394"),s=o("4cd6"),a={mixins:[s["a"]],name:"TopicSet",components:{Topic:n["default"]},mounted:function(){null!==this.$store.state.activeTopic&&""!==this.$store.state.activeTopic||this.setDefaultTopicActive()},methods:{setDefaultTopicActive:function(){this.$props.options.defaultTopic&&this.$store.commit("setActiveTopic",this.$props.options.defaultTopic)}}},c=a,u=o("2877"),l=Object(u["a"])(c,r,i,!1,null,null,null);e["default"]=l.exports},"7d6d":function(t,e,o){var r=o("63b6"),i=o("13c8")(!1);r(r.S,"Object",{values:function(t){return i(t)}})},"8a09":function(t,e,o){},"9e1c":function(t,e,o){o("7d6d"),t.exports=o("584a").Object.values},d867:function(t,e,o){"use strict";var r=o("8a09"),i=o.n(r);i.a},db0c:function(t,e,o){t.exports=o("9e1c")}}]);
//# sourceMappingURL=tcg_pvc_TopicSet.f1afc6c2.js.map