'use strict';

const cards = document.querySelector(".cards");

const projects = [
    {
        name: "Malice Shop",
        picture: "img/projet2.png"
    },
    {
        name: "DonkeyEvent",
        picture: "img/projet3.png"
    }
];

function createCard(title, imageUrl) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
  
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = title;
    cardBody.appendChild(cardTitle);
  
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = "Voir plus de détails";
    cardBody.appendChild(cardButton);
  }
  
    for (let i = 0; i < projects.length; i++) {
      createCard(projects[i].name, projects[i].picture);
    }

    function clickOnCardImg() {
        
    }