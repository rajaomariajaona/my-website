function changeColors() {
  var scroll = $(window).scrollTop();
  if (scroll > 60) {
    $("#navbar")
      .removeClass("bg-transparent")
      .addClass("bg-white")
      .removeClass("navbar-dark")
      .addClass("navbar-light")
      .removeClass("border-bottom-0");
  } else {
    $("#navbar")
      .addClass("bg-transparent")
      .removeClass("bg-white")
      .addClass("navbar-dark")
      .removeClass("navbar-light")
      .addClass("border-bottom-0");
  }
}

let cards = [
  {
    id: 3,
    title: "Cliquez pour voir plus",
    type: ["mobile"],
    technologie: ["Nodejs", "Flutter", "Socket.io"],
    image: "assets/images/berisheba/acceuil.jpg",
    body: "Application de gestion du centre <strong> Berisheba</strong>",
    details: "",
    captures: [
      {
        src: "assets/images/berisheba/1.jpg",
        opts: {
          caption: "Accueil",
        },
      },
      {
        src: "assets/images/berisheba/2.jpg",
        opts: {
          caption: "Page Client",
        },
      },
      {
        src: "assets/images/berisheba/3.jpg",
        opts: {
          caption: "Details Client",
        },
      },
      {
        src: "assets/images/berisheba/4.jpg",
        opts: {
          caption: "Choix couleur Reservation",
        },
      },
      {
        src: "assets/images/berisheba/5.jpg",
        opts: {
          caption: "Page Reservation",
        },
      },
      {
        src: "assets/images/berisheba/6.jpg",
        opts: {
          caption: "Page Reservation",
        },
      },
      {
        src: "assets/images/berisheba/7.png",
        opts: {
          caption: "Facture avec exportation et partage",
        },
      },
      {
        src: "assets/images/berisheba/8.jpg",
        opts: {
          caption: "Page Ustensile",
        },
      },
      {
        src: "assets/images/berisheba/9.jpg",
        opts: {
          caption: "Statistiques par mois",
        },
      },
      {
        src: "assets/images/berisheba/10.png",
        opts: {
          caption: "Accueil backoffice",
        },
      },
      {
        src: "assets/images/berisheba/11.png",
        opts: {
          caption: "Authentification par appareil",
        },
      },
      {
        src: "assets/images/berisheba/12.jpg",
        opts: {
          caption: "Demande d'accès",
        },
      },
      {
        src: "assets/images/berisheba/realtime.mp4",
        opts: {
          caption: "Temps réel",
        },
      },
    ],
  },

  {
    id: 4,
    title: "Cliquez pour voir plus",
    type: ["web"],
    technologie: ["Bootstrap", "Animejs", "SVG"],
    image: "assets/images/agrizara/acceuil.jpg",
    body:
      "<strong>AgriZara</strong> - Première place lors du <strong>FrontEnd Award 2019</strong> (organisé par Techzara)",
    details: "",
    captures: [
      {
        src: "assets/images/agrizara/1.mp4",
        opts: {
          caption: "Accueil",
        },
      },
      {
        src: "assets/images/agrizara/2.mp4",
        opts: {
          caption: "Agriculture malagasy",
        },
      },
      {
        src: "assets/images/agrizara/3.mp4",
        opts: {
          caption: "Offres et demande",
        },
      },
      {
        src: "assets/images/agrizara/4.mp4",
        opts: {
          caption: "Exchange box",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Cliquez pour voir plus",
    type: ["web", "mobile"],
    technologie: ["Nodejs", "Angular", "Flutter"],
    image: "assets/images/covid/acceuil.png",
    body:
      "<strong>Covid Tracker</strong> - Troisième place lors du <strong>Hackoragna 2020</strong>",
    details: "",
    captures: [
      {
        src: "assets/images/covid/1.png",
        opts: {
          caption: "",
        },
      },
      {
        src: "assets/images/covid/2.png",
        opts: {
          caption: "",
        },
      },
      {
        src: "assets/images/covid/3.png",
        opts: {
          caption: "",
        },
      },
      {
        src: "assets/images/covid/4.png",
        opts: {
          caption: "",
        },
      },
      {
        src: "assets/images/covid/5.png",
        opts: {
          caption: "",
        },
      },
      {
        src: "assets/images/covid/6.png",
        opts: {
          caption: "",
        },
      },
      {
        src: "assets/images/covid/7.png",
        opts: {
          caption: "",
        },
      },
      {
        src: "assets/images/covid/8.png",
        opts: {
          caption: "",
        },
      },
      {
        src: "assets/images/covid/9.png",
        opts: {
          caption: "",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Cliquez pour voir plus",
    type: ["desktop"],
    technologie: ["Java", "JavaFX", "Socket"],
    image: "assets/images/rda/acceuil.jpg",
    body: "<strong>RDA</strong> - Remote Desktop App",
    details: "",
    captures: [
      {
        src: "assets/images/rda/1.mp4",
        opts: {
          caption: "Démo Machine virtuelle: Contrôle Clavier, Souris, Partage presse papier bidirectionnel, Partage Fichier",
        },
      },
    ],
  },
];

function generateCard(obj, index) {
  let type = "";
  for (const t of obj.type) {
    type += t + " ";
  }
  let techs = "";
  for (let i = 0; i < obj.technologie.length; i++) {
    techs += `<span class="badge badge-pill badge-${i + 1} techs">${
      obj.technologie[i]
    }</span>`;
  }
  return `<div class="col-md-3 col-10 my-3 grid-item ${type}"  data-src="#owl${obj.id}" data-category="${type}">
    <div class="card">
        <div class="container-card-img" onclick="javascript:openFancy(${index});">
            <img class="card-img" src="${obj.image}" alt="">
            <div class="container-card-img-button mx-0 row justify-content-center">
                <div>
                   <center> <h5>${obj.title}</h5> </center>
                </div>
            </div>
        </div>
        <div class="card-body">
        ${obj.body} <br> <br>
        ${techs}
        </div>
    </div>
</div>`;
}

$(window).bind("load", function () {
  $("body").removeClass("disable-scroll");
  $("#loader").attr("style", "display: none");
  var typed = new Typed(".test", {
    stringsElement: ".text-home",
    typeSpeed: 30,
  });
  new WOW().init();
});

$(document).ready(function () {
  changeColors();
  $(window).scroll(changeColors);
  $(".more-info").click((e) => {
    let currentButton = $(e.currentTarget);
    let currentCardBody = currentButton
      .parent()
      .parent()
      .find(".card-body")
      .first();
    if (currentCardBody.hasClass("d-none")) {
      currentCardBody.removeClass("d-none");
    } else {
      currentCardBody.addClass("d-none");
    }
  });
  let cardsDom = "";
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsDom += generateCard(card, i);
  }
  $("#cards").html(cardsDom);
  //   $(".owl-carousel").owlCarousel();
  $("[data-fancybox]").fancybox({
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
    protect: true,
    preventCaptionOverlap: true,
  });
});

function filter(event, type) {
  event.preventDefault();
  $(".btn-portfolio").removeClass("active");
  var $grid = $(".grid").isotope({
    // options
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });
  $(event.currentTarget).addClass("active");
  console.log(type);
  $grid.isotope({ filter: type });
}
function openFancy(index) {
  $.fancybox.open(cards[index].captures, {
    buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
    protect: true,
    preventCaptionOverlap: true,
    loop: true,
    video: {
      tpl:
        '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}" loop>' +
        '<source src="{{src}}" type="{{format}}" />' +
        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
        "</video>",
    },
  });
}
