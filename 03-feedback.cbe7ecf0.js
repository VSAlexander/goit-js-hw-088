function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var r=n("kEUo3");const l=document.querySelector(".feedback-form"),s=document.querySelector('[name="email"]'),f=document.querySelector('[name="message"]');!function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);s.value=t.email,f.value=t.message}}(),l.addEventListener("input",e(r).throttle((e=>{e.preventDefault(),function(e){const t={email:l.elements.email.value,message:l.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}()}),500)),l.addEventListener("submit",(e=>{e.preventDefault();const t=localStorage.getItem("feedback-form-state"),o=JSON.parse(t);console.log(o),l.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.cbe7ecf0.js.map