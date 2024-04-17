import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
export const galleryElem = document.querySelector(".gallery-nav");
const lightBox = new SimpleLightbox('.gallery a', 
{ 
  captionDelay: 250,
  captionsData: 'alt',
});
export function mageTemplate(data) {
     const markup = data.hits
    .map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
    }) => {
        return `
        <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img 
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"/>
        <div class="image-information">
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
        </div>
        </a>
        </li>`;
    })
    .join("");
    galleryElem.insertAdjacentHTML("beforeend", markup); 
    lightBox.refresh(); 
    };