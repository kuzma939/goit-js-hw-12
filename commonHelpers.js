import{a as w,S as L,i as l}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function g(r,t){const s="https://pixabay.com/api/",i="43257905-28a3b58ba6106b31a5e4f67d7",e=new URLSearchParams({key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}),{data:o}=await w(`${s}?${e}`);return o}const p=document.querySelector(".gallery-nav");function m(r){const t=r.hits.map(({webformatURL:i,largeImageURL:e,tags:o,likes:n,views:y,comments:f,downloads:b})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e}">
        <img 
        class="gallery-image"
        src="${i}"
        alt="${o}"/>
        <div class="image-information">
        <p>Likes: ${n}</p>
        <p>Views: ${y}</p>
        <p>Comments: ${f}</p>
        <p>Downloads: ${b}</p>
        </div>
        </a>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),new L(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}const a=document.querySelector(".loader"),C=document.querySelector(".input-field"),d=document.querySelector(".load-more");d.addEventListener("click",v);C.addEventListener("submit",S);let h,u,c;d.classList.add("hidden");a.classList.replace("loader","hidden");async function S(r){if(r.preventDefault(),p.innerHTML="",a.classList.replace("hidden","loader"),u=r.target.elements.designation.value.trim(),c=1,u===""){a.classList.replace("loader","hidden"),l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"bottomCenter",iconColor:"white"});return}try{const t=await g(c,u);if(t.totalHits===0){a.classList.replace("loader","hidden"),l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"bottomCenter",iconColor:"white"});return}else if(t.totalHits<15){a.classList.replace("loader","hidden"),d.classList.replace("visible","hidden"),l.show({message:"We`re sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"green",position:"bottomCenter",iconColor:"white"}),m(t),r.target.reset();return}l.success({iconColor:"yellow",message:"Enjoy watching!",position:"topRight",backgroundColor:"blue",messageColor:"yellow"}),m(t)}catch{l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"bottomCenter",iconColor:"white"})}r.target.reset(),d.classList.replace("hidden","visible"),a.classList.replace("loader","hidden")}async function v(){c+=1;try{const s=await g(c,u);h=Math.ceil(s.totalHits/15),console.log(s),m(s),a.classList.replace("hidden","loader"),c>=h&&(a.classList.replace("loader","hidden"),d.classList.replace("visible","hidden"),l.show({message:"We`re sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"green",position:"bottomCenter",iconColor:"white"}))}catch(s){alert(s.message)}const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"}),a.classList.replace("loader","hidden")}
//# sourceMappingURL=commonHelpers.js.map
