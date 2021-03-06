"use strict";
function ibg(){
  var ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) { 
    if( ibg[i].querySelector('img') ){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; 
    } 
  }
}  
ibg();

var cardPortfolio = document.querySelector('.grid__card') ? document.querySelectorAll('.grid > *') : false;

if (cardPortfolio) {
  for (var index = 0; index < cardPortfolio.length; index++) {
    const element = cardPortfolio[index];
    const wrapper = element.querySelector('.grid__card__wrapper')
    wrapper.style.width = (Math.floor(element.clientWidth / 2) * 2) + "px";
    wrapper.style.height = (Math.floor(element.clientHeight / 2) * 2) + "px"
    var text = wrapper.querySelector('p')
    text.innerText = overflowCircle(text.innerText, 150)
  }
  window.onresize = function () {
    for (var index = 0; index < cardPortfolio.length; index++) {
      const element = cardPortfolio[index];
      const wrapper = element.querySelector('.grid__card__wrapper')
      wrapper.style.width = (Math.floor(element.clientWidth / 2) * 2)  + "px";
      wrapper.style.height = (Math.floor(element.clientHeight / 2) * 2) + "px"
    }
  }
  window.onload = function () {
    for (var index = 0; index < cardPortfolio.length; index++) {
      const element = cardPortfolio[index];
      const wrapper = element.querySelector('.grid__card__wrapper')
      wrapper.style.width = (Math.floor(element.clientWidth / 2) * 2) + "px";
      wrapper.style.height = (Math.floor(element.clientHeight / 2) * 2) + "px"
    }
  }
 
}
function overflowCircle(string, maxsumbols) {
  if (string.length >= maxsumbols) {
    return string.slice(0, maxsumbols - 1) + "…"
  } else {
    return string
  }
}
