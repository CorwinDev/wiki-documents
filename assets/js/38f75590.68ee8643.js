"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11194],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=u(r),c=o,y=g["".concat(s,".").concat(c)]||g[c]||p[c]||a;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},95632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(9668),o=(r(96540),r(15680));const a={description:"This wiki introduces the features of the J501 carrier board and explains how to flash the Jetpack system onto the J501 carrier board.",title:"Flash Jetpack",keywords:["reServer","Jetson"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reserver_j501_getting_started",last_update:{date:"08/19/2024",author:"Youjiang"}},l="Getting Started with reServer J501",i={unversionedId:"Edge/NVIDIA_Jetson/Carrier_Boards/J501/reServer_Industrial_J501_Getting_Started",id:"Edge/NVIDIA_Jetson/Carrier_Boards/J501/reServer_Industrial_J501_Getting_Started",title:"Flash Jetpack",description:"This wiki introduces the features of the J501 carrier board and explains how to flash the Jetpack system onto the J501 carrier board.",source:"@site/docs/Edge/NVIDIA_Jetson/Carrier_Boards/J501/reServer_Industrial_J501_Getting_Started.md",sourceDirName:"Edge/NVIDIA_Jetson/Carrier_Boards/J501",slug:"/reserver_j501_getting_started",permalink:"/reserver_j501_getting_started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Carrier_Boards/J501/reServer_Industrial_J501_Getting_Started.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1724025600,formattedLastUpdatedAt:"Aug 19, 2024",frontMatter:{description:"This wiki introduces the features of the J501 carrier board and explains how to flash the Jetpack system onto the J501 carrier board.",title:"Flash Jetpack",keywords:["reServer","Jetson"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reserver_j501_getting_started",last_update:{date:"08/19/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"Interfaces Usage",permalink:"/J401_carrierboard_Hardware_Interfaces_Usage"},next:{title:"Interfaces Usage",permalink:"/j501_carrier_board_interfaces_usage"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Flash JetPack OS to J501 Carrier Board",id:"flash-jetpack-os-to-j501-carrier-board",level:2},{value:"Supported Module",id:"supported-module",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Prepare the Jetpack Image",id:"prepare-the-jetpack-image",level:3},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:3},{value:"Flash to Jetson",id:"flash-to-jetson",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},g="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"getting-started-with-reserver-j501"},"Getting Started with reServer J501"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_J501.jpeg"})),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-without-Power-Adapter-p-5637.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.yg)("p",null,"The J501 carrier board is a powerful extension board that supports NVIDIA Jetson AGX Orin modules. It features rich data ports and extension interfaces, completely unleashed the full performance of the AGX Orin module. Also it supports adding GMSL extension to connect up to 8 GMSL cameras."),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Build most powerful AI computer for edge computing:")," Design to intgerate with  Jetson AGX Orin module, with up to 275 TOPS AI performance, 8 times AI performance compared to Jetson AGX Xavier. Power configurable between 15W and 60W."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"High-speed interface support for multiple sensors:")," 22 lanes of PCIe Gen4, 1x 10GbE, a Display Port, 16 lanes of MIPI CSI-2, USB 3.2 interfaces, and a 40-pin header."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Low-speed interface support for multiple IO:")," 4x DI, 4x DO, 3x GND_DI, 2x GND_DO, 1x GND_ISO, 1x CAN, 1x RS232/RS422/RS485.")),(0,o.yg)("h2",{id:"specifications"},"Specifications"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",null,(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:7},"I/O"),(0,o.yg)("td",null,"Ethernet"),(0,o.yg)("td",null," 1x LAN0 RJ45 GbE (10/100/1000Mbps), ",(0,o.yg)("br",null)," 1x LAN RJ45 GbE PoE(PSE 802.3 af 15 W, 10/100/1000Mbps) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"USB"),(0,o.yg)("td",null," 3x USB3.1, ",(0,o.yg)("br",null)," 1x USB3.1 Type C(Host mode), ",(0,o.yg)("br",null)," 1x USB2.0 Type C(Device mode) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"DI/DO"),(0,o.yg)("td",null," 4x DI,4x DO,3x GND_DI,2x GND_DO,1x GND_ISO,1x CAN 1x RS232/RS422/RS485 ")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Display"),(0,o.yg)("td",null," 1x HDMI 2.1 Type A 7680x4320 ")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"SATA"),(0,o.yg)("td",null," 2x SATA III 6.0Gbps at 30 Hz ")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"SIM"),(0,o.yg)("td",null," 1x Nano SIM card slot ")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Button"),(0,o.yg)("td",null," Reset Button, Recovery Button ")),(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:9},"Expansion"),(0,o.yg)("td",null," Mini PCIE "),(0,o.yg)("td",null," 1x Mini PCIe for LoRaWAN\xae/4G/Series Wireless (Module not included) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," M.2 Key B "),(0,o.yg)("td",null," 1x M.2 Key B (3042/3052) support 4G/5G (Module not included) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," M.2 Key E "),(0,o.yg)("td",null," 1x M.2 Key E ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," M.2 Key M "),(0,o.yg)("td",null," 1x M.2 Key M (PCIE 4.0) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," Fan "),(0,o.yg)("td",null," 1x Fan connectors (5V PWM) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," TPM "),(0,o.yg)("td",null," 1x TPM 2.0 connector (Module not included) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," RTC "),(0,o.yg)("td",null," 1x RTC socket (CR1220 included), ",(0,o.yg)("br",null),"1x RTC 2-pin ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," Camera "),(0,o.yg)("td",null," 2x Expansion connector (8lanes for each connector) ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," PCIE "),(0,o.yg)("td",null," 1x PCIE ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," Power "),(0,o.yg)("td",null," Power Supply "),(0,o.yg)("td",null," DC 12V-36V Terminal block 2 pin (included 24V/5A Power Adapter)")),(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:3}," Mechanical "),(0,o.yg)("td",null," Dimensions (W x D) "),(0,o.yg)("td",null," 176 x 163mm (Module not included)")),(0,o.yg)("tr",null,(0,o.yg)("td",null," Operating Temerature "),(0,o.yg)("td",null," -20~60\u2103 ")),(0,o.yg)("tr",null,(0,o.yg)("td",null," Weight "),(0,o.yg)("td",null," 225g (Module not included) "))))),(0,o.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/hardware_overview.jpeg"})),(0,o.yg)("h2",{id:"flash-jetpack-os-to-j501-carrier-board"},"Flash JetPack OS to J501 Carrier Board"),(0,o.yg)("p",null,"Here, we will show you how to flash ",(0,o.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-archive"},"Jetpack")," to an NVMe SSD connected to the reServer J501."),(0,o.yg)("h3",{id:"supported-module"},"Supported Module"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5458.html"},"NVIDIA\xae Jetson AGX Orin\u2122 Module 32GB")," "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-JETSON-AGX-ORIN-64GB-Module-p-5552.html"},"NVIDIA\xae Jetson AGX Orin\u2122 Module 64GB")," ")),(0,o.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Ubuntu host PC"),(0,o.yg)("li",{parentName:"ul"},"reServer J501 Carrier Board"),(0,o.yg)("li",{parentName:"ul"},"NVIDIA\xae Jetson AGX Orin\u2122 Module 32GB/64GB"),(0,o.yg)("li",{parentName:"ul"},"AGX Orin Active Fan"),(0,o.yg)("li",{parentName:"ul"},"NVMe M.2 2280 Internal SSD"),(0,o.yg)("li",{parentName:"ul"},"USB Type-C data transmission cable")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"We do not recommend using virtual machines and ARM architecture Ubuntu for flashing.")),(0,o.yg)("h3",{id:"prepare-the-jetpack-image"},"Prepare the Jetpack Image"),(0,o.yg)("p",null,"Here, we need to download the system image to our Ubuntu PC corresponding to the Jetson module we are using:"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{style:{textAlign:"center"}},(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Jetpack Version"),(0,o.yg)("th",null,"Jetson Module"),(0,o.yg)("th",null," GMSL "),(0,o.yg)("th",null,"Download Link"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:4},"5"),(0,o.yg)("td",null,"AGX Orin 32GB"),(0,o.yg)("td",null,"\u274c"),(0,o.yg)("td",null,(0,o.yg)("a",{href:"https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERG3upqXAQNHsJP6ZvG2MAEBGsndVCgrLnhcKvtWoGA6tA?e=14KO6z",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"AGX Orin 32GB"),(0,o.yg)("td",null,"\u2705"),(0,o.yg)("td",null,(0,o.yg)("a",{href:"https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EZ7iNOxMxL9AjcKFPLygVT8Bg5qnkE-ZsMmNmHkZzNayOg?e=qv2sbB",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"AGX Orin 64GB"),(0,o.yg)("td",null,"\u274c"),(0,o.yg)("td",null,(0,o.yg)("a",{href:"https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ESfErbFgQl9NudcbGZXL3LMB9wavWcQwjtW6wYYtfwkE3A?e=H5sR4J",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,"AGX Orin 64GB"),(0,o.yg)("td",null,"\u2705"),(0,o.yg)("td",null,(0,o.yg)("a",{href:"https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eccs1larF2FNhKi8MHred5kB4pQImN4ZHSgDM3BUDVzBtQ?e=reKIhD",target:"_blank",rel:"noopener noreferrer"},"Download")))))),(0,o.yg)("admonition",{type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"The image file is approximately 4.5GB in size and should take around 15 minutes to download. Please kindly wait for the download to complete.")),(0,o.yg)("h3",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/CGMGZGqZPKM",title:"J501 Enter Force Recovery Mode",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})),(0,o.yg)("details",null,(0,o.yg)("summary",null," Step-by-Step "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1.")," Press and hold the force recovery button without releasing it."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Power up the carrier board by connecting the power cable."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3.")," Release the force recovery button."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4.")," Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 5.")," On the Linux host PC, open a Terminal window and enter the command ",(0,o.yg)("inlineCode",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"For AGX Orin 32GB: ",(0,o.yg)("strong",{parentName:"li"},"0955:7223 NVidia Corp")),(0,o.yg)("li",{parentName:"ul"},"For AGX Orin 64GB: ",(0,o.yg)("strong",{parentName:"li"},"0955:7423 NVidia Corp"))),(0,o.yg)("p",null,"The below image is for AGX Orin 32GB"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"}))),(0,o.yg)("h3",{id:"flash-to-jetson"},"Flash to Jetson"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1:")," Extract the downloaded image file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd <path-to-image>\nsudo tar xpf mfi_xxxx.tar.gz\n# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2:")," Execute the following command to flash jetpack system to the NVMe SSD: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd mfi_xxxx\n# For example: cd mfi_recomputer-orin-j401\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs\n")),(0,o.yg)("p",null,"You will see the following output if the flashing process is successful"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The flash command may run for 2-10 minutes.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3:")," Connect the J501 to a display using the HDMI connector on the board and finish the initial configuration setup:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"})),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Please complete the ",(0,o.yg)("strong",{parentName:"p"},"System Configuration")," according to your needs.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4 (Optional):")," Install Nvidia Jetpack SDK"),(0,o.yg)("p",null,"Please open the terminal on the Jetson device and execute the following commands:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install nvidia-jetpack\n")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);