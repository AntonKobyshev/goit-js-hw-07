import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);
// galleryRef.innerHTML = markup;
galleryRef.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(items) {
    // const markup =
    return    items.map(({ preview, original, description }) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  })
.join('');
}

// console.log(galleryItems);
