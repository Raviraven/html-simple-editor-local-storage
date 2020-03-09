"use strict";

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
