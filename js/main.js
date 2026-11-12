// Menu mobile (icône hamburger / croix)
const nav = document.querySelector(".nav");
const bouton = document.querySelector(".nav__bouton");

if (nav && bouton) {
  const basculer = (ouvert) => {
    nav.classList.toggle("ouvert", ouvert);
    bouton.setAttribute("aria-expanded", String(ouvert));
    bouton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    document.body.style.overflow = ouvert ? "hidden" : "";
  };

  bouton.addEventListener("click", () => basculer(!nav.classList.contains("ouvert")));
  nav.querySelectorAll(".nav__liste a").forEach((lien) =>
    lien.addEventListener("click", () => basculer(false))
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") basculer(false);
  });
}

// Apparition des éléments au défilement
const elements = document.querySelectorAll(".apparition");

if ("IntersectionObserver" in window) {
  const observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach((entree) => {
        if (entree.isIntersecting) {
          entree.target.classList.add("visible");
          observateur.unobserve(entree.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elements.forEach((el) => observateur.observe(el));
} else {
  elements.forEach((el) => el.classList.add("visible"));
}
