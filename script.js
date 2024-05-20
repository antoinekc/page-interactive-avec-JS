// Fonctionnalité 1 :

document.getElementsByTagName("footer")[0].addEventListener("click",function() {
  console.log("Clique");
});


// Fonctionnalité 1-bis
let footerClick = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function (){
  footerClick ++;
    console.log(`Click ${footerClick}`); 
});

// Fonctionnalité 2:
let navbarHeader = document.getElementById("navbarHeader");
let hamburger = document.querySelector(".navbar-toggler")

function Collapse() {
  hamburger.addEventListener('click', function() {
    navbarHeader.classList.toggle('collapse');
  });
}
Collapse()


// Fonctionnalité 3
let firstCard = document.getElementsByClassName("card")[0];
let editCard = firstCard.getElementsByClassName("btn")[1];

function red () {
  firstCard.style.color = 'red';
};
editCard.addEventListener("click",red)


// Fonctionnalité 4

let secondCard = document.getElementsByClassName("card")[1];
let editSecondCard = secondCard.getElementsByClassName("btn")[1];

function green() {
    if (secondCard.style.color === 'green') {
    secondCard.style.color = '';
    } else {
      secondCard.style.color = 'green'
    }
};
editSecondCard.addEventListener('click', green)


// Fonctionnalité 5
let navbar = document.querySelector(".navbar");
let link = document.querySelector("link");
let body = document.querySelector("body");

function hide () {
  if (link.disabled !== true) {
    link.disabled = true;
  } else if (link.disabled === true) {
    link.disabled = false;
  }
}

navbar.addEventListener("dblclick", hide);
body.addEventListener("dblclick", hide);
