"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33527],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>p});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),g=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=g(n),u=a,p=d["".concat(l,".").concat(u)]||d[u]||y[u]||s;return n?o.createElement(p,i(i({ref:t},c),{},{components:n})):o.createElement(p,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,i[1]=r;for(var g=2;g<s;g++)i[g]=n[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>r,toc:()=>g});var o=n(58168),a=(n(96540),n(15680));const s={description:"This page introduces how to deploy generative AI technologies on reComputer devices using the Nvidia Jetson platform, including text generation, image generation, audio generation, multimodal generation, and retrieval-augmented generation. It details the application scenarios, technical features, and relevant resource links for each technology, providing developers with comprehensive reference materials and technical support information.",title:"Generative AI with reComputer-Jetson\xae",keywords:["Edge","reComputer","Jetson"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Generative_AI_Intro",last_update:{date:"08/06/2024",author:"Youjiang"}},i=void 0,r={unversionedId:"Edge/NVIDIA_Jetson/Application/Generative_AI/Generative_AI_Intro",id:"Edge/NVIDIA_Jetson/Application/Generative_AI/Generative_AI_Intro",title:"Generative AI with reComputer-Jetson\xae",description:"This page introduces how to deploy generative AI technologies on reComputer devices using the Nvidia Jetson platform, including text generation, image generation, audio generation, multimodal generation, and retrieval-augmented generation. It details the application scenarios, technical features, and relevant resource links for each technology, providing developers with comprehensive reference materials and technical support information.",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/Generative_AI_Intro.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Generative_AI",slug:"/Generative_AI_Intro",permalink:"/Generative_AI_Intro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Generative_AI/Generative_AI_Intro.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1722902400,formattedLastUpdatedAt:"Aug 6, 2024",frontMatter:{description:"This page introduces how to deploy generative AI technologies on reComputer devices using the Nvidia Jetson platform, including text generation, image generation, audio generation, multimodal generation, and retrieval-augmented generation. It details the application scenarios, technical features, and relevant resource links for each technology, providing developers with comprehensive reference materials and technical support information.",title:"Generative AI with reComputer-Jetson\xae",keywords:["Edge","reComputer","Jetson"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Generative_AI_Intro",last_update:{date:"08/06/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"AI NVR with Jetson Orin",permalink:"/ai_nvr_with_jetson"},next:{title:"Finetune with Llama-Factory",permalink:"/Finetune_LLM_on_Jetson"}},l={},g=[{value:"Text Generation",id:"text-generation",level:2},{value:"Image Generation",id:"image-generation",level:2},{value:"Audio Generation",id:"audio-generation",level:2},{value:"Multimodal Generation",id:"multimodal-generation",level:2},{value:"Retrieval Augmented Generation",id:"retrieval-augmented-generation",level:2},{value:"Others",id:"others",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:g},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("a",{href:"https://github.com/Seeed-Projects/jetson-examples"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png",style:{width:800,height:"auto"}}))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/edge-ai/generative-ai"},(0,a.yg)("strong",{parentName:"a"},"Generative AI"))," is an artificial intelligence technology that can generate new data, such as images, text, or audio, by learning from existing data. ",(0,a.yg)("strong",{parentName:"p"},"Nvidia Jetson")," is an edge AI platform developed by NVIDIA, featuring high-performance processing capabilities and low-power design, suitable for various embedded and IoT devices. It supports deep learning, computer vision, and other AI applications, offering powerful computing capabilities and a rich set of development tools. The combination of Generative AI and Jetson enables efficient local real-time generation and inference on edge devices."),(0,a.yg)("h2",{id:"text-generation"},"Text Generation"),(0,a.yg)("p",null,"Text generation is a technology that uses deep learning and large language model to generate natural language text. These models are trained on massive datasets, allowing them to learn the vocabulary, grammar, and semantic structure of language. They can produce fluent and coherent text, not only limited to answering questions or engaging in conversations but also including tasks like writing articles, creating stories, generating code, and translating languages. Here, we are deploying text generation algorithms on Jetson to create our own local chatbot."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{class:"table-nobg"},(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Local AI Assistant")),(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Local Voice Chatbot"))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png",style:{width:300,height:"auto"}}))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/workflow.png",style:{width:300,height:"auto"}})))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"},"Set up a local knowledge base on Jetson devices with ollama and AnythingLLM.")),(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"},"Building a locally-operated voice chatbot with Nvidia Riva and Meta Llama2."))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/local_ai_ssistant/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Local_Voice_Chatbot/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,a.yg)("h2",{id:"image-generation"},"Image Generation"),(0,a.yg)("p",null,"Image generation, by interpreting input text descriptions, allows models to produce high-quality images that match the descriptions. This technology has broad applications in fields such as artistic creation, advertising design, and game development, enabling the automated generation of visual content that meets user needs."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{class:"table-nobg"},(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Run a Local LLM Text-to-Image"))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/28_dreamshaperxl_image_result.png",style:{width:300,height:"300"}})))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"}," Deploy the image generation model on Jetson and evaluate its inference performance."))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/How_to_run_local_llm_text_to_image_on_reComputer/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,a.yg)("h2",{id:"audio-generation"},"Audio Generation"),(0,a.yg)("p",null,"Audio generation can produce high-quality, realistic audio, including speech, music, and sound effects, using neural networks. By training on extensive datasets, these models learn to replicate natural sound patterns and nuances, enabling applications such as speech synthesis, automated music composition, and sound effect creation."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{class:"table-nobg"},(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Speech Subtitle Generation")),(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Deploy Whisper on NVIDIA Jetson Orin"))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif",style:{width:300,height:"auto"}}))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif",style:{width:300,height:"300"}})))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"},"  Speech Subtitle Generation on Jetson, which can offer real-time speech-to-subtitle services while avoiding information leakage on the internet. ")),(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"}," Deploying Whisper on the Jetson Orin to build robust, efficient STT applications."))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,a.yg)("h2",{id:"multimodal-generation"},"Multimodal Generation"),(0,a.yg)("p",null,"Multimodal generation technology combines various forms of data, such as text, images, and sound, to create content that integrates multiple types of information. This technology uses deep learning models to process and fuse data from different modalities, resulting in more expressive and diverse content. For example, text-to-image models can generate corresponding images based on textual descriptions, while speech synthesis models can produce speech from text and simultaneously generate related images. Multimodal generation shows broad application prospects in virtual reality, augmented reality, and multimedia content creation."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{class:"table-nobg"},(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Run VLM on reComputer"))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif",style:{width:300,height:"auto"}})))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"},"  This wiki provides a tutorial on how to run VLM on reComputer J4012 Jetson Orin NX with Jetson Platform Services. "))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/run_vlm_on_recomputer/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,a.yg)("h2",{id:"retrieval-augmented-generation"},"Retrieval Augmented Generation"),(0,a.yg)("p",null,"RAG (Retrieval-Augmented Generation) is a technology that combines retrieval mechanisms with generation models. The RAG model not only uses a generative model to produce responses but also incorporates information retrieval techniques to enhance the accuracy and richness of the generated content by retrieving relevant information from large databases. This technology excels in applications such as question-answering systems, intelligent search, and content generation. By leveraging retrieved information, RAG models can generate more detailed and information-rich responses, thereby improving the quality and relevance of the generated content."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{class:"table-nobg"},(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Local AI Assistant")),(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Local RAG with LlamaIndex"))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png",style:{width:300,height:"auto"}}))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif",style:{width:300,height:"auto"}})))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"}," Set up a local knowledge base on Jetson devices with ollama and AnythingLLM. ")),(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"}," With this local RAG project, it can protect your data privacy and provide you with low-latency communication experience. "))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/local_ai_ssistant/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Local_RAG_based_on_Jetson_with_LlamaIndex/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,a.yg)("h2",{id:"others"},"Others"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{class:"table-nobg"},(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Fine-tune LLM on Jetson")),(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Quantized LLM with MLC")),(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Zero-Shot Detection"))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif",style:{width:300,height:"auto"}}))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif",style:{width:300,height:"auto"}}))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif",style:{width:300,height:"auto"}})))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"}," Deploy Llama-Factory on Nvidia Jetson and use Llama-Factory to train a large language model. ")),(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"}," Deploying the quantized Llama2-7B with MLC LLM on the Jetson Orin NX. ")),(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"}," The Zero Shot Detection AI service exposes REST API endpoints to control stream input and objects to detect. "))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Finetune_LLM_on_Jetson/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/run_zero_shot_detection_on_recomputer/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("th",{class:"table-trnobg"},(0,a.yg)("font",{size:"4"},"Format Output with Langchain"))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif",style:{width:300,height:"auto"}})))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{className:"table-trnobg",style:{textAlign:"justify",width:"300px"}},(0,a.yg)("font",{size:"2"}," Use Langchain to format the output of large language models and deploy it on edge computing devices. "))),(0,a.yg)("tr",{class:"table-trnobg"}),(0,a.yg)("tr",{class:"table-trnobg"},(0,a.yg)("td",{class:"table-trnobg"},(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}y.isMDXComponent=!0}}]);