(()=>{"use strict";var e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{GS:()=>o,lh:()=>c,Tz:()=>d});const t=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menu-page");const n=document.createElement("div");n.classList.add("site-info");const s=document.createElement("div");s.classList.add("tabs");const a=document.createElement("button");a.classList.add("button-tab"),a.textContent="Home",a.addEventListener("click",(()=>{c()}));const i=document.createElement("button");i.classList.add("button-tab"),i.textContent="Menu",i.addEventListener("click",(()=>{d()}));const l=document.createElement("button");l.classList.add("button-tab"),l.textContent="Contact",l.addEventListener("click",(()=>{o()})),s.appendChild(a),s.appendChild(i),s.appendChild(l),n.appendChild(s);const p=document.createElement("div");p.classList.add("food-options"),p.innerHTML='\n        <div class="food-item">\n            <h2 class="food-name">Pikachu Burger</h2>\n            <img class="food-image" src="https://img.huffingtonpost.com/asset/5b9e35c72100003100c5d420.jpeg?ops=scalefit_720_noupscale">\n            <p class=description>This is a burger designed to look like pikachu, it is accompanied by tortilla chips and a salsa dip</p>\n            <p class="price">Price: $12.00<p>\n        </div>\n        <div class="food-item">\n            <h2 class="food-name">Snorlax Plate</h2>\n            <img class="food-image" src="https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2019/08/b6bb41e5924867b5fcd56e3bc1aa108e.jpg">\n            <p class=description>This is a lunch meal that comes with rice, meat, and an assortment of veggies</p>\n            <p class="price">Price: $15.00<p>\n        </div>\n        <div class="food-item">\n            <h2 class="food-name">Pokémon Latte</h2>\n            <img class="food-image" src="https://soranews24.com/wp-content/uploads/sites/3/2022/01/pokemon-cafe8.jpg">\n            <p class=description>Order custom lattes with the design of any pokemon you wish!</p>\n            <p class="price">Price: $10.00<p>\n        </div>\n        <div class="food-item">\n            <h2 class="food-name">Eevee\'s Royal Milk Tea</h2>\n            <img class="food-image" src="https://pbs.twimg.com/media/E2c1kijVEAEyHnQ.jpg">\n            <p class=description>An Eevee themed royal milk tea!</p>\n            <p class="price">Price: $8.00<p>\n        </div>\n    ',n.appendChild(p),t.appendChild(n);const m=document.createElement("div");m.classList.add("picture"),t.appendChild(m),e.appendChild(t)},n=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contact-page");const n=document.createElement("div");n.classList.add("site-info");const s=document.createElement("div");s.classList.add("tabs");const a=document.createElement("button");a.classList.add("button-tab"),a.textContent="Home",a.addEventListener("click",(()=>{c()}));const i=document.createElement("button");i.classList.add("button-tab"),i.textContent="Menu",i.addEventListener("click",(()=>{d()}));const l=document.createElement("button");l.classList.add("button-tab"),l.textContent="Contact",l.addEventListener("click",(()=>{o()})),s.appendChild(a),s.appendChild(i),s.appendChild(l),n.appendChild(s),t.appendChild(n);const p=document.createElement("div");p.classList.add("picture"),t.appendChild(p),e.appendChild(t)},s=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("home-page");const n=document.createElement("div");n.classList.add("site-info");const s=document.createElement("div");s.classList.add("tabs");const a=document.createElement("button");a.classList.add("button-tab"),a.textContent="Home",a.addEventListener("click",(()=>{c()}));const i=document.createElement("button");i.classList.add("button-tab"),i.textContent="Menu",i.addEventListener("click",(()=>{d()}));const l=document.createElement("button");l.classList.add("button-tab"),l.textContent="Contact",l.addEventListener("click",(()=>{o()})),s.appendChild(a),s.appendChild(i),s.appendChild(l),n.appendChild(s);const p=document.createElement("h1");p.classList.add("restaurant-name"),p.textContent="Rowlet Tree Cafe";const m=document.createElement("p");m.classList.add("comments"),m.textContent="Eat delicious Pokémon themed food!",n.appendChild(p),n.appendChild(m);const r=document.createElement("div");r.classList.add("hours"),r.innerHTML='\n        <h2 class="hour-title">Hours</h2>\n        <p class="time">Sunday: 10:00 AM to 10:00 PM </p>\n        <p class="time">Monday: 10:00 AM to 8:00 PM </p>\n        <p class="time">Tuesday: 10:00 AM to 8:00 PM </p>\n        <p class="time">Wednesday: 10:00 AM to 8:00 PM </p>\n        <p class="time">Thursday: 10:00 AM to 8:00 PM </p>\n        <p class="time">Friday: 10:00 AM to 10:00 PM </p>\n        <p class="time">Saturday: 10:00 AM to 10:00 PM </p>\n        ',n.appendChild(r),t.appendChild(n);const u=document.createElement("div");u.classList.add("picture"),t.appendChild(u),e.appendChild(t)},a=document.querySelector("#content");function c(){a.replaceChildren(),s()}function d(){a.replaceChildren(),t()}function o(){a.replaceChildren(),n()}c()})();