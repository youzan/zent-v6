webpackJsonp([83],{1576:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function p(n){return v.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function o(n){return v.default.createElement(p,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function e(n){return v.default.createElement(p,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(7),u=t(l),i=s(1),k=t(i),r=s(4),d=t(r),g=s(2),f=t(g),h=s(3),m=t(h),y=s(0),v=t(y),D=s(232),b=t(D),C=s(359),_=s(5),w=t(_),E=function(){var n=function(n){function a(){var n,s,t,p;(0,k.default)(this,a);for(var o=arguments.length,e=Array(o),c=0;c<o;c++)e[c]=arguments[c];return s=t=(0,f.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(e))),t.state={visible:!1},t.triggerDialog=function(n){t.setState({visible:n})},p=s,(0,f.default)(t,p)}return(0,m.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this;return v.default.createElement("div",null,v.default.createElement(C.Button,{type:"primary",onClick:function(){return n.triggerDialog(!0)}},"显示"),v.default.createElement(C.Dialog,{visible:this.state.visible,onClose:function(){return n.triggerDialog(!1)},title:"对话框"},v.default.createElement("p",null,"对话框内容"),v.default.createElement("p",null,"对话框其他内容")))}}]),a}(v.default.Component);return v.default.createElement(n,null)},x=function(){var n=C.Dialog.openDialog,a=C.Dialog.closeDialog,s="my_dialog",t=function(){n({dialogId:s,title:"使用 openDialog 直接打开对话框",children:v.default.createElement("div",null,"Hello World"),footer:v.default.createElement(C.Button,{onClick:function(){return a(s)}},"关闭"),onClose:function(){}})};return v.default.createElement(C.Button,{type:"primary",onClick:t},"打开")},j=function(){var n=C.Dialog.openDialog,a=function(n){function a(){return(0,k.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m.default)(a,n),(0,d.default)(a,[{key:"getChildContext",value:function(){return{shared:"This is from context"}}},{key:"render",value:function(){return v.default.createElement("div",null,this.props.children)}}]),a}(v.default.Component);a.childContextTypes={shared:w.default.string};var s=function(n){function a(){return(0,k.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){return v.default.createElement("span",null,this.context.shared)}}]),a}(v.default.Component);s.contextTypes={shared:w.default.string};var t=function(a){function t(){var a,p,o,e;(0,k.default)(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return p=o=(0,f.default)(this,(a=t.__proto__||Object.getPrototypeOf(t)).call.apply(a,[this].concat(l))),o.open=function(){n({parentComponent:o,title:"openDialog 支持 context",children:v.default.createElement(s,null)})},e=p,(0,f.default)(o,e)}return(0,m.default)(t,a),(0,d.default)(t,[{key:"render",value:function(){return v.default.createElement(C.Button,{type:"primary",onClick:this.open},"显示")}}]),t}(v.default.Component);return v.default.createElement(a,null,v.default.createElement(t,null))},z=function(n){function a(){var n,s,t,p;(0,k.default)(this,a);for(var o=arguments.length,e=Array(o),c=0;c<o;c++)e[c]=arguments[c];return s=t=(0,f.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(e))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},p=s,(0,f.default)(t,p)}return(0,m.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,o=a.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},o),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,s||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(p,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),O=function(n){function a(){return(0,k.default)(this,a),(0,f.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,b.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(e,{style:""}),v.default.createElement(o,{html:'<h2 class="anchor-heading"><a href="#dialog-dui-hua-kuang">¶</a><a href="javascript:void(0)" id="dialog-dui-hua-kuang" class="anchor-point"></a>Dialog 对话框</h2>\n<p>对话框，通过打开一个浮层的方式，避免打扰用户的操作流程。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>\n<p>命令式, 直接调用 <code>openDialog</code> 函数。</p>\n</li>\n<li>\n<p>组件式, 通过控制 <code>visible</code> 来显示／隐藏对话框。</p>\n</li>\n<li>\n<p>推荐使用命令式, 不需要在外部维护一个 <code>visible</code> 属性, 更加方便。</p>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),v.default.createElement(z,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">triggerDialog</span> <span class="token operator">=</span> visible <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          显示\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>对话框<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>对话框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>对话框其他内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(E)),v.default.createElement(z,{title:"使用 openDialog 打开对话框",id:"Demoopen",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog<span class="token punctuation">,</span> closeDialog <span class="token punctuation">}</span> <span class="token operator">=</span> Dialog<span class="token punctuation">;</span>\n<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token string">\'my_dialog\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    dialogId<span class="token punctuation">:</span> id<span class="token punctuation">,</span> <span class="token comment">// id is used to close the dialog</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'使用 openDialog 直接打开对话框\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    footer<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">closeDialog</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'outer dialog closed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>打开<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(x)),v.default.createElement(z,{title:"openDialog 支持 context",id:"Democontext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog <span class="token punctuation">}</span> <span class="token operator">=</span> Dialog<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ContextProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    shared<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      shared<span class="token punctuation">:</span> <span class="token string">\'This is from context\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ContextConsumer</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    shared<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>shared<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'openDialog 支持 context\'</span><span class="token punctuation">,</span>\n      children<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContextConsumer</span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>open<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContextProvider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContextProvider</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.default.createElement(j)),v.default.createElement(o,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>自定义弹框标题</td>\n<td>node</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>弹框内容: \n<code>&#x3C;Dialog>xxxx&#x3C;/Dialog></code></td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>footer</td>\n<td>底部内容</td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否打开对话框</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>是否显示右上角关闭按钮</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n</tr>\n<tr>\n<td>mask</td>\n<td>是否显示遮罩</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>点击遮罩是否可以关闭</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>object</td>\n<td><code>{}</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#opendialog">¶</a><a href="javascript:void(0)" id="opendialog" class="anchor-point"></a>openDialog</h4>\n<p><code>openDialog(options: object): function</code></p>\n<p><strong><code>options</code> 参数支持组件除 <code>visible</code> 以外的所有属性，外加以下参数：</strong></p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dialogId</td>\n<td>可选，对话框的 ID，可以通过 \n<code>closeDialog(dialogId)</code>\n 来关闭对话框</td>\n<td>string</td>\n<td>随机生成的唯一ID</td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>可选，父组件的引用, 用于关联 context</td>\n<td>ReactInstance</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>如果需要组件实例的引用, 可以传一个函数形式的 <code>ref</code> 给 <code>openDialog</code>, <strong>不支持字符串形式的 <code>ref</code>.</strong></p>\n<blockquote>\n<p><code>openDialog</code> 的返回值是一个手动关闭 Dialog 的函数, <code>close(false)</code> 将不会触发Dialog的 <code>onClose</code> 方法。<strong>推荐使用 <code>closeDialog</code> 来关闭对话框。</strong></p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#closedialog">¶</a><a href="javascript:void(0)" id="closedialog" class="anchor-point"></a>closeDialog</h4>\n<p><code>closeDialog(dialogId: string, options: object): void</code></p>\n<p><code>dialogId</code> 对应调用 <code>openDialog</code> 时传的参数。</p>\n<p><code>options.triggerOnClose</code> 如果是 <code>true</code>，关闭时会触发 <code>onClose</code> 回调，<code>false</code> 时不会触发。</p>\n<h4 class="anchor-heading"><a href="#zhi-ding-dialog-kuan-du">¶</a><a href="javascript:void(0)" id="zhi-ding-dialog-kuan-du" class="anchor-point"></a>指定Dialog宽度</h4>\n<p>在 <code>style</code> 中可以指定弹出窗口的宽度, e.g. <code>style={{ width: \'600px\' }}</code>.</p>\n<p>默认情况下弹出窗口会自适应内容的宽度, 同时有最小宽度和最大宽度.</p>'}))}}]),a}(y.Component);a.default=O}});