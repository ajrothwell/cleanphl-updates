(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmp_pvm_BasemapTooltip"],{"56f5":function(e,o,a){"use strict";a.r(o);var n=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("div",{class:"none"===this.basemap?"basetooltip":"basetooltip2",on:{mouseover:e.onMouseover,mouseout:e.onMouseout}},["pwd"===this.basemap?a("div",[e._v("\n      The property boundaries displayed on the map are for reference only and may not be used in place of recorded deeds or land surveys. Boundaries are generalized for ease of visualization. Source: Philadelphia Water\n    ")]):"dor"===this.basemap?a("div",[e._v("\n      The property boundaries displayed on the map are for reference only and may not be used in place of recorded deeds or land surveys. Dimension lengths are calculated using the GIS feature. Source: Department of Records.\n    ")]):a("div",[e._v("\n      i\n    ")])])])},t=[],s=(a("2d6d"),a("3af8"),a("5176")),i=a.n(s),r=a("2924"),d=(r["default"].props,r["default"].methods),p={name:"BasemapTooltip",props:["position"],data:function(){return{basemap:"none"}},computed:{activeBasemap:function(){return this.$store.state.map.basemap},activeTopic:function(){return this.$store.state.activeTopic}},methods:i()(d,{onMouseover:function(){var e=this.activeBasemap,o=e;(e.includes("imagery")||e.includes("historic"))&&(o="deeds"===this.activeTopic||"zoning"===this.activeTopic?"dor":"pwd"),this.basemap=o},onMouseout:function(){this.basemap="none"}})},u=p,c=(a("9890"),a("2877")),l=Object(c["a"])(u,n,t,!1,null,null,null);o["default"]=l.exports},9890:function(e,o,a){"use strict";var n=a("c915"),t=a.n(n);t.a},c915:function(e,o,a){}}]);
//# sourceMappingURL=mbmp_pvm_BasemapTooltip.72187a54.js.map