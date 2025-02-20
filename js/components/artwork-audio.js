AFRAME.registerComponent("artwork-audio", {
    schema: {
      src: { type: "string" } // Fichier audio
    },
  
    init: function () {
      // Création de l'élément audio
      this.sound = document.createElement("audio");
      this.sound.src = this.data.src;
      this.sound.setAttribute("preload", "auto"); // Chargement optimisé
      this.sound.setAttribute("loop", "false"); // Pas de boucle
      this.sound.volume = 1.0;
  
      // Ajouter l’audio à l’entité
      this.el.appendChild(this.sound);
  
      // Événements de survol
      this.el.addEventListener("mouseenter", () => {
        this.sound.play();
      });
  
      this.el.addEventListener("mouseleave", () => {
        this.sound.pause();
        this.sound.currentTime = 0; // Remettre au début
      });
    }
  });
  