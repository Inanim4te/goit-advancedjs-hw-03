import{i as l,S as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function u(s){const o=document.querySelector(".gallery"),a=s.hits.map(t=>`
        <div class="photo-card">
          <a href="${t.largeImageURL}">
            <img 
              src="${t.webformatURL}" 
              alt="${t.tags}" 
              loading="lazy" 
              class="photo-card-img"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> ${t.likes}
            </p>
            <p class="info-item">
              <b>Views</b> ${t.views}
            </p>
            <p class="info-item">
              <b>Comments</b> ${t.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b> ${t.downloads}
            </p>
          </div>
        </div>
      `).join("");o.insertAdjacentHTML("beforeend",a),y.refresh()}const d="33649719-b7fecbfe979c6e7e0b54f5aa7";function f(){const s=document.querySelector(".gallery"),o=document.querySelector(".loader"),a=document.getElementById("searchQuery");s.innerHTML="",o.style.display="block";const t=a.value;a.value="";const e=encodeURIComponent(t),i=new URLSearchParams({key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString();fetch(`https://pixabay.com/api/?${i}`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{if(n.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}u(n)}).catch(n=>console.log(n)).finally(()=>{o.style.display="none"})}const m=document.getElementById("search-form"),y=new c(".gallery a",{captionsData:"alt",captionDelay:"250"});m.addEventListener("submit",s=>{s.preventDefault(),f()});
//# sourceMappingURL=index.js.map
