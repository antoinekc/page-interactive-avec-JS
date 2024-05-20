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



// let cards = document.querySelectorAll(".card");
// let cardText = document.querySelector("card-text");
// let viewButtons = document.querySelectorAll('.card .btn-success');
// let cardImage = cards.querySelector('.card-img-top');

let viewButtons = document.querySelectorAll('.card');

function reduce () {
  let card = this.closest('.card');
  let cardText = card.querySelector('.card-text');
  let cardImage = card.querySelector('.card-img-top');

  cardImage.style.transform = 'scale(0.2)';
  cardImage.style.transition = 'transform 1s';
  cardText.style.display = 'none';
}

function restore () {
  let card = this.closest('.card');
  let cardText = card.querySelector('.card-text');
  let cardImage = card.querySelector('.card-img-top');

  cardImage.style.transform = 'scale(1)';
  cardImage.style.transition = 'transform 1s';
  cardText.style.display = 'block';
}

viewButtons.forEach( button => {
  button.addEventListener('mouseover', reduce);
  button.addEventListener('mouseout', restore);
});


// Fonctionnalité 7

function next () {
  let rightButton = document.querySelector('.btn-secondary');
  let cardsContainer = document.querySelector('.album .row');
  let lastCard = cardsContainer.lastElementChild;
    cardsContainer.insertBefore(lastCard, cardsContainer.firstElementChild);
  }

let rightButton = document.querySelector('.btn-secondary');
rightButton.addEventListener('click', next);

// Fonctionnalité 8

let leftButton = document.querySelector('.btn-primary');

function left (event) {
  let cardsContainer = document.querySelector('.album .row');
  let firstCard = cardsContainer.firstElementChild;
  event.preventDefault();
  cardsContainer.appendChild(firstCard);
}
leftButton.addEventListener('click', left);