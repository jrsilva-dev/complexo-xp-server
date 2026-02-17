window.addEventListener("load", function() {
    const loader = document.getElementById("loading-screen");
    
    loader.style.opacity = "0";
    loader.style.transition = "opacity 1s ease";

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});