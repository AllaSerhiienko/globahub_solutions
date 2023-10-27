window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});const e=document.querySelector(".phone__screen");function n(){let o=e.getBoundingClientRect().top,t=window.innerHeight;o+80<t&&(e.classList.add("phone__screen--show"),window.removeEventListener("scroll",n))}window.addEventListener("load",n),window.addEventListener("scroll",n);//# sourceMappingURL=index.68f8c1a1.js.map

//# sourceMappingURL=index.68f8c1a1.js.map
