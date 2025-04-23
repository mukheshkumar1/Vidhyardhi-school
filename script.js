document.addEventListener("DOMContentLoaded", function () {
  // Footer Year Update
  document.getElementById("year").innerText = new Date().getFullYear();

  // FAQ Popup
  const faqPopup = document.getElementById("faq-popup");
  const faqChatbox = document.getElementById("faq-chatbox");
  const closeFaqChat = document.getElementById("close-faq-chat");
  const chatContent = document.getElementById("chat-content");
  const faqButtons = document.querySelectorAll(".faq-btn");

  window.addEventListener("scroll", () => {
    faqPopup.classList.add("scale-100", "opacity-100", "pointer-events-auto", "animate__fadeInUp");
    faqPopup.classList.remove("scale-90", "opacity-0", "pointer-events-none");
  });

  faqPopup.addEventListener("click", () => {
    faqChatbox.classList.remove("hidden");
  });

  closeFaqChat.addEventListener("click", () => {
    faqChatbox.classList.add("hidden");
  });

  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const question = btn.innerText;
      const answer = btn.dataset.answer;

      chatContent.innerHTML += `
        <div class="flex justify-end">
          <div class="bg-lime-600 text-white px-3 py-2 rounded-lg max-w-[80%]">${question}</div>
        </div>
        <div class="flex justify-start">
          <div class="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-lg max-w-[80%]">${answer}</div>
        </div>
      `;
      chatContent.scrollTop = chatContent.scrollHeight;
    });
  });

  // Navbar Dropdown
  const aboutLink = document.getElementById("about-link");
  const aboutDropdown = document.getElementById("about-dropdown");

  if (aboutLink && aboutDropdown) {
    aboutLink.addEventListener("mouseenter", () => aboutDropdown.classList.remove("hidden"));
    aboutDropdown.addEventListener("mouseenter", () => aboutDropdown.classList.remove("hidden"));
    aboutDropdown.addEventListener("mouseleave", () => aboutDropdown.classList.add("hidden"));
    aboutLink.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!aboutDropdown.matches(":hover")) {
          aboutDropdown.classList.add("hidden");
        }
      }, 200);
    });
  }

  // Mobile Menu
  const btn = document.getElementById("mobileMenuBtn");
  const dropdown = document.getElementById("mobileDropdown");

  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  btn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");

    bar1.classList.toggle("rotate-45");
    bar1.classList.toggle("translate-y-1.5");

    bar2.classList.toggle("opacity-0");

    bar3.classList.toggle("-rotate-45");
    bar3.classList.toggle("-translate-y-1.5");
  });

  // Close dropdown when any mobile link is clicked
  document.querySelectorAll("#mobileDropdown a").forEach(link => {
    link.addEventListener("click", () => {
      dropdown.classList.add("hidden");

      // Reset hamburger icon animation
      bar1.classList.remove("rotate-45", "translate-y-1.5");
      bar2.classList.remove("opacity-0");
      bar3.classList.remove("-rotate-45", "-translate-y-1.5");
    });
  });
  // Background Slideshow
  const bgImages = [
    "./assets/school1.jpg",
    "./assets/school2.jpg",
    "./assets/school3.jpg",
    "./assets/school4.jpg",
    "./assets/school5.jpg"
  ];
  let bgIndex = 0;
  const overlay = document.getElementById("background-overlay");

  function changeBackground() {
    if (overlay) {
      overlay.style.filter = "blur(10px)";
      overlay.style.opacity = "0.5";
      setTimeout(() => {
        bgIndex = (bgIndex + 1) % bgImages.length;
        overlay.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
        overlay.style.filter = "blur(0px)";
        overlay.style.opacity = "1";
      }, 500);
    }
  }
  setInterval(changeBackground, 5000);

  // Animate on Scroll
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: true,
  });

  // Hover Effects
  const container = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.focus-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      container.classList.add('hover-effect');
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      container.classList.remove('hover-effect');
      cards.forEach(c => c.classList.remove('hovered'));
    });
    card.addEventListener('touchstart', () => {
      container.classList.add('hover-effect');
      cards.forEach(c => c.classList.remove('hovered'));
      card.classList.add('hovered');
    });
    card.addEventListener('touchend', () => {
      container.classList.remove('hover-effect');
      cards.forEach(c => c.classList.remove('hovered'));
    });
  });

  // Entrance animations
  document.querySelectorAll("h2, h3, p, img").forEach(el => el.classList.add("fade-in-up"));
  document.querySelectorAll("nav, #mobile-menu").forEach(el => el.classList.add("slide-down"));
  document.querySelectorAll("a, button").forEach(el => el.classList.add("scale-on-hover"));

  // Field Trips & Helping Hands Modal
  const fieldTripCard = document.querySelector(".card-item img[alt='Field Trips']");
  const fieldTripModal = document.getElementById("fieldTripModal");
  const closeFieldTripModal = document.getElementById("closeFieldTripModal");

  function openFieldTripModal() {
    fieldTripModal.classList.remove("hidden");
    fieldTripModal.classList.add("flex", "scale-100");
    document.body.classList.add("overflow-hidden");
  }

  function closeFieldTrip() {
    fieldTripModal.classList.add("hidden");
    fieldTripModal.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  }

  fieldTripCard?.addEventListener("click", openFieldTripModal);
  closeFieldTripModal?.addEventListener("click", closeFieldTrip);
  fieldTripModal?.addEventListener("click", (e) => {
    if (e.target === fieldTripModal) closeFieldTrip();
  });

  // HELPING HANDS MODAL
  const helpingHandsCard = document.querySelector(".card-item img[alt='Helping Hands']");
  const helpingHandsModal = document.getElementById("helpingHandsModal");
  const closeHelpingHandsModal = document.getElementById("closeHelpingHandsModal");

  function openHelpingHandsModal() {
    helpingHandsModal.classList.remove("hidden");
    helpingHandsModal.classList.add("flex", "scale-100");
    document.body.classList.add("overflow-hidden");
  }

  function closeHelpingHands() {
    helpingHandsModal.classList.add("hidden");
    helpingHandsModal.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  }

  helpingHandsCard?.addEventListener("click", openHelpingHandsModal);
  closeHelpingHandsModal?.addEventListener("click", closeHelpingHands);
  helpingHandsModal?.addEventListener("click", (e) => {
    if (e.target === helpingHandsModal) closeHelpingHands();
  });

  // IMAGE VIEWER (shared for all modals)
  // IMAGE VIEWER: FIELD TRIP
