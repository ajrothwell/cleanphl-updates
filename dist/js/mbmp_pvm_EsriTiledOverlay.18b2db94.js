(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmp_pvm_EsriTiledOverlay"],{"199d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("opacity-slider",{attrs:{layer:this.$leafletElement,position:"topleft",initialOpacity:t.opacity}})},a=[],o=n("5176"),r=n.n(o),l=n("5238"),s=n("9b72"),c={name:"EsriTiledOverlay",components:{OpacitySlider:s["a"]},props:["url","minZoom","maxZoom","zIndex","attribution","opacity"],created:function(){var t=this.$leafletElement=this.createLeafletElement(),e=this.$store.state.map.map;e&&(t.addTo(e),e.attributionControl.removeAttribution("overwrite"))},destroyed:function(){this.$leafletElement._map.removeLayer(this.$leafletElement)},methods:{createLeafletElement:function(){var t=r()({},this.$props),e=new l["tiledMapLayer"](t);return e},parentMounted:function(t){var e=t.$leafletElement;this.$leafletElement.addTo(e)}}},p=c,u=n("2877"),d=Object(u["a"])(p,i,a,!1,null,null,null);e["default"]=d.exports},"9b72":function(t,e,n){"use strict";var i,a,o,r=n("dc09"),l={name:"OpacitySlider",props:["layer","position","initialOpacity"],created:function(){var t=100*this.$props.initialOpacity;r["Control"].opacitySlider=r["Control"].extend({options:{position:"topright"},setOpacityLayer:function(t){i=t},onAdd:function(e){var n=r["DomUtil"].create("div","opacity_slider_control");return $(n).slider({orientation:"vertical",range:"min",min:0,max:100,value:t,step:10,start:function(t,n){e.dragging.disable(),e.once("mousedown",function(t){e.dragging.enable()})},slide:function(t,e){var n=e.value/100;i.setOpacity(n)}}),$(n).click(function(t){t.stopPropagation()}),n}})},mounted:function(){var t=this.$leafletElement=this.createLeafletElement(),e=this.$store.state.map;e&&this.$nextTick(function(){t.addTo(e.map)})},destroyed:function(){this.$leafletElement._map.removeControl(this.$leafletElement)},render:function(t){},methods:{createLeafletElement:function(){var t=new r["Control"].opacitySlider;return t.setPosition(this.$props.position),t.setOpacityLayer(this.$props.layer),t},parentMounted:function(t){var e=t.$leafletElement;e.addControl(this.$leafletElement)}}},s=l,c=(n("a4c8"),n("2877")),p=Object(c["a"])(s,a,o,!1,null,null,null);e["a"]=p.exports},a39b:function(t,e,n){},a4c8:function(t,e,n){"use strict";var i=n("a39b"),a=n.n(i);a.a}}]);
//# sourceMappingURL=mbmp_pvm_EsriTiledOverlay.18b2db94.js.map