(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{438:function(n,e,s){"use strict";s.r(e),e.default='<p>IgnorePlugin prevents generation of modules for <code>import</code> or <code>require</code> calls matching the regular expressions or filter functions:</p>\n<h2 id="using-regular-expressions">Using regular expressions<a href="#using-regular-expressions" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><code>resourceRegExp</code>: A RegExp to test the resource against.</li>\n<li><code>contextRegExp</code>: (optional) A RegExp to test the context (directory) against.</li>\n</ul>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>resourceRegExp<span class="token punctuation">,</span> contextRegExp<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Supported in webpack 4 and earlier, unsupported in webpack 5:</span>\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span>resourceRegExp<span class="token punctuation">,</span> <span class="token punctuation">[</span>contextRegExp<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="using-filter-functions">Using filter functions<a href="#using-filter-functions" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><code>checkResource (resource, context)</code> A Filter function that receives <code>resource</code> and <code>context</code> as arguments, must return boolean.</li>\n<li><code>checkContext (context)</code> was <strong>removed in webpack 5</strong> as <code>checkResource</code> already gets context.</li>\n</ul>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">checkResource</span> <span class="token punctuation">(</span>resource<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// do something with resource</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token operator">|</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="example-of-ignoring-moment-locales">Example of ignoring Moment Locales<a href="#example-of-ignoring-moment-locales" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>As of <a href="https://momentjs.com/">moment</a> 2.18, all locales are bundled together with the core library (see <a href="https://github.com/moment/moment/issues/2373">this GitHub issue</a>).</p>\n<p>The <code>resourceRegExp</code> parameter passed to <code>IgnorePlugin</code> is not tested against the resolved file names or absolute module names being imported or required, but rather against the <em>string</em> passed to <code>require</code> or <code>import</code> <em>within the source code where the import is taking place</em>. For example, if you\'re trying to exclude <code>node_modules/moment/locale/*.js</code>, this won\'t work:</p>\n<pre><code class="hljs language-diff"><span class="token deleted">-new webpack.IgnorePlugin({requestRegExp: /moment\\/locale\\//});</span></code></pre>\n<p>Rather, because <code>moment</code> imports with this code:</p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./locale/\'</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>...your first regexp must match that <code>\'./locale/\'</code> string. The second <code>contextRegExp</code> parameter is then used to select specific directories from where the import took place. The following will cause those locale files to be ignored:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  resourceRegExp<span class="token punctuation">:</span> <span class="token regex">/^\\.\\/locale$/</span><span class="token punctuation">,</span>\n  contextRegExp<span class="token punctuation">:</span> <span class="token regex">/moment$/</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>...which means "any require statement matching <code>\'./locale\'</code> from any directories ending with <code>\'moment\'</code> will be ignored.</p>\n'}}]);