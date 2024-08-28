 

const galleryItem = document.getElementsByClassName("gallery-item");

// Create elements for lightbox
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

// Create class list for elements
lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

// Append elements
lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

// Show lightbox function
function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

// Current image function
function currentImage() {
  lightBoxContainer.style.display = "block";
  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox(index = imageIndex);
}

// Add event listener to gallery items and set data-index attribute
for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].setAttribute("data-index", i + 1);
  galleryItem[i].addEventListener("click", currentImage);
}

// Slider image function
function sliderImage(n) {
  showLightBox(index += n);
}

// Previous image function
function prevImage() {
  sliderImage(-1);
}

// Next image function
function nextImage() {
  sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

// Close lightbox function
function closeLightBox(event) {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}
lightBoxContainer.addEventListener("click", closeLightBox);
