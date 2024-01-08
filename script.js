document.addEventListener("DOMContentLoaded", function () {
    // Obsługa nawigacji po kliknięciu w linki
    const navLinks = document.querySelectorAll(".nav_menu a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Dodanie obsługi dla przykładowych przycisków
    const exampleButtons = document.querySelectorAll(".example-button");
  
    exampleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Tutaj możesz dodać dodatkową logikę dla kliknięcia na przykładowe przyciski
        alert("Kliknięto przykładowy przycisk!");
      });
    });
  
    // Dodanie obsługi dla przycisków kontaktowych
    const contactButtons = document.querySelectorAll(".contact-button");
  
    contactButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const contactSection = document.getElementById("Kontakt");
  
        if (contactSection) {
          window.scrollTo({
            top: contactSection.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  });
  