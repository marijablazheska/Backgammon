const player1Piece = document.getElementById("pieces1color");
const player2Piece = document.getElementById("pieces2color");

export function applyCustomization(){
    const selected1Color = player1Piece.value;
    const selected2Color = player2Piece.value;
    updatePlayerName();
    return "purple";
}
