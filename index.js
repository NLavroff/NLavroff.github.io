"use strict";

const cards = document.querySelector(".cards");

const projects = [
  {
    name: "Vivo Green",
    picture: "img/projet1.png",
    link: "https://www.vivo-green.fr/",
  },
  {
    name: "Malice Shop",
    picture: "img/projet2.png",
    link: "https://malice-shop.fr/",
  },
  {
    name: "DonkeyEvent",
    picture: "img/projet3.png",
    link: "https://www.vivo-green.fr/",
  },
];

function createCard(title, imageUrl, link) {
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

  // const cardLink = document.createElement("a");
  // cardLink.classList.add("card-link");
  // cardLink.href = link;
  // cardLink.innerHTML = "Le visiter";
  // cardBody.appendChild(cardLink);

  const cardButton = document.createElement("button");
  cardButton.classList.add("btn");
  cardButton.classList.add("btn-outline-primary");
  cardButton.onclick = visitSite(link);
  // cardButton.disabled;
  //cardButton.href = link;
  cardButton.innerHTML = "Le visiter";
  cardBody.appendChild(cardButton);
}

function visitSite(link) {
  //window.open(link);
  console.log("tamere");
}

for (let i = 0; i < projects.length; i++) {
  createCard(projects[i].name, projects[i].picture, projects[i].link);
}
