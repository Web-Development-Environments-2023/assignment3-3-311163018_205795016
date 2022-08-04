(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-328d4828"],{"0bee":function(e,t,r){"use strict";var s=r("0e7f"),o=r.n(s);o.a},"0e7f":function(e,t,r){},37906:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Search Page")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSearch(t)}}},[r("b-form-group",{attrs:{id:"input-group","label-cols-sm":"3",label:"Query:","label-for":"forQuery"}},[r("b-form-input",{attrs:{type:"text",placeholder:"Search"},model:{value:e.$v.form.query.$model,callback:function(t){e.$set(e.$v.form.query,"$model",t)},expression:"$v.form.query.$model"}}),r("b-form-invalid-feedback",[e._v(" Query is required ")])],1),r("div",{staticClass:"form-check form-check-inline",attrs:{id:"filterby"}},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox1",value:"option1"}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox1"}},[e._v("🅥Vegan")])]),r("div",{staticClass:"form-check form-check-inline"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox2",value:"option2"}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox2"}},[e._v("🌱Vegentarian")])]),r("div",{staticClass:"form-check form-check-inline"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox3",value:"option3"}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox3"}},[e._v("Gluten Free")])]),r("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Search")]),r("label",{attrs:{for:"number_of_res"}},[e._v("Number of results : ")]),r("div",{staticClass:"form-check form-check-inline",attrs:{id:"number_of_res"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.NumberOfResults,expression:"form.NumberOfResults"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",value:"5"},domProps:{checked:e._q(e.form.NumberOfResults,"5")},on:{change:function(t){return e.$set(e.form,"NumberOfResults","5")}}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[e._v("5")])]),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.NumberOfResults,expression:"form.NumberOfResults"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",value:"10"},domProps:{checked:e._q(e.form.NumberOfResults,"10")},on:{change:function(t){return e.$set(e.form,"NumberOfResults","10")}}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio2"}},[e._v("10")])]),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.NumberOfResults,expression:"form.NumberOfResults"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",value:"15"},domProps:{checked:e._q(e.form.NumberOfResults,"15")},on:{change:function(t){return e.$set(e.form,"NumberOfResults","15")}}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio3"}},[e._v("15")])]),r("div",{staticClass:"form-check form-check-inline"},[r("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio4",value:"inf",disabled:""}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio3"}},[e._v("1,000,000")])]),r("br"),r("label",{attrs:{for:"Sortrby"}},[e._v("Sort by :")]),r("div",{staticClass:"form-check form-check-inline",attrs:{id:"Sortby"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:this.form.key_sort,expression:"this.form.key_sort"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptionsSort",value:"readyInMinutes"},domProps:{checked:e._q(this.form.key_sort,"readyInMinutes")},on:{change:function(t){return e.$set(this.form,"key_sort","readyInMinutes")}}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox1"}},[e._v("Time (minutes)")])]),r("div",{staticClass:"form-check form-check-inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:this.form.key_sort,expression:"this.form.key_sort"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptionsSort",value:"popularity"},domProps:{checked:e._q(this.form.key_sort,"popularity")},on:{change:function(t){return e.$set(this.form,"key_sort","popularity")}}}),r("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox2"}},[e._v("Popularity (likes)")])]),r("div",{staticClass:"mt-2"},[e._v(" Looking for an idea ? "),r("router-link",{attrs:{to:"register"}},[e._v(" Ask hodisan")])],1),e.ViewSearchResults()?r("b-container",[r("h2",[e._v(" The recipes we found for you : ")]),r("div",{staticClass:"row row-cols-1 row-cols-md-2"},e._l(e.recipes_result,(function(e){return r("div",{key:e.id,staticClass:"col mb-4"},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),0)]):e._e()],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},o=[],i=r("2909"),a=(r("96cf"),r("1da1")),n=r("b5ae"),c=r("832a"),l={name:"Search",components:{RecipePreview:c["a"]},data:function(){return{form:{query:"",submitError:void 0,NumberOfResults:"5",key_sort:"readyInMinutes"},recipes_result:[],total_number_of_results:"0",NumberOfResults:"5",key_sort:"readyInMinutes"}},validations:{form:{query:{required:n["required"]}}},methods:{ViewSearchResults:function(){return this.recipes_result.length>=1},validateState:function(e){var t=this.$v.form[e],r=t.$dirty,s=t.$error;return r?!s:null},Search:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,s,o,a,n,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("*********************---***************"),console.log("http://localhost:3000/recipes/search/"+e.form.query+"-"+e.form.NumberOfResults),t.next=5,e.axios.get("http://localhost:3000/recipes/search/"+e.form.query+"-"+e.form.NumberOfResults,{query:e.form.query});case 5:for(r=t.sent,s=r.data.results,o="",console.log("res_data = "+s),a=0;a<s.length-1;a++)o+=s[a].id+",";return o+=s[s.length-1].id,console.log(o),t.prev=12,console.log("*********************---***************"),console.log("http://localhost:3000/recipes/recipes_preview/"+o+"-"+e.form.key_sort),t.next=17,e.axios.get("http://localhost:3000/recipes/recipes_preview/"+o+"-"+e.form.key_sort,{query:e.form.query});case 17:c=t.sent,l=c.data,e.recipes_result=[],(n=e.recipes_result).push.apply(n,Object(i["a"])(l)),e.total_number_of_results=r.data.total_number_of_results,t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](12),console.log(t.t0);case 27:t.next=32;break;case 29:t.prev=29,t.t1=t["catch"](0),console.log(t.t1);case 32:case"end":return t.stop()}}),t,null,[[0,29],[12,24]])})))()},onSearch:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||(console.log("search method go"),this.Search())}}},u=l,m=(r("0bee"),r("2877")),f=Object(m["a"])(u,s,o,!1,null,"5696be76",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-328d4828.e65a49e3.js.map