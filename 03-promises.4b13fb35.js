const e={form:document.querySelector("form")};function t(e,t){const i=Math.random()>.3;return new Promise(((o,l)=>{setTimeout((()=>{i?o({position:e,delay:t}):l({position:e,delay:t})}),t)}))}e.form.addEventListener("submit",(i=>{i.preventDefault();let{delay:o,step:l,amount:r}=i.target.elements;if(o=Number(o.value),l=Number(l.value),r=Number(r.value),r<=0||o<0||l<0)Notiflix.Notify.failure(" Please input correct values (>=0)");else{for(let e=0;e<r;e+=1)t(e,o).then((({position:e,delay:t})=>{Notiflix.Notify.success(` Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{Notiflix.Notify.failure(` Rejected promise ${e} in ${t}ms`)})),o+=l;e.form.reset()}}));
//# sourceMappingURL=03-promises.4b13fb35.js.map