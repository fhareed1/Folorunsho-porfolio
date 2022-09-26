// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if(scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  }else {
    navbar.classList.remove('fixed-nav');
  }

  if(scrollHeight > 500 ){
    topLink.classList.add('show-link');
  }else {
    topLink.classList.remove('show-link');
  }
})




// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

let mainParagraph = document.querySelector('.main-page-paragraph');
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');


// ----------------home-----------------
let skillSet = [
  "Software Engineer",
  "Front End Developer",
  "React js Developer",
  "Computer Science Major",
  "Hire Me",
  "Full Stack Developer"
]

let mainParagraphCount = 0;

function skillSetParagraph() {
  
  mainParagraph.textContent = skillSet[mainParagraphCount];
  mainParagraphCount++


  if (mainParagraphCount > skillSet.length - 1) {

      mainParagraphCount = 0
  }

  setTimeout(skillSetParagraph, 4000)
}

skillSetParagraph()

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove('active-link');
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

// work
let revealOnScrollElement = document.querySelectorAll('.reveal-on-scroll')

window.addEventListener('scroll', revealScroll)

function revealScroll(){

    for(let count = 0; count< revealOnScrollElement.length; count++){
        
        let windowHeight = window.innerHeight
        let topOfRevealElement = revealOnScrollElement[count].getBoundingClientRect().top
        let revealPoint = 170


        if(topOfRevealElement <= windowHeight - revealPoint){
            revealOnScrollElement[count].classList.add('translate-class')
        }
        else{
            revealOnScrollElement[count].classList.remove('translate-class')
            
        }

        }

}

// Testimonials

const reviews = [
  {
    id: 1,
    name: "Akeju OluwaNifemi",
    job: "Full Stack Engineer",
    img:
      "./images/akeju.jpg",
    text:
      "Without doubt one of the most talented programmers out there.  I always go back to Fareed when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional. You won't be disappointed.",
  },
  {
    id: 2,
    name: "Amasa Jamil",
    job: "web designer",
    img:
      "./images/jamil.jpg",
    text:
      "Fareed is awesome, delivers exactly what you want and is a great guy as well, thanks for all your hard work on my websites",
  },
  {
    id: 3,
    name: "Feezah Salau",
    job: "FrontEnd Engineer",
    img:
      "./images/feezah.jpg",
    text:
      "Fantastic service and great guy. We recommend to anyone who needs a website or web services. Well be using for any further web based services we require!.",
  },
  {
    id: 4,
    name: "Bosun Faruq",
    job: "the boss",
    img:
      "./images/boss.jpg",
    text:
      "Fareed is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him. ",
  },
];
// select items
const img = document.getElementById("person-testimonial-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});





// ---------footer----------
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();



// nav

// Hamurger menu 
const hamBurger = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.fa-times');
// show menu
hamBurger.addEventListener('click', ()=>{
    menu.style.right = 0;
})
// hide menu
closeIcon.addEventListener('click', ()=>{
    menu.style.right = "-50vw";
})


// Sticky navbar background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        this.document.querySelector('.nav-bar').style.opacity = 0.9;
    } else {
        this.document.querySelector('.nav-bar').style.opacity = 1;
    }
});

// Smooth scrolling
$('.nav-bar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 80
            },
            800
        );
    }
});

// end of nav