const fieldTripViewer = document.getElementById("fieldTripViewer");
const fieldTripViewerImg = document.getElementById("fieldTripViewerImg");
const closeFieldTripViewer = document.getElementById("closeFieldTripViewer");

document.querySelectorAll("#fieldTripModal .carousel-img").forEach((img) => {
  img.addEventListener("click", () => {
    fieldTripViewerImg.src = img.src;
    fieldTripViewer.classList.remove("hidden");
    fieldTripViewer.classList.add("flex");
  });
});

closeFieldTripViewer?.addEventListener("click", () => {
  fieldTripViewer.classList.add("hidden");
  fieldTripViewer.classList.remove("flex");
  fieldTripViewerImg.src = "";
});


// IMAGE VIEWER: HELPING HANDS
const helpingHandsViewer = document.getElementById("helpingHandsViewer");
const helpingHandsViewerImg = document.getElementById("helpingHandsViewerImg");
const closeHelpingHandsViewer = document.getElementById("closeHelpingHandsViewer");

document.querySelectorAll("#helpingHandsModal .carousel-img").forEach((img) => {
  img.addEventListener("click", () => {
    helpingHandsViewerImg.src = img.src;
    helpingHandsViewer.classList.remove("hidden");
    helpingHandsViewer.classList.add("flex");
  });
});

