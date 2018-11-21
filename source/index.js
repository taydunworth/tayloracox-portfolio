import "./style/style.sass";
import "./style/style.css";
// import * as work from "./work.js";

// Mobile Nav

const mobileNav = document.querySelector('.mobile-nav-menu')
const mobileNavBtn = document.querySelector('.mobile-btn')
mobileNavBtn.innerHTML = "<i class='fas fa-bars'></i>"

// mobileNavBtn.addEventListener('click', function() {

//   mobileNavBtn.innerHTML = "<i class='fas fa-times'></i>"
// })

mobileNavBtn.addEventListener('click', function() {
  mobileNav.classList.toggle('mobile-nav-show')
  if (mobileNavBtn.innerHTML = "<i class='fas fa-bars'></i>" && mobileNav.classList.contains('mobile-nav-show')) {
    mobileNavBtn.innerHTML = "<i class='fas fa-times'></i>"
  } else {
    mobileNavBtn.innerHTML = "<i class='fas fa-bars'></i>"
  }
})



// const allWork = work.workItems;

// Work

// if(window.location.href.indexOf("ironworks") === -1) {
//   for (let i = 0; i < allWork.length; i++) {
//     const workList = document.querySelector(".work-list");
//     const workListItem = document.createElement("li");
//     const workDiv = document.createElement("div");
//     const hoverDiv = document.createElement("div");
//     const workTitle = document.createElement("h4");
//     const workImage = document.createElement("img");
//     const workButton = document.createElement("a");
//     const boxButton = document.createElement("a");
//
//     workTitle.innerHTML = allWork[i].title;
//     workButton.innerHTML = "Learn More";
//     workButton.href = allWork[i].url;
//     boxButton.href = allWork[i].url;
//
//     workDiv.style.backgroundImage = `url(${allWork[i].img})`;
//
//     workDiv.appendChild(hoverDiv);
//     workDiv.appendChild(workImage);
//     hoverDiv.appendChild(workTitle);
//     hoverDiv.appendChild(workButton);
//     boxButton.appendChild(workDiv);
//     workListItem.appendChild(boxButton);
//     workList.appendChild(workListItem);
//
//     workDiv.classList.add("work-box");
//     workButton.classList.add("btn");
//     hoverDiv.classList.add("work-details");
//   }
// }
//
// // Ironworks
// if(window.location.href.indexOf("ironworks") > -1) {
//   const ironworks = document.querySelector("#ironworks-info");
//   const ironworksHero = document.querySelector(".internal-hero");
//   const ironworksInfo = allWork[3].description;
//   ironworksHero.style.backgroundImage = `url(${allWork[3].img})`;
//   ironworks.innerHTML = ironworksInfo;
// }


// Accordion

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Typing text effect on home page

let typeEffect = function(el, toRotate, period) {
  this.toRotate = toRotate
  this.el = el
  this.loopNum = 0
  this.period = parseInt(period, 10) || 2000
  this.txt = ''
  this.tick()
  this.isDeleting = false
}

typeEffect.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length
  let fullTxt = this.toRotate[i]

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

  let that = this
  let delta = 150 - Math.random() * 100

  if (this.isDeleting) {
    delta /= 2
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period
    this.isDeleting = true
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false
    this.loopNum++
    delta = 500
  }

  setTimeout(function() {
    that.tick()
  }, delta)
}

window.onload = function() {
  let elements = document.getElementsByClassName('type-effect')
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-rotate')
    let period = elements[i].getAttribute('data-period')
    if (toRotate) {
      new typeEffect(elements[i], JSON.parse(toRotate), period)
    }
  }

  let css = document.createElement('style')
  css.type = 'text/css'
  css.innerHTML = '.type-effect > .wrap { border-right: 0.08em solid #666 }'
  document.body.appendChild(css)
}

// Nav Change

const nav = document.getElementById('header-nav');
const mobilenav = document.getElementById('mobile-nav');

window.addEventListener('scroll', function(e) {
    event.preventDefault();
    if (window.scrollY <= 150) {
      nav.classList.add("static-nav");
      nav.classList.remove("scroll-nav");
      mobilenav.classList.add("static-nav");
      mobilenav.classList.remove("scroll-nav");
    } else {
      nav.classList.add("scroll-nav");
      nav.classList.remove("static-nav");
      mobilenav.classList.add("scroll-nav");
      mobilenav.classList.remove("static-nav");
    }
});

window.addEventListener('scroll', function(e) {
    event.preventDefault();
    if (window.scrollY <= 150 && mobilenav != null) {
      mobilenav.classList.add("static-nav");
      mobilenav.classList.remove("scroll-nav");
    } else {
      mobilenav.classList.add("scroll-nav");
      mobilenav.classList.remove("static-nav");
    }
});
