"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[923],{5923:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r=t(2791),o=t(9434),i=t(9439),u=t(4424),a="NOT_FOUND";var l=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?l:r,i=t.maxSize,u=void 0===i?1:i,c=t.resultEqualityCheck,f=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),s=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:a},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return a}return{get:r,put:function(e,o){r(e)===a&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,f);function p(){var e=s.get(arguments);if(e===a){if(e=n.apply(null,arguments),c){var t=s.getEntries(),r=t.find((function(n){return c(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function f(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function s(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=a,s=c.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],v=f(r),x=n.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=v.length,t=0;t<e;t++)n.push(v[t].apply(null,arguments));return i=x.apply(null,n)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:x,dependencies:v,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return o}var p,d,v,x,h,m,b,y,g,j=s(c),w=function(n){return n.filter},O=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.items},Z=j([k,w],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),E=t(1634),P=t(168),C=t(8547),z=C.ZP.div(p||(p=(0,P.Z)(["\n  margin: 20px auto 30px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]))),I=C.ZP.label(d||(d=(0,P.Z)(["\n  color: #000000;\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),S=C.ZP.input(v||(v=(0,P.Z)(["\n  width: 400px;\n  padding: 10px;\n  margin: 0 auto;\n  border-radius: 4px;\n  border: 3px solid #808080;\n"]))),A=t(184),F=function(){var n=(0,o.v9)(w),e=(0,o.I0)();return(0,A.jsxs)(z,{children:[(0,A.jsx)(I,{children:"Find contacts by name"}),(0,A.jsx)(S,{type:"text",value:n,onChange:function(n){var t=n.target.value.toLowerCase();e((0,E.M6)(t))}})]})},L=C.ZP.form(x||(x=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  background-color: #e5e5e5;\n  border: 3px solid #808080;\n  border-radius: 4px;\n  margin: 0 auto;\n"]))),M=C.ZP.label(h||(h=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  color: #000000;\n  font-size: 20px;\n"]))),_=C.ZP.input(m||(m=(0,P.Z)(["\n  color: #000000;\n  padding: 8px 12px;\n  font: inherit;\n  cursor: text;\n"]))),q=C.ZP.button(b||(b=(0,P.Z)(["\n  padding: 8px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #9d9d9d;\n  color: #000000;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: #858585;\n  }\n"]))),H=["title","titleId"];function R(){return R=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},R.apply(this,arguments)}function N(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function V(n,e){var t=n.title,o=n.titleId,i=N(n,H);return r.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,y||(y=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),g||(g=r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var B,D,T,U,Y,G=r.forwardRef(V),J=(t.p,function(){var n=(0,r.useState)(""),e=(0,i.Z)(n,2),t=e[0],a=e[1],l=(0,r.useState)(""),c=(0,i.Z)(l,2),f=c[0],s=c[1],p=(0,o.v9)(k),d=(0,o.I0)(),v=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":s(r);break;default:return}};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(L,{onSubmit:function(n){n.preventDefault(),p.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," \u0432\u0436\u0435 \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445\u261d\ufe0f")):(d((0,u.el)({name:t,number:f})),a(""),s(""))},children:[(0,A.jsxs)(M,{children:["Name",(0,A.jsx)(_,{value:t,onChange:v,type:"text",name:"name",required:!0})]}),(0,A.jsxs)(M,{children:["Number",(0,A.jsx)(_,{value:f,onChange:v,type:"tel",name:"number",required:!0})]}),(0,A.jsxs)(q,{type:"submit",children:[(0,A.jsx)(G,{fill:"#f08080",width:"25",height:"25"}),"Add contact"]})]}),(0,A.jsx)(F,{})]})}),K=C.ZP.ul(B||(B=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  border-radius: 4px;\n  background-color: #e5e5e5;\n  border: 3px solid #808080;\n  margin: 0 auto;\n"]))),Q=C.ZP.li(D||(D=(0,P.Z)(["\n  background-color: #ffffff;\n  border: 3px solid #808080;\n  padding: 10px;\n  border-radius: 4px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n"]))),W=C.ZP.button(T||(T=(0,P.Z)(["\n  padding: 4px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 2px;\n  border: 1px solid #000000;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: #858585;\n  }\n"]))),X=["title","titleId"];function $(){return $=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},$.apply(this,arguments)}function nn(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function en(n,e){var t=n.title,o=n.titleId,i=nn(n,X);return r.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,U||(U=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Y||(Y=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var tn=r.forwardRef(en),rn=(t.p,function(){var n=(0,o.v9)(Z),e=(0,o.I0)();return(0,A.jsx)(K,{children:n.map((function(n){return(0,A.jsxs)(Q,{children:[n.name+" : "+n.number,(0,A.jsxs)(W,{type:"button",name:"delete",onClick:function(){return e((0,u._f)(n.id))},children:[(0,A.jsx)(tn,{fill:"#000000",width:"20",height:"20"}),"delete"]})]},n.id)}))})}),on=t(9263);function un(){var n=(0,o.I0)(),e=(0,o.v9)(O);return(0,r.useEffect)((function(){n((0,u.yF)())}),[n]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("title",{children:"Your contacts"}),(0,A.jsx)(J,{}),(0,A.jsx)("div",{children:e&&(0,A.jsx)(on.a,{})})," ",(0,A.jsx)(rn,{})]})}}}]);
//# sourceMappingURL=923.78f7a093.chunk.js.map