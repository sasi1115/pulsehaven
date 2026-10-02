/* =========================================================
   PULSE HAVEN — CARE STATISTICS COUNTER
========================================================= */

const statsSection = document.querySelector("#care-statistics");
const statNumbers = document.querySelectorAll(".pulse-stat-number");

if (statsSection && statNumbers.length) {
  let statsStarted = false;

  const startStatsCounter = () => {
    if (statsStarted) return;

    statsStarted = true;

    statNumbers.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";
      const duration = 1800;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(target * easedProgress);

        counter.textContent = currentValue.toLocaleString() + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString() + suffix;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const statsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startStatsCounter();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.35,
    },
  );

  statsObserver.observe(statsSection);
}

/* =========================================================
   PULSE HAVEN — PATIENT TESTIMONIALS
========================================================= */

const testimonials = [
  {
    image: "/images/p1.jpg",
    name: "Sarah Mitchell",
    role: "PulseHaven Patient",
    text: "The home visits made managing my health feel much easier. I felt comfortable and cared for from the very first visit.",
  },
  {
    image: "/images/p2.jpg",
    name: "James Wilson",
    role: "PulseHaven Patient",
    text: "Having my vitals checked at home made my routine feel simpler. The care was convenient, professional, and reassuring.",
  },
  {
    image: "/images/p3.jpg",
    name: "Priya Sharma",
    role: "PulseHaven Patient",
    text: "I appreciated how clearly everything was explained during my visit. It made staying informed about my health much easier.",
  },
];

const testimonialImage = document.getElementById("testimonial-image");
const testimonialName = document.getElementById("testimonial-name");
const testimonialRole = document.getElementById("testimonial-role");
const testimonialText = document.getElementById("testimonial-text");
const testimonialNumber = document.getElementById("testimonial-number");
const testimonialCurrent = document.getElementById("testimonial-current");
const testimonialTotal = document.getElementById("testimonial-total");

const testimonialPrev = document.getElementById("testimonial-prev");
const testimonialNext = document.getElementById("testimonial-next");

let testimonialIndex = 0;

testimonialTotal.textContent = String(testimonials.length).padStart(2, "0");

function updateTestimonial(index) {
  const testimonial = testimonials[index];

  testimonialImage.src = testimonial.image;
  testimonialImage.alt = `${testimonial.name} - PulseHaven Patient`;

  testimonialName.textContent = testimonial.name;
  testimonialRole.textContent = testimonial.role;
  testimonialText.textContent = `“${testimonial.text}”`;

  const number = String(index + 1).padStart(2, "0");

  testimonialNumber.textContent = number;
  testimonialCurrent.textContent = number;
}

testimonialNext.addEventListener("click", () => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;

  updateTestimonial(testimonialIndex);
});

testimonialPrev.addEventListener("click", () => {
  testimonialIndex =
    (testimonialIndex - 1 + testimonials.length) % testimonials.length;

  updateTestimonial(testimonialIndex);
});

updateTestimonial(testimonialIndex);
