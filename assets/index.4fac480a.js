import{d as e,r as t,p as o,a as n,o as r,c as a,b as s,t as c,e as i,f as d,g as u,h as l,i as m,j as p,k as v,l as f,m as h}from"./vendor.e0dd942d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var g=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:t(0)})});o("data-v-00c00c09");const y=i('<p data-v-00c00c09> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-00c00c09>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-00c00c09> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-00c00c09>Volar</a> (if using <code data-v-00c00c09>&lt;script setup&gt;</code>) </p><p data-v-00c00c09>See <code data-v-00c00c09>README.md</code> for more information.</p><p data-v-00c00c09><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-00c00c09> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-00c00c09>Vue 3 Docs</a></p>',3),_=s("p",null,[d(" Edit "),s("code",null,"components/HelloWorld.vue"),d(" to test hot module replacement. ")],-1);n(),g.render=function(e,t,o,n,i,d){return r(),a("div",null,[s("h1",null,c(e.msg),1),y,s("button",{type:"button",onClick:t[0]||(t[0]=t=>e.count++)},"count is: "+c(e.count),1),_])},g.__scopeId="data-v-00c00c09";var b=e({name:"App",components:{HelloWorld:g},setup(){}});const k=s("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);b.render=function(e,t,o,n,s,c){const i=u("HelloWorld");return r(),a("div",null,[k,l(i,{msg:"Hello Vue 3 + TypeScript + Vite"})])};const V={};var E=e({name:"Home",setup:()=>({count:t(0)})});E.render=function(e,t,o,n,s,i){return r(),a("div",null,"首页：：："+c(e.count),1)},E.__scopeId="data-v-0be20e46";var x=e({name:"Vuex",setup:()=>({count:t(0)})});x.render=function(e,t,o,n,s,i){return r(),a("div",null,"Vuex：：："+c(e.count),1)},x.__scopeId="data-v-04f81321";const H=[{path:"/",name:"Home",component:E},{path:"/vuex",name:"Vuex",component:x},{path:"/axios",name:"Axios",component:()=>{return e=()=>import("./axios.d3872eaf.js"),(t=["assets/axios.d3872eaf.js","assets/axios.8f416a81.css","assets/vendor.e0dd942d.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in V)return;V[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}}],L=m({history:p(),routes:H}),j={count:0};var I=v({state:()=>j,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});f(b).use(h).use(I).use(L).mount("#app");