(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmp_pvm_Geojson"],{dd5f:function(e,t,n){"use strict";n.r(t);var o,l,a=n("a8db0"),s=n("dc09"),i=n("0317"),r=s["geoJSON"],c={name:"Geojson",props:["geojson","fillColor","color","weight","opacity","fillOpacity","data"],mounted:function(){var e=this.$leafletElement=this.createLeafletElement(),t=this.$store.state.map.map;t&&e.addTo(t),Object(i["a"])(this,this.$leafletElement,this._events)},destroyed:function(){this.$leafletElement._map.removeLayer(this.$leafletElement)},render:function(e){},methods:{createLeafletElement:function(){var e=this.$props,t=e.geojson,n=Object(a["a"])(e,["geojson"]),o=new r(t,n);return o},parentMounted:function(e){var t=e.$leafletElement;this.$leafletElement.addTo(t)}}},d=c,f=n("2877"),m=Object(f["a"])(d,o,l,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=mbmp_pvm_Geojson.38d3c2b0.js.map