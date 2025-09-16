const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      body.classList.add("dark-theme");
      themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      if (body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
      }
    });

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.innerHTML = navLinks.classList.contains("active") 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    const words = [
      "Developer",
      "Creator",
      "Programmer",
      "Innovator"
    ];

    let current = 0;
    let i = 0;
    let isDeleting = false;
    const speed = 100;
    const pause = 1200;

    function typeEffect() {
      const textElement = document.getElementById('dynamic-text');
      const word = words[current];

      if (isDeleting) {
        textElement.textContent = word.substring(0, i--);
      } else {
        textElement.textContent = word.substring(0, i++);
      }

      if (!isDeleting && i === word.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, pause);
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        current = (current + 1) % words.length;
        setTimeout(typeEffect, 500);
      } else {
        setTimeout(typeEffect, speed);
      }
    }

    // Запускаємо ефект після завантаження сторінки
    document.addEventListener('DOMContentLoaded', typeEffect);

