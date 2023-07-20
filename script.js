const move = document.querySelector(".bola");

function mumu(event) {
  move.style.top = event.y + "px";
  move.style.left = event.x + "px";

  console.log(move);
}
window.addEventListener("mousemove", mumu);
