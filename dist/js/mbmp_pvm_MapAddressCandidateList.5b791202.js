(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmp_pvm_MapAddressCandidateList"],{"0b15":function(t,e,s){"use strict";var i=s("a1cf"),n=s.n(i);n.a},"6e28":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.shouldShowAddressCandidateList,expression:"this.shouldShowAddressCandidateList"}],class:this.listGroupClass},[s("ul",t._l(t.candidates,function(e,i){return s("li",[s("a",{staticClass:"list-group-item",attrs:{href:t.createLink(e),tabindex:"-1",id:"address-candidate-list-"+i},on:{click:function(s){return t.closeAddressCandidateList(e)},keydown:t.maybeUsedArrow}},[t._v("\n        "+t._s(e)+"\n      ")])])}),0)])},n=[],a=s("e814"),d=s.n(a),r=s("d225"),o=s("b0b4"),l=s("308d"),c=s("6bb5"),u=s("4e2b"),h=s("e11e"),p={name:"MapAddressCandidateList",props:["position"],computed:{map:function(){return this.$store.state.map.map},candidates:function(){return this.$store.state.candidates},shouldShowAddressCandidateList:function(){return this.$store.state.shouldShowAddressCandidateList},activeTopic:function(){return this.$store.state.activeTopic},isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet},listGroupClass:function(){return this.isMobileOrTablet?this.addressAutocompleteEnabled?""===this.addressEntered||null===this.addressEntered?"list-group-mobile":"list-group-mobile-full":"list-group-mobile":this.addressAutocompleteEnabled?""===this.addressEntered||null===this.addressEntered?"list-group":"list-group-full":"list-group"},addressAutocompleteEnabled:function(){return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled}},watch:{shouldShowAddressCandidateList:function(t){!0===t&&this.createControl()}},methods:{createLink:function(t){return this.$store.state.activeTopic?"#/"+t+"/"+this.activeTopic:"#/"+t},createLeafletElement:function(t){var e=function(e){function s(t,e){var i;return Object(r["a"])(this,s),i=Object(l["a"])(this,Object(c["a"])(s).call(this,e)),i.el=t,i}return Object(u["a"])(s,e),Object(o["a"])(s,[{key:"onAdd",value:function(){var e=this.el;return t.DomEvent.disableClickPropagation(e),t.DomEvent.disableScrollPropagation(e),e}}]),s}(t.Control),s=this.$el;return new e(s,{position:this.position})},createControl:function(){var t=this.createLeafletElement(h);this.$leafletElement=t;var e=this.map;t.addTo(e)},parentMounted:function(t,e){},maybeUsedArrow:function(t){var e,s,i=t.target.id,n=d()(i.substring(i.lastIndexOf("-")+1));e=n<this.candidates.length-1?n+1:n,s=0!==n?n-1:0,"ArrowDown"===t.key&&document.getElementById("address-candidate-list-"+e).focus(),"ArrowUp"===t.key&&document.getElementById("address-candidate-list-"+s).focus()},closeAddressCandidateList:function(t){this.$store.commit("setAddressEntered",t),this.$store.commit("setShouldShowAddressCandidateList",!1)}}},f=p,m=(s("0b15"),s("2877")),b=Object(m["a"])(f,i,n,!1,null,"9694ece0",null);e["default"]=b.exports},a1cf:function(t,e,s){}}]);
//# sourceMappingURL=mbmp_pvm_MapAddressCandidateList.5b791202.js.map