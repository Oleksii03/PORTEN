!function(){const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),c=document.querySelector("[data-menu]"),n=document.querySelector("[data-backdrop]");function o(){document.body.classList.toggle("to-freeze"),c.classList.toggle("is-hidden"),n.classList.toggle("backdrop--hidden")}e.addEventListener("click",o),t.addEventListener("click",o);const l=document.querySelector(".js-clocks-list"),r=document.querySelectorAll(".js-clocks-list > li"),d=document.querySelector(".js-total"),s=document.querySelector(".js-count"),u=r.length;d.textContent=u;let i=0,a=1;s.textContent=a,document.querySelector(".clocks-list__btn-next").addEventListener("click",(e=>{if(a>=u)return e.currentTarget.disabled=!0,void(e.currentTarget.style.opacity=.3);a+=1,i+=282,l.style.left=-i+"px",s.textContent=a})),document.querySelector(".clocks-list__btn-prev").addEventListener("click",(e=>{a-=1,i-=282,l.style.left=-i+"px",s.textContent=a}))}();
//# sourceMappingURL=index.0f3e7a50.js.map
