(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmp_pvm_VectorMarker"],{"0665":function(e,t,o){!function(t,n){e.exports=n(o("e11e"))}(0,function(e){"use strict";var t={iconSize:[100,100],iconAnchor:[50,50],popupAnchor:[2,-40],shadowAnchor:[39,45],shadowSize:[54,51],className:"vector-marker",prefix:"fa",spinClass:"fa-spin",extraIconClasses:"",extraDivClasses:"",icon:"home",markerColor:"red",iconColor:"white",viewBox:"0 0 32 52"};return function(o){function n(n){if(n.icon.size){var r=n.icon.size;n.iconSize=[2*r,2*r],n.iconAnchor=[r,r]}else n.icon.size=50;o.call(this,n),e.Util.setOptions(this,t),e.Util.setOptions(this,n)}return o&&(n.__proto__=o),n.prototype=Object.create(o&&o.prototype),n.prototype.constructor=n,n.prototype.createIcon=function(e){var t=e&&"DIV"===e.tagName?e:document.createElement("div"),o=this.options,n=o.icon;return t.innerHTML='<i class="'+n.prefix+" fa-"+n.icon+'" style="color:'+o.markerColor+"; width: "+n.size+"px; height: "+n.size+'px"></i>',o.className+=o.className.length>0?" "+o.extraDivClasses:o.extraDivClasses,this._setIconStyles(t,"icon"),this._setIconStyles(t,"icon-"+o.markerColor),t},n.prototype.createShadow=function(){if(1==this.options.icon.shadow){var e=document.createElement("div");return this._setIconStyles(e,"shadow"),e}},n.prototype._setIconStyles=function(e,t){var o,n,r=this.options;"shadow"===t?(o=r.shadowSize,n=r.shadowAnchor||r.iconAnchor):(o=r.iconSize,n=r.iconAnchor),!n&&o&&(n=o.map(function(e){return e/2})),e.className="vector-marker-"+t+" "+r.className,n&&(e.style.marginLeft=-n[0]+"px",e.style.marginTop=-n[1]+"px"),o&&(e.style.width=o[0]+"px",e.style.height=o[1]+"px")},n}(e.Icon)})},"38b8":function(e,t,o){"use strict";o.r(t);var n,r,i=o("e11e"),s=o("0665"),a=o.n(s),c={name:"VectorMarker",props:["latlng","markerColor","icon"],render:function(e){this.$props.latlng},mounted:function(){var e=this.$leafletElement=this.createLeafletElement(),t=this.$store.state.map.map;t&&e.addTo(t)},updated:function(){this.$leafletElement._map.removeLayer(this.$leafletElement);var e=this.$leafletElement=this.createLeafletElement(),t=this.$store.state.map.map;t&&e.addTo(t)},destroyed:function(){this.$leafletElement._map.removeLayer(this.$leafletElement)},methods:{createLeafletElement:function(){var e=new a.a({icon:this.$props.icon||"circle",markerColor:this.$props.markerColor||"#2176d2"});return new i["Marker"](this.latlng,{icon:e})},parentMounted:function(e){var t=e.$leafletElement;this.$leafletElement.addTo(t)}}},l=c,p=(o("90c5"),o("2877")),h=Object(p["a"])(l,n,r,!1,null,"341dff16",null);t["default"]=h.exports},"90c5":function(e,t,o){"use strict";var n=o("c2f9"),r=o.n(n);r.a},c2f9:function(e,t,o){}}]);
//# sourceMappingURL=mbmp_pvm_VectorMarker.65a76c62.js.map