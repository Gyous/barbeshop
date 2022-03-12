// const { default: Swiper } = require("swiper");
$(function () {
  const swiper = new Swiper('.main-slider', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    effect: 'fade',
    loop: true,
  });
  $('.btn-menu').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');
    $(this).toggleClass('btn-menu--active');
    $('.body').toggleClass('body--active');
  });
  const swiperInterior = new Swiper('.interior__swiper', {
    loop: true,
    spaceBetween: 50,
    centeredSlides: true,
    slideToClickedSlide: true,
    speed: 700,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      1400: {
        spaceBetween: 150,
      },
      1200: {
        spaceBetween: 100,
      },
      1000: {
        spaceBetween: 80,
      }
    },
  });
  const swiperReviews = new Swiper('.reviews__swiper', {
    spaceBetween: 100,
    speed: 700,
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
    breakpoints: {
      1000: {
        slidesPerView: 2,
      }
    }
  });

  $('.contacts__services, .modal__services, .modal__barbers').styler({});

  new AirDatepicker('#data', []);

});

document.addEventListener("DOMContentLoaded", function () {
  let phoneInput = document.querySelectorAll('input[data-tel-input]');
  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  }
  let onPhoneInput = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = "",
      selectionStart = input.selectionStart;
    

    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (input.value.length != selectionStart){
      if(e.data && /\D/g.test(e.data)){
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      //Russin Number
      if (inputNumbersValue[0] == "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }
      let firstSymbol = (inputNumbersValue[0] == "8") ? "8" : "+7";
      formattedInputValue = firstSymbol + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5){
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8){
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10){
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  }
  let onPhoneKeyDown = function(e){
    let input = e.target;
    if(e.keyCode == 8 && getInputNumbersValue(input).length == 1){
      input.value = "";
    }
  }
  let onPhonePaste = function(e){
    let pasted = e.clipboardData || window.clipboardData,
        input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
    if (pasted){
      let pastedText = pasted.getData("Text");
      if (/\D/.test(pastedText)){
        input.value = inputNumbersValue;
      }
    }
  }
  for (i = 0; i < phoneInput.length; i++) {
    let input = phoneInput[i];
    input.addEventListener("input", onPhoneInput);
    input.addEventListener("keydown", onPhoneKeyDown);
    input.addEventListener("paste", onPhonePaste);
  }
});

$('.preview__btn').on('click', function(){
  $(this).toggleClass('preview__btn--active');
  $('.preview__list').toggleClass('preview__list--active');
  $('.body__preview').toggleClass('body__preview--active');
})

let galleryMix = mixitup('.gallery__list', {
  animation: {
    duration: 1000,
    clampHeight: false,
  }
})