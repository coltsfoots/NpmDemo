!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("customForm",[],t):"object"==typeof exports?exports.customForm=t():e.customForm=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,r){"use strict";var n=r(9),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a={name:"CustomForm",props:n.a,data:function(){var e=this,t=this.$props.forms,r={selectOptions:{},cascaderOptions:{}},n={};return t.forEach(function(t,a){if("string"===o(t.prop)&&"cascader"!==t.prop)n[t.prop]="";else{if("cascader"!==t.prop)throw new Error("Prop is must be a String");if(n[t.prop]=[],t.cascaderFetch){var i="cascadere-option-prefix"+a;r.cascaderOptions[i]=[],e.getCasacderOptions({fetch:t.cascaderFetch,dataKey:i,resultField:t.selectResultField||"result",resultHandle:t.cascaderResultHandle})}}if("select"===t.itemType&&t.selectFetch){var s="select-option-prefix"+a;r.selectOptions[s]=[],e.getSelectOptions({fetch:t.selectFetch,dataKey:s,porps:t.props,resultField:t.selectResultField||"result",resultHandle:t.selectResultHandle})}}),a({params:n,selectOptionPrefix:"select-option-prefix",cascaderOptionPrefix:"cascadere-option-prefix"},r)},computed:{itemStyle:function(){var e=this.$props.itemWidth;return e?"width: "+e+"px;":""}},methods:{handleSearch:function(){var e=this;this.getParams(function(t,r){if(!t){var n=e.$props.handleSubmit;if(!n)throw new Error("Need to set attribute handleSubmit");n(r)}})},getParams:function(e){var t=this;this.$refs[this.formName].validate(function(r){r&&e&&e(null,t.params)})},handleResetForm:function(){this.$refs[this.formName].resetFields()},getSelectOptions:function(e){var t=this,r=e.fetch,n=e.dataKey,a=e.resultField,o=e.resultHandle;r().then(function(e){var r=e[a];t.selectOptions[n]=o?r.map(o):r})},getCasacderOptions:function(e){var t=this,r=e.fetch,n=e.dataKey,a=e.props,o=e.resultField,i=e.resultHandle;r().then(function(e){var r=e[o];t.cascaderOptions[n]=i&&!a?r.map(i):r})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.default=n.a,"undefined"!=typeof window&&window.Vue&&window.Vue.component("vue-simple-custom-form",n.a)},function(e,t,r){"use strict";function n(e){r(3)}var a=r(0),o=r(10),i=r(8),s=n,l=i(a.a,o.a,!1,s,"data-v-383adbb8",null);t.a=l.exports},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(6)("69395732",n,!0,{})},function(e,t,r){t=e.exports=r(5)(!1),t.push([e.i,"",""])},function(e,t){function r(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var o=n(a);return[r].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=c[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(o(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(o(r.parts[a]));c[r.id]={id:r.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,r,n=document.querySelector("style["+v+'~="'+e.id+'"]');if(n){if(m)return h;n.parentNode.removeChild(n)}if(b){var o=f++;n=u||(u=a()),t=i.bind(null,n,o,!1),r=i.bind(null,n,o,!0)}else n=a(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),y.ssrId&&e.setAttribute(v,t.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=r(7),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,m=!1,h=function(){},y=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,a){m=r,y=a||{};var o=p(e,t);return n(o),function(t){for(var r=[],a=0;a<o.length;a++){var i=o[a],s=c[i.id];s.refs--,r.push(s)}t?(o=p(e,t),n(o)):o=[];for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],l=o[2],p=o[3],c={id:e+":"+a,css:s,media:l,sourceMap:p};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}},function(e,t){e.exports=function(e,t,r,n,a,o){var i,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(i=e,s=e.default);var p="function"==typeof s?s.options:s;t&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0),r&&(p.functional=!0),a&&(p._scopeId=a);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},p._ssrRegister=c):n&&(c=n),c){var d=p.functional,u=d?p.render:p.beforeCreate;d?(p._injectStyles=c,p.render=function(e,t){return c.call(t),u(e,t)}):p.beforeCreate=u?[].concat(u,c):[c]}return{esModule:i,exports:s,options:p}}},function(e,t,r){"use strict";function n(e){var t=["large","small","mini"],r=-1!==t.indexOf(e.toLowerCase())||""===e;if(!r)throw new Error("Size must be one of ['large', 'small', 'mini']");return r}r.d(t,"a",function(){return a});var a={formName:{type:String,default:"form"},size:{type:String,default:"",validator:n},showResetBtn:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},labelWidth:Number,itemWidth:Number,handleSubmit:Function,forms:{type:Array,required:!0,default:function(){return[]}}}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:e.formName,attrs:{model:e.params,inline:e.inline,"label-width":e.labelWidth?e.labelWidth+"px":""},nativeOn:{submit:function(t){return t.preventDefault(),e.handleSearch()}}},[e._l(e.forms,function(t,n){return r("el-form-item",{key:n,attrs:{prop:t.prop,label:t.label,rules:t.rules||[],"label-width":t.labelWidht?t.labelWidth+"px":""}},["input"===t.itemType||void 0===t.itemType?r("el-input",{style:e.itemStyle+(t.itemWidth?"width: "+t.itemWidth+"px;":""),attrs:{size:t.size?t.size:e.size,readonly:t.readonly,disabled:t.disabled,placeholder:t.placeholder},model:{value:e.params[t.prop],callback:function(r){e.$set(e.params,t.prop,r)},expression:"params[form.prop]"}}):"select"===t.itemType?r("el-select",{style:e.itemStyle+(t.itemWidth?"width: "+t.itemWidth+"px;":""),attrs:{size:t.size?t.size:e.size,disabled:t.disabled,placeholder:t.placeholder},on:{change:function(r){t.handleSelectChange&&t.handleSelectChange(e.params[t.prop])}},model:{value:e.params[t.prop],callback:function(r){e.$set(e.params,t.prop,r)},expression:"params[form.prop]"}},[e._l(t.options,function(e,t){return r("el-option",{key:t,attrs:{value:e.value,label:e.label}})}),e._v(" "),t.selectFetch?e._l(e.selectOptions[e.selectOptionPrefix+n],function(e,t){return r("el-option",{key:t,attrs:{value:e.value,label:e.label}})}):e._e()],2):"cascader"===t.itemType?r("el-cascader",{style:e.itemStyle+(t.itemWidth?"width: "+t.itemWidth+"px;":""),attrs:{size:t.size||e.size,placeholder:t.placeholder,disabled:t.disabled,separator:t.separator||"/",clearable:t.clearable,"expand-trigger":t.expandTrigger||"click",filterable:t.filterable,props:t.props,options:t.options||e.cascaderOptions[e.cascaderOptionPrefix+n]},on:{change:function(r){t.handleCascaderChange&&t.handleCascaderChange(e.params[t.prop])}},model:{value:e.params[t.prop],callback:function(r){e.$set(e.params,t.prop,r)},expression:"params[form.prop]"}}):"date"===t.itemType?r("el-date-picker",{style:e.itemStyle+(t.itemWidth?"width: "+t.itemWidth+"px;":""),attrs:{type:"date",placeholder:t.placeholder,size:t.size?t.size:e.size,disabled:t.disabled,readonly:t.readonly,editable:t.editable,format:"yyyy年MM月dd日","value-format":t.valueFormat||"yyyy-MM-dd","picker-options":t.pickerOptions||{}},on:{change:function(r){t.changeDate&&t.changeDate(e.params[t.prop])}},model:{value:e.params[t.prop],callback:function(r){e.$set(e.params,t.prop,r)},expression:"params[form.prop]"}}):"daterange"===t.itemType?r("el-date-picker",{style:e.itemStyle+(t.itemWidth?"width: "+t.itemWidth+"px;":""),attrs:{type:"daterange",format:"yyyy年MM月dd日","range-separator":"至","value-format":t.valueFormat||"yyyy-MM-dd",size:t.size?t.size:e.size,disabled:t.disabled,readonly:t.readonly,editable:t.editable,placeholder:t.placeholder,"picker-options":t.pickerOptions||{}},on:{change:function(r){t.changeDate&&t.changeDate(e.params[t.prop])}},model:{value:e.params[t.prop],callback:function(r){e.$set(e.params,t.prop,r)},expression:"params[form.prop]"}}):e._e()],1)}),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.handleSearch}},[e._v("查询")]),e._v(" "),e.showResetBtn?r("el-button",{attrs:{type:"primary",size:e.size},on:{click:e.handleResetForm}},[e._v("重置")]):e._e()],1)],2)},a=[],o={render:n,staticRenderFns:a};t.a=o}])});
//# sourceMappingURL=customForm.js.map