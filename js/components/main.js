document.addEventListener("DOMContentLoaded", function () {
    let ambientSound = document.querySelector("#ambientSound");

    if (!ambientSound) {
        console.error("Ambient sound entity not found !");
        return;
    }

    // Définir le volume initial
    ambientSound.setAttribute("sound", "volume: 50");

    // Vérifier si l'autoplay est bloqué
    let playAudio = () => {
        if (ambientSound.components.sound) {
            ambientSound.components.sound.playSound();
            document.removeEventListener("click", playAudio); // Supprimer après premier clic
        }
    };

    // Essayer de jouer le son après le chargement de la scène
    let scene = document.querySelector("a-scene");
    scene.addEventListener("loaded", function () {
        setTimeout(() => {
            if (ambientSound.components.sound) {
                ambientSound.components.sound.playSound();
            }
        }, 1000);
    });

    // Débloquer le son au premier clic de l'utilisateur
    document.addEventListener("click", playAudio);

    // Gestion du volume via le slider
    document.getElementById("volume").addEventListener("input", function () {
        let newVolume = this.value;
        ambientSound.setAttribute("sound", `volume: ${newVolume}`);
    });

    console.log("Volume control initialized !");
});
