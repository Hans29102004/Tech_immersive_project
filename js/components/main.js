document.addEventListener("DOMContentLoaded", function () {
    // Récupérer l'élément du son ambiant
    let ambientSound = document.querySelector("#ambientSound");
    
    if (!ambientSound) {
        console.error("Ambient sound entity not found !");
        return;
    }

    // Définir le volume initial
    ambientSound.setAttribute("volume", 0.5);

    // Ajouter un événement pour changer le volume avec le slider
    document.getElementById("volume").addEventListener("input", function () {
        let newVolume = this.value;
        ambientSound.setAttribute("volume", newVolume);
    });

    // Résoudre le problème de lecture automatique sur certains navigateurs
    let scene = document.querySelector("a-scene");
    scene.addEventListener("loaded", function () {
        ambientSound.components.sound.playSound();
    });

    console.log("Volume control initialized !");
});
