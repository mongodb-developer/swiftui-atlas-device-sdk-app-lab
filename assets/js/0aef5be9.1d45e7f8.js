"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[5364],{4137:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(i),g=a,f=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return i?n.createElement(f,o(o({ref:t},m),{},{components:i})):n.createElement(f,o({ref:t},m))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},6612:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=i(7462),a=(i(7294),i(4137));const r={},o="Bypassing the Migration",p={unversionedId:"migrating-schema/bypassing-migration",id:"migrating-schema/bypassing-migration",title:"Bypassing the Migration",description:"Simplest way to bypass the Migration",source:"@site/docs/12-migrating-schema/2-bypassing-migration.mdx",sourceDirName:"12-migrating-schema",slug:"/migrating-schema/bypassing-migration",permalink:"/swiftui-realm-app-workshop/docs/migrating-schema/bypassing-migration",draft:!1,editUrl:"https://github.com/mongodb-developer/swiftui-realm-app-workshop/blob/main/docs/12-migrating-schema/2-bypassing-migration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Changing the Schema",permalink:"/swiftui-realm-app-workshop/docs/migrating-schema/changing-schema"},next:{title:"Migrating the Realm Schema",permalink:"/swiftui-realm-app-workshop/docs/migrating-schema/doing-migration"}},l={},s=[{value:"Simplest way to bypass the Migration",id:"simplest-way-to-bypass-the-migration",level:2},{value:"Add the RealmSwift import",id:"add-the-realmswift-import",level:2},{value:"Get default config and set <code>deleteRealmIfMigrationNeeded</code>",id:"get-default-config-and-set-deleterealmifmigrationneeded",level:2},{value:"Complete listing",id:"complete-listing",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bypassing-the-migration"},"Bypassing the Migration"),(0,a.kt)("h2",{id:"simplest-way-to-bypass-the-migration"},"Simplest way to bypass the Migration"),(0,a.kt)("p",null,"We can drop the database each time we make a change in the schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteRealmIfMigrationNeeded"),". This is a quick way to bypass the migration while in development but we should ",(0,a.kt)("strong",{parentName:"p"},"never ship an app using this"),"."),(0,a.kt)("h2",{id:"add-the-realmswift-import"},"Add the RealmSwift import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='GoodHabitsRealmAppApp.swift'",title:"'GoodHabitsRealmAppApp.swift'"},"import RealmSwift\n")),(0,a.kt)("p",null,"This will create a problem, as both SwiftUI and RealmSwift have an ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," type. To fix this, we'll add ",(0,a.kt)("inlineCode",{parentName:"p"},"SwiftUI")," to our app like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='GoodHabitsRealmAppApp.swift'",title:"'GoodHabitsRealmAppApp.swift'"},"struct GoodHabitsRealmAppApp: SwiftUI.App {\n")),(0,a.kt)("h2",{id:"get-default-config-and-set-deleterealmifmigrationneeded"},"Get default config and set ",(0,a.kt)("inlineCode",{parentName:"h2"},"deleteRealmIfMigrationNeeded")),(0,a.kt)("p",null,"Here we just change the config for ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," builds. This way we avoid shipping this code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='GoodHabitsRealmAppApp.swift'",title:"'GoodHabitsRealmAppApp.swift'"},"// ...\nstruct GoodHabitsRealmAppApp: SwiftUI.App {\n    var config = Realm.Configuration.defaultConfiguration\n\n    init() {\n        #if DEBUG\n        config.deleteRealmIfMigrationNeeded = true\n        #endif\n    }\n\n    // ...\n}\n")),(0,a.kt)("h2",{id:"complete-listing"},"Complete listing"),(0,a.kt)("p",null,"Our new ",(0,a.kt)("inlineCode",{parentName:"p"},"GoodHabitsRealmAppApp")," look like this. Now we can change our schema without getting errors, but we'll lose any changes in the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='GoodHabitsRealmAppApp.swift'",title:"'GoodHabitsRealmAppApp.swift'"},"import SwiftUI\nimport RealmSwift\n\n@main\nstruct GoodHabitsRealmAppApp: SwiftUI.App {\n    var config = Realm.Configuration.defaultConfiguration\n\n    init() {\n        #if DEBUG\n        config.deleteRealmIfMigrationNeeded = true\n        #endif\n    }\n\n    var body: some Scene {\n        WindowGroup {\n            MainView()\n                .environment(\\.realmConfiguration, config)\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);