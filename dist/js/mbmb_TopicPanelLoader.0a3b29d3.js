(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmb_TopicPanelLoader"],{"06db":function(e,t,n){"use strict";var i=n("23c6"),s={};s[n("2b4c")("toStringTag")]="z",s+""!="[object z]"&&n("2aba")(Object.prototype,"toString",function(){return"[object "+i(this)+"]"},!0)},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"40ae":function(e,t,n){"use strict";var i=n("f3c2"),s=n.n(i);s.a},"58ec":function(e,t,n){},"6b54":function(e,t,n){"use strict";n("3846");var i=n("cb7c"),s=n("0bfb"),o=n("9e1e"),r="toString",a=/./[r],d=function(e){n("2aba")(RegExp.prototype,r,e,!0)};n("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?d(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?s.call(e):void 0)}):a.name!=r&&d(function(){return a.call(this)})},cf37:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"mb-panel-topics cell "+this.topicPanelContainerClass,attrs:{id:"topic-panel-container"}},[this.fullScreenTopicsOnly?e._e():e._m(0),this.shouldShowAddressHeader?n("div",{staticClass:"address-header cell small-24 medium-24"},[n("div",{class:"address-container columns "+this.addressContainerClass,style:this.addressContainerStyle},[this.address?e._e():n("div",{staticClass:"default-address-text",style:this.defaultAddressTextPlaceholderStyle},[e._v("\n        "+e._s(this.$config.defaultAddressTextPlaceholder.text)+"\n      ")]),n("h1",{staticClass:"address-header-line-1"},[this.fullScreenTopicsOnly?e._e():n("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),e._v("\n        "+e._s(e.address)+"\n      ")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:this.geocode,expression:"this.geocode"}],staticClass:"address-header-line-2"},[e._v("\n        PHILADELPHIA, PA "+e._s(e.zipCode)+"\n      ")]),this.addressHeaderAdditionalInfo?n("any-header",{attrs:{options:this.addressHeaderAdditionalHeaderOptions,slots:this.addressHeaderAdditionalHeaderSlots}}):e._e()],1),this.fullScreenTopicsEnabled&&!this.stacked||this.fullScreenTopicsOnly?n("div",{staticClass:"address-input-container columns small-24 medium-12 large-12",style:this.addressInputContainerStyle},[n("address-input",{attrs:{widthFromConfig:this.addressInputWidth,placeholder:this.addressInputPlaceholder}},[this.addressAutocompleteEnabled?n("address-candidate-list",{attrs:{slot:"address-candidates-slot",widthFromConfig:this.addressInputWidth},slot:"address-candidates-slot"}):e._e()],1)],1):e._e()]):e._e(),e.shouldShowGreeting?n("div",{staticClass:"topics-container cell medium-cell-block-y",style:e.topicsContainerStyle},[n("greeting",{directives:[{name:"show",rawName:"v-show",value:e.shouldShowGreeting,expression:"shouldShowGreeting"}],attrs:{message:e.greetingText,options:e.greetingOptions}})],1):e._e(),e.shouldShowGreeting?e._e():n("div",{staticClass:"topic-panel-content"},[n("div",{staticClass:"topics-container cell medium-cell-block-y",style:e.topicsContainerStyle},[n("topic-component-group",{attrs:{"topic-components":this.$config.components}})],1)])],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("full-screen-topics-toggle-tab")}],o=(n("6b54"),n("06db"),n("e814")),r=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return this.isMobileOrTablet?e._e():n("div",{staticClass:"toggle-tab",style:{top:e.buttonPosition},attrs:{id:"toggle-tab"},on:{click:e.handleFullScreenTopicsToggleButtonClick}},[n("span",{staticClass:"align-span"},[n("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:this.currentIcon}})],1)])},d=[],l={name:"FullScreenTopicsToggleTab",data:function(){return{buttonPosition:0}},mounted:function(){this.setDivHeight(this.windowDim)},watch:{picOrCycloActive:function(){this.setDivHeight(this.windowDim)},windowDim:function(e){this.setDivHeight(e)}},computed:{windowDim:function(){return this.$store.state.windowDimensions},fullScreenMapEnabled:function(){return this.$store.state.fullScreenMapEnabled},fullScreenTopicsEnabled:function(){return this.$store.state.fullScreenTopicsEnabled},isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet},cyclomediaActive:function(){return this.$store.state.cyclomedia?this.$store.state.cyclomedia.active:null},pictometryActive:function(){return this.$store.state.pictometry?this.$store.state.pictometry.active:null},picOrCycloActive:function(){return!(!this.cyclomediaActive&&!this.pictometryActive)},currentIcon:function(){return this.fullScreenTopicsEnabled?"caret-left":"caret-right"}},methods:{setDivHeight:function(e){this.picOrCycloActive?this.buttonPosition=(e.height-48)/4+"px":this.buttonPosition=(e.height-48)/2+"px"},handleFullScreenTopicsToggleButtonClick:function(e){var t=this.$store.state.fullScreenTopicsEnabled,n=!t;this.$store.commit("setFullScreenTopicsEnabled",n)}}},c=l,u=(n("d19b"),n("2877")),h=Object(u["a"])(c,a,d,!1,null,"1f141368",null),p=h.exports,f={components:{AnyHeader:function(){return Promise.all([n.e("mbmb_MapPanelLoader~mbmb_pvc_Popover~mbmp_pvc_Greeting~pvc_ExternalLink~tcg_pvc_AnyHeader~tcg_pvc_Ba~808dfc05"),n.e("tcg_pvc_AnyHeader")]).then(n.bind(null,"c4c1"))},Greeting:function(){return Promise.all([n.e("mbmb_MapPanelLoader~mbmb_pvc_Popover~mbmp_pvc_Greeting~pvc_ExternalLink~tcg_pvc_AnyHeader~tcg_pvc_Ba~808dfc05"),n.e("mbmp_pvc_Greeting")]).then(n.bind(null,"0e11"))},TopicComponentGroup:function(){return n.e("mbmp_pvc_TopicComponentGroup").then(n.bind(null,"2bae"))},Topic:function(){return n.e("mbmp_pvc_Topic").then(n.bind(null,"1394"))},AddressInput:function(){return n.e("mbmp_pvc_AddressInput").then(n.bind(null,"3fdc"))},AddressCandidateList:function(){return n.e("mbmp_pvc_AddressCandidateList").then(n.bind(null,"4a29"))},FullScreenTopicsToggleTab:p},data:function(){var e={defaultAddressTextPlaceholderStyle:{},topicsContainerStyle:{"overflow-y":"auto",height:"100px","min-height":"100px"},addressContainerStyle:{height:"100%","align-items":"flex-start","padding-left":"20px","padding-top":"20px","padding-bottom":"20px"},addressInputContainerStyle:{height:"100%","align-items":"center","padding-top":"10px","padding-bottom":"10px"},stacked:!1};return e},mounted:function(){this.handleWindowResize(this.windowDim)},watch:{geocodeStatus:function(){this.handleWindowResize(this.windowDim)},windowDim:function(e){this.handleWindowResize(e)}},computed:{windowDim:function(){return this.$store.state.windowDimensions},greetingText:function(){return this.$config.greeting.message},greetingOptions:function(){return this.$config.greeting.options},shouldShowAddressHeader:function(){return!(!this.fullScreenTopicsOnly&&!1!==this.shouldShowGreeting)},addressHeaderAdditionalHeaderOptions:function(){if(this.$config.addressHeaderAdditionalInfo){var e=this.$config.addressHeaderAdditionalInfo;if(e.options)return e.options.headerType||(e.options.headerType="h4"),e.options}},addressHeaderAdditionalHeaderSlots:function(){return{text:this.addressHeaderAdditionalInfo}},addressHeaderAdditionalInfo:function(){if(this.$config.addressHeaderAdditionalInfo){var e=this.geocode;if(!e)return null;var t=this.$config.addressHeaderAdditionalInfo,n=[];return t.preText&&n.push(t.preText),n.push(e.properties[t.data]),n.join(" ")}},inputAlign:function(){if(!this.$config.addressInput)return"flex-start";if(!this.$config.addressInput.position)return"flex-start";var e=this.$config.addressInput.position;switch(e){case"left":return"flex-start";case"right":return"flex-end";case"center":return"center"}},addressInputWidth:function(){return this.$config.addressInput?this.$config.addressInput.width:415},addressInputPlaceholder:function(){return this.$config.addressInput?this.$config.addressInput.placeholder:null},addressAutocompleteEnabled:function(){return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled},fullScreenMapEnabled:function(){return this.$store.state.fullScreenMapEnabled},fullScreenTopicsEnabled:function(){return this.$store.state.fullScreenTopicsEnabled},fullScreenTopicsOnly:function(){return this.$store.state.fullScreen.topicsOnly},topicPanelContainerClass:function(){return this.fullScreenTopicsEnabled||this.fullScreenTopicsOnly?"medium-24 small-order-2 medium-order-1":this.fullScreenMapEnabled?"medium-1 small-order-2 medium-order-1":"medium-12 small-order-2 medium-order-1"},addressContainerClass:function(){return this.fullScreenTopicsEnabled||this.fullScreenTopicsOnly?"small-24 medium-12 large-12":"small-24"},geocode:function(){return this.$store.state.geocode.data},geocodeStatus:function(){return this.$store.state.geocode.status},dorParcels:function(){return this.$store.state.parcels.dor.data.length>0},shouldShowGreeting:function(){return!(this.geocode||this.dorParcels)},address:function(){var e,t=this.geocode,n=(this.$store.state.parcels.dor.data,this.$store.state.parcels.dor.activeAddress);if(t){var i=t.properties.street_address,s=t.street_address;e=i||s}else n&&(e=n);return e},zipCode:function(){var e=this.geocode;if(!e)return null;var t=e.properties.zip_code,n=e.properties.zip_4,i=[t];return n&&i.push(n),i.join("-")}},methods:{closeAddressCandidateList:function(){this.$store.state.shouldShowAddressCandidateList=!1},handleWindowResize:function(e){var t,n=window.innerHeight,i=r()(document.getElementsByClassName("site-header")[0].getBoundingClientRect().height),s=r()(document.getElementsByClassName("app-footer")[0].getBoundingClientRect().height);if(this.shouldShowAddressHeader)if(document.getElementsByClassName("address-header")[0]){var o=r()(document.getElementsByClassName("address-header")[0].getBoundingClientRect().height);t=0!==o?n-i-s-o:n-i-s-103}else t=n-i-s-103;else t=n-i-s;window.innerWidth>=750?(this.stacked=!1,this.$config.defaultAddressTextPlaceholder&&(this.defaultAddressTextPlaceholderStyle=this.$config.defaultAddressTextPlaceholder.wideStyle),this.addressContainerStyle={height:"100%","align-items":"flex-start","padding-left":"20px","padding-top":"20px","padding-bottom":"20px"},this.addressInputContainerStyle={height:"100%","align-items":this.inputAlign,"padding-top":"30px","padding-bottom":"30px"},this.topicsContainerStyle.height=t.toString()+"px",this.topicsContainerStyle["min-height"]=t.toString()+"px",this.topicsContainerStyle["overflow-y"]="auto"):(this.stacked=!0,this.$config.defaultAddressTextPlaceholder&&(this.defaultAddressTextPlaceholderStyle=this.$config.defaultAddressTextPlaceholder.narrowStyle),this.addressContainerStyle={height:"auto","align-items":"center","padding-left":"0px","padding-top":"10px","padding-bottom":"10px"},this.addressInputContainerStyle={height:"auto","align-items":"center","padding-top":"10px","padding-bottom":"10px"},this.topicsContainerStyle.height="auto",this.topicsContainerStyle["min-height"]=t.toString()+"px",this.topicsContainerStyle["overflow-y"]="hidden")}}},g=f,m=(n("40ae"),Object(u["a"])(g,i,s,!1,null,"109ffae8",null));t["default"]=m.exports},d19b:function(e,t,n){"use strict";var i=n("58ec"),s=n.n(i);s.a},f3c2:function(e,t,n){}}]);
//# sourceMappingURL=mbmb_TopicPanelLoader.0a3b29d3.js.map