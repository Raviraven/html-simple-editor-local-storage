"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


const descriptionTextarea = document.querySelector(".container-form__description--js");
const descriptionSave = document.querySelector(".container-form__save--js");
const descriptionLoad = document.querySelector(".container-form__load--js");

// descriptionTextarea.addEventListener("keyup", (e) => {

// });

descriptionSave.addEventListener("click", e => {
  localStorage.setItem("simple-description", descriptionTextarea.value);
});

descriptionLoad.addEventListener("click", e => {
  if (localStorage.getItem("simple-description")) {
    descriptionTextarea.value = localStorage.getItem("simple-description");
  }
});
