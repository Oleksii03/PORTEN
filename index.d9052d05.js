const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),l=document.querySelector("[data-menu]"),o=document.querySelector("[data-backdrop]");function c(){document.body.classList.toggle("to-freeze"),l.classList.toggle("is-hidden"),o.classList.toggle("backdrop--hidden")}e.addEventListener("click",c),t.addEventListener("click",c);const n=document.querySelector(".js-clocks-list"),s=document.querySelectorAll(".js-clocks-list > li"),i=document.querySelector(".js-wrap-list"),d=document.querySelector(".js-total"),r=document.querySelector(".js-count"),a=document.querySelector(".clocks-list__btn-prev"),u=document.querySelector(".clocks-list__btn-next");let y=0,g=1,m=0;const b=s.length-1;d.textContent=b;new ResizeObserver(((e,t)=>{e.forEach((e=>{const t=e.borderBoxSize[0].inlineSize;if(y=0,m=t<750?n.scrollWidth/s.length:n.scrollWidth/(s.length-1),n.style.left="0px",g=1,g<=1)return a.disabled=!0,a.style.opacity=.3,u.disabled=!1,u.style.opacity=1,void(r.textContent=g)}))})).observe(i),r.textContent=g,u.addEventListener("click",(function(e){return g+=1,y+=m,n.style.left=-y+"px",r.textContent=g,console.log(g),g>=s.length-1?(u.disabled=!0,void(u.style.opacity=.3)):(a.disabled=!1,void(a.style.opacity=1))})),a.addEventListener("click",(function(e){return g-=1,y-=m,n.style.left=-y+"px",r.textContent=g,g<=1?(a.disabled=!0,void(a.style.opacity=.3)):(u.disabled=!1,void(u.style.opacity=1))}));document.querySelector(".js-accordion").addEventListener("click",(function(e){if(!e.target.classList.contains("label"))return;let t=e.target.closest(".box"),l=e.target.nextElementSibling;t.classList.toggle("active"),t.classList.contains("active")?l.style.maxHeight=l.scrollHeight+"px":l.style.maxHeight=0}));
//# sourceMappingURL=index.d9052d05.js.map