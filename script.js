(() => {
  const scene = document.getElementById("scene");
  const artwork = document.getElementById("artworkWrap");
  const hotspot = document.querySelector(".invitation-hotspot");

  // Efecto 3D muy sutil al mover el mouse sobre el arte.
  if (window.matchMedia("(pointer:fine)").matches && artwork) {
    scene.addEventListener("mousemove", (event) => {
      const rect = artwork.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      // Mantener el movimiento elegante y pequeño.
      const rotateY = Math.max(-3.2, Math.min(3.2, x * 5));
      const rotateX = Math.max(-3.2, Math.min(3.2, -y * 5));

      artwork.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    scene.addEventListener("mouseleave", () => {
      artwork.style.transform = "";
    });
  }

  // Microinteracción al entrar al enlace.
  hotspot?.addEventListener("click", (event) => {
    hotspot.classList.add("is-opening");
  });

  // Si se abre en móvil, el navegador conserva la posición y la navegación
  // normal hacia invitacion.html funciona sin depender de frameworks.
})();
