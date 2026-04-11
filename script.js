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

const applyForm = document.getElementById("applyForm");
const formStatus = document.getElementById("formStatus");
if (applyForm) {
  applyForm.addEventListener("submit", event => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const level = document.getElementById("level").value.trim();
    const program = document.getElementById("program").value.trim();
    const notes = document.getElementById("notes").value.trim();

    const subject = encodeURIComponent(`ACEJ application from ${fullName}`);
    const body = encodeURIComponent(`Full name: ${fullName}
Email: ${email}
Phone: ${phone}
Applying for: ${level}
Preferred program/trade: ${program}
Notes: ${notes}`);
    const mailtoLink = `mailto:emmanueldukundegusenga@gmail.com?subject=${subject}&body=${body}`;

    if (formStatus) {
      formStatus.textContent = "Opening your email app so you can send the application to emmanueldukundegusenga@gmail.com.";
    }

    window.location.href = mailtoLink;
  });
}
