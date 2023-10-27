window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});const e=document.querySelector(".phone__screen");function n(){e.classList.add("show")}window.addEventListener("scroll",()=>{let o=e.getBoundingClientRect().top,t=window.innerHeight;o<t&&(n(),// Видаляємо обробник події після анімації, якщо потрібно виконати її тільки один раз
window.removeEventListener("scroll",n))}),// Якщо елемент початково в області видимості, викликаємо анімацію відразу
n();//# sourceMappingURL=index.26edfddf.js.map

//# sourceMappingURL=index.26edfddf.js.map
