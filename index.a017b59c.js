//menu
window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});//animation
const e=document.querySelector(".phone__screen");function t(){let o=e.getBoundingClientRect().top,l=window.innerHeight;o+80<l&&(e.classList.add("phone__screen--show"),window.removeEventListener("scroll",t))}window.addEventListener("load",t),window.addEventListener("scroll",t);// SPOLLERS
const o=document.querySelectorAll("[data-spollers]");if(o.length>0){// Получение обычных слойлеров
let e=Array.from(o).filter(function(e,t,o){return!e.dataset.spollers.split(",")[0]});// Инициализация обычных слойлеров
e.length>0&&l(e);// Получение слойлеров с медиа запросами
let t=Array.from(o).filter(function(e,t,o){return e.dataset.spollers.split(",")[0]});// Инициализация слойлеров с медиа запросами
if(t.length>0){let e=[];t.forEach(t=>{let o=t.dataset.spollers,l={},i=o.split(",");l.value=i[0],l.type=i[1]?i[1].trim():"max",l.item=t,e.push(l)});// Получаем уникальные брейкпоинты
let o=e.map(function(e){return"("+e.type+"-width: "+e.value+"px),"+e.value+","+e.type});// Работаем с каждым брейкпоинтом
(o=o.filter(function(e,t,o){return o.indexOf(e)===t})).forEach(t=>{let o=t.split(","),i=o[1],s=o[2],r=window.matchMedia(o[0]),n=e.filter(function(e){if(e.value===i&&e.type===s)return!0});// Событие
r.addListener(function(){l(n,r)}),l(n,r)})}// Инициализация
function l(e,t=!1){e.forEach(e=>{e=t?e.item:e,t.matches||!t?(e.classList.add("spoller-block--init"),i(e),e.addEventListener("click",s)):(e.classList.remove("spoller-block--init"),i(e,!1),e.removeEventListener("click",s))})}// Работа с контентом
function i(e,t=!0){let o=e.querySelectorAll("[data-spoller]");o.length>0&&o.forEach(e=>{t?(e.removeAttribute("tabindex"),e.classList.contains("spoller-block__title--active")||(e.nextElementSibling.hidden=!0)):(e.setAttribute("tabindex","-1"),e.nextElementSibling.hidden=!1)})}function s(e){let t=e.target;if(t.hasAttribute("data-spoller")||t.closest("[data-spoller]")){let o=t.hasAttribute("data-spoller")?t:t.closest("[data-spoller]"),l=o.closest("[data-spollers]"),i=!!l.hasAttribute("data-one-spoller");l.querySelectorAll("._slide").length||(i&&!o.classList.contains("spoller-block__title--active")&&function(e){let t=e.querySelector("[data-spoller].spoller-block__title--active");t&&(t.classList.remove("spoller-block__title--active"),r(t.nextElementSibling,500))}(l),o.classList.toggle("spoller-block__title--active"),a(o.nextElementSibling,500)),e.preventDefault()}}}//========================================================================================================================================================
//SlideToggle
let r=(e,t=500)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.hidden=!0,e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")},t))},n=(e,t=500)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden&&(e.hidden=!1);let o=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=o+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")},t)}},a=(e,t=500)=>e.hidden?n(e,t):r(e,t)//========================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например:
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/;//# sourceMappingURL=index.a017b59c.js.map

//# sourceMappingURL=index.a017b59c.js.map
