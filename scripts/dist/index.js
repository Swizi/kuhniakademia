"use strict";

var images_array = [0, 0, 0, 0];

(function () {
  var page = 1;
  var number, header_text, helper_text, image_0, image_1, image_2, chosen_image, width;
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("menu");
  var social_webs_button = document.querySelector(".social_webs_button");
  var make_call_button = document.querySelector(".make_call_button");
  var free_measuring_button = document.querySelector(".book_button");
  var popup_free_measuring = document.querySelector(".popup_free_measuring");
  var price_button = document.querySelector(".price_button");
  var popup_kitchen_price = document.querySelector(".popup_kitchen_price");
  var black_window = document.querySelector(".black_window");
  var body = document.body;
  var button_next = document.querySelector(".button_next");
  var button_back = document.querySelector(".button_back");
  var button_back_form = document.querySelector(".button_back_form");
  var first_image = document.querySelector(".popup_price_image_block_first");
  var second_image = document.querySelector(".popup_price_image_block_second");
  var third_image = document.querySelector(".popup_price_image_block_third"); // startX = body.clientWidth/2,
  // startY = 300,
  // w = document.documentElement.offsetWidth,
  // h = document.documentElement.offsetHeight;

  if (document.body.clientWidth < 500) {
    document.getElementsByClassName("reviews_block")[0].classList.remove("revealator-slideright");
    document.getElementsByClassName("reviews_block")[0].classList.remove("revealator-duration5");
    document.getElementsByClassName("reviews_block")[0].classList.remove("revealator-once");
    document.getElementsByClassName("location_block")[0].classList.remove("revealator-slideright");
    document.getElementsByClassName("location_block")[0].classList.remove("revealator-duration5");
    document.getElementsByClassName("location_block")[0].classList.remove("revealator-once");
  }

  window.onkeydown = function (e) {
    if (e.keyCode == 27 && black_window.classList[1] == "black_window_active") {
      // Нажатие клавиши Escape
      if (popup_free_measuring.classList[1] == "active_block") {
        popup_free_measuring.classList.toggle("active_block");
      }

      if (popup_kitchen_price.classList[1] == "active_block") {
        popup_kitchen_price.classList.toggle("active_block");
      }

      black_window.classList.toggle("black_window_active");
      body.style.overflowY = "scroll";
    }

    if (Number(body.clientWidth) < 700) {
      burger.style.display = "block";
    }
  };

  burger.addEventListener("click", function () {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
  });
  social_webs_button.addEventListener("click", function () {
    social_webs_button.classList.toggle("social_button_active");
    document.getElementById("webs_list").classList.toggle("social_webs_active");
  });
  make_call_button.addEventListener("click", function () {
    document.getElementById("make_call_button").style.animation = "0.5s make_call_button_move_back";

    if (document.body.clientWidth > 500) {
      make_call_button.classList.toggle("make_call_button_active"); // make_call_button.style.animation = "0.5s make_call_button_move_back;";

      document.getElementById("fixed_callback_form").classList.toggle("fixed_callback_form_active");
    } else {
      document.location.href = "tel:+79877002883";
    }
  });
  free_measuring_button.addEventListener("click", function () {
    popup_free_measuring.classList.toggle("active_block");
    black_window.classList.toggle("black_window_active");
    body.style.overflowY = "hidden";

    if (Number(body.clientWidth) < 700) {
      burger.style.display = "none";
    }
  });
  price_button.addEventListener("click", function () {
    popup_kitchen_price.classList.toggle("active_block");
    black_window.classList.toggle("black_window_active");
    body.style.overflowY = "hidden";

    if (Number(body.clientWidth) < 700) {
      burger.style.display = "none";
    }
  });
  black_window.addEventListener("click", function () {
    if (popup_free_measuring.classList[1] == "active_block") {
      popup_free_measuring.classList.toggle("active_block");
    }

    if (popup_kitchen_price.classList[1] == "active_block") {
      popup_kitchen_price.classList.toggle("active_block");
    }

    black_window.classList.toggle("black_window_active");
    body.style.overflowY = "scroll";

    if (Number(body.clientWidth) < 700) {
      burger.style.display = "block";
    }
  });
  button_next.addEventListener("click", function () {
    if (page < 5) {
      page++;
    }

    changeStyle();
  });
  button_back.addEventListener("click", function () {
    if (page > 1) {
      page--;
    }

    changeStyle();
  });
  button_back_form.addEventListener("click", function () {
    page--;
    changeStyle();
  });
  first_image.addEventListener("click", function () {
    images_array[page - 1] = 1;
    changeStyle();
  });
  second_image.addEventListener("click", function () {
    images_array[page - 1] = 2;
    changeStyle();
  });
  third_image.addEventListener("click", function () {
    images_array[page - 1] = 3;
    changeStyle();
  });

  function changeStyle() {
    if (page > 1) {
      button_back.style.opacity = 1;
    } else {
      button_back.style.opacity = 0.6;
    }

    switch (page) {
      case 1:
        switch (images_array[0]) {
          case 0:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 1:
            document.getElementById("first_tick").style.display = "flex";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 2:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "flex";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 3:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "flex";
        }

        number = "1/4";
        header_text = "Фасады МДФ в пластике";
        helper_text = "от 22т.р. за пог.м";
        image_0 = 'url("https://thumb.tildacdn.com/tild6261-3932-4534-b437-383862626364/-/cover/210x210/left/top/-/format/webp/002_1.jpg")';
        image_1 = 'url("https://thumb.tildacdn.com/tild3464-6237-4630-b139-373530363932/-/cover/210x210/left/top/-/format/webp/004_1.jpg")';
        image_2 = 'url("https://thumb.tildacdn.com/tild3036-3761-4337-b266-343065633630/-/cover/210x210/left/top/-/format/webp/005_1.jpg")';
        chosen_image = "";
        width = "0";
        break;

      case 2:
        switch (images_array[1]) {
          case 0:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 1:
            document.getElementById("first_tick").style.display = "flex";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 2:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "flex";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 3:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "flex";
        }

        number = "2/4";
        header_text = "Фасады МДФ в плёнке";
        helper_text = "от 19т.р. за пог.м";
        image_0 = 'url("https://thumb.tildacdn.com/tild6339-3066-4363-a564-643064373265/-/cover/210x210/left/top/-/format/webp/012_1.jpg")';
        image_1 = 'url("https://thumb.tildacdn.com/tild6234-3666-4438-a533-393763633238/-/cover/210x210/left/top/-/format/webp/009_1.jpg")';
        image_2 = 'url("https://thumb.tildacdn.com/tild3365-6535-4334-b164-356334326634/-/cover/210x210/left/top/-/format/webp/003_1.jpg")';
        chosen_image = "";
        width = "25%";
        break;

      case 3:
        switch (images_array[2]) {
          case 0:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 1:
            document.getElementById("first_tick").style.display = "flex";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 2:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "flex";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 3:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "flex";
        }

        number = "3/4";
        header_text = "Фасады МДФ в матовой эмали";
        helper_text = "от 24т.р. за пог.м";
        image_0 = 'url("https://thumb.tildacdn.com/tild6335-6439-4737-b866-383130653133/-/cover/210x210/left/top/-/format/webp/001_1.jpg")';
        image_1 = 'url("https://thumb.tildacdn.com/tild3937-6538-4831-b332-353662313437/-/cover/210x210/left/top/-/format/webp/007_1.jpg")';
        image_2 = 'url("https://thumb.tildacdn.com/tild3964-6233-4337-a265-383634613438/-/cover/210x210/left/top/-/format/webp/006_1.jpg")';
        chosen_image = "";
        width = "50%";
        break;

      case 4:
        switch (images_array[3]) {
          case 0:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 1:
            document.getElementById("first_tick").style.display = "flex";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 2:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "flex";
            document.getElementById("third_tick").style.display = "none";
            break;

          case 3:
            document.getElementById("first_tick").style.display = "none";
            document.getElementById("second_tick").style.display = "none";
            document.getElementById("third_tick").style.display = "flex";
        }

        number = "4/4";
        header_text = "Фасады МДФ в глянцевой эмали";
        helper_text = "от 28т.р. за пог.м";
        image_0 = 'url("https://thumb.tildacdn.com/tild3539-6435-4034-a338-306138323564/-/cover/210x210/left/top/-/format/webp/011_1.jpg")';
        image_1 = 'url("https://thumb.tildacdn.com/tild3833-6165-4333-b963-333136333033/-/cover/210x210/left/top/-/format/webp/008_1.jpg")';
        image_2 = 'url("https://thumb.tildacdn.com/tild6566-3766-4139-b235-326330316539/-/cover/210x210/left/top/-/format/webp/010_1.jpg")';
        chosen_image = "";
        width = "75%";
        document.getElementsByClassName("popup_price_header_block_left")[0].style.display = "flex";
        document.getElementsByClassName("popup_price_header_block_number")[0].style.display = "flex";
        document.getElementsByClassName("popup_request_header_block")[0].style.display = "none";
        document.getElementsByClassName("popup_price_data_block")[0].style.display = "block";
        document.getElementsByClassName("popup_request_contact_block")[0].style.display = "none";
        document.getElementsByClassName("popup_price_buttons_block")[0].style.display = "flex";
        document.getElementsByClassName("popup_price_buttons_block_form")[0].style.display = "none";
        document.getElementsByClassName("popup_request_contact_block")[0].style.paddingBottom = "180px";
        break;

      case 5:
        document.getElementsByClassName("popup_price_header_block_left")[0].style.display = "none";
        document.getElementsByClassName("popup_price_header_block_number")[0].style.display = "none";
        document.getElementsByClassName("popup_request_header_block")[0].style.display = "flex";
        document.getElementsByClassName("popup_price_data_block")[0].style.display = "none";
        document.getElementsByClassName("popup_request_contact_block")[0].style.display = "flex";
        document.getElementsByClassName("popup_price_buttons_block")[0].style.display = "none";
        document.getElementsByClassName("popup_price_buttons_block_form")[0].style.display = "flex";
        document.getElementsByClassName("popup_request_contact_block")[0].style.paddingBottom = "0";
        width = "100%";
    }

    document.getElementById("number").innerHTML = number;
    document.getElementById("header_text").innerHTML = header_text;
    document.getElementsByClassName("popup_price_data_helper_text")[0].innerHTML = helper_text;
    document.getElementsByClassName("popup_price_image_block_first")[0].style.backgroundImage = image_0;
    document.getElementsByClassName("popup_price_image_block_second")[0].style.backgroundImage = image_1;
    document.getElementsByClassName("popup_price_image_block_third")[0].style.backgroundImage = image_2;
    document.getElementsByClassName("progress_line")[0].style.width = width;
  }
})();

