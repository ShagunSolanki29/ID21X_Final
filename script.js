// script.js - Unified Enhancements for Tuition Academy Website

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Scroll Reveal Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Floating Labels in Forms
const inputs = document.querySelectorAll("input, textarea, select");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.classList.add("focused");
  });
  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.classList.remove("focused");
    }
  });
});

// Hero Background Video Play
window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  if (video) {
    video.muted = true;
    video.play().catch(err => console.error("Autoplay error:", err));
  }
});

// Parallax Scroll for Backgrounds
window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax");
  if (parallax) {
    parallax.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  }
});

// Animated Counters for Stats
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  const scrollHandler = () => {
    if (counter.getBoundingClientRect().top < window.innerHeight) {
      updateCount();
      window.removeEventListener('scroll', scrollHandler);
    }
  };
  window.addEventListener('scroll', scrollHandler);
});
