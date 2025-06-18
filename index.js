import{S as f,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function d(a,o){const s=new URLSearchParams({key:o,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=await fetch(`https://pixabay.com/api/?${s}`);if(!t.ok)throw new Error(t.status);return await t.json()}function m(a){const o=document.querySelector(".gallery"),s=a.hits.map(t=>`
        <li class="photo-card">
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
        </li>
      `).join("");o.insertAdjacentHTML("beforeend",s),u.refresh()}const y=document.getElementById("search-form"),i=document.getElementById("searchQuery"),c=document.querySelector(".loader"),p=document.querySelector(".gallery"),g="33649719-b7fecbfe979c6e7e0b54f5aa7",u=new f(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",async a=>{a.preventDefault();const o=i.value.trim();if(!o){i.value="";return}i.value="",p.innerHTML="",c.style.display="block";try{const s=await d(o,g);if(s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(s),u.refresh()}catch(s){console.error(s),l.error({message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
