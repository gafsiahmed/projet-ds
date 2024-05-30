document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.getElementById("thumbnails");
  const toolbar = document.getElementById("toolbar");
  const toggleToolbar = document.getElementById("toggleToolbar");

  const mainImage = document.getElementById("mainImage");
  const imageTitle = document.getElementById("imageTitle");

  const prevBtn = document.getElementById("prevBtn");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const nextBtn = document.getElementById("nextBtn");
  const randomBtn = document.getElementById("randomBtn");

  let currentImageIndex = 0;
  let isPlaying = false;
  let interval;

  const images = [
    {
      src: "/images/image1.jpg",
      title: "Fleur de tournesol",
      alt: "A picture of a yellow sunflower",
    },
    {
      src: "/images/image2.jpg",
      title: "Fleur d'hortensia",
      alt: "A picture of a hydrangea flower",
    },
    {
      src: "/images/image3.jpg",
      title: "Fleur de pétale",
      alt: "A picture of a petal flower",
    },
    {
      src: "/images/image4.jpg",
      title: "Fleur de rose",
      alt: "A picture of a rose flower",
    },
    {
      src: "/images/image5.jpg",
      title: "Fleur de malaga",
      alt: "A picture of a malaga flower",
    },
    {
      src: "/images/image6.jpg",
      title: "Fleur de pêcher",
      alt: "A picture of a peach blossom flower",
    },
  ];

  // -------------- Function update Main Image ---------------
  function updateMainImage(index) {
    mainImage.classList.add("fade-out");

    mainImage.addEventListener("animationend", function handleFadeOut() {
      mainImage.classList.remove("fade-out");
      mainImage.src = images[index].src;
      mainImage.alt = images[index].alt;
      imageTitle.textContent = images[index].title;
      mainImage.classList.add("fade-in");
      mainImage.removeEventListener("animationend", handleFadeOut);

      mainImage.addEventListener("animationend", function handleFadeIn() {
        mainImage.classList.remove("fade-in");
        mainImage.removeEventListener("animationend", handleFadeIn);
      });
    });
  }

  // -------------- Function Show Thumbnails ---------------

  function showThumbnails() {
    thumbnails.innerHTml = "";
    images.forEach((img, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = img.src;
      thumbnail.alt = img.alt;
      thumbnail.classList.add("thumbnail");
      thumbnail.addEventListener("click", () => {
        currentImageIndex = index;
        updateMainImage(index);
      });
        thumbnails.appendChild(thumbnail);
    });
    thumbnails.appendChild(previvousBtn);
  }

  // -------------- Function TogglePlayPause  ---------------

  function togglePlayPause() {
    console.log("togglePlayPause clicked");
    if (isPlaying) {
      clearInterval(interval);
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      interval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateMainImage(currentImageIndex);
      }, 2000);
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
  }

  // -------------- Function Random Image  ---------------

  function randomImage() {
    console.log("randomImage clicked");
    let randomIndex;
    randomIndex = Math.floor(Math.random() * images.length);
    console.log("random :",randomIndex,"current : ", currentImageIndex);
    currentImageIndex = randomIndex;
    updateMainImage(currentImageIndex);
  }

  // -------------- Event Listeners ---------------
  // we will start with the event listeners for the toolbar buttons

  toggleToolbar.addEventListener("click", () => {
    if (toolbar.style.display === "none") {
      toggleToolbar.innerHTML = `<a href="#" id="toggleToolbar"><i class="fa-solid fa-caret-down"></i>Barre d\'outils</i></a> `;
      toolbar.style.display = "flex";
      thumbnails.style.display = "none";
    } else {
      toggleToolbar.innerHTML = `<a href="#" id="toggleToolbar"><i class="fa-solid fa-caret-right"></i>Barre d\'outils</i></a> `;
      toolbar.style.display = "none";
      thumbnails.style.display = "flex";
    }
  });

  // The previous and next buttons event listeners
  prevBtn.addEventListener("click", () => {
    console.log("prev button clicked");
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateMainImage(currentImageIndex);
  });

  nextBtn.addEventListener("click", () => {
    console.log("next button clicked");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage(currentImageIndex);
  });

  playPauseBtn.addEventListener("click", togglePlayPause);
  randomBtn.addEventListener("click", randomImage);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      togglePlayPause();
    } else if (event.code === "ArrowLeft") {
      prevBtn.click();
    } else if (event.code === "ArrowRight") {
      nextBtn.click();
    }
  });

  // -------------- Initial Call ---------------
  updateMainImage(currentImageIndex);
  showThumbnails();
});
