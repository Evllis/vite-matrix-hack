import{d as a,i as s,j as n,k as r,n as o,o as t}from"./vendor-e90682a1.js";const i=a({props:{iconClass:{type:String,required:!0},className:{type:String,default:""},color:{type:String,default:"#889aa4"}},setup(e){return{iconName:s(()=>`#icon-${e.iconClass}`),svgClass:s(()=>e.className?`svg-icon ${e.className}`:"svg-icon")}}}),l=["xlink:href","fill"];function c(e,u,d,_,f,p){return t(),n("svg",{class:o(e.svgClass),"aria-hidden":"true"},[r("use",{"xlink:href":e.iconName,fill:e.color},null,8,l)],2)}i.render=c;export{i as default};
