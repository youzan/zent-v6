webpackJsonp([80],{1595:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function p(n){return E.default.createElement(n.tag,(0,l.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function o(n){return E.default.createElement(p,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function e(n){return E.default.createElement(p,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var u=s(7),l=t(u),r=s(1),i=t(r),k=s(4),d=t(k),f=s(2),g=t(f),m=s(3),h=t(m),y=s(0),E=t(y),v=s(232),w=t(v),C=s(359),b=function(){var n=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var o=arguments.length,e=Array(o),c=0;c<o;c++)e[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(e))),t.state={fail:!1},t.triggerFail=function(){t.setState({fail:!0})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){if(this.state.fail)throw new Error("This is an error from render.");return E.default.createElement("div",null,E.default.createElement("span",{style:{marginRight:10}},"Render OK"),E.default.createElement(C.Button,{onClick:this.triggerFail},"Trigger error"))}}]),a}(E.default.Component);return E.default.createElement("div",null,E.default.createElement(C.ErrorBoundary,null,E.default.createElement(n,null)),E.default.createElement("div",{style:{marginTop:10}},"Not affected here"))},_=function(){var n=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var o=arguments.length,e=Array(o),c=0;c<o;c++)e[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(e))),t.state={fail:!1},t.triggerFail=function(){t.setState({fail:!0})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){if(this.state.fail)throw new Error("This is an error from render.");return E.default.createElement("div",null,E.default.createElement("span",{style:{marginRight:10}},"Render OK"),E.default.createElement(C.Button,{onClick:this.triggerFail},"Trigger error"))}}]),a}(E.default.Component);return E.default.createElement("div",null,E.default.createElement(C.ErrorBoundary,{onError:function(n){return C.Notify.error(n.toString())}},E.default.createElement(n,null)),E.default.createElement("div",{style:{marginTop:10}},"Not affected here"))},B=function(){var n=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var o=arguments.length,e=Array(o),c=0;c<o;c++)e[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(e))),t.state={fail:!1},t.triggerFail=function(){t.setState({fail:!0})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){if(this.state.fail)throw new Error("This is an error from render.");return E.default.createElement("div",null,E.default.createElement("span",{style:{marginRight:10}},"Render OK"),E.default.createElement(C.Button,{onClick:this.triggerFail},"Trigger error"))}}]),a}(E.default.Component),a=C.ErrorBoundary.withErrorBoundary({Component:n}),s=C.ErrorBoundary.catchError()(n);return E.default.createElement("div",null,E.default.createElement(a,null),E.default.createElement(s,null),E.default.createElement("div",{style:{marginTop:10}},"Not affected here"))},R=function(){var n=function(n){function a(){return(0,i.default)(this,a),(0,g.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){return E.default.createElement("div",null,this.props.error.toString())}}]),a}(E.default.Component),a=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var o=arguments.length,e=Array(o),c=0;c<o;c++)e[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(e))),t.state={fail:!1},t.triggerFail=function(){t.setState({fail:!0})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){if(this.state.fail)throw new Error("This is an error from render.");return E.default.createElement("div",null,E.default.createElement("span",{style:{marginRight:10}},"Render OK"),E.default.createElement(C.Button,{onClick:this.triggerFail},"Trigger error"))}}]),a}(E.default.Component);return E.default.createElement("div",null,E.default.createElement(C.ErrorBoundary,{FallbackComponent:n},E.default.createElement(a,null)),E.default.createElement("div",{style:{marginTop:10}},"Not affected here"))},T=function(n){function a(){var n,s,t,p;(0,i.default)(this,a);for(var o=arguments.length,e=Array(o),c=0;c<o;c++)e[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(e))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,o=a.children;return E.default.createElement("div",{className:"zandoc-react-demo"},E.default.createElement("div",{className:"zandoc-react-demo__preview"},o),E.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.default.createElement("div",{className:"zandoc-react-demo__title"},E.default.createElement("p",null,s||"")),E.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.default.createElement("pre",{className:"zandoc-react-demo__code"},E.default.createElement(p,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),O=function(n){function a(){return(0,i.default)(this,a),(0,g.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,w.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return E.default.createElement("div",{className:"zandoc-react-container",key:null},E.default.createElement(e,{style:""}),E.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#errorboundary">¶</a><a href="javascript:void(0)" id="errorboundary" class="anchor-point"></a>ErrorBoundary</h2>\n<p>Catch errors down in the component tree. It is the <code>try...catch...</code> to <code>React</code> component tree.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<p>Use this to separate component errors within a page. <code>ErrorBoundary</code> catches errors during component life cycle down in the component tree so that errors occur in one part of the page will not affect other parts of the same page.</p>\n<p>For example, say we have a page that is divided into two parts: navigation on the left and main content on the right. You can use <code>ErrorBoundary</code> to wrap both parts so that errors occur in one part will not break the other part of the page.</p>\n<p>Note：</p>\n<ul>\n<li>Errors in <code>React</code> event handlers will not be catched</li>\n<li>Errors in asynchronous code(e.g. <code>setTimeout</code>，<code>requestAnimationFrame</code>) will not be catched</li>\n<li>Requires <code>React 16</code> or newer version</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),E.default.createElement(T,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ErrorComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fail<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">triggerFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fail<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'This is an error from render.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Render OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>triggerFail<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Trigger error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Not affected here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.default.createElement(b)),E.default.createElement(T,{title:"onError callback",id:"Demoonerror",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ErrorComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fail<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">triggerFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fail<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'This is an error from render.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Render OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>triggerFail<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Trigger error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span> <span class="token attr-name">onError</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>err <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Not affected here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.default.createElement(_)),E.default.createElement(T,{title:"withErrorBoundary and catchError HOC",id:"Demohoc",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ErrorComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fail<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">triggerFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fail<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'This is an error from render.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Render OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>triggerFail<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Trigger error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> GuardedErrorComponent <span class="token operator">=</span> ErrorBoundary<span class="token punctuation">.</span><span class="token function">withErrorBoundary</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  Component<span class="token punctuation">:</span> ErrorComponent<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> GuardedErrorComponent2 <span class="token operator">=</span> ErrorBoundary<span class="token punctuation">.</span><span class="token function">catchError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>ErrorComponent<span class="token punctuation">)</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GuardedErrorComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GuardedErrorComponent2</span> <span class="token punctuation">/></span></span>\n    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Not affected here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.default.createElement(B)),E.default.createElement(T,{title:"Custom FallbackComponent",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Fallback</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>error<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ErrorComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fail<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">triggerFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fail<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'This is an error from render.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Render OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>triggerFail<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Trigger error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span> <span class="token attr-name">FallbackComponent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Fallback<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Not affected here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.default.createElement(R)),E.default.createElement(o,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>Children component to guard</td>\n<td><code>node</code></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onError</td>\n<td>Callback when an error occurs inside a child component</td>\n<td><code>(error: Error, stackTrace: string): void</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>FallbackComponent</td>\n<td>Component to render when an error occurs</td>\n<td><code>Component</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><code>FallbackComponent</code> has two props: <code>error</code> and <code>componentStack</code>，they are the same as <code>onError</code>\'s parameters。</p>\n<h4 class="anchor-heading"><a href="#witherrorboundary">¶</a><a href="javascript:void(0)" id="witherrorboundary" class="anchor-point"></a>withErrorBoundary</h4>\n<p>This is a high order component, it provides the same functionality as <code>ErrorBoundary</code>.</p>\n<pre><code class="language-ts"><span class="token function">withErrorBoundary</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  BaseComponent<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component<span class="token punctuation">,</span>\n  onError<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>error<span class="token punctuation">:</span> Error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span>\n  FallbackComponent<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component</code></pre>\n<h4 class="anchor-heading"><a href="#catcherror">¶</a><a href="javascript:void(0)" id="catcherror" class="anchor-point"></a>catchError</h4>\n<p>This HOC is the same as <code>withErrorBoundary</code>, but more decorator friendly.</p>\n<pre><code class="language-ts"><span class="token function">catchError</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  onError<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>error<span class="token punctuation">:</span> Error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span>\n  FallbackComponent<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>BaseComponent<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component<span class="token punctuation">)</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component<span class="token punctuation">)</span></code></pre>'}))}}]),a}(y.Component);a.default=O}});