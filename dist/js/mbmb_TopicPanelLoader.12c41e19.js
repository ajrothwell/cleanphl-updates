(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmb_TopicPanelLoader"],{"0a14":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"mb-panel-topics cell "+this.topicPanelContainerClass,attrs:{id:"topic-panel-container"}},[this.fullScreenTopicsOnly?e._e():e._m(0),this.shouldShowAddressHeader?i("div",{staticClass:"address-header cell small-24 medium-24"},[i("div",{class:"address-container columns "+this.addressContainerClass,style:this.addressContainerStyle},[this.address?e._e():i("div",{staticClass:"default-address-text",style:this.defaultAddressTextPlaceholderStyle},[e._v("\n        "+e._s(this.$config.defaultAddressTextPlaceholder.text)+"\n      ")]),i("h1",{staticClass:"address-header-line-1"},[this.fullScreenTopicsOnly?e._e():i("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),e._v("\n        "+e._s(e.address)+"\n      ")],1),i("div",{directives:[{name:"show",rawName:"v-show",value:this.geocode,expression:"this.geocode"}],staticClass:"address-header-line-2"},[e._v("\n        PHILADELPHIA, PA "+e._s(e.zipCode)+"\n      ")]),this.addressHeaderAdditionalInfo?i("any-header",{attrs:{options:this.addressHeaderAdditionalHeaderOptions,slots:this.addressHeaderAdditionalHeaderSlots}}):e._e()],1),this.fullScreenTopicsEnabled&&!this.stacked||this.fullScreenTopicsOnly?i("div",{staticClass:"address-input-container columns small-24 medium-12 large-12",style:this.addressInputContainerStyle},[i("address-input",{attrs:{widthFromConfig:this.addressInputWidth,placeholder:this.addressInputPlaceholder}},[this.addressAutocompleteEnabled?i("address-candidate-list",{attrs:{slot:"address-candidates-slot",widthFromConfig:this.addressInputWidth},slot:"address-candidates-slot"}):e._e()],1)],1):e._e()]):e._e(),e.shouldShowGreeting?i("div",{staticClass:"topics-container cell medium-cell-block-y",style:e.topicsContainerStyle},[i("greeting",{directives:[{name:"show",rawName:"v-show",value:e.shouldShowGreeting,expression:"shouldShowGreeting"}],attrs:{message:e.greetingText,options:e.greetingOptions}})],1):e._e(),e.shouldShowGreeting?e._e():i("div",{staticClass:"topic-panel-content"},[i("div",{staticClass:"topics-container cell medium-cell-block-y",style:e.topicsContainerStyle},[i("topic-component-group",{attrs:{"topic-components":this.$config.components}})],1)])],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("full-screen-topics-toggle-tab")}],o=(i("5196"),i("3c90"),i("e814")),r=i.n(o),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return this.isMobileOrTablet?e._e():i("div",{staticClass:"toggle-tab",style:{top:e.buttonPosition},attrs:{id:"toggle-tab"},on:{click:e.handleFullScreenTopicsToggleButtonClick}},[i("span",{staticClass:"align-span"},[i("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:this.currentIcon}})],1)])},a=[],l={name:"FullScreenTopicsToggleTab",data:function(){return{buttonPosition:0}},mounted:function(){this.$config.pluginHeight?this.buttonPosition=(this.$config.pluginHeight-48)/2+"px":this.setDivHeight(this.windowDim)},watch:{picOrCycloActive:function(){this.setDivHeight(this.windowDim)},windowDim:function(e){this.setDivHeight(e)}},computed:{windowDim:function(){return this.$store.state.windowDimensions},fullScreenMapEnabled:function(){return this.$store.state.fullScreenMapEnabled},fullScreenTopicsEnabled:function(){return this.$store.state.fullScreenTopicsEnabled},isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet},cyclomediaActive:function(){return this.$store.state.cyclomedia?this.$store.state.cyclomedia.active:null},pictometryActive:function(){return this.$store.state.pictometry?this.$store.state.pictometry.active:null},picOrCycloActive:function(){return!(!this.cyclomediaActive&&!this.pictometryActive)},currentIcon:function(){return this.fullScreenTopicsEnabled?"caret-left":"caret-right"}},methods:{setDivHeight:function(e){this.picOrCycloActive?this.buttonPosition=(e.height-48)/4+"px":this.buttonPosition=(e.height-48)/2+"px"},handleFullScreenTopicsToggleButtonClick:function(e){var t=this.$store.state.fullScreenTopicsEnabled,i=!t;this.$store.commit("setFullScreenTopicsEnabled",i)}}},c=l,u=(i("e46a"),i("2877")),h=Object(u["a"])(c,d,a,!1,null,"cdf1e87e",null),p=h.exports,f={components:{AnyHeader:function(){return i.e("mbmp_pvc_AnyHeader").then(i.bind(null,"ac7d"))},Greeting:function(){return i.e("mbmp_pvc_Greeting").then(i.bind(null,"2b7d"))},TopicComponentGroup:function(){return i.e("mbmp_pvc_TopicComponentGroup").then(i.bind(null,"0b6d"))},Topic:function(){return i.e("mbmp_pvc_Topic").then(i.bind(null,"e95e"))},AddressInput:function(){return Promise.all([i.e("inGreeting_pvc_AddressInput"),i.e("mbmp_pvc_AddressInput")]).then(i.bind(null,"3a70"))},AddressCandidateList:function(){return i.e("mbmp_pvc_AddressCandidateList").then(i.bind(null,"dce8"))},FullScreenTopicsToggleTab:p},data:function(){var e={defaultAddressTextPlaceholderStyle:{},topicsContainerStyle:{"overflow-y":"auto",height:"100px","min-height":"100px"},addressContainerStyle:{height:"100%","align-items":"flex-start","padding-left":"20px","padding-top":"20px","padding-bottom":"20px"},addressInputContainerStyle:{height:"100%","align-items":"center","padding-top":"10px","padding-bottom":"10px"},stacked:!1};return e},mounted:function(){this.handleWindowResize(this.windowDim)},watch:{geocodeStatus:function(){this.handleWindowResize(this.windowDim)},windowDim:function(e){this.handleWindowResize(e)}},computed:{windowDim:function(){return this.$store.state.windowDimensions},greetingText:function(){return this.$config.greeting.message},greetingOptions:function(){return this.$config.greeting.options},shouldShowAddressHeader:function(){return!(!this.fullScreenTopicsOnly&&!1!==this.shouldShowGreeting)},addressHeaderAdditionalHeaderOptions:function(){if(this.$config.addressHeaderAdditionalInfo){var e=this.$config.addressHeaderAdditionalInfo;if(e.options)return e.options.headerType||(e.options.headerType="h4"),e.options}},addressHeaderAdditionalHeaderSlots:function(){return{text:this.addressHeaderAdditionalInfo}},addressHeaderAdditionalInfo:function(){if(this.$config.addressHeaderAdditionalInfo){var e=this.geocode;if(!e)return null;var t=this.$config.addressHeaderAdditionalInfo,i=[];return t.preText&&i.push(t.preText),i.push(e.properties[t.data]),i.join(" ")}},inputAlign:function(){if(!this.$config.addressInput)return"flex-start";if(!this.$config.addressInput.position)return"flex-start";var e=this.$config.addressInput.position;switch(e){case"left":return"flex-start";case"right":return"flex-end";case"center":return"center"}},addressInputWidth:function(){return this.$config.addressInput?this.$config.addressInput.width:415},addressInputPlaceholder:function(){return this.$config.addressInput?this.$config.addressInput.placeholder:null},addressAutocompleteEnabled:function(){return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled},fullScreenMapEnabled:function(){return this.$store.state.fullScreenMapEnabled},fullScreenTopicsEnabled:function(){return this.$store.state.fullScreenTopicsEnabled},fullScreenTopicsOnly:function(){return this.$store.state.fullScreen.topicsOnly},topicPanelContainerClass:function(){return this.fullScreenTopicsEnabled||this.fullScreenTopicsOnly?"medium-24 small-order-2 medium-order-1":this.fullScreenMapEnabled?"medium-1 small-order-2 medium-order-1":"medium-12 small-order-2 medium-order-1"},addressContainerClass:function(){return this.fullScreenTopicsEnabled||this.fullScreenTopicsOnly?"small-24 medium-12 large-12":"small-24"},geocode:function(){return this.$store.state.geocode.data},geocodeStatus:function(){return this.$store.state.geocode.status},dorParcels:function(){return this.$store.state.parcels.dor.data.length>0},shouldShowGreeting:function(){return!(this.geocode||this.dorParcels)},address:function(){var e,t=this.geocode,i=(this.$store.state.parcels.dor.data,this.$store.state.parcels.dor.activeAddress);if(t){var n=t.properties.street_address,s=t.street_address;e=n||s}else i&&(e=i);return e},zipCode:function(){var e=this.geocode;if(!e)return null;var t=e.properties.zip_code,i=e.properties.zip_4,n=[t];return i&&n.push(i),n.join("-")}},methods:{closeAddressCandidateList:function(){this.$store.state.shouldShowAddressCandidateList=!1},handleWindowResize:function(e){if(console.log("TopicPanel handleWindowResize is running"),!this.$config.plugin){var t,i=window.innerHeight,n=r()(document.getElementsByClassName("site-header")[0].getBoundingClientRect().height),s=r()(document.getElementsByClassName("app-footer")[0].getBoundingClientRect().height);if(this.shouldShowAddressHeader)if(document.getElementsByClassName("address-header")[0]){var o=r()(document.getElementsByClassName("address-header")[0].getBoundingClientRect().height);t=0!==o?i-n-s-o:i-n-s-103}else t=i-n-s-103;else t=i-n-s;window.innerWidth>=750?(this.stacked=!1,this.$config.defaultAddressTextPlaceholder&&(this.defaultAddressTextPlaceholderStyle=this.$config.defaultAddressTextPlaceholder.wideStyle),this.addressContainerStyle={height:"100%","align-items":"flex-start","padding-left":"20px","padding-top":"20px","padding-bottom":"20px"},this.addressInputContainerStyle={height:"100%","align-items":this.inputAlign,"padding-top":"30px","padding-bottom":"30px"},this.topicsContainerStyle.height=t.toString()+"px",this.topicsContainerStyle["min-height"]=t.toString()+"px",this.topicsContainerStyle["overflow-y"]="auto"):(this.stacked=!0,this.$config.defaultAddressTextPlaceholder&&(this.defaultAddressTextPlaceholderStyle=this.$config.defaultAddressTextPlaceholder.narrowStyle),this.addressContainerStyle={height:"auto","align-items":"center","padding-left":"0px","padding-top":"10px","padding-bottom":"10px"},this.addressInputContainerStyle={height:"auto","align-items":"center","padding-top":"10px","padding-bottom":"10px"},this.topicsContainerStyle.height="auto",this.topicsContainerStyle["min-height"]=t.toString()+"px",this.topicsContainerStyle["overflow-y"]="hidden")}}}},g=f,m=(i("1c99"),Object(u["a"])(g,n,s,!1,null,"418036ba",null));t["default"]=m.exports},"1c99":function(e,t,i){"use strict";var n=i("45e0"),s=i.n(n);s.a},"45e0":function(e,t,i){},e46a:function(e,t,i){"use strict";var n=i("fbf1"),s=i.n(n);s.a},fbf1:function(e,t,i){}}]);
//# sourceMappingURL=mbmb_TopicPanelLoader.12c41e19.js.map