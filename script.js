// ==============================
// 1. Défilement fluide pour la navigation
// ==============================
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Décalage pour le header sticky
        behavior: "smooth"
      });
    }
  });
});

// ==============================
// 2. Validation du formulaire
// ==============================
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Récupérer les valeurs des champs
  const prenom = this.prenom.value.trim();
  const nom = this.nom.value.trim();
  const email = this.email.value.trim();
  const sujet = this.sujet.value.trim();
  const message = this.message.value.trim();

  // Vérifier si tous les champs sont remplis
  if (!prenom || !nom || !email || !sujet || !message) {
    alert("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
    return;
  }

  // Vérifier l'email avec une expression régulière simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  // Simuler l'envoi du formulaire (dans la vraie vie, utiliser fetch ou AJAX)
  alert(`Merci ${prenom} ! Votre message a bien été envoyé.`);

  // Réinitialiser le formulaire
  this.reset();
});

// ==============================
// 3. Animation d'apparition au scroll
// ==============================
const sections = document.querySelectorAll('section');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Vérification au chargement de la page

// ==============================
// 4. Petite animation hover sur les cartes projets
// ==============================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = "translateY(-10px)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "translateY(0)";
  });
});
