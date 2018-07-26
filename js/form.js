"use strict";

var form = document.querySelector(".contacts__form");
var coords = form.getBoundingClientRect();

document.onscroll = function(event) {
  var pageY = document.documentElement.scrollTop;
  if(pageY + innerHeight > coords.top) {
    form.classList.add("contacts__form--animation");
  }
  else {
    form.classList.remove("contacts__form--animation");
  }
};
