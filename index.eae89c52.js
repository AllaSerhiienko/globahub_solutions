window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});const e=document.querySelector(".phone__screen");function n(){e.classList.add("phone__screen--show")}window.addEventListener("scroll",()=>{let o=e.getBoundingClientRect().top,t=window.innerHeight;o+100<t&&(console.log(o,t),n(),window.removeEventListener("scroll",n))});//# sourceMappingURL=index.eae89c52.js.map

//# sourceMappingURL=index.eae89c52.js.map
