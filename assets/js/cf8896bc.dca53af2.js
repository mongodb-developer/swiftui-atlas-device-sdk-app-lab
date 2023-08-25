"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[3608],{4137:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),m=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),v=a,f=c["".concat(s,".").concat(v)]||c[v]||u[v]||i;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7252:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=r(7462),a=(r(7294),r(4137));const i={},o="Realm Environment Variables",l={unversionedId:"realm-previews-extension/realm-environment-variables",id:"realm-previews-extension/realm-environment-variables",title:"Realm Environment Variables",description:"Environment .realm",source:"@site/docs/6-realm-previews-extension/2-realm-environment-variables.mdx",sourceDirName:"6-realm-previews-extension",slug:"/realm-previews-extension/realm-environment-variables",permalink:"/swiftui-realm-app-workshop/docs/realm-previews-extension/realm-environment-variables",draft:!1,editUrl:"https://github.com/mongodb-developer/swiftui-realm-app-workshop/blob/main/docs/6-realm-previews-extension/2-realm-environment-variables.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Realm+Previews extension",permalink:"/swiftui-realm-app-workshop/docs/realm-previews-extension/realm-previews-extension"},next:{title:"Improve the Habit Cell",permalink:"/swiftui-realm-app-workshop/docs/category/improve-the-habit-cell"}},s={},m=[{value:"Environment .realm",id:"environment-realm",level:2},{value:"Environment .realmConfig",id:"environment-realmconfig",level:2}],p={toc:m},c="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"realm-environment-variables"},"Realm Environment Variables"),(0,a.kt)("h2",{id:"environment-realm"},"Environment .realm"),(0,a.kt)("p",null,"Realm defines several ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/environment"},"environment")," variables in SwiftUI, we've already used one in this preview:"),(0,a.kt)("p",null,"To use this data we change the preview in ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigView.swift"),". We can call ",(0,a.kt)("inlineCode",{parentName:"p"},"realmWithData")," as it's a ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," member of ",(0,a.kt)("inlineCode",{parentName:"p"},"PreviewProvider")," now."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='ConfigView.swift'",title:"'ConfigView.swift'"},"struct ConfigView_Previews: PreviewProvider {\n    static var previews: some View {\n        let realm =  realmWithData()\n        return ConfigView(habits: realm.objects(Habits.self).first!)\n            .environment(\\.realm, realm)\n    }\n}\n")),(0,a.kt)("p",null,"The default Realm is created by the Realm SDK and we can access it using the path ",(0,a.kt)("inlineCode",{parentName:"p"},"\\.realm"),", but we can inject a new realm to other views down our hierarchy using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},".environment(\\.realm, realm)\n")),(0,a.kt)("h2",{id:"environment-realmconfig"},"Environment .realmConfig"),(0,a.kt)("p",null,"We can also change the default Realm Config and inject it using the environment with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},".environment(\\.realmConfig, realmConfig)\n")))}u.isMDXComponent=!0}}]);