(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ht_pvc_HorizontalTableRow"],{3954:function(e,t,o){"use strict";var i=o("e92e"),s=o.n(i);s.a},"4c16":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v("\n  "+e._s(e.evaluateFieldLabel())+"\n  "),o("a",{staticClass:"popover-link",attrs:{title:e.value+" "+e.popoverValue},on:{click:e.didClickPopoverLink}},[e._v("\n    "+e._s(e.value)+"\n  ")])])},s=[],l=o("4cd6"),n={mixins:[l["a"]],props:["fieldLabel"],data:function(){var e={showFieldLabel:!1};return e},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},computed:{value:function(){var e=this.$props.slots.value,t=this.$props.slots.transforms||[],o=this.$props.slots.nullValue||"";return this.evaluateSlot(e,t,o)},popoverValue:function(){var e=this.value,t=this.$props.slots.popoverTransforms||[],o=this.$props.slots.popoverNullValue||"";return this.evaluateSlot(e,t,o)},popoverPreText:function(){var e=this.$props.slots.popoverPreText||"";return this.evaluateSlot(e)},popoverPostText:function(){var e=this.$props.slots.popoverPostText||"";return this.evaluateSlot(e)},shouldShowValue:function(){return!1!==this.$props.slots.shouldShowValue},popoverText:function(){return!0===this.shouldShowValue?this.popoverPreText+" "+this.popoverValue+" "+this.popoverPostText:this.popoverPreText+" "+this.popoverPostText}},methods:{didClickPopoverLink:function(e){this.$store.commit("setPopoverOpen",!0),this.$store.commit("setPopoverText",this.popoverText)},handleWindowResize:function(){window.innerWidth>=750?this.showFieldLabel=!1:this.showFieldLabel=!0},evaluateFieldLabel:function(){return this.showFieldLabel?this.$props.fieldLabel+": ":""}}},r=n,a=(o("61b4"),o("2877")),u=Object(a["a"])(r,i,s,!1,null,null,null);t["default"]=u.exports},"5de3":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("tr",{class:{active:this.isActive},on:{mouseover:e.handleRowMouseover,click:e.handleRowClick,mouseout:e.handleRowMouseout}},e._l(e.fields,function(t){return o("td",{attrs:{item:e.item}},[o("b",{directives:[{name:"show",rawName:"v-show",value:e.shouldBeBold,expression:"shouldBeBold"}]},[t.popoverLink?o("popover-link",{attrs:{slots:t,item:e.item,fieldLabel:t.label}}):e._e(),t.popoverLink?e._e():o("div",{domProps:{innerHTML:e._s(e.evaluateFieldLabel(t.label)+e.evaluateSlot(t.value,t.transforms,t.nullValue))}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.shouldBeBold,expression:"!shouldBeBold"}]},[t.popoverLink?o("popover-link",{attrs:{slots:t,item:e.item,fieldLabel:t.label}}):e._e(),t.popoverLink?e._e():o("div",{domProps:{innerHTML:e._s(e.evaluateFieldLabel(t.label)+e.evaluateSlot(t.value,t.transforms,t.nullValue))}})],1)])}),0)},s=[],l=o("db0c"),n=o.n(l),r=o("4cd6"),a=o("4c16"),u={mixins:[r["a"]],components:{PopoverLink:a["default"]},props:["fields","hasOverlay","tableId","shouldBeBold","totalRowField"],data:function(){var e={showFieldLabel:!1};return e},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},computed:{activeFeature:function(){return this.$store.state.activeFeature},isActive:function(){return this.activeFeature?this.activeFeature.featureId===this.$props.item._featureId&&this.$props.tableId===this.activeFeature.tableId:void 0},isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet}},watch:{isActive:function(e){if(!0===e){var t=this.$el,o=this.isElementInViewport(t);o||t.scrollIntoView()}}},methods:{handleRowMouseover:function(e){if(!this.isMobileOrTablet&&!this.$props.options.mouseOverDisabled){if(!this.hasOverlay)return;var t=this.item._featureId,o=this.tableId;this.$store.commit("setActiveFeature",{featureId:t,tableId:o})}},handleRowClick:function(e){if(this.isMobileOrTablet||this.$props.options.mouseOverDisabled){if(!this.hasOverlay)return;var t=this.item._featureId,o=this.tableId;this.$store.commit("setActiveFeature",{featureId:t,tableId:o})}},handleRowMouseout:function(e){if(!this.$props.options.mouseOverDisabled){if(!this.hasOverlay)return;this.$store.commit("setActiveFeature",null)}},isElementInViewport:function(e){var t=e.getBoundingClientRect(),o={top:t.top>=108,left:t.left>=0,bottom:t.bottom<=(window.innerHeight||document.documentElement.clientHeight),right:t.right<=(window.innerWidth||document.documentElement.clientWidth)};return n()(o).every(function(e){return e})},featuresMatch:function(e,t){return e.featureId===t.featureId&&e.tableId===t.tableId},handleWindowResize:function(){window.innerWidth>=750?this.showFieldLabel=!1:this.showFieldLabel=!0},evaluateFieldLabel:function(e){return this.showFieldLabel&&this.$props.totalRowField!==e.toLowerCase()?e+": ":""}}},d=u,h=(o("3954"),o("2877")),p=Object(h["a"])(d,i,s,!1,null,"3ea30267",null);t["default"]=p.exports},"61b4":function(e,t,o){"use strict";var i=o("a183"),s=o.n(i);s.a},a183:function(e,t,o){},e92e:function(e,t,o){}}]);
//# sourceMappingURL=ht_pvc_HorizontalTableRow.d06e6d8a.js.map