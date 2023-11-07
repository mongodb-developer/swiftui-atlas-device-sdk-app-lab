"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[3608],{3313:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=i(5893),t=i(1151);const a={},s="Realm Environment Variables",l={id:"realm-previews-extension/realm-environment-variables",title:"Realm Environment Variables",description:"Environment .realm",source:"@site/docs/6-realm-previews-extension/2-realm-environment-variables.mdx",sourceDirName:"6-realm-previews-extension",slug:"/realm-previews-extension/realm-environment-variables",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/realm-previews-extension/realm-environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/swiftui-atlas-device-sdk-app-lab/blob/main/docs/6-realm-previews-extension/2-realm-environment-variables.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Realm+Previews extension",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/realm-previews-extension/realm-previews-extension"},next:{title:"Improve the Habit Cell",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/category/improve-the-habit-cell"}},o={},c=[{value:"Environment .realm",id:"environment-realm",level:2},{value:"Environment .realmConfig",id:"environment-realmconfig",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"realm-environment-variables",children:"Realm Environment Variables"}),"\n",(0,r.jsx)(n.h2,{id:"environment-realm",children:"Environment .realm"}),"\n",(0,r.jsxs)(n.p,{children:["Atlas Device SDK defines several ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/documentation/swiftui/environment",children:"environment"})," variables in SwiftUI, we've already used one in this preview:"]}),"\n",(0,r.jsxs)(n.p,{children:["To use this data we change the preview in ",(0,r.jsx)(n.code,{children:"ConfigView.swift"}),". We can call ",(0,r.jsx)(n.code,{children:"realmWithData"})," as it's a ",(0,r.jsx)(n.code,{children:"static"})," member of ",(0,r.jsx)(n.code,{children:"PreviewProvider"})," now."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",metastring:"title='ConfigView.swift'",children:"struct ConfigView_Previews: PreviewProvider {\n    static var previews: some View {\n        let realm =  realmWithData()\n        return ConfigView(habits: realm.objects(Habits.self).first!)\n            .environment(\\.realm, realm)\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default Realm is created by the Atlas Device SDK and we can access it using the path ",(0,r.jsx)(n.code,{children:"\\.realm"}),", but we can inject a new realm to other views down our hierarchy using:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:".environment(\\.realm, realm)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"environment-realmconfig",children:"Environment .realmConfig"}),"\n",(0,r.jsx)(n.p,{children:"We can also change the default Realm Config and inject it using the environment with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:".environment(\\.realmConfig, realmConfig)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var r=i(7294);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);