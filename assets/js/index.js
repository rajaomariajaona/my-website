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
    type: ["web","mobile"],
    image: "assets/images/hero.jpg",
    body: "Plateforme de Livraison <strong>Mtatitra </strong>",
    details: "",
  },
  {
    type: ["web","mobile"],
    image: "assets/images/hero.jpg",
    body:
      "<strong>Markovid</strong> - Carte de representation des zones chaudes Covid à Madagascar",
    details: "",
  },
  {
    type: ["mobile"],
    image: "assets/images/hero.jpg",
    body: "Application de gestion du centre <strong> Berisheba</strong>",
    details: "",
  },

  {
    type: ["web"],
    image: "assets/images/hero.jpg",
    body:
      "<strong>AgriZara</strong> - Première place lors du <strong>FrontEnd Award 2019</strong> (organisé par Techzara)",
    details: "",
  },
  {
    type: ["web","mobile"],
    image: "assets/images/hero.jpg",
    body:
      "<strong>Covid Tracker</strong> - Troisième place lors du <strong>Hackoragna 2020</strong>",
    details: "",
  },
];

function generateCard(obj) {
    let type = "";
    for(const t of obj.type){
        type += t + " ";
    }
  return `<div class="col-md-3 col-10 my-3 grid-item ${type}" data-category="${type}">
    <div class="card">
        <div class="container-card-img">
            <img class="card-img" src="${obj.image}" alt="">
            <div class="container-card-img-button mx-0 row justify-content-center">
                <div class="col-4"><button class="btn"><i class="fa fa-images"></i></button></div>
                <div class="col-4"><button class="btn"><i class="fa fa-info-circle"></i></button></div>
            </div>
        </div>
        <div class="card-body">
        ${obj.body}
        </div>
    </div>
</div>`;
}

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
  for (let card of cards) {
    cardsDom += generateCard(card);
  }
  $("#cards").html(cardsDom);
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
    $grid.isotope({ filter: type })
}
