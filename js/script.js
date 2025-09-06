let popup = document.querySelector(".popup");
let popup2 = document.querySelector(".popup2");
let exilises = document.querySelectorAll(".Exilis");
let refinements = document.querySelectorAll(".Refine");
let atses = document.querySelectorAll(".ATS");
let perlans = document.querySelectorAll(".Perlan");
let harvistas = document.querySelectorAll(".Harvista");
let florgibs = document.querySelectorAll(".Florgib");
let kudoses = document.querySelectorAll(".Kudos");
let starmaxGolds = document.querySelectorAll(".StarmaxGold");
let starmaxB2ms = document.querySelectorAll(".StarmaxB2m");
let starmaxTonuses = document.querySelectorAll(".StarmaxTonus");
let novagibs = document.querySelectorAll(".Novagib");
let puffers = document.querySelectorAll(".Puffer");
let starmaxTeams = document.querySelectorAll(".StarmaxTeam");
let starmaxCalcs = document.querySelectorAll(".StarmaxCalc");
let actimists = document.querySelectorAll(".Actimist");
let smartFreshes = document.querySelectorAll(".SmartFresh");
let slippers = document.querySelectorAll(".Slipper");

let LalStimFit = document.querySelectorAll(".LalStimFit");
let LalStimOsmo = document.querySelectorAll(".LalStimOsmo");
let Berrisys = document.querySelectorAll(".Berrisys");
let StarmaksSpectr = document.querySelectorAll(".StarmaksSpectr");

let popupImg = document.querySelector(".popup-img");
let popupImg21 = document.querySelector(".popup-img21");
let report = document.querySelector(".report");

exilises.forEach((exilis) => {
  exilis.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Exilis.webp";
    document.body.style.overflow;
  };
});

perlans.forEach((perlan) => {
  perlan.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Pelran.webp";
  };
});

atses.forEach((ats) => {
  ats.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Стармакс-сірка.webp";
  };
});

refinements.forEach((refine) => {
  refine.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Refine@1.5x.webp";
  };
});

harvistas.forEach((harvista) => {
  harvista.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Harvista-1@1.5x-scaled.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Harvista-2-scaled.webp";
    document.body.style.overflow = "hidden";
  };
});

Berrisys.forEach((Berrisys) => {
  Berrisys.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2025/08/Berrisys-scaled.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2025/08/catalog-2-scaled.webp";
    document.body.style.overflow = "hidden";
  };
});

florgibs.forEach((florgib) => {
  florgib.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/florgib.webp";
  };
});

kudoses.forEach((kudos) => {
  kudos.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Kudos.webp";
  };
});

StarmaksSpectr.forEach((StarmaksSpectr) => {
  StarmaksSpectr.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2025/08/2025-Стармакс-Спектр_00001.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2025/08/2025-Стармакс-Спектр_00002.webp";
    document.body.style.overflow = "hidden";
  };
});
starmaxGolds.forEach((starmaxGold) => {
  starmaxGold.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-ГОЛД-1@1.5x.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-ГОЛД-2@1.5x.webp";
    document.body.style.overflow = "hidden";
  };
});

starmaxB2ms.forEach((starmaxB2m) => {
  starmaxB2m.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-В2М-1@1.5x.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-В2М-2@1.5x.webp";
    document.body.style.overflow = "hidden";
  };
});

starmaxTonuses.forEach((starmaxTonus) => {
  starmaxTonus.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-ТОНУС-1@1.5x.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-ТОНУС-2@1.5x.webp";
    document.body.style.overflow = "hidden";
  };
});

novagibs.forEach((novagib) => {
  novagib.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Novagib.webp";
  };
});

LalStimFit.forEach((LalStimFit) => {
  LalStimFit.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2025/07/Group-744-scaled.webp";
  };
});

LalStimOsmo.forEach((LalStimOsmo) => {
  LalStimOsmo.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2025/09/Осмо-scaled.webp";
  };
});

puffers.forEach((puffer) => {
  puffer.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Puffer.webp";
  };
});

starmaxTeams.forEach((starmaxTeam) => {
  starmaxTeam.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-ТЕАМ-1@1.5x.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-ТЕАМ-2@1.5x.webp";
    document.body.style.overflow = "hidden";
  };
});

starmaxCalcs.forEach((starmaxCalc) => {
  starmaxCalc.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-КАЛЬЦІЙ-1@1.5x.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-КАЛЬЦІЙ-2@1.5x.webp";
    document.body.style.overflow = "hidden";
  };
});

starmaxCalcs.forEach((starmaxCalc) => {
  starmaxCalc.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-КАЛЬЦІЙ-1@1.5x.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/СТАРМАКС-КАЛЬЦІЙ-2@1.5x.webp";
    document.body.style.overflow = "hidden";
  };
});

actimists.forEach((actimist) => {
  actimist.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2025/07/актіміст-1-1-scaled.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2025/08/ActiMist-flex-scaled.webp";
    document.body.style.overflow = "hidden";
  };
});

smartFreshes.forEach((smartFresh) => {
  smartFresh.onclick = function () {
    popup.style.display = "flex";
    popupImg21.style.display = "flex";
    popupImg21.style.position = "absolute";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/SmartFresh-1@1.5x-scaled.webp";
    popupImg21.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/SmartFresh-2@1.5x.webp";
    document.body.style.overflow = "hidden";
  };
});

slippers.forEach((slipper) => {
  slipper.onclick = function () {
    popup.style.display = "flex";
    popupImg.src =
      "https://freshagro.com.ua/wp-content/uploads/2024/02/Slipper@1.5x.webp";
  };
});

window.onclick = function (event) {
  if (event.target === popup || event.target === popup2) {
    popup.style.display = "none";
    popup2.style.display = "none";
    popupImg21.style.display = "none";
    document.body.style.overflow = "auto";
  }
};
