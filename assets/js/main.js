AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// // Listen for a submit
// document.querySelector(".contact-form").addEventListener("submit", submitForm);
const strings = [
  "Engineer",
  "Competitive Programmer",
  "Software Developer",
  "Nature Lover",
]; // Replace with your string array
let index = 0;
let text = "";
let isDeleting = false;
let typingSpeed = 200; // Adjust typing speed as needed

function type() {
  const dynamicText = document.getElementById("dynamicText");

  if (index >= strings.length) {
    index = 0;
  }

  const currentString = strings[index];

  if (isDeleting) {
    text = currentString.substring(0, text.length - 1);
  } else {
    text = currentString.substring(0, text.length + 1);
  }

  dynamicText.textContent = text;

  let delta = typingSpeed;

  if (isDeleting) {
    delta /= 2;
  }

  if (!isDeleting && text === currentString) {
    delta = 1000;
    isDeleting = true;
  } else if (isDeleting && text === "") {
    isDeleting = false;
    index++;
  }

  setTimeout(type, delta);
}

window.onload = function () {
  type();
};

const educationSection = document.querySelector(".education-section");
const experienceSection = document.querySelector(".experience-section");
const extraSection = document.querySelector(".extra-section");
const toggleButtons = document.querySelectorAll(".toggle-btn");

// Set default to Experience
experienceSection.style.display = "block";
educationSection.style.display = "none";
extraSection.style.display = "none";

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("data-toggle") === "education") {
      educationSection.style.display = "block";
      experienceSection.style.display = "none";
      extraSection.style.display = "none";
    } else if (button.getAttribute("data-toggle") === "experience") {
      educationSection.style.display = "none";
      experienceSection.style.display = "block";
      extraSection.style.display = "none";
    } else {
      educationSection.style.display = "none";
      experienceSection.style.display = "none";
      extraSection.style.display = "block";
    }
    toggleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const themeToggleBtn = document.getElementById("themeToggle");
var toggle = false;
themeToggleBtn.addEventListener("click", function () {
  var element = document.body;
  element.classList.toggle("light-mode");
  toggle = !toggle;
  if (toggle) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  } else {
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const viewAllButton = document.getElementById("viewAllButton");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("closeButton");

  viewAllButton.addEventListener("click", function () {
    popup.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const viewAllCertButton = document.getElementById("viewAllCertButton");
  const popupCert = document.getElementById("popupCert");
  const closeCertButton = document.getElementById("closeCertButton");

  viewAllCertButton.addEventListener("click", function () {
    popupCert.style.display = "block";
  });

  closeCertButton.addEventListener("click", function () {
    popupCert.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popupCert) {
      popupCert.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const viewAllExpButton = document.getElementById("viewAllExperienceButton");
  const popupExp = document.getElementById("popupExp");
  const closeExpButton = document.getElementById("closeExpButton");

  viewAllExpButton.addEventListener("click", function () {
    popupExp.style.display = "block";
  });

  closeExpButton.addEventListener("click", function () {
    popupExp.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popupCert) {
      popupExp.style.display = "none";
    }
  });
});
