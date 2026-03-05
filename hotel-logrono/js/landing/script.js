document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll(".reveal");

  // El intersection observer detecta cuando un elemento entra y sale de la vista del usuario
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Añadir la clase visible a los elementos que entran en la pantalla
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // solo se ejecuta una vez
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  // Aplicar el observer solo a las secciones que hemos definido
  secciones.forEach((el) => observer.observe(el));
});
