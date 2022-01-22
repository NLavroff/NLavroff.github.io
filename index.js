"use strict";

const cards = document.querySelector(".cards");

const projects = [
  {
    name: "Vivo Green",
    picture: "img/projet1.png",
    link: "https://www.vivo-green.fr/",
    textModal: "Ce projet a été réalisé en binôme dans le cadre de ma formation chez DonkeySchool. Nous avons eu  2 semaines pour livrer ce site vitrine pour un vrai client. De la configuration du nom de domaine, jusqu'aux rendez-vous client, nous avons pu explorer toutes les étapes de l'élaboration d'un site web sur Wordpress.<br>Compétences acquises : Wordpress, PHP8, CSS3"
  },
  {
    name: "Malice Shop",
    picture: "img/projet2.png",
    link: "https://malice-shop.fr/",
    textModal: "J'ai réalisé ce projet sous Wordpress pour une jeune créatrice de mode qui souhaite présenter et vendre ses créations en ligne. L'ouverture de ce site est prévue pour le 20 mars 2022.<br>Stack utilisés : Wordpress, PHP8, CSS3"
  },
  {
    name: "DonkeyEvent",
    picture: "img/projet3.png",
    link: "https://github.com/Nathboule/DonkeyEvent",
    textModal: "Ce projet a été réalisé en trinôme dans le cadre de ma formation chez DonkeySchool. Nous avons eu 2 semaines pour réaliser une billetterie en ligne sous PHP via la méthode AGILE. Nous avons conçu une base de donnée, un panier d'achat et un CRUD. <br>Stack utilisés : PHP8, HTML5, CSS3, Bootsrap5, MySQL"
  },
];

function createCard(title, imageUrl, link, textModal, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardImg.link = link;
  cardImg.addEventListener("click", function (e) {
    window.open(e.target.link);
  });
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("button");
  cardTitle.classList.add("modal-open");
  cardTitle.setAttribute('data-id', "modalCard-" + index);
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);

  
  let modalDiv = document.createElement("div");
  modalDiv.innerHTML =  "<div id=\"modalCard-" + index + "\" class=\"modal\" role=\"dialog\" tabindex=\"-1\">" +
                          "<div class=\"model-inner\">" +
                            "<div class=\"modal-header\">" +
                              "<h3>" + title + "</h3>" +
                                "<button class=\"modal-close\" data-id=\"modalCard-" + index + "\" aria-label=\"Close\">&times;</button>" +
                            "</div>" +
                            "<p>" + textModal + "</p>" +
                          "</div>" +
                        "</div>";
  
  let projDiv = document.getElementById("projets");
  projDiv.appendChild(modalDiv);
}

for (let i = 0; i < projects.length; i++) {
  createCard(projects[i].name, projects[i].picture, projects[i].link, projects[i].textModal, i);
}

let modal;
document.addEventListener("click", (e) => {
  if (e.target.className === "modal-open") {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
  } else if (e.target.className === "modal-close") {
    closeModal(modal);
  } else {
    return;
  }
});

const openModal = (modal) => {
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  document.body.appendChild(overlay);
};

const closeModal = (modal) => {
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("modal-overlay"));
};