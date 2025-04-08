document.addEventListener("DOMContentLoaded", function () {
  // Footer Year Update
  document.getElementById("year").innerText = new Date().getFullYear();

  //faq popup

  const faqPopup = document.getElementById("faq-popup");
  const faqChatbox = document.getElementById("faq-chatbox");
  const closeFaqChat = document.getElementById("close-faq-chat");
  const chatContent = document.getElementById("chat-content");
  const faqButtons = document.querySelectorAll(".faq-btn");

  // Show popup on scroll (every time)
  window.addEventListener("scroll", () => {
    faqPopup.classList.add("scale-100", "opacity-100", "pointer-events-auto", "animate__fadeInUp");
    faqPopup.classList.remove("scale-90", "opacity-0", "pointer-events-none");
  });

  // Open chatbox
  faqPopup.addEventListener("click", () => {
    faqChatbox.classList.remove("hidden");
  });

  // Close chatbox
  closeFaqChat.addEventListener("click", () => {
    faqChatbox.classList.add("hidden");
  });

  // Show chat-style Q&A
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
    alignItems: "center", transition: "top 0.5s ease-in-out"
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
  const images = [
    "./assets/school1.jpg",
    "./assets/school2.jpg",
    "./assets/school3.jpg",
    "./assets/school4.jpg",
    "./assets/school5.jpg"
  ];
  let currentIndex = 0;
  const overlay = document.getElementById("background-overlay");

  function changeBackground() {
    if (overlay) {
      overlay.style.filter = "blur(10px)";
      overlay.style.opacity = "0.5";
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        overlay.style.backgroundImage = `url('${images[currentIndex]}')`;
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

  const groups = document.querySelectorAll(".hover-group");
  groups.forEach(group => {
    const cards = group.querySelectorAll(".card-item");
    let isTouch = false;

    cards.forEach(card => {
      card.addEventListener("touchstart", e => {
        isTouch = true;
        group.classList.add("touch");
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        e.stopPropagation();
      });
    });

    document.addEventListener("touchstart", () => {
      if (isTouch) {
        group.classList.remove("touch");
        cards.forEach(c => c.classList.remove("active"));
      }
    });
  });

  // Entrance animations
  document.querySelectorAll("h2, h3, p, img").forEach(el => {
    el.classList.add("fade-in-up");
  });

  document.querySelectorAll("nav, #mobile-menu").forEach(el => {
    el.classList.add("slide-down");
  });

  document.querySelectorAll("a, button").forEach(el => {
    el.classList.add("scale-on-hover");
  });

  // FIELD TRIP MODAL
  const fieldTripCard = document.querySelector(".card-item img[alt='Field Trips']");
  const modal = document.getElementById("fieldTripModal");
  const closeModal = document.getElementById("closeFieldTripModal");

  const viewer = document.getElementById("imageViewer");
  const viewerImg = document.getElementById("viewerImg");
  const closeViewer = document.getElementById("closeViewer");

  // Open modal on Field Trip click
  fieldTripCard?.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modal.classList.add("scale-100");
  });

  // Close modal
  closeModal?.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  // Close on outside click
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });

  // Image View from Carousel
  document.querySelectorAll(".carousel-img").forEach((img) => {
    img.addEventListener("click", () => {
      viewerImg.src = img.src;
      viewer.classList.remove("hidden");
      viewer.classList.add("flex");
    });
  });

  // Close Image Viewer
  closeViewer?.addEventListener("click", () => {
    viewer.classList.add("hidden");
    viewer.classList.remove("flex");
    viewerImg.src = "";
  });

  const galleryImages = [
    "./assets/fieldtrip1.jpeg",
    "./assets/fieldtrip2.jpeg",
    "./assets/fieldtrip3.jpg",
    "./assets/fieldtrip4.jpg",
  ];

  let currentImage = 0;
  const galleryDisplay = document.getElementById("galleryDisplay");

  function updateGallery() {
    galleryDisplay.innerHTML = "";

    const prevIndex = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    const nextIndex = (currentImage + 1) % galleryImages.length;

    const prevImg = document.createElement("img");
    prevImg.src = galleryImages[prevIndex];
    prevImg.className = "h-32 md:h-40 rounded-lg gallery-image side";

    const mainImg = document.createElement("img");
    mainImg.src = galleryImages[currentImage];
    mainImg.className = "h-56 md:h-72 rounded-xl gallery-image active";

    const nextImg = document.createElement("img");
    nextImg.src = galleryImages[nextIndex];
    nextImg.className = "h-32 md:h-40 rounded-lg gallery-image side";

    galleryDisplay.appendChild(prevImg);
    galleryDisplay.appendChild(mainImg);
    galleryDisplay.appendChild(nextImg);
  }

  // Button navigation
  const prevBtn = document.getElementById("prevImage");
  const nextBtn = document.getElementById("nextImage");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
      animateTransition();
    });

    nextBtn.addEventListener("click", () => {
      currentImage = (currentImage + 1) % galleryImages.length;
      animateTransition();
    });
  }

  // Mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;

  galleryDisplay.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  galleryDisplay.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
      currentImage = (currentImage + 1) % galleryImages.length;
      animateTransition();
    } else if (touchEndX > touchStartX + threshold) {
      currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
      animateTransition();
    }
  }

  function animateTransition() {
    // fade out
    const imgs = galleryDisplay.querySelectorAll("img");
    imgs.forEach(img => {
      img.classList.remove("active");
      img.style.opacity = "0";
    });

    setTimeout(() => {
      updateGallery();
    }, 300);
  }

  updateGallery();
});
