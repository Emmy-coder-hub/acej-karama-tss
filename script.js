/* =========================
   YEAR
========================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================
   MOBILE MENU
========================= */
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  menu.style.flexDirection = "column";
});

/* =========================
   COUNTER ANIMATION
========================= */
const counters = document.querySelectorAll(".stat-value");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.dataset.count;
      let count = 0;
      const speed = target / 80;

      const update = () => {
        count += speed;
        if (count < target) {
          el.textContent = Math.floor(count) + "+";
          requestAnimationFrame(update);
        } else {
          el.textContent = target + "+";
        }
      };
      update();
      counterObserver.unobserve(el);
    }
  });
},{ threshold: .6 });

counters.forEach(c => counterObserver.observe(c));

/* =========================
   SCROLL ANIMATION
========================= */
const reveal = document.querySelectorAll(".card, .section-header, img");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeUp 1s ease forwards";
      revealObserver.unobserve(entry.target);
    }
  });
},{ threshold: .15 });

reveal.forEach(el => {
  el.style.opacity = 0;
  revealObserver.observe(el);
});
document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});
