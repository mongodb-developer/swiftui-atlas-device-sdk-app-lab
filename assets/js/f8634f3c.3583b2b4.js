"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[9742],{7736:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>r});var n=i(5893),s=i(1151);const d={},o="Edit, delete and move buttons",a={id:"edit-delete-move-habits-list/edit-delete-move-habits",title:"Edit, delete and move buttons",description:"Edit button",source:"@site/docs/8-edit-delete-move-habits-list/1-edit-delete-move-habits.mdx",sourceDirName:"8-edit-delete-move-habits-list",slug:"/edit-delete-move-habits-list/edit-delete-move-habits",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/edit-delete-move-habits-list/edit-delete-move-habits",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/swiftui-atlas-device-sdk-app-lab/blob/main/docs/8-edit-delete-move-habits-list/1-edit-delete-move-habits.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Edit, Delete and Move your Habits in a List",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/category/edit-delete-and-move-your-habits-in-a-list"},next:{title:"Habit Detail View",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/category/habit-detail-view"}},l={},r=[{value:"Edit button",id:"edit-button",level:2},{value:"Move and delete buttons",id:"move-and-delete-buttons",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"edit-delete-and-move-buttons",children:"Edit, delete and move buttons"}),"\n",(0,n.jsx)(t.h2,{id:"edit-button",children:"Edit button"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["we'll add an Edit Button to the ",(0,n.jsx)(t.code,{children:"ConfigView"}),". This way the List will enter Edit mode to delete / move rows. When we move or delete a row, this will be reflected in Realm."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",metastring:"title='ConfigView.swift'",children:"    List {\n        /// same code\n    }\n    .navigationBarItems(trailing: EditButton())\n"})}),"\n",(0,n.jsx)(t.h2,{id:"move-and-delete-buttons",children:"Move and delete buttons"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["we add to ",(0,n.jsx)(t.code,{children:"ForEach"})," these two lines:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",metastring:"title='ConfigView.swift'",children:".onDelete(perform: $habits.habits.remove)\n.onMove(perform: $habits.habits.move)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we can swipe the cell and get a working delete button that'll call ",(0,n.jsx)(t.code,{children:"$habits.habits.remove"}),", removing this object from the Realm when we remove the row from the list."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(5927).Z+"",width:"456",height:"256"})}),"\n",(0,n.jsxs)(t.p,{children:["We can also enter Edit mode and move cells around thanks to ",(0,n.jsx)(t.code,{children:"$habits.habits.move"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(2673).Z+"",width:"600",height:"1121"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5927:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/delete-eee4fed45eea9af736e0e042638d6b52.png"},2673:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/move-36e552244f755e29c0c4d35159b31dfb.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var n=i(7294);const s={},d=n.createContext(s);function o(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);