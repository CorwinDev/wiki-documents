"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92021],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,y=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>P});var r=n(58168),a=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),u=n(31682),d=n(89466);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=c(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=y({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var h=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},g=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:c},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},a.createElement(b,(0,r.A)({},e,t)),a.createElement(w,(0,r.A)({},e,t)))}function P(e){const t=(0,h.A)();return a.createElement(v,(0,r.A)({key:String(t)},e))}},62546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(11470),i=n(19365);const l={title:"Getting Started with Seeed Studio XIAO RP2350",description:"XIAO RP2350, a cutting-edge microcontroller from Seeed Studio. It features a dual-core processor, increased SRAM and flash memory, and enhanced connectivity.\n",image:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.png",slug:"/getting-started-xiao-rp2350",keywords:["xiao","RP2350"],sidebar_position:0,author:"Spencer",last_update:{date:new Date("2024-08-08T14:19:47.057Z")}},s=void 0,u={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/XIAO-RP2350",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/XIAO-RP2350",title:"Getting Started with Seeed Studio XIAO RP2350",description:"XIAO RP2350, a cutting-edge microcontroller from Seeed Studio. It features a dual-core processor, increased SRAM and flash memory, and enhanced connectivity.\n",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/XIAO-RP2350.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350",slug:"/getting-started-xiao-rp2350",permalink:"/getting-started-xiao-rp2350",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2350/XIAO-RP2350.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1723126787.057,formattedLastUpdatedAt:"Aug 8, 2024",sidebarPosition:0,frontMatter:{title:"Getting Started with Seeed Studio XIAO RP2350",description:"XIAO RP2350, a cutting-edge microcontroller from Seeed Studio. It features a dual-core processor, increased SRAM and flash memory, and enhanced connectivity.\n",image:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.png",slug:"/getting-started-xiao-rp2350",keywords:["xiao","RP2350"],sidebar_position:0,author:"Spencer",last_update:{date:"2024-08-08T14:19:47.057Z"}},sidebar:"ProductSidebar",previous:{title:"Motion Recognition based on Edge Impulse",permalink:"/XIAO-RP2040-EI"},next:{title:"Seeed Studio XIAO RP2350 with MicroPython",permalink:"/xiao-rp2350-micropython"}},d={},p=[{value:"Seeed Studio XIAO RP2350",id:"seeed-studio-xiao-rp2350",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started \u25b6\ufe0f",id:"getting-started-\ufe0f",level:2},{value:"Let&#39;s Make It Blink! \u2728",id:"lets-make-it-blink-",level:3},{value:"Battery &amp; Power Management",id:"battery--power-management",level:3},{value:"Assets &amp; Resources",id:"assets--resources",level:2},{value:"Expansion and Applications",id:"expansion-and-applications",level:3},{value:"Community and Learning",id:"community-and-learning",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:p},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"seeed-studio-xiao-rp2350"},"Seeed Studio XIAO RP2350"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg",style:{width:480,height:"auto","border-radius":"12.8px"}})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.yg)("br",null),(0,a.yg)("p",null,"The XIAO RP2350 packs the power of the Raspberry Pi RP2350 (dual Cortex-M33 cores running at 150MHz with FPU, enhanced security and encryption) into the classic XIAO form factor. Measuring just 21x17.5mm, it features 19 multifunction GPIOs, an RGB LED, and a Battery Management System with ultra-low power consumption of 27\u03bcA, battery power supply, and direct battery voltage measurement. Thanks to the XIAO ecosystem, the XIAO RP2350 is compatible with a wide range of add-ons, including displays, LED matrix, Grove modules, CAN Bus, Vision AI sensors, and mmWave sensors. With native support for MicroPython, C, and C++, the XIAO RP2350 is perfect for developers of all levels looking to create compact, battery-powered applications for smart control, wearables, DIY keyboards, and more."),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Powerful MCU Board:")," Equipped with a Raspberry Pi RP2350 chip featuring symmetric dual Arm Cortex-M33 @ 150MHz with FPU."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Enhanced Security Features:")," Built-in secure boot and encrypted bootloader ensure application security."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Software Support:")," Compatible with C/C++ and MicroPython, ensuring easy project development and prototyping."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Rich Onboard Resources:")," Integrates an RGB LED, 2MB Flash, 520kB SRAM, and 19 multifunction GPIOs(Analog, Digital, I\xb2C, UART, SPI, PWM)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Expanded 8 New IOs:")," Compared to previous XIAO MCUs, the addition of 8 IO pins on the back supports more complex applications."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Efficient Power Design:")," Ultra-low power consumption of just 27\u03bcA in sleep mode, enabling battery power supply. Direct battery voltage measurement via internal IO enhances the battery management system (BMS)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Compact Thumb-Sized Design:")," Measuring 21 x 17.5mm, adopting Seeed Studio's classic XIAO form factor, ideal for space-conscious applications."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Production-friendly:")," Surface Mount Device (SMD) design with all components on the front and stamp holes on both sides, facilitating efficient mass production.")),(0,a.yg)("h2",{id:"specification"},"Specification"),(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("td",null,"Product"),(0,a.yg)("td",null,"XIAO RP2040"),(0,a.yg)("td",null,(0,a.yg)("b",null,"XIAO RP2350"))),(0,a.yg)("tr",null,(0,a.yg)("td",{rowspan:"2"},"Processor"),(0,a.yg)("td",null,"Raspberry Pi RP2040"),(0,a.yg)("td",null,"Raspberry Pi RP2350")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Dual Cortex-M0+ @ 133MHz"),(0,a.yg)("td",null,"Dual Cortex-M33 @ 150MHz, FPU")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"RAM"),(0,a.yg)("td",null,"264kB SRAM"),(0,a.yg)("td",null,"520kB SRAM")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Flash"),(0,a.yg)("td",null,"2MB Onboard"),(0,a.yg)("td",null,"2MB PSRAM")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"LEDs"),(0,a.yg)("td",null,"1 user LED, 1 power LED, two LEDs for serial port downloading, 1 RGB LED"),(0,a.yg)("td",null,"1 user LED, 1 power LED\uff0c1 RGB LED")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Interface"),(0,a.yg)("td",null,"11 Pins:4x Analog,11x Digital, 1x I\xb2C, 1x UART, 1x SPI, All PWM"),(0,a.yg)("td",null,(0,a.yg)("b",null,"19 Pins:3x Analog,19x Digital, 2x I\xb2C, 2x UART, 2x SPI, All PWM"))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Button"),(0,a.yg)("td",null,"1 RESET button, 1 BOOT button"),(0,a.yg)("td",null,"1 RESET button, 1 BOOT button")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Security"),(0,a.yg)("td",{align:"center"}," - "),(0,a.yg)("td",null,"OTP, Secure Boot, Arm TrustZone")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Low power"),(0,a.yg)("td",{align:"center"}," - "),(0,a.yg)("td",null,"27\u03bcA")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Software compatibility"),(0,a.yg)("td",null,"Support Micropython / Arduino / CircuitPython"),(0,a.yg)("td",null,"Support Micropython / C,C++")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Working Temperature"),(0,a.yg)("td",null,"-20\xb0C-70\xb0C"),(0,a.yg)("td",null,"-20\xb0C-70\xb0C")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Dimensions"),(0,a.yg)("td",null,"21x17.5 mm"),(0,a.yg)("td",null,"21x17.5 mm"))),(0,a.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"XIAO RP2350 Front Pinout")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png",style:{width:680,height:"auto"},alt:"XIAO RP2350 Front Pinout"})))),(0,a.yg)("tr",null,(0,a.yg)("th",null,"XIAO RP2350 Back Pinout")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png",style:{width:680,height:"auto"},alt:"XIAO RP2350 Back Pinout"})))),(0,a.yg)("tr",null,(0,a.yg)("th",null,"XIAO RP2350 Components")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png",style:{width:480,height:"auto"},alt:"XIAO RP2350 Components"})))))),(0,a.yg)("p",null,"Need more details on pinouts? Navigate to ",(0,a.yg)("a",{parentName:"p",href:"#assets--resources"},"Assets and Resources")," below."),(0,a.yg)("h2",{id:"platform-supported"},"Platform Supported"),(0,a.yg)("p",null,"The XIAO RP2350, powered by the RP2350, supports MicroPython and the C/C++ SDK provided by Raspberry Pi. This flexibility allows developers to choose their preferred programming language and environment for prototyping and development."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"C/C++ SDK"),(0,a.yg)("th",null,"MicroPython")),(0,a.yg)("tr",null,(0,a.yg)("td",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png",alt:"c-cpp logo",width:200,height:"auto"})),(0,a.yg)("td",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png",alt:"MicroPython",width:200,height:"auto"}))))),(0,a.yg)("h2",{id:"getting-started-\ufe0f"},"Getting Started \u25b6\ufe0f"),(0,a.yg)("admonition",{title:"micropython is still not released",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"As of August 9, 2024, the stable MicroPython firmware for the XIAO RP2350 is still awaiting release from Raspberry Pi.\nYou could use the preview-compiled micropython firmware from ",(0,a.yg)("a",{parentName:"p",href:"https://micropython.org/download/RPI_PICO2/"},"https://micropython.org/download/RPI_PICO2/"),".")),(0,a.yg)("admonition",{title:"attention",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"This page primarily focuses on MicroPython users. For those interested in learning SDK programming or advanced users, you can visit ",(0,a.yg)("a",{parentName:"p",href:"/xiao-rp2350-c-cpp-sdk"},"XIAO RP2350 with C/C++ SDK")," to learn about setting up the environment and running example code.")),(0,a.yg)("p",null,"If your board doesn't have the firmware or you want to upgrade to a new version of MicroPython, you'll need to upload the ",(0,a.yg)("inlineCode",{parentName:"p"},"UF2")," bootloader. For this step, please visit the ",(0,a.yg)("a",{parentName:"p",href:"/xiao-rp2350-micropython"},"XIAO RP2350 with MicroPython")," for detailed instructions on getting started with MicroPython on the XIAO RP2350."),(0,a.yg)("admonition",{title:"about MicroPython",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"https://micropython.org/"},"MicroPython")," is an interpreted language similar to ",(0,a.yg)("a",{parentName:"p",href:"https://www.python.org/"},"Python"),". However, unlike Python, MicroPython runs directly on the hardware (bare-metal), providing an interactive prompt (REPL) to execute commands immediately, as well as the ability to run and import scripts from the built-in filesystem."),(0,a.yg)("p",{parentName:"admonition"},"To connect to the XIAO RP2350 board and start writing and running your Python code, you can use any terminal tool that supports serial connections, such as minicom, PuTTY, electerm, warp, and more. For a more ",(0,a.yg)("em",{parentName:"p"},"user-friendly experience"),", you can use ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://thonny.org/"},"Thonny"))," for its ease of use, integrated features, and beginner-friendly interface. This way, you can enjoy writing and running your Python code directly on the device.")),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(i.A,{value:"thonny-mpy",label:"Thonny IDE",default:!0,mdxType:"TabItem"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png",style:{width:680,height:"auto"}}))),(0,a.yg)(i.A,{value:"putty-mpy",label:"PuTTY Console",mdxType:"TabItem"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png",style:{width:680,height:"auto"}})))),(0,a.yg)("p",null,"If your device is ready with MicroPython, let's start with a simple project:"),(0,a.yg)("h3",{id:"lets-make-it-blink-"},"Let's Make It Blink! \u2728"),(0,a.yg)("p",null,"Getting the board to blink an LED is often the first program everyone runs. The same goes for the XIAO RP2350."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"USER LED"),", the yellow LED on the XIAO RP2350, is connected to ",(0,a.yg)("inlineCode",{parentName:"p"},"GPIO25/D19")," according to the schematic diagram.\nFor all XIAO family boards, the ",(0,a.yg)("inlineCode",{parentName:"p"},"USER LED")," will ",(0,a.yg)("strong",{parentName:"p"},"light up")," when set to a ",(0,a.yg)("inlineCode",{parentName:"p"},"low level")," and ",(0,a.yg)("strong",{parentName:"p"},"turn off")," when set to a ",(0,a.yg)("inlineCode",{parentName:"p"},"high level"),".")),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(i.A,{value:"python",label:"MicroPython",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"from machine import Pin # Import the Pin class from the machine module\nfrom time import sleep  # Import the sleep function from the time module\n\n# Initialize GPIO25 as an output pin, which controls the USER LED\nled = Pin(25, Pin.OUT) \n\n# Turn off the LED initially\nled.value(1) # led.on() -> high level -> light off\nsleep(0.5) # Wait for 0.5 seconds\n\n# Turn on the LED\nled.value(0) # led.off() -> low level -> light on\nsleep(0.5) # Wait for 0.5 seconds\n\n# Enter an infinite loop\nwhile True:\n    # Toggle the LED state (on to off or off to on)\n    led.toggle() \n    # Print the current state of the LED\n    print(f\"LED {'ON' if led.value() == 0 else 'OFF'}\")\n    sleep(0.5) # Wait for 0.5 seconds before the next toggle\n")),(0,a.yg)("p",null,"Once you have copied the code into Thonny IDE, as shown in the image below, simply click the ",(0,a.yg)("inlineCode",{parentName:"p"},"Run current script")," button or press ",(0,a.yg)("inlineCode",{parentName:"p"},"F5"),". This will execute the code snippet and you'll see the LED on the XIAO RP2350 start to blink."),(0,a.yg)("table",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png",style:{width:680,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif",style:{width:400,height:"auto"}}))))))),(0,a.yg)("h3",{id:"battery--power-management"},"Battery & Power Management"),(0,a.yg)("p",null,"Is it possible to read the battery voltage without extra components? Yes, with the XIAO RP2350, it\u2019s easier than ever. In previous XIAO family members, such as the ",(0,a.yg)("a",{parentName:"p",href:"/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage"},"XIAO ESP32C3"),", reading the battery voltage required manually connecting to ",(0,a.yg)("em",{parentName:"p"},"A0")," with a resistor."),(0,a.yg)("p",null,"But with the XIAO RP2350, this process is simplified. You can now directly use the ",(0,a.yg)("inlineCode",{parentName:"p"},"A3/GPIO29")," pin to read the battery voltage level, streamlining your design and development. Just remember to set the ",(0,a.yg)("inlineCode",{parentName:"p"},"GPIO19")," pin to high, as it\u2019s necessary to enable battery level reading."),(0,a.yg)("p",null,"Follow along with this code snippet to read the battery voltage using the Pico SDK:"),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(i.A,{value:"python",label:"MicroPython",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from machine import Pin, ADC\nimport time\n\n# Function to initialize the GPIO pin for enabling battery voltage reading\ndef init_gpio():\n    enable_pin = Pin(19, Pin.OUT)\n    enable_pin.value(1)  # Set the pin to high to enable battery voltage reading\n\ndef main():\n    print("ADC Battery Example - GPIO29 (A3)")\n    \n    init_gpio()  # Initialize the enable pin\n    adc = ADC(Pin(29))  # Initialize the ADC on GPIO29\n\n    conversion_factor = 3.3 / (1 << 12)  # Conversion factor for 12-bit ADC and 3.3V reference\n    \n    while True:\n        result = adc.read_u16()  # Read the ADC value\n        voltage = result * conversion_factor * 2  # Calculate the voltage, considering the voltage divider (factor of 2)\n        print("Raw value: 0x{:03x}, voltage: {:.2f} V".format(result, voltage))\n        time.sleep(0.5)  # Delay for 500 milliseconds\n\nif __name__ == \'__main__\':\n    main()\n'))),(0,a.yg)(i.A,{value:"sdk",label:"C/C++ SDK",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c",metastring:"title='adc_bat.c'",title:"'adc_bat.c'"},'#include <stdio.h>\n#include "pico/stdlib.h"\n#include "hardware/gpio.h"\n#include "hardware/adc.h"\n\n// Function to initialize the GPIO pin for enabling battery voltage reading\nvoid init_gpio() {\n    const int enable_pin = 19; // Pin to enable battery voltage reading\n\n    gpio_init(enable_pin); // Initialize the pin\n    gpio_set_dir(enable_pin, GPIO_OUT); // Set the pin as output\n    gpio_put(enable_pin, 1); // Set the pin to high to enable battery voltage reading\n}\n\nint main() {\n    stdio_init_all(); // Initialize standard input/output\n    printf("ADC Battery Example - GPIO29 (A3)\\n");\n\n    init_gpio(); // Initialize the enable pin\n    adc_init(); // Initialize the ADC\n\n    // Initialize the ADC GPIO pin (GPIO29)\n    adc_gpio_init(29);\n    // Select ADC input 3 (corresponding to GPIO29)\n    adc_select_input(3);\n\n    while (1) {\n        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V\n        const float conversion_factor = 3.3f / (1 << 12); // Conversion factor for 12-bit ADC and 3.3V reference\n        uint16_t result = adc_read(); // Read the ADC value\n        // Calculate the voltage, considering the voltage divider (factor of 2)\n        printf("Raw value: 0x%03x, voltage: %f V\\n", result, result * conversion_factor * 2); \n        sleep_ms(500); // Delay for 500 milliseconds\n    }\n}\n')))),(0,a.yg)("h2",{id:"assets--resources"},"Assets & Resources"),(0,a.yg)("p",null,"The XIAO RP2350 harnesses the power of the Raspberry Pi RP2350, leveraging a wealth of shared resources from the Raspberry Pi community. This opens up a world of possibilities for you to tailor your projects on this tiny board with boundless creativity. Below are essential resources and assets to help you get started."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Datasheets and Schematics"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf"},"RP2350 Datasheet")),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf"},"Seeed Studio XIAO RP2350 Schematic")),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[XLSX]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx"},"Seeed Studio XIAO RP2350 Pinout Sheet"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Related Resources"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf"},"Getting Started with Raspberry Pi Pico-series"),": A comprehensive guide to setting up and programming Raspberry Pi Pico boards, ideal for beginners looking to learn MicroPython or C/C++.")),(0,a.yg)("h3",{id:"expansion-and-applications"},"Expansion and Applications"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/xiao_topic_page"},"The XIAO series")," has a huge range of peripherals and peripheral accessories for you to learn and use, whether you want a colorful screen that allows for perfect interaction, an integrated board with bright and simple RGB lights, and so on, just waiting to be checked out. "),(0,a.yg)("p",null,"As a member of the XIAO family, the XIAO RP2350 does the same. Of course, to make better use of the extra pins drawn out, new ",(0,a.yg)("em",{parentName:"p"},"peripherals and boards")," will keep coming along, fully utilizing the performance for which it was created."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud83c\udf1f ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories"},"Expanding with Accessories")),(0,a.yg)("br",{parentName:"li"}),"Discover the wide range of add-ons and modules compatible with the XIAO Family, from displays and LED matrices to Grove modules and sensors, and learn how they can enhance your projects.")),(0,a.yg)("h3",{id:"community-and-learning"},"Community and Learning"),(0,a.yg)("p",null,"Furthermore, dive into the vibrant Raspberry Pi community to expand your knowledge and discover new project ideas. Leverage community-shared resources, forums, and tutorials to enhance your experience with the XIAO RP2350. In addition to the Seeed Studio Wiki, here are a few other recommended places to learn:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html"},"Raspberry Pi Documentation")),": Get reliable and up-to-date info on the RP2350."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://www.raspberrypi.org/forums/"},"Raspberry Pi Forums")),": Engage with other enthusiasts, ask questions, and share your projects."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/OSHW-XIAO-Series"},"XIAO GitHub Repository")),": Explore the official XIAO repository for more centralized documentation and more interaction with our team, ",(0,a.yg)("strong",{parentName:"li"},"Join Us!")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://www.reddit.com/r/embedded/"},"r/embedded on Reddit")),": Join the embedded systems community, share insights, and discuss various topics."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://github.com/topics/pico"},"Pico Topic on GitHub")),": Explore repositories and discussions related to the Pico."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://www.hackster.io/"},"Hackster.io")),": Discover projects and tutorials related to various hardware platforms, including XIAO and Raspberry Pi."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://www.instructables.com/"},"Instructables")),": Find DIY projects and step-by-step guides for creating with XIAO and other hardware."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("a",{parentName:"strong",href:"https://www.element14.com/community/"},"Element14 Community")),": Participate in discussions, webinars, and projects related to electronics and embedded systems.")),(0,a.yg)("p",null,"And more, you're always welcome to share your projects on our ",(0,a.yg)("a",{parentName:"p",href:"https://discord.com/invite/kpY74apCWj"},"Seeed Studio Discord")," and ",(0,a.yg)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"Seeed Studio Forum"),". These platforms provide an excellent opportunity to connect with other makers, get feedback, and find inspiration. Whether you need help troubleshooting an issue, want to show off your latest creation, or simply wish to be part of a supportive community, ",(0,a.yg)("em",{parentName:"p"},"Seeed Studio's Discord and Forum")," are the perfect places to engage and collaborate."),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/kpY74apCWj",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}y.isMDXComponent=!0}}]);