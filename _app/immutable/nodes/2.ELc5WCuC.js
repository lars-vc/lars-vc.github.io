import{s as G,f as M,n as y}from"../chunks/scheduler.KIPEeUFd.js";import{S as J,i as S,e as D,s as b,b as x,c as E,d as R,h as k,f as A,g as v,p as u,j as B,k as d,z as X,l as F,m as w,o as K,n as I,q as L,t as j,a as T,r as z}from"../chunks/index.dkx7n8D3.js";import{T as O}from"../chunks/Taskbar.BL6CjBYM.js";import{g as N}from"../chunks/entry.CB8wXk9d.js";const Q=""+new URL("../assets/github.DkTr3Tul.png",import.meta.url).href,W=""+new URL("../assets/unicycle.Cj4eI0nu.png",import.meta.url).href,P=""+new URL("../assets/template.CNitJVN_.jpg",import.meta.url).href,Y=""+new URL("../assets/CuteBeaver.BCJ0ejtn.png",import.meta.url).href;function Z(m){let e,a,o,s,t,r,l,f;return{c(){e=D("div"),a=D("img"),s=b(),t=D("b"),r=x(m[0]),this.h()},l(c){e=E(c,"DIV",{id:!0,class:!0});var i=R(e);a=E(i,"IMG",{id:!0,src:!0,class:!0}),s=k(i),t=E(i,"B",{});var C=R(t);r=A(C,m[0]),C.forEach(v),i.forEach(v),this.h()},h(){u(a,"id","icon-img"),M(a.src,o=m[1])||u(a,"src",o),u(a,"class","svelte-18806rv"),u(e,"id","icon-div"),u(e,"class","svelte-18806rv")},m(c,i){B(c,e,i),d(e,a),d(e,s),d(e,t),d(t,r),l||(f=X(e,"click",m[2]),l=!0)},p(c,[i]){i&2&&!M(a.src,o=c[1])&&u(a,"src",o),i&1&&F(r,c[0])},i:y,o:y,d(c){c&&v(e),l=!1,f()}}}function ee(m,e,a){let{name:o}=e,{imageurl:s}=e,{onIconClicked:t}=e;function r(){t()}return m.$$set=l=>{"name"in l&&a(0,o=l.name),"imageurl"in l&&a(1,s=l.imageurl),"onIconClicked"in l&&a(3,t=l.onIconClicked)},[o,s,r,t]}class H extends J{constructor(e){super(),S(this,e,ee,Z,G,{name:0,imageurl:1,onIconClicked:3})}}function te(m){let e,a='<title class="svelte-1avzh1w">Lars-vc XP</title>',o,s,t,r,l,f,c,i,C,$,U,p,q,_,V;return r=new H({props:{name:"GitHub",imageurl:Q,onIconClicked:ne}}),f=new H({props:{name:"Projects",imageurl:P}}),i=new H({props:{name:"NeoVim",imageurl:P}}),$=new H({props:{name:"Hobbies",imageurl:W,onIconClicked:m[0]}}),p=new H({props:{name:"Beavers",imageurl:Y,onIconClicked:m[1]}}),_=new O({}),{c(){e=D("head"),e.innerHTML=a,o=b(),s=D("div"),t=D("div"),w(r.$$.fragment),l=b(),w(f.$$.fragment),c=b(),w(i.$$.fragment),C=b(),w($.$$.fragment),U=b(),w(p.$$.fragment),q=b(),w(_.$$.fragment),this.h()},l(n){e=E(n,"HEAD",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-5immej"&&(e.innerHTML=a),o=k(n),s=E(n,"DIV",{id:!0,class:!0});var h=R(s);t=E(h,"DIV",{id:!0,class:!0});var g=R(t);I(r.$$.fragment,g),l=k(g),I(f.$$.fragment,g),c=k(g),I(i.$$.fragment,g),C=k(g),I($.$$.fragment,g),U=k(g),I(p.$$.fragment,g),g.forEach(v),q=k(h),I(_.$$.fragment,h),h.forEach(v),this.h()},h(){u(e,"class","svelte-1avzh1w"),u(t,"id","desktop"),u(t,"class","svelte-1avzh1w"),u(s,"id","main-div"),u(s,"class","svelte-1avzh1w")},m(n,h){B(n,e,h),B(n,o,h),B(n,s,h),d(s,t),L(r,t,null),d(t,l),L(f,t,null),d(t,c),L(i,t,null),d(t,C),L($,t,null),d(t,U),L(p,t,null),d(s,q),L(_,s,null),V=!0},p:y,i(n){V||(j(r.$$.fragment,n),j(f.$$.fragment,n),j(i.$$.fragment,n),j($.$$.fragment,n),j(p.$$.fragment,n),j(_.$$.fragment,n),V=!0)},o(n){T(r.$$.fragment,n),T(f.$$.fragment,n),T(i.$$.fragment,n),T($.$$.fragment,n),T(p.$$.fragment,n),T(_.$$.fragment,n),V=!1},d(n){n&&(v(e),v(o),v(s)),z(r),z(f),z(i),z($),z(p),z(_)}}}function ne(){window.open("https://github.com/lars-vc","_blank")}function ae(m){function e(){N("/hobbies")}function a(){N("/beavers")}return[e,a]}class me extends J{constructor(e){super(),S(this,e,ae,te,G,{})}}export{me as component};