window.onscroll = function opacityHeader() {
  var header = document.querySelector(".header_block");
  var menu_active = document.querySelector(".menu_active");

  if (window.pageYOffset > 100) {
    header.classList.add("header_fixed");

    if (menu_active) {
      menu_active.classList.add("menu_fixed");
    }
  } else {
    header.classList.remove("header_fixed");

    if (menu_active) {
      menu_active.classList.remove("menu_fixed");
    }
  }
};

var mySiema = new Siema({
  perPage: 1
});
document.querySelector('.prev_button_portfolio').addEventListener('click', function () {
  return mySiema.prev();
});
document.querySelector('.next_button_portfolio').addEventListener('click', function () {
  return mySiema.next();
});
document.querySelector('.slide_01').addEventListener('click', function () {
  return mySiema.goTo(0);
});
document.querySelector('.slide_02').addEventListener('click', function () {
  return mySiema.goTo(1);
});
document.querySelector('.slide_03').addEventListener('click', function () {
  return mySiema.goTo(2);
});
document.querySelector('.slide_04').addEventListener('click', function () {
  return mySiema.goTo(3);
});
document.querySelector('.slide_05').addEventListener('click', function () {
  return mySiema.goTo(4);
});
document.querySelector('.slide_06').addEventListener('click', function () {
  return mySiema.goTo(5);
});
document.querySelector('.slide_07').addEventListener('click', function () {
  return mySiema.goTo(6);
});
document.querySelector('.slide_08').addEventListener('click', function () {
  return mySiema.goTo(7);
});
document.querySelector('.slide_09').addEventListener('click', function () {
  return mySiema.goTo(8);
});
document.querySelector('.slide_10').addEventListener('click', function () {
  return mySiema.goTo(9);
});
document.querySelector('.slide_11').addEventListener('click', function () {
  return mySiema.goTo(10);
});
document.querySelector('.slide_12').addEventListener('click', function () {
  return mySiema.goTo(11);
});
document.querySelector('.slide_13').addEventListener('click', function () {
  return mySiema.goTo(12);
});
document.querySelector('.slide_14').addEventListener('click', function () {
  return mySiema.goTo(13);
});
document.querySelector('.slide_15').addEventListener('click', function () {
  return mySiema.goTo(14);
});
document.querySelector('.slide_16').addEventListener('click', function () {
  return mySiema.goTo(15);
});
$(document).ready(function () {
  $(".slider").slick();
});
$(function () {
  $(".slide_choose_image").slice(0, 3).show();
  $(".slide_open_images_button").on('click', function (e) {
    e.preventDefault();
    $(".slide_choose_image:hidden").slice(0, 3).slideDown();

    if (document.getElementsByClassName("slide_choose_image")[12].clientWidth !== 0) {
      document.getElementsByClassName("slide_open_images_button")[0].style.display = "none";
    } else {
      document.getElementsByClassName("slide_open_images_button")[0].style.display = "block";
    }
  });
});
AOS.init({
  // Global settings:
  disable: 'mobile',
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 10,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});