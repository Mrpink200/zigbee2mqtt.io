"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38667],{14577:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>i,data:()=>l});var s=a(6254);const t={},i=(0,a(89596).A)(t,[["render",function(e,n){const a=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[n[11]||(n[11]=(0,s.Lk)("h1",{id:"ikea-ictc-g-1",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#ikea-ictc-g-1"},[(0,s.Lk)("span",null,"IKEA ICTC-G-1")])],-1)),(0,s.Lk)("table",null,[n[6]||(n[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[n[2]||(n[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"ICTC-G-1")],-1)),(0,s.Lk)("tr",null,[n[1]||(n[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(a,{to:"/supported-devices/#v=IKEA"},{default:(0,s.k6)((()=>n[0]||(n[0]=[(0,s.eW)("IKEA")]))),_:1})])]),n[3]||(n[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"TRADFRI wireless dimmer")],-1)),n[4]||(n[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"identify, battery, action, linkquality")],-1)),n[5]||(n[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ICTC-G-1.png",alt:"IKEA ICTC-G-1"})])],-1))])]),n[12]||(n[12]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To factory reset the TRADFRI wireless dimmer (ICTC-G-1) press the button 4 times (so the red lights starts blinking). After the blinks you might be willing to rotate the dimmer like you are trying to control your lights. It will prevent the device from going to sleep and ensure successful pairing. In case the dimmer was recognized but no actions seems to be detected, try to restart Zigbee2MQTT. See <a href="https://github.com/Koenkk/zigbee2mqtt/issues/620" target="_blank" rel="noopener noreferrer">IKEA TRADFRI wireless dimmer (ICTC-G-1) not pairing</a>.</p><h3 id="legacy-integration" tabindex="-1"><a class="header-anchor" href="#legacy-integration"><span>Legacy integration</span></a></h3><p>By default (for backwards compatibility purposes) the legacy integration is enabled. For new users it is recommended to <strong>disable</strong> this as it has several fundamental problems. To disable the legacy integration add the following to your <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The information below only applies to the legacy integration.</p><h3 id="recommendation" tabindex="-1"><a class="header-anchor" href="#recommendation"><span>Recommendation</span></a></h3><p>This device sends multiple messages in short time period with the same payload. It&#39;s worth setting <code>debounce</code> option with <code>debounce_ignore: - action</code> to throttle them without losing unique action payloads.</p><p>E.g. (devices.yaml)</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote</span>\n<span class="line">    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.5</span></span>\n<span class="line">    <span class="token key atrule">debounce_ignore</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token punctuation">-</span> action</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To find optimal &quot;smoothness&quot; play with debounce time or if you need all unique rotation steps consider adding <code>brightness</code> to <code>debounce_ignore</code> option</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote</span>\n<span class="line">    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.1</span></span>\n<span class="line">    <span class="token key atrule">debounce_ignore</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token punctuation">-</span> action</span>\n<span class="line">    <span class="token punctuation">-</span> brightness</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',14)),(0,s.Lk)("p",null,[n[8]||(n[8]=(0,s.eW)("This device supports OTA updates, for more information see ")),(0,s.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,s.k6)((()=>n[7]||(n[7]=[(0,s.eW)("OTA updates")]))),_:1}),n[9]||(n[9]=(0,s.eW)("."))]),n[13]||(n[13]=(0,s.Lk)("h2",{id:"options",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#options"},[(0,s.Lk)("span",null,"Options")])],-1)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>n[10]||(n[10]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),n[14]||(n[14]=(0,s.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>brightness_move_to_level</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11))])}]]),l=JSON.parse('{"path":"/devices/ICTC-G-1.html","title":"IKEA ICTC-G-1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA ICTC-G-1 control via MQTT","description":"Integrate your IKEA ICTC-G-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Legacy integration","slug":"legacy-integration","link":"#legacy-integration","children":[]},{"level":3,"title":"Recommendation","slug":"recommendation","link":"#recommendation","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1736191169000},"filePathRelative":"devices/ICTC-G-1.md"}')}}]);