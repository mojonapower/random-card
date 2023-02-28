/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pintas = ["♦", "♥", "♠", "♣"];
  let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "Joker"];

  let randomPinta = Math.floor(Math.random() * pintas.length);
  let randomValor = Math.floor(Math.random() * valores.length);
  let top = document.querySelector(".top");
  let mid = document.querySelector(".mid");
  let bottom = document.querySelector(".bottom");
  if (randomPinta == 0 || randomPinta == 1) {
    top.style.color = "red";
    bottom.className = "bottom red";
    mid.className = "mid red";
  }
  if (randomValor == valores.length - 1) {
    top.style.fontSize = "40px";
    bottom.style.fontSize = "40px";
    top.innerHTML = "Joker";
    bottom.innerHTML = "Joker";
    mid.innerHTML =
      "<img src='https://i.pinimg.com/originals/d2/85/fc/d285fc654c05b32423c4e8d308b68de9.png'/> ";
  } else {
    top.innerHTML = pintas[randomPinta];
    bottom.innerHTML = pintas[randomPinta];
    mid.innerHTML = valores[randomValor];
  }
};
