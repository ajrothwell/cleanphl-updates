(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmp_pvc_Greeting"],{"0e11":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns medium-20 medium-centered",style:t.greetingStyle},[this.shouldShowAddressInput?n("address-input"):t._e(),this.addressAutocompleteEnabled&&this.shouldShowAddressInput?n("address-candidate-list"):t._e(),t.components||t.hasError?t._e():n("div",{staticClass:"greeting",domProps:{innerHTML:t._s(t.message)}}),!t.components&&t.hasError?n("div",{staticClass:"greeting greeting-error",domProps:{innerHTML:t._s(t.errorMessage)}}):t._e(),n("topic-component-group",{attrs:{"topic-components":t.options.components,item:t.item}}),t._l(t.components,function(e,r){return t.components?n(e.type,{key:"greeting",tag:"component",staticClass:"topic-comp",attrs:{slots:e.slots}}):t._e()})],2)},o=[],s=n("4cd6"),i={components:{Image_:function(){return n.e("inGreeting_pvc_Image").then(n.bind(null,"17a2"))},AddressInput:function(){return n.e("mbmp_pvc_AddressInput").then(n.bind(null,"3fdc"))},AddressCandidateList:function(){return n.e("mbmp_pvc_AddressCandidateList").then(n.bind(null,"4a29"))},TopicComponentGroup:function(){return n.e("mbmp_pvc_TopicComponentGroup").then(n.bind(null,"2bae"))}},mixins:[s["a"]],data:function(){var t={greetingStyle:this.$props.options.style||{}};return t},props:{message:{type:String,default:function(){return"defaultMessage"}}},computed:{shouldShowAddressInput:function(){return"topics"==this.$config.addressInputLocation},addressAutocompleteEnabled:function(){return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled},components:function(){var t=this.$config.greeting||{};return t.components},hasError:function(){return"error"===this.$store.state.geocode.status},errorMessage:function(){var t=this.$store.state.geocode.input;return"\n        <p>\n          We couldn't find\n          ".concat(t?"<strong>"+t+"</strong>":"that address",".\n          Are you sure everything was spelled correctly?\n        </p>\n        <p>\n          Here are some examples of things you can search for:\n        </p>\n        <ul>\n          <li>1234 Market St</li>\n          <li>1001 Pine Street #201</li>\n          <li>12th & Market</li>\n          <li>883309050 (an OPA number with no hyphens or other characters)</li>\n        </ul>\n      ")}}},u=i,a=(n("dddc"),n("2877")),c=Object(a["a"])(u,r,o,!1,null,"2fb6dcf0",null);e["default"]=c.exports},"4cd6":function(t,e,n){"use strict";n("6762"),n("2fdb");var r,o,s=n("a4bb"),i=n.n(s),u=n("5d73"),a=n.n(u),c=n("7618"),d={props:{slots:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}}},beforeCreate:function(){},created:function(){},computed:{nullValue:function(){var t=this.options||{};return t.nullValue}},methods:{evaluateSlot:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!t)return t;var o,s=Object(c["a"])(t);if("function"===s){var u=this.$store.state,d=this.$controller,l=t,p=this.item;o=p?l(u,p,d):l(u)}else o=t;if(!1===o);else if(!o)return r;var f=!0,m=!1,h=void 0;try{for(var g,v=function(){var t=g.value,n=e.$config.transforms[t],r=void 0,s=n.globals;s&&(r=i()(window).filter(function(t){return s.includes(t)}).reduce(function(t,e){return t[e]=window[e],t},{}));var u=n.transform;o=u(o,r)},b=a()(n);!(f=(g=b.next()).done);f=!0)v()}catch(_){m=!0,h=_}finally{try{f||null==b.return||b.return()}finally{if(m)throw h}}return o}}},l=d,p=n("2877"),f=Object(p["a"])(l,r,o,!1,null,null,null);e["a"]=f.exports},"61f0":function(t,e,n){},dddc:function(t,e,n){"use strict";var r=n("61f0"),o=n.n(r);o.a}}]);
//# sourceMappingURL=mbmp_pvc_Greeting.da0318be.js.map