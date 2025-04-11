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
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.createElement("div");
  const closeMenuBtn = document.createElement("button");

  const menuLinks = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Academics", id: "#academics" },
    { name: "Gallery", id: "#gallery" },
    { name: "Admissions", id: "#admissions" },
    { name: "Contact", id: "#contact" },
  ];

  mobileMenu.id = "mobile-menu";
  Object.assign(mobileMenu.style, {
    position: "fixed", top: "-100%", left: "0", width: "100%", height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex", flexDirection: "column", justifyContent: "center",
    alignItems: "center", transition: "top 0.5s ease-in-out", zIndex: "999"
  });

  const ul = document.createElement("ul");
  ul.className = "text-white text-2xl space-y-6";

  menuLinks.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.id;
    a.innerText = item.name;
    a.classList.add("menu-item");
    a.addEventListener("click", () => closeMobileMenu());
    li.appendChild(a);
    ul.appendChild(li);
  });

  closeMenuBtn.id = "close-menu";
  closeMenuBtn.innerText = "✖";
  Object.assign(closeMenuBtn.style, {
    color: "#fff", fontSize: "2rem", marginTop: "20px", cursor: "pointer"
  });

  mobileMenu.appendChild(ul);
  mobileMenu.appendChild(closeMenuBtn);
  document.body.appendChild(mobileMenu);

  const closeMobileMenu = () => mobileMenu.style.top = "-100%";
  menuBtn.addEventListener("click", () => mobileMenu.style.top = "0");
  closeMenuBtn.addEventListener("click", closeMobileMenu);
  document.addEventListener("click", (event) => {
    if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
      closeMobileMenu();
    }
  });

  // Send Button Animation
  const sendBtn = document.getElementById("sendBtn");
  const sendText = document.getElementById("sendText");
  const sentText = document.getElementById("sentText");

  if (sendBtn && sendText && sentText) {
    sendBtn.addEventListener("click", function () {
      this.classList.add("before:translate-y-0");
      sendText.classList.add("opacity-0");
      sentText.classList.add("opacity-100");
      setTimeout(() => {
        sendText.classList.remove("opacity-0");
        sentText.classList.remove("opacity-100");
      }, 3000);
    });
  }

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
        }
      });

      closeImageModal.addEventListener("click", () => {
        imageModal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
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
});