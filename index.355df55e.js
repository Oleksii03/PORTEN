const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),c=document.querySelector("[data-menu]"),o=document.querySelector("[data-backdrop]");function n(){document.body.classList.toggle("to-freeze"),c.classList.toggle("is-hidden"),o.classList.toggle("backdrop--hidden")}e.addEventListener("click",n),t.addEventListener("click",n);const l=document.querySelector(".js-clocks-list"),d=document.querySelectorAll(".js-clocks-list > li"),s=document.querySelector(".js-total"),r=document.querySelector(".js-count"),i=document.querySelector(".clocks-list__btn-prev"),u=document.querySelector(".clocks-list__btn-next"),a=d.length;s.textContent=a;let y=0,m=1;r.textContent=m,u.addEventListener("click",(function(e){return m+=1,y+=282,l.style.left=-y+"px",r.textContent=m,m>=a?(e.currentTarget.disabled=!0,void(e.currentTarget.style.opacity=.3)):(i.disabled=!1,void(i.style.opacity=1))})),i.addEventListener("click",(function(e){return m-=1,y-=282,l.style.left=-y+"px",r.textContent=m,m<=1?(i.disabled=!0,void(i.style.opacity=.3)):(u.disabled=!1,void(u.style.opacity=1))}));
//# sourceMappingURL=index.355df55e.js.map
