import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);
// galleryRef.innerHTML = markup;
galleryRef.insertAdjacentHTML("beforeend", markup);
galleryRef.addEventListener("click", onImageClick);

function createGalleryMarkup(items) {
  // const markup =
  return items
    .map(({ preview, original, description }) => {
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
    .join("");
}

const instance = basicLightbox.create(`
    <img src="" width="1280" height="auto">`,

 {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
 }

 );


function onImageClick(e) {
  e.preventDefault();

  // if (e.target.nodeName !== 'IMG') {
  //     return;
  // }

  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector("img").src = datasetSource;

  instance.show();
  console.log(e.target);
}


function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}

// console.log(galleryItems);
