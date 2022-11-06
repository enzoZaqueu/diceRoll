roll.addEventListener('click', dice);
function dice() {
  var diceFaceUm = Math.floor((Math.random() * 6)+1);
  p1.innerHTML = diceFaceUm;
  var diceFaceDois = Math.floor((Math.random() * 6)+1);
  p2.innerHTML = diceFaceDois;
  if (diceFaceUm === diceFaceDois) {
    result.innerHTML = "Empate!";
  } else if (diceFaceUm > diceFaceDois) {
    result.innerHTML = "Player 1 ganhou!";
  } else {
    result.innerHTML = "Player 2 ganhou!";
  }
}