document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to the Place Behind the Wall! Click around to explore.");
});
document.getElementById("randomButton").addEventListener("click", function() {
    const randomContent = [
        "A hidden kingdom awaits you.",
        "You’ve unlocked the forest path...",
        "<img src='random-image.jpg' alt='Mystical forest'>",
        "A mystical creature appears from behind the wall."
    ];

    // Randomly select content and show it
    const randomIndex = Math.floor(Math.random() * randomContent.length);
    document.getElementById("randomContent").innerHTML = randomContent[randomIndex];
});
