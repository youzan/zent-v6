webpackJsonp([136],{1584:function(n,e,a){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function s(n){return y.default.createElement(n.tag,(0,k.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function o(n){return y.default.createElement(s,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function c(n){return y.default.createElement(s,{tag:"style",html:n.style})}function l(n,e){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(e+=n.offsetTop),l(n.parentNode,e);return e}Object.defineProperty(e,"__esModule",{value:!0});var r=a(1),i=t(r),p=a(4),u=t(p),d=a(2),m=t(d),f=a(3),h=t(f),g=a(7),k=t(g),v=a(0),y=t(v),b=a(232),_=t(b),z=(function(n){function e(){var n,a,t,s;(0,i.default)(this,e);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return a=t=(0,m.default)(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(c))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},s=a,(0,m.default)(t,s)}(0,h.default)(e,n),(0,u.default)(e,[{key:"render",value:function(){var n=this.state.showCode,e=this.props,a=e.title,t=e.src,o=e.children;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},o),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("div",{className:"zandoc-react-demo__title"},y.default.createElement("p",null,a||"")),y.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.default.createElement("pre",{className:"zandoc-react-demo__code"},y.default.createElement(s,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}])}(v.Component),function(n){function e(){return(0,i.default)(this,e),(0,m.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,h.default)(e,n),(0,u.default)(e,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var e=document.querySelector('a[href="'+n+'"]');e&&(0,_.default)(document.documentElement,0,l(e,-9))}}},{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container",key:null},y.default.createElement(c,{style:'img[alt="zent-components"] {\n  width: 523px;\n  height: 435px;\n}'}),y.default.createElement(o,{html:'<h1 class="anchor-heading"><a href="#zent">¶</a><a href="javascript:void(0)" id="zent" class="anchor-point"></a>Zent</h1>\n<p>Zent ( \\ˈzent\\ ) is a React component library developed and used at Youzan. Zent provides a collection of essential UI components and lots of useful domain specific components.</p>\n<p>We have more than 50 components for now and we\'re releasing more.</p>\n<p>Our goal is making React development faster and simpler.</p>\n<h3 class="anchor-heading"><a href="#showcase">¶</a><a href="javascript:void(0)" id="showcase" class="anchor-point"></a>Showcase</h3>\n<p><img src="https://img.yzcdn.cn/public_files/2018/04/17/ab32128950146c5932c267cbc19f9363.png" alt="zent-components"></p>\n<h3 class="anchor-heading"><a href="#features">¶</a><a href="javascript:void(0)" id="features" class="anchor-point"></a>Features</h3>\n<ul>\n<li>High quality React components</li>\n<li>Builtin TypeScript support</li>\n<li>Supports custom themes</li>\n<li>Import JavaScript and styles only if they are used</li>\n<li>yarn + webpack + babel + postcss + prettier + stylefmt</li>\n<li>Handmade icon font</li>\n<li>Tests coverage is above 90%</li>\n</ul>\n<h3 class="anchor-heading"><a href="#supported-environments">¶</a><a href="javascript:void(0)" id="supported-environments" class="anchor-point"></a>Supported Environments</h3>\n<ul>\n<li>React >= 15.6</li>\n<li>Modern browsers and IE >= 11</li>\n<li>Supports server-side rendering(SSR)</li>\n</ul>\n<h3 class="anchor-heading"><a href="#install">¶</a><a href="javascript:void(0)" id="install" class="anchor-point"></a>Install</h3>\n<pre><code class="language-bash">yarn add zent</code></pre>\n<h3 class="anchor-heading"><a href="#using-components">¶</a><a href="javascript:void(0)" id="using-components" class="anchor-point"></a>Using Components</h3>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Import style</span>\n<span class="token keyword">import</span> <span class="token string">\'zent/css/index.css\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>Button</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 class="anchor-heading"><a href="#import-as-necessary">¶</a><a href="javascript:void(0)" id="import-as-necessary" class="anchor-point"></a>Import as Necessary</h3>\n<p><a href="babel-plugin-zent">babel-plugin-zent</a> is a babel plugin that can help reduce bundle size, it does code transformations like this:</p>\n<pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Transforms into</span>\n\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'zent/lib/button\'</span><span class="token punctuation">;</span></code></pre>\n<p>This plugin is useful if you are developing a library based on Zent, or if you only use a small part of Zent components.</p>\n<p>You can find detailed instructions in its <a href="babel-plugin-zent">documentation</a>.</p>'}))}}]),e}(v.Component));e.default=z}});