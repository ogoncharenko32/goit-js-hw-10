import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */import{i}from"./assets/vendor-77e16229.js";const c=document.querySelector("form input");let o;c.addEventListener("input",t=>{o=+t.currentTarget.value});const l=document.querySelectorAll('input[name="state"]');let n;l.forEach(function(t){t.addEventListener("change",function(){n=document.querySelector('input[name="state"]:checked').value})});const m=document.querySelector("form"),s=({value:t,delayTime:e,shouldResolve:r=!0})=>new Promise((a,u)=>{setTimeout(()=>{r?a(t):u(t)},e)}),d=document.querySelector("button");d.addEventListener("click",t=>{t.preventDefault(),n&&o?n=="fulfilled"?s({value:`✅ Fulfilled promise in ${o}ms`,delayTime:o}).then(e=>i.show({message:e,color:"green",position:"topRight",timeout:2500})).catch(e=>i.show({message:e,color:"red",position:"topRight",timeout:2500})):s({value:`❌ Rejected promise in ${o}ms`,delayTime:o,shouldResolve:!1}).then(e=>i.show({message:e,color:"green",position:"topRight",timeout:2500})).catch(e=>i.show({message:e,color:"red",position:"topRight",timeout:2500})):i.show({title:"Caution",message:"You forgot important data",position:"topRight",timeout:2500}),m.reset(),n="",o=void 0});
//# sourceMappingURL=commonHelpers2.js.map
