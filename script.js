//Race Submission
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");

  var button = document.querySelector("#submit");
  var output = document.querySelector("#output");

    button.addEventListener("click", function() {

      var name = document.querySelector("#name").value;

      output.textContent = "Thank you for sending us " + name + ". We appreciate it!";
    });
  });

//Navbar
document.addEventListener('DOMContentLoaded', function () {
  function removeActiveClass() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.classList.remove('active');
    });
  }
  function setActive(link) {
    link.classList.add('active');
  }

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      removeActiveClass();
      setActive(this);
    });
  })
  
  const currentPage = window.location.pathname.split('/').pop();
  console.log('Current page:', currentPage);

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    console.log('Checking link:', linkHref);
    if (linkHref === currentPage) {
      console.log('Match found:', linkHref);
      setActive(link);
    }
  });
 });

//Image Slider
  const imgUrlsArr = [
    "Images/catch.webp",
    "Images/drive.webp",
    "Images/finish.webp",
    "Images/recovery.webp"
  ];

  const textArr = [
    "The Catch: beginning of the stroke",
    "The Drive: where the rower applies power",
    "The Finish: when the blade comes out of the water",
    "The Recovery: slowly sliding to the catch"
  ];

  const articleContainer = document.getElementById("article-container");

  if (articleContainer) {
    let imgIndex = 0;

    function renderImage() {
      articleContainer.innerHTML = `
        <img src="${imgUrlsArr[imgIndex]}" class="image" />
        <div class="text">${textArr[imgIndex]}</div>
      `;
    }

    function previousImg() {
      imgIndex = imgIndex > 0 ? imgIndex - 1 : imgUrlsArr.length - 1;
      renderImage();
    }

    function nextImg() {
      imgIndex = imgIndex < imgUrlsArr.length - 1 ? imgIndex + 1 : 0;
      renderImage();
    }

    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    if (leftArrow) {
      leftArrow.addEventListener("click", previousImg);
    }

    if (rightArrow) {
      rightArrow.addEventListener("click", nextImg);
    }

    renderImage();
  }

//Term-definition Toggle
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const definition = card.querySelector('.definition');
      if (definition.style.display === 'none' || definition.style.display === '') {
        definition.style.display = 'block';
      } else {
        definition.style.display = 'none';
      }
    });
  });
});

//Boat
document.addEventListener("DOMContentLoaded", function () {
  const boat = document.getElementById("boat");
  const leftBtn = document.getElementById("left");
  const rightBtn = document.getElementById("right");
  const message = document.getElementById("message");
  const water = document.querySelector(".water");

  const steps = 4;
  let currentStep = 0;
  let stepSize = 0;

  const raceMessages = [
    "The start: initial sprint creating distance",
    "First half: settling into a competitive rate",
    "Middle: working on form and technique",
    "Second half: final sprint as the last push",
    "The end: boat has reached the finish!"
  ];

  function updateStepSize() {
    const blockWidth = water.clientWidth;
    const boatWidth = boat.clientWidth;
    stepSize = (blockWidth - boatWidth) / steps;
  }

  function updatePositionAndMessage() {
    boat.style.left = `${currentStep * stepSize}px`;
    message.textContent = raceMessages[currentStep];
  }

  leftBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updatePositionAndMessage();
    } else {
      message.textContent = "The boat is already at the starting line.";
    }
  });

  rightBtn.addEventListener("click", () => {
    if (currentStep < steps) {
      currentStep++;
      updatePositionAndMessage();
    } else {
      message.textContent = "The race is over!";
    }
  });

  window.addEventListener("resize", () => {
    updateStepSize();
    updatePositionAndMessage();
  });

  updateStepSize();
  updatePositionAndMessage();
});

