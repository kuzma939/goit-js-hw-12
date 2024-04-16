import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { objGallery } from "./js/pixabay-api";
import { mageTemplate } from "./js/render-functions";
import { galleryElem } from "./js/render-functions";

const loaderElement = document.querySelector(".loader");
const formGallery = document.querySelector(".input-field");
const loadBtn = document.querySelector(".load-more");

loadBtn.addEventListener("click", loadMore);
formGallery.addEventListener("submit", FormSubmit);

let maxPage;
let names;
let page;

loadBtn.classList.add("hidden");
loaderElement.classList.replace("loader", "hidden");
async function FormSubmit(event) {
    event.preventDefault();
    galleryElem.innerHTML = "";
  loaderElement.classList.replace("hidden", "loader");
    
    names = event.target.elements.designation.value.trim();
    page = 1;
    
    if (names === '') {
        loaderElement.classList.replace("loader", "hidden");
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'bottomCenter',
            iconColor: 'white'
        });
        return;
    }
    try {
        const data = await objGallery(page, names);
        if (data.totalHits === 0) {
            loaderElement.classList.replace("loader", "hidden");
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: 'white',
                backgroundColor: 'red',
                position: 'bottomCenter',
                iconColor: 'white'
            })
            return;
        } else if (data.totalHits < 15) {
            loaderElement.classList.replace("loader", "hidden");
              loadBtn.classList.replace("visible", "hidden");
            iziToast.show({
                message: "We`re sorry, but you've reached the end of search results.",
                messageColor: 'white',
                backgroundColor: 'green',
                position: 'bottomCenter',
                iconColor: 'white'
            })
            mageTemplate(data);
            event.target.reset();
            return;
        }
     
        iziToast.success({
            iconColor: 'yellow',
            message: 'Enjoy watching!',
            position: 'topRight',
            backgroundColor: 'blue',
            messageColor: 'yellow'
        });
        mageTemplate(data);
      
    }
    catch(error){
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'bottomCenter',
            iconColor: 'white'
        });
    };
    
     event.target.reset();
    loadBtn.classList.replace("hidden", "visible");
    loaderElement.classList.replace("loader", "hidden");
    
};
async function loadMore() {
    page += 1;
    try {
        const data = await objGallery(page, names);
       maxPage = Math.ceil(data.totalHits / 15);
        console.log(data);
        mageTemplate(data);
         loaderElement.classList.replace("hidden", "loader");
        
        if (page >= maxPage) {
            loaderElement.classList.replace("loader", "hidden");
            loadBtn.classList.replace("visible", "hidden");
              iziToast.show({
            message: "We`re sorry, but you've reached the end of search results.",
            messageColor: 'white',
            backgroundColor: 'green',
            position: 'bottomCenter',
            iconColor: 'white'
        });
        }
       
    }
    catch (error) {
        alert(error.message)
    }
     const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        });
    loaderElement.classList.replace("loader", "hidden");
};
  