'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Get the popup element and the trigger element
document.addEventListener("DOMContentLoaded", function() {
  const projectItem = document.querySelector('.project-item');
  const popupOverlay = document.querySelector('.popup-overlay');
  const popup = document.querySelector('.popup');

  projectItem.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Set popup content based on project item
    const projectTitle = this.querySelector('.project-title').textContent;
    const projectCategory = this.querySelector('.project-category').textContent;
    // const popupContent = `<h2>${projectTitle}</h2><p>${projectCategory}</p>`;
    // document.querySelector('.popup-text').innerHTML = popupContent;

    // Show the popup
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
  });

  // Close the popup when close button is clicked
  const closePopupButton = document.querySelector('.close-popup');
  closePopupButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the overlay
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
  });

  // Close the popup when clicking outside of it
  popupOverlay.addEventListener('click', function() {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const projectItem2 = document.getElementById('project-item-2');
  const projectLink2 = projectItem2.querySelector('.project-link');
  const popupOverlay2 = projectItem2.querySelector('.popup-overlay');
  const popup2 = projectItem2.querySelector('.popup');

  projectLink2.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the popup for project 2
    popup2.style.display = 'block';
    popupOverlay2.style.display = 'block';
  });

  // Close the popup for project 2 when close button is clicked
  const closePopupButton2 = projectItem2.querySelector('.close-popup');
  closePopupButton2.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the overlay
    popup2.style.display = 'none';
    popupOverlay2.style.display = 'none';
  });

  // Close the popup for project 2 when clicking outside of it
  popupOverlay2.addEventListener('click', function() {
    popup2.style.display = 'none';
    popupOverlay2.style.display = 'none';
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const projectItem3 = document.getElementById('project-item-3');
  const projectLink3 = projectItem3.querySelector('.project-link');
  const popupOverlay3 = projectItem3.querySelector('.popup-overlay');
  const popup3 = projectItem3.querySelector('.popup');

  projectLink3.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the popup for project 3
    popup3.style.display = 'block';
    popupOverlay3.style.display = 'block';
  });

  // Close the popup for project 3 when close button is clicked
  const closePopupButton3 = projectItem3.querySelector('.close-popup');
  closePopupButton3.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the overlay
    popup3.style.display = 'none';
    popupOverlay3.style.display = 'none';
  });

  // Close the popup for project 3 when clicking outside of it
  popupOverlay3.addEventListener('click', function() {
    popup3.style.display = 'none';
    popupOverlay3.style.display = 'none';
  });
});

