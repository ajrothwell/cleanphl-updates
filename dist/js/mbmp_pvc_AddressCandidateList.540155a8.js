(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmp_pvc_AddressCandidateList"],{"3aae":function(t,e,s){"use strict";var i=s("9b9c"),d=s.n(i);d.a},"4a29":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.shouldShowAddressCandidateList,expression:"this.shouldShowAddressCandidateList"}],class:this.listGroupClass,style:this.listStyle},[s("ul",t._l(t.candidates,function(e,i){return s("li",[s("a",{staticClass:"list-group-item",attrs:{href:t.createLink(e),tabindex:"-1",id:"address-candidate-list-"+i},on:{click:function(s){return t.closeAddressCandidateList(e)},keydown:t.maybeUsedArrow}},[t._v("\n        "+t._s(e)+"\n      ")])])}),0)])},d=[],n=s("e814"),r=s.n(n),a={name:"AddressCandidateList",data:function(){var t={listStyle:{width:"250px"}};return t},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},watch:{addressEntered:function(t){this.handleWindowResize()}},props:["widthFromConfig"],computed:{inputWidth:function(){return this.$props.widthFromConfig-55},candidates:function(){var t=this.$config.addressInput.autocompleteMax;if(t){var e=this.$store.state.candidates.slice(0,t);return e}return this.$store.state.candidates},shouldShowAddressCandidateList:function(){return this.$store.state.shouldShowAddressCandidateList},activeTopic:function(){return this.$store.state.activeTopic},isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet},addressAutocompleteEnabled:function(){return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled},listGroupClass:function(){return this.isMobileOrTablet?this.addressAutocompleteEnabled?""===this.addressEntered||null===this.addressEntered?"list-group-mobile":"list-group-mobile-full":"list-group-mobile":this.addressAutocompleteEnabled?""===this.addressEntered||null===this.addressEntered?"list-group":"list-group-full":"list-group"}},methods:{createLink:function(t){return this.$store.state.activeTopic?"#/"+t+"/"+this.activeTopic:"#/"+t},maybeUsedArrow:function(t){var e,s,i=t.target.id,d=r()(i.substring(i.lastIndexOf("-")+1));e=d<this.candidates.length-1?d+1:d,s=0!==d?d-1:0,"ArrowDown"===t.key&&document.getElementById("address-candidate-list-"+e).focus(),"ArrowUp"===t.key&&document.getElementById("address-candidate-list-"+s).focus()},closeAddressCandidateList:function(t){console.log("AddressCandidateList.vue closeAddressCandidateList is running, addressCandidate:",t),this.$store.commit("setAddressEntered",t),this.$store.commit("setShouldShowAddressCandidateList",!1)},handleWindowResize:function(t){window.innerWidth>=850?this.listStyle.width=this.$props.widthFromConfig-55+"px":window.innerWidth>=750?this.listStyle.width=this.$props.widthFromConfig-155+"px":this.listStyle.width="248px"}}},o=a,l=(s("3aae"),s("2877")),u=Object(l["a"])(o,i,d,!1,null,"2617619b",null);e["default"]=u.exports},"9b9c":function(t,e,s){}}]);
//# sourceMappingURL=mbmp_pvc_AddressCandidateList.540155a8.js.map