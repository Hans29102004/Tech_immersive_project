AFRAME.registerComponent("artwork-info", {
    schema: {
        title: { type: "string", default: "Titre de l'œuvre" },
        description: { type: "string", default: "Description de l'œuvre" },
        panelPosition: { type: "vec3", default: { x: -1.5, y: 1.5, z: 0 } }, // Position statique
        panelRotation: { type: "vec3", default: { x: 0, y: 0, z: 0 } } // Rotation statique
    },

    init: function () {
        // Création du panneau
        this.infoPanel = document.createElement("a-entity");

        // Fond du panneau
        this.infoPanel.setAttribute("geometry", "primitive: plane; width: 1.5; height: 0.8");
        this.infoPanel.setAttribute("material", "color: black; opacity: 0.8; transparent: true");

        // Position et rotation statiques définies par l'utilisateur dans le HTML
        this.infoPanel.setAttribute("position", this.data.panelPosition);
        this.infoPanel.setAttribute("rotation", this.data.panelRotation);

        // Titre
        let title = document.createElement("a-entity");
        title.setAttribute("text", `value: ${this.data.title}; align: center; width: 1.4; color: white`);
        title.setAttribute("position", "0 0.3 0");

        // Description
        let desc = document.createElement("a-entity");
        desc.setAttribute("text", `value: ${this.data.description}; align: center; width: 1.2; wrapCount: 30; color: white`);
        desc.setAttribute("position", "0 -0.1 0");

        // Ajouter les éléments au panneau
        this.infoPanel.appendChild(title);
        this.infoPanel.appendChild(desc);

        // Cacher le panneau au début
        this.infoPanel.setAttribute("visible", "false");

        // Ajouter le panneau à l'entité actuelle
        this.el.appendChild(this.infoPanel);

        // Événements pour afficher/masquer le panneau
        this.el.addEventListener("mouseenter", () => {
            this.infoPanel.setAttribute("visible", "true");
        });

        this.el.addEventListener("mouseleave", () => {
            this.infoPanel.setAttribute("visible", "false");
        });
    }
});
