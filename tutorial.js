// Get references to the modal and buttons
const tutorialModal = document.getElementById("tutorialModal");
const openTutorialButton = document.getElementById("opentutorial");
const closeTutorialButton = document.getElementById("closeTutorialButton");
const tutorialVideo = document.getElementById("tutorialVideo");

// Open the tutorial modal when the button is clicked
openTutorialButton.addEventListener("click", function () {
    tutorialModal.style.display = "block";
    tutorialVideo.src="https://www.youtube.com/embed/xXE5AwzNQ2s?si=kwgzEYcumSVUmbmo" ; // Set the video source here
});

// Close the tutorial modal when the close button is clicked
closeTutorialButton.addEventListener("click", function () {
    tutorialModal.style.display = "none";
    tutorialVideo.src = ""; // Clear the video source to stop playback
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === tutorialModal) {
        tutorialModal.style.display = "none";
        tutorialVideo.src = ""; // Clear the video source to stop playback
    }
});