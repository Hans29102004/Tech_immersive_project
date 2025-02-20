AFRAME.registerComponent("artwork-scale", {
  schema: {
    scaleFactor: { type: "number", default: 1.4 }, // Facteur d'agrandissement
    duration: { type: "number", default: 300 } // Durée de l'animation en ms
  },

  init: function () {
    this.originalScale = Object.assign({}, this.el.getAttribute("scale")); // Stocker l'échelle d'origine

    this.el.addEventListener("mouseenter", () => {
      this.el.setAttribute("animation", {
        property: "scale",
        to: `${this.originalScale.x * this.data.scaleFactor} ${this.originalScale.y * this.data.scaleFactor} ${this.originalScale.z * this.data.scaleFactor}`,
        dur: this.data.duration,
        easing: "easeOutQuad"
      });
    });

    this.el.addEventListener("mouseleave", () => {
      this.el.setAttribute("animation", {
        property: "scale",
        to: `${this.originalScale.x} ${this.originalScale.y} ${this.originalScale.z}`,
        dur: this.data.duration,
        easing: "easeOutQuad"
      });
    });
  }
});