closeHelpingHandsViewer?.addEventListener("click", () => {
  helpingHandsViewer.classList.add("hidden");
  helpingHandsViewer.classList.remove("flex");
  helpingHandsViewerImg.src = "";
});
  // Shared Gallery (PC + Mobile)
  const galleryDisplay = document.getElementById("galleryDisplay");
  const mobileGallery = document.getElementById("mobileGallery");

  if (galleryDisplay && mobileGallery) {
    const galleryImages = [
      "./assets/school1.jpg",
      "./assets/school2.jpg",
      "./assets/school3.jpg",
      "./assets/school4.jpg",
      "./assets/school5.jpg"
    ];
    let currentIndex = 0;

    function renderGallery() {
      galleryDisplay.innerHTML = "";

      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      const nextIndex = (currentIndex + 1) % galleryImages.length;

      const prevImg = document.createElement("img");
      prevImg.src = galleryImages[prevIndex];
      prevImg.className = "gallery-img side w-1/4 max-w-[200px] rounded-lg transition duration-300";

      const mainImg = document.createElement("img");
      mainImg.src = galleryImages[currentIndex];
      mainImg.className = "gallery-img active w-1/2 max-w-[400px] rounded-full scale-105 transition duration-300";

      const nextImg = document.createElement("img");
      nextImg.src = galleryImages[nextIndex];
      nextImg.className = "gallery-img side w-1/4 max-w-[200px] rounded-lg transition duration-300";

      galleryDisplay.appendChild(prevImg);
      galleryDisplay.appendChild(mainImg);
      galleryDisplay.appendChild(nextImg);
    }

    function renderMobileGallery() {
      mobileGallery.innerHTML = "";
      galleryImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "w-2/3 rounded-lg snap-center shrink-0 cursor-pointer";
        mobileGallery.appendChild(img);
      });
    }

    document.getElementById("prevImage").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      renderGallery();
    });

    document.getElementById("nextImage").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      renderGallery();
    });

    document.addEventListener("keydown", (e) => {
      if (window.innerWidth < 640) return;
      if (e.key === "ArrowLeft") document.getElementById("prevImage").click();
      if (e.key === "ArrowRight") document.getElementById("nextImage").click();
    });

    renderGallery();
    renderMobileGallery();

    // Mobile Image Modal
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeImageModal = document.getElementById("closeImageModal");

    if (window.innerWidth < 640 && imageModal && modalImage && closeImageModal) {
      mobileGallery.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
          modalImage.src = e.target.src;
          imageModal.classList.remove("hidden");
          document.body.classList.add("overflow-hidden");
          imageModal.classList.add("flex");
        }
      });

      closeImageModal.addEventListener("click", () => {
        imageModal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        imageModal.classList.remove("flex");
      });

      imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal) {
          imageModal.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        }
      });
    }
  }

  
  document.getElementById("exploreFieldTrip")?.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent card click (if needed)
    openFieldTripModal(); // Reuse your existing function
  });
  
  document.getElementById("exploreHelpingHands")?.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent card click (if needed)
    openHelpingHandsModal(); // Reuse your existing function
  });

  // Brochure Popup Download Logic (Bottom Left)
  const faqPopupMobile = document.getElementById('faq-popup-mobile');
  const brochurePopup = document.getElementById('brochure-popup');
  const brochurePopupMobile = document.getElementById('brochure-popup-mobile');
  const brochurePath = './assets/Vidhyardhi Schools.pdf';
  
  // Show both FAQ popups instantly
  [ faqPopupMobile].forEach(popup => {
    popup.classList.remove('opacity-0', 'pointer-events-none');
    popup.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
  });
  
  // Show both brochure popups instantly
  [brochurePopup, brochurePopupMobile].forEach(popup => {
    popup.classList.remove('opacity-0', 'pointer-events-none');
    popup.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
  });
  
  // Click event for brochure buttons
  [brochurePopup, brochurePopupMobile].forEach(popup => {
    popup.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = brochurePath;
      link.download = 'Vidhyardhi Schools.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
  
  // FAQ click opens chatbox
  [ faqPopupMobile].forEach(popup => {
    popup.addEventListener('click', () => {
      document.getElementById('faq-chatbox').classList.remove('hidden');
    });
  });
  
  // Close chatbox
  document.getElementById('close-faq-chat').addEventListener('click', () => {
    document.getElementById('faq-chatbox').classList.add('hidden');
  });
  
});