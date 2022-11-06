roll.addEventListener('click', dice);

function rollNumber() {
    return Math.floor((Math.random() * 6)+1);
}
function dice() {
    var diceFaceUm = rollNumber();
    switch (diceFaceUm) {
        case 1:
        player1.setAttribute("src", "link/dice1.png")
            break;
        case 2:
        player1.setAttribute("src", "link/dice2.png");
            break;
        case 3:
        player1.setAttribute("src", "link/dice3.png");
            break;
        case 4:
        player1.setAttribute("src", "link/dice4.png");
            break;
        case 5:
        player1.setAttribute("src", "link/dice5.png");
            break;
        case 6:
        player1.setAttribute("src", "link/dice6.png");
            break;
        default:
        player1.setAttribute("src", "link/dice6.png");
            break;
    }
    var diceFaceDois = rollNumber();
    switch (diceFaceDois) {
        case 1:
        player2.setAttribute("src", "link/dice1.png")
            break;
        case 2:
        player2.setAttribute("src", "link/dice2.png");
            break;
        case 3:
        player2.setAttribute("src", "link/dice3.png");
            break;
        case 4:
        player2.setAttribute("src", "link/dice4.png");
            break;
        case 5:
        player2.setAttribute("src", "link/dice5.png");
            break;
        case 6:
        player2.setAttribute("src", "link/dice6.png");
            break;
        default:
        player2.setAttribute("src", "link/dice6.png");
            break;
    }

    player2.innerHTML = diceFaceDois;

    if (diceFaceUm === diceFaceDois) {
        result.innerHTML = "Empate!";
    } else if (diceFaceUm > diceFaceDois) {
        result.innerHTML = "Player 1 ganhou!";
    } else {
        result.innerHTML = "Player 2 ganhou!";
    }
}