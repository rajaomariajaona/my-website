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

$(document).ready(function () {
  changeColors();
  $(window).scroll(changeColors);
  $(".more-info").click((e) => {
    let currentButton = $(e.currentTarget)
    let currentCardBody = currentButton.parent().parent().find(".card-body").first();
    if(currentCardBody.hasClass("d-none")){
        currentCardBody.removeClass("d-none")
    }else{
        currentCardBody.addClass("d-none")
    }
  })
});
