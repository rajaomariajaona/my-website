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
    id: 1,
    title: "Cliquez pour voir plus",
    type: ["web", "mobile"],
    image: "assets/images/hero.jpg",
    body: "Plateforme de Livraison <strong>Mtatitra </strong>",
    details: "",
    captures: [
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "1",
        },
      },
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "2",
        },
      },
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "3",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Cliquez pour voir plus",
    type: ["web", "mobile"],
    image: "assets/images/hero.jpg",
    body:
      "<strong>Markovid</strong> - Carte de representation des zones chaudes Covid à Madagascar",
    details: "",
    captures: [
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "1",
        },
      },
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "2",
        },
      },
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "3",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Cliquez pour voir plus",
    type: ["mobile"],
    image: "assets/images/hero.jpg",
    body: "Application de gestion du centre <strong> Berisheba</strong>",
    details: "",
    captures: [
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "1",
        },
      },
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "2",
        },
      },
      {
        src: "assets/images/hero.jpg",
        opts: {
          caption: "3",
        },
      },
    ],
  },

  {
    id: 4,
    title: "Cliquez pour voir plus",
    type: ["web"],
    image: "assets/images/agrizara/acceuil.gif",
    body:
      "<strong>AgriZara</strong> - Première place lors du <strong>FrontEnd Award 2019</strong> (organisé par Techzara)",
    details: "",
    captures: [
      {
        src: "assets/images/agrizara/1.mp4",
        opts: {
          caption: "Acceuil",
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
    image: "assets/images/rda/acceuil.jpg",
    body:
      "<strong>RDA</strong> - Remote Desktop App",
    details: "",
    captures: [
      {
        src: "assets/images/rda/1.mp4",
        opts: {
          caption: "Control",
        },
      },
      {
        src: "assets/images/rda/2.mp4",
        opts: {
          caption: "Transfer fichier",
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
  return `<div class="col-md-3 col-10 my-3 grid-item ${type}" onclick="javascript:openFancy(${index});" data-src="#owl${obj.id}" data-category="${type}">
    <div class="card">
        <div class="container-card-img">
            <img class="card-img" src="${obj.image}" alt="">
            <div class="container-card-img-button mx-0 row justify-content-center">
                <div>
                   <center> <h5>${obj.title}</h5> </center>
                </div>
            </div>
        </div>
        <div class="card-body">
        ${obj.body}
        </div>
    </div>
</div>`;
}

$(document).ready(function () {
    var typed = new Typed('.test', {
        stringsElement: '.text-home',
        typeSpeed: 30
    });
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
    buttons: [
      "zoom",
      "slideShow",
      "fullScreen",
      "thumbs",
      "close",
    ],
    protect: true,
    preventCaptionOverlap: true,
    loop: true,
  });
}
