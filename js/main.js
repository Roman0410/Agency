Fancybox.bind("[data-fancybox]", {
  Thumbs: {
    showOnStart: false,
  },
});

$(".copyright-year").text(new Date().getFullYear());

$(".burger-menu").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
  $("body").toggleClass("lock");
});

$(".header .search_btn").click(function () {
  $(".search-banner").toggleClass("open");
  $(this)
    .closest(".search_wrapper")
    .find(".search_results-list")
    .removeClass("active");
});
$(".cart-wrapper .close").click(function () {
  $(".cart-wrapper").toggleClass("active");
  $("body").toggleClass("lock");
});

$(".search-banner .close").click(function () {
  $(".search-banner").removeClass("open");
});

//-----------------------SLIDERS-----------------------//
$(".gallery-list").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".gallery").find(".prev"),
  nextArrow: $(".gallery").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

if ($(window).width() <= 768) {
  $(".partners-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
}

$(document).ready(function () {
  var $phoneInput = $("#tel, .tel");

  $phoneInput.on("input", function (e) {
    var input = e.target;
    var value = input.value.replace(/\D/g, "");

    if (!value.startsWith("38")) {
      value = "38" + value;
    }

    var match = value.match(/^38(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (match) {
      input.value =
        "+38" +
        (match[1] ? " (" + match[1] : "") +
        (match[2] ? ") " + match[2] : "") +
        (match[3] ? "-" + match[3] : "") +
        (match[4] ? "-" + match[4] : "");
    }
  });

  $phoneInput.on("keydown", function (e) {
    if (
      e.target.selectionStart < 4 &&
      (e.key === "Backspace" || e.key === "Delete")
    ) {
      e.preventDefault();
    }
  });
});

const validation = new JustValidate("#main-form");
validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField(".phoneInput", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 19,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
