import { randomIndex } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.getElementById("thumbnails");
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const toolbar = document.getElementById("toolbar");
  const toggleToolbar = document.getElementById("toggleToolbar");

  const mainImage = document.getElementById("mainImage");
  const imageTitle = document.getElementById("imageTitle");

  const prevBtn = document.getElementById("prevBtn");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const nextBtn = document.getElementById("nextBtn");
  const randomBtn = document.getElementById("randomBtn");

  const nextPageBtn = document.getElementById("nextPage");
  const prevPageBtn = document.getElementById("prevPage");

  let currentImageIndex = 0;
  let currentPageIndex = 1;
  let isPlaying = false;
  let interval;

  const images = [
    [
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
    ],
    [
      {
        src: "/images/image6.jpg",
        title: "Fleur de pêcher",
        alt: "A picture of a peach blossom flower",
      },
      {
        src: "/images/image7.jpg",
        title: "Fleur de tulipe",
        alt: "A picture of a tulip flower",
      },
      {
        src: "/images/image8.jpg",
        title: "Fleur Botanique",
        alt: "A picture of a botanical flower",
      },
      {
        src: "/images/image9.jpg",
        title: "Fleur Allium",
        alt: "A picture of a Allium flower",
      },
      {
        src: "/images/image10.jpg",
        title: "Fleur Peony",
        alt: "A picture of a Peony flower",
      },
    ],
  ];

  // -------------- Function update Main Image ---------------
  function updateMainImage(index) {
    mainImage.classList.add("fade-out");

    mainImage.addEventListener("animationend", function handleFadeOut() {
      mainImage.classList.remove("fade-out");
      mainImage.src = images[currentPageIndex][index].src;
      mainImage.alt = images[currentPageIndex][index].alt;
      imageTitle.textContent = images[currentPageIndex][index].title;
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
    thumbnailContainer.innerHTML = "";
    images[currentPageIndex].forEach((img, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = img.src;
      thumbnail.alt = img.alt;
      thumbnail.classList.add("thumbnail");
      thumbnail.addEventListener("click", () => {
        currentImageIndex = index;
        updateMainImage(index);
      });
      thumbnailContainer.appendChild(thumbnail);
    });
  }

  // -------------- Function TogglePlayPause  ---------------

  function togglePlayPause() {
    console.log("togglePlayPause clicked");
    if (isPlaying) {
      clearInterval(interval);
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      interval = setInterval(() => {
        currentImageIndex =
          (currentImageIndex + 1) % images[currentPageIndex].length;
        updateMainImage(currentImageIndex);
      }, 2000);
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
  }

  // -------------- Function Random Image  ---------------

  // function randomImage() {
  //   console.log("randomImage clicked");
  //   let randomIndex;
  //   randomIndex = Math.floor(Math.random() * images.length);
  //   currentImageIndex = randomIndex;
  //   updateMainImage(currentImageIndex);
  // }

  // randomIndex(currentImageIndex, images[currentPageIndex].length);

  function nextPage() {
    console.log("nextPage clicked");
    currentImageIndex =
      (currentImageIndex + 1) % images[currentPageIndex].length;
    updateMainImage(currentImageIndex);
  }

  function prevPage() {
    console.log("prevPage clicked");
    currentImageIndex =
      (currentImageIndex - 1 + images.length) % images[currentPageIndex].length;
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
  prevBtn.addEventListener("click", prevPage);
  nextBtn.addEventListener("click", nextPage);
  prevPageBtn.addEventListener("click", () => {
    if (currentPageIndex === 0) {
      currentPageIndex += 1;
    } else {
      currentPageIndex -=1;
    }
    updateMainImage(currentImageIndex);
    showThumbnails();

  });

  nextPageBtn.addEventListener("click", () => {
    if (currentPageIndex === 1) {
      currentPageIndex -= 1;
    } else {
      currentPageIndex += 1;
    }
    updateMainImage(currentImageIndex);
    showThumbnails();
  });

  playPauseBtn.addEventListener("click", togglePlayPause);
  randomBtn.addEventListener("click", () => {
    let result = randomIndex(
      currentImageIndex,
      currentPageIndex,
      images[currentPageIndex].length,

    );
    console.log("new index",result.newIndex,"current page",result.newPage);
    currentPageIndex = result.newPage;
    updateMainImage(result.newPage);
  });

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
