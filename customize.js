let customizeButton = document.getElementById("opencustomize");
let customizeModal = document.getElementById("customizationModal");
let closeButton = document.getElementById("closeCustomizeButton");
let player1Name = document.getElementById("player1name");
let player2Name = document.getElementById("player2name");
let applyButton = document.getElementById("applycustomization");
let player1Display = document.getElementById("player1Display");
let player2Display = document.getElementById("player2Display");

customizeButton.addEventListener("click", function()
{
    customizeModal.style.display="block";
})

closeButton.addEventListener("click", function(){
    customizeModal.style.display="none";
})

window.addEventListener("click", function(event){
    if(event.target===customizeModal){
        customizeModal.style.display="none";
    }
})

function updatePlayerName(){
    let player1NameChange = player1Name.value;
    let player2NameChange = player2Name.value;

    console.log(`${player1NameChange}`);
    player1Display.value=player1NameChange;
    console.log(`${player2NameChange}`);
    player2Display.value=player2NameChange;
}

applyButton.addEventListener("click", function(){
    applyCustomization();
    updatePlayerName()
    customizeModal.style.display="none";
});