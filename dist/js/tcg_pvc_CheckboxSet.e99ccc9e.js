(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tcg_pvc_CheckboxSet"],{"0a90":function(e,t,a){var r=a("63b6"),i=a("10ff");r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},"0c54":function(e,t,a){},"10ff":function(e,t,a){var r=a("e53d").parseFloat,i=a("a1ce").trim;e.exports=1/r(a("e692")+"-0")!==-1/0?function(e){var t=i(String(e),3),a=r(t);return 0===a&&"-"==t.charAt(0)?-0:a}:r},1273:function(e,t,a){},"174e":function(e,t,a){},"2cd9":function(e,t,a){"use strict";var r=a("174e"),i=a.n(r);i.a},4124:function(e,t,a){"use strict";var r=a("0c54"),i=a.n(r);i.a},"4cd6":function(e,t,a){"use strict";a("6762"),a("2fdb");var r,i,n=a("a4bb"),s=a.n(n),l=a("5d73"),o=a.n(l),c=a("7618"),u={props:{slots:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}}},beforeCreate:function(){},created:function(){},computed:{nullValue:function(){var e=this.options||{};return e.nullValue}},methods:{evaluateSlot:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!e)return e;var i,n=Object(c["a"])(e);if("function"===n){var l=this.$store.state,u=this.$controller,p=e,d=this.item;i=d?p(l,d,u):p(l)}else i=e;if(!1===i);else if(!i)return r;var y=!0,f=!1,h=void 0;try{for(var m,v=function(){var e=m.value,a=t.$config.transforms[e],r=void 0,n=a.globals;n&&(r=s()(window).filter(function(e){return n.includes(e)}).reduce(function(e,t){return e[t]=window[t],e},{}));var l=a.transform;i=l(i,r)},g=o()(a);!(y=(m=g.next()).done);y=!0)v()}catch(b){f=!0,h=b}finally{try{y||null==g.return||g.return()}finally{if(f)throw h}}return i}}},p=u,d=a("2877"),y=Object(d["a"])(p,r,i,!1,null,null,null);t["a"]=y.exports},"59ad":function(e,t,a){e.exports=a("7be7")},"66ab":function(e,t,a){},"7be7":function(e,t,a){a("0a90"),e.exports=a("584a").parseFloat},a21f:function(e,t,a){var r=a("584a"),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},c920:function(e,t,a){"use strict";var r=a("1273"),i=a.n(r);i.a},cacd:function(e,t,a){"use strict";a.r(t);var r,i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{attrs:{action:"#/"}},[a("fieldset",{staticClass:"options"},e._l(this.currentWmLayers,function(e,t){return a("checkbox",{key:e.id,attrs:{layer:e.layer,layerName:e.title,layerId:e.id,layerDefinition:e.rest.layerDefinition,opacity:e.opacity,legend:e.legend}})}),1)])])},s=[],l=(a("6762"),a("2fdb"),a("5d73")),o=a.n(l),c=a("4cd6"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"div-row"},[e.bennyId?a("a",{attrs:{href:"http://metadata.phila.gov/#home/representationdetails/"+this.bennyId,target:"_blank"}},[a("span",[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"info-circle"}})],1)]):e._e(),a("input",{class:{disabled:e.shouldBeDisabled},attrs:{id:"checkbox-"+e.layerName,type:"checkbox",layerid:e.layerId},domProps:{checked:e.webMapActiveLayers.includes(e.layerName)},on:{click:e.checkboxToggle}}),a("label",{class:{disabled:e.shouldBeDisabled,"label-text":!0},attrs:{for:"checkbox-"+e.layerName}},[a("div",{staticClass:"layer-name"},[e._v(e._s(e.layerName))])])]),this.$store.state.map.webMapActiveLayers.includes(e.layerName)?a("legend-box",{attrs:{layer:e.layer,layerName:e.layerName,layerId:e.layerId,layerDefinition:e.layerDefinition,legend:e.legend,scales:this.$config.map.scales}}):e._e(),this.$store.state.map.webMapActiveLayers.includes(e.layerName)?a("slider",{attrs:{layer:e.layer,layerName:e.layerName,layerId:e.layerId,opacity:e.opacity}}):e._e()],1)},p=[],d=(a("a481"),a("a4bb")),y=a.n(d),f=a("7618"),h={props:{slots:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},item:{type:Object,default:function(){return{}}}},beforeCreate:function(){},created:function(){},computed:{nullValue:function(){var e=this.options||{};return e.nullValue}},methods:{evaluateSlot:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!e)return e;var i,n=Object(f["a"])(e);if("function"===n){var s=this.$store.state,l=this.$controller,c=e,u=this.item;i=u?c(s,u,l):c(s)}else i=e;if(!1===i);else if(!i)return r;var p=!0,d=!1,h=void 0;try{for(var m,v=function(){var e=m.value,a=t.$config.transforms[e],r=void 0,n=a.globals;n&&(r=y()(window).filter(function(e){return n.includes(e)}).reduce(function(e,t){return e[t]=window[t],e},{}));var s=a.transform;i=s(i,r)},g=o()(a);!(p=(m=g.next()).done);p=!0)v()}catch(b){d=!0,h=b}finally{try{p||null==g.return||g.return()}finally{if(d)throw h}}return i}}},m=h,v=a("2877"),g=Object(v["a"])(m,r,i,!1,null,null,null),b=(g.exports,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"legend",domProps:{innerHTML:e._s(this.legendHtml)}})])}),$=[],w=a("59ad"),x=a.n(w),M=a("f499"),N=a.n(M),F={props:["layer","layerName","layerId","layerDefinition","legend","scales"],data:function(){return{legendHtml:"",options:{listTemplate:"<ul>{layers}</ul>",layerTemplate:"<li><ul>{legends}</ul></li>",listRowTemplate:'<li><img width="{width}" height="{height}" src="data:{contentType};base64,{imageData}"><span>{label}</span></li>',emptyLabel:"",container:null}}},created:function(){this.initialize()},watch:{scale:function(e){this.createLegend(e)},legend:function(){console.log("watch legend fired"),this.createLegend(this.scale)}},computed:{scale:function(){var e=this.$store.state.map.zoom,t=e+1,a=this.$props.scales[t];return a}},methods:{initialize:function(){var e;this.$props.layerDefinition&&(e=this.$props.layerDefinition.drawingInfo);var t={layerName:this.$props.layerName,layerId:this.$props.layerId,store:this.$store,drawingInfo:e};console.log("LegendBox initialize is running:",this.$props.layer,t,"L.esri:",L.esri);L.esri.legendControl(this.$props.layer,t)},createLegend:function(e){var t=this.$props.legend;console.log("METHOD createLegend running",e,t);var a="";if(1===t.layers.length){var r=t.layers[0],i="",n=!0,s=!1,l=void 0;try{for(var c,u=o()(r.legend);!(n=(c=u.next()).done);n=!0){var p=c.value,d=JSON.parse(N()(p));d.label||(d.label=""),i+=L.Util.template(this.options.listRowTemplate,d)}}catch(k){s=!0,l=k}finally{try{n||null==u.return||u.return()}finally{if(s)throw l}}a+=L.Util.template(this.options.layerTemplate,{layerName:r.layerName,legends:i})}else{var y=!0,f=!1,h=void 0;try{for(var m,v=o()(t.layers);!(y=(m=v.next()).done);y=!0){var g=m.value,b="";if(x()(e)>x()(g.maxScale)&&x()(e)<x()(g.minScale)){var $=!0,w=!1,M=void 0;try{for(var F,T=o()(g.legend);!($=(F=T.next()).done);$=!0){var D=F.value,C=JSON.parse(N()(D));b+=L.Util.template(this.options.listRowTemplate,C)}}catch(k){w=!0,M=k}finally{try{$||null==T.return||T.return()}finally{if(w)throw M}}}a+=L.Util.template(this.options.layerTemplate,{layerName:g.layerName,legends:b})}}catch(k){f=!0,h=k}finally{try{y||null==v.return||v.return()}finally{if(f)throw h}}}var O=L.Util.template(this.options.listTemplate,{layers:a});this.legendHtml=O}}},T=F,D=(a("c920"),Object(v["a"])(T,b,$,!1,null,null,null)),C=D.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slider-wrapper"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.opa,expression:"opa"}],staticClass:"slider",attrs:{type:"range",min:"1",max:"100",step:"1"},domProps:{value:e.opa},on:{__r:function(t){e.opa=t.target.value}}})])},k=[],I={props:["layer","layerName","layerId","opacity"],data:function(){return{opa:100*this.$props.opacity}},watch:{opa:function(e){var t={layerName:this.$props.layerName,opa:e/100};this.$store.commit("setWebMapLayersOpacity",t)}},created:function(){},computed:{},methods:{}},_=I,S=(a("d44d"),Object(v["a"])(_,O,k,!1,null,null,null)),j=S.exports,W={components:{LegendBox:C,Slider:j},props:["layer","layerName","layerId","layerDefinition","opacity","legend","tags"],data:function(){return{opa:100*this.$props.opacity}},watch:{opa:function(e){var t={layerName:this.$props.layerName,opa:e/100};this.$store.commit("setWebMapLayersOpacity",t)},shouldBeDisabled:function(e){this.webMapActiveLayers.includes(this.$props.layerName)&&!0===e?this.removeFromWebMapDisplayedLayers():this.webMapActiveLayers.includes(this.$props.layerName)&&!1===e&&this.addToWebMapDisplayedLayers()}},computed:{matchingTags:function(){var e=[];if(null!==this.$props.tags&&""!==this.inputTagsFilter){var t=!0,a=!1,r=void 0;try{for(var i,n=o()(this.$props.tags);!(t=(i=n.next()).done);t=!0){var s=i.value;s.toLowerCase().includes(this.inputTagsFilter.toLowerCase())&&e.push(s)}}catch(l){a=!0,r=l}finally{try{t||null==n.return||n.return()}finally{if(a)throw r}}}return e},inputTagsFilter:function(){return this.$store.state.layers.inputTagsFilter},scale:function(){return this.$store.state.map.scale},shouldBeDisabled:function(){var e=this.$props.layerDefinition;return!!e&&(e.minScale?this.scale>e.minScale:void 0)},layerUrls:function(){return this.$store.state.layers.layerUrls},bennyEndpoints:function(){return this.$store.state.bennyEndpoints},url:function(){return this.layerUrls[this.$props.layerName]},bennyId:function(){if(y()(this.bennyEndpoints).length>0){var e=this.bennyEndpoints[this.url];return e}return" "},webMapUrlLayer:function(){return this.$store.state.map.webMapUrlLayer},webMapActiveLayers:function(){return this.$store.state.map.webMapActiveLayers},webMapDisplayedLayers:function(){return this.$store.state.map.webMapDisplayedLayers},webMapGeoJson:function(){return this.$store.state.map.webMapGeoJson}},methods:{trim:function(e){return(e||"").replace(/^\s+|\s+$/g,"")},checkboxToggle:function(e){console.log("checkboxToggle",e.target,e.target.id,e.target.checked);var t=this.webMapUrlLayer,a=this.webMapActiveLayers,r=this.webMapDisplayedLayers,i=e.target.id.replace("checkbox-","");if(e.target.checked)console.log("target checked, targetReplace:",i),a.push(i),r.push(i),1===a.length&&this.$store.commit("setWebMapUrlLayer",i);else{console.log("target not checked");var n=a.indexOf(i);n>=0&&a.splice(n,1);var s=r.indexOf(i);s>=0&&r.splice(s,1),t===i&&this.$store.commit("setWebMapUrlLayer",null)}this.$store.commit("setWebMapActiveLayers",a),this.$store.commit("setWebMapDisplayedLayers",r)},removeFromWebMapDisplayedLayers:function(){var e=this.webMapDisplayedLayers,t=e.indexOf(this.$props.layerName);t>=0&&e.splice(t,1),this.$store.commit("setWebMapDisplayedLayers",e)},addToWebMapDisplayedLayers:function(){var e=this.webMapDisplayedLayers;e.push(this.$props.layerName),this.$store.commit("setWebMapDisplayedLayers",e)}}},A=W,U=(a("2cd9"),Object(v["a"])(A,u,p,!1,null,"2cbee1f6",null)),E=U.exports,J={mixins:[c["a"]],components:{Checkbox:E},computed:{categories:function(){return this.$store.state.map.categories},selectedCategory:function(){return this.$store.state.map.selectedCategory},scale:function(){return this.$store.state.map.scale},topicLayers:function(){if(this.$props.options.topicLayers)return this.$props.options.topicLayers;var e=[],t=!0,a=!1,r=void 0;try{for(var i,n=o()(this.$store.state.map.webMapLayersAndRest);!(t=(i=n.next()).done);t=!0){var s=i.value;e.push(s.title)}}catch(l){a=!0,r=l}finally{try{t||null==n.return||n.return()}finally{if(a)throw r}}return e},activeLayers:function(){return this.$store.state.map.webMapActiveLayers},currentWmLayers:function(){var e=this.$store.state.map.webMapLayersAndRest,t=this.topicLayers,a=[],r=!0,i=!1,n=void 0;try{for(var s,l=o()(e);!(r=(s=l.next()).done);r=!0){var c=s.value,u=this.inputLayerFilter.toLowerCase(),p=this.inputTagsFilter.toLowerCase(),d=c.title.toLowerCase();if(c.tags){var y=c.tags.join().toLowerCase();(t.includes(c.title)&&d.includes(u)&&c.category.includes(this.selectedCategory)&&y.includes(p)||t.includes(c.title)&&d.includes(p)&&c.category.includes(this.selectedCategory)||t.includes(c.title)&&this.activeLayers.includes(c.title))&&a.push(c)}else""!==this.inputTagsFilter?(t.includes(c.title)&&d.includes(p)&&c.category.includes(this.selectedCategory)||t.includes(c.title)&&this.activeLayers.includes(c.title))&&a.push(c):(t.includes(c.title)&&d.includes(u)&&c.category.includes(this.selectedCategory)||t.includes(c.title)&&this.activeLayers.includes(c.title))&&a.push(c)}}catch(f){i=!0,n=f}finally{try{r||null==l.return||l.return()}finally{if(i)throw n}}return a},inputLayerFilter:function(){return this.$store.state.layers.inputLayerFilter},inputTagsFilter:function(){return this.$store.state.layers.inputTagsFilter}},methods:{handleLayerFilterFormKeyup:function(e){var t=e.target.value;this.$store.commit("setInputLayerFilter",t)},handleLayerFilterFormX:function(e){e.target[0].value="",this.$store.commit("setInputLayerFilter","")},handleTagsFilterFormKeyup:function(e){var t=e.target.value;this.$store.commit("setInputTagsFilter",t)},handleTagsFilterFormX:function(e){e.target[0].value="",this.$store.commit("setInputTagsFilter","")},didSelectCategory:function(e){var t=e.target.selectedIndex;this.$store.commit("setSelectedCategory",this.categories[t])},preventEnter:function(e){13===e.keyCode&&e.preventDefault()}}},B=J,R=(a("4124"),Object(v["a"])(B,n,s,!1,null,"527973fe",null));t["default"]=R.exports},d44d:function(e,t,a){"use strict";var r=a("66ab"),i=a.n(r);i.a},f499:function(e,t,a){e.exports=a("a21f")}}]);
//# sourceMappingURL=tcg_pvc_CheckboxSet.e99ccc9e.js.map