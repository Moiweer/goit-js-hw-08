import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery")

const createGalleryCardsMarkup = items => items.map(
    ({ preview, original, description }) =>
        ` <div class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
    </a>
    </div>`
).join('');
   

    
const galleryCards = createGalleryCardsMarkup(galleryItems)

gallery.insertAdjacentHTML('beforeend', galleryCards);


gallery.addEventListener('click', clickHandler);

function clickHandler(event) {
    event.preventDefault();
    const targetValue = event.target.dataset.source;
    if (!targetValue) {
        return;
    }
    const instance = basicLightbox.create(`<img src="${targetValue}" width="800" height="600">`,
        {
            onShow: () => window.addEventListener('keydown', clickEscape),
            onClose: () => window.removeEventListener('keydown', clickEscape),
        })
    instance.show();



    function clickEscape(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
}
