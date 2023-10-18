"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[8132],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const i={},o="Create basic Empty Views",l={unversionedId:"create-project/create-basic-empty-views",id:"create-project/create-basic-empty-views",title:"Create basic Empty Views",description:"- create a UI group (a folder) to organize our code. Rigth click on GoodHabitsRealmApp in the file navigator and select New Group",source:"@site/docs/2-create-project/4-create-basic-empty-views.mdx",sourceDirName:"2-create-project",slug:"/create-project/create-basic-empty-views",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/create-project/create-basic-empty-views",draft:!1,editUrl:"https://github.com/mongodb-developer/swiftui-atlas-device-sdk-app-lab/blob/main/docs/2-create-project/4-create-basic-empty-views.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tab Bar icons",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/create-project/sf-font"},next:{title:"Add Realm Package",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/category/add-realm-package"}},c={},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-basic-empty-views"},"Create basic Empty Views"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create a ",(0,n.kt)("inlineCode",{parentName:"li"},"UI")," group (a folder) to organize our code. Rigth click on ",(0,n.kt)("inlineCode",{parentName:"li"},"GoodHabitsRealmApp")," in the file navigator and select ",(0,n.kt)("inlineCode",{parentName:"li"},"New Group")," "),(0,n.kt)("li",{parentName:"ul"},"move ",(0,n.kt)("inlineCode",{parentName:"li"},"MainView")," there",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if Xcode freaks out, comment and uncomment the preview"))),(0,n.kt)("li",{parentName:"ul"},"create ",(0,n.kt)("inlineCode",{parentName:"li"},"TodayView")," (File > New > File or \u2318 + N, select SwiftUI View)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"leave it empty, just a ",(0,n.kt)("inlineCode",{parentName:"li"},"Text"),' with "Today"'))),(0,n.kt)("li",{parentName:"ul"},"create empty ",(0,n.kt)("inlineCode",{parentName:"li"},"ConfigView"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"leave it empty, just a ",(0,n.kt)("inlineCode",{parentName:"li"},"Text"),' with "Config"   ')))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='TodayView.swift (ConfigView.swift is quite similar)'",title:"'TodayView.swift","(ConfigView.swift":!0,is:!0,quite:!0,"similar)'":!0},'import SwiftUI\n\nstruct TodayView: View {\n    var body: some View {\n        Text("Today")\n    }\n}\n\nstruct TodayView_Previews: PreviewProvider {\n    static var previews: some View {\n        TodayView()\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(1099).Z},(0,n.kt)("img",{alt:"Folder structure",src:a(4825).Z,width:"467",height:"394"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"let's use both in MainView's tabs")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='MainView.swift'",title:"'MainView.swift'"},'TabView {\n    TodayView()\n        .tabItem {\n            Image(systemName: "calendar")\n            Text("Today")\n        }\n    \n    ConfigView()\n        .tabItem {\n            Image(systemName: "wrench.and.screwdriver")\n            Text("Config")\n        }\n}\n')))}u.isMDXComponent=!0},1099:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/folders-28cd08ea949507f5f24903e3ead9d7a9.png"},4825:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/folders-28cd08ea949507f5f24903e3ead9d7a9.png"}}]);