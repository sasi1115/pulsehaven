/* =========================================================
   PULSE HAVEN - SERVICE DETAIL DATA
========================================================= */

const serviceData = {
  /* =======================================================
     01. VITALS CHECKS
  ======================================================= */

  vitals: {
    hero: {
      tag: "VITALS CHECKS",
      title: "Essential vitals care, <span>right at home.</span>",
      description:
        "Regular blood pressure and essential vitals monitoring from the comfort of your home.",
      image: "images/service1.jpg",
      imageAlt: "Nurse checking patient's blood pressure at home",
      button: "Book Vitals Check",
    },

    checks: {
      tag: "WHAT YOU'LL RECEIVE",
      title: "Know exactly what's included <span>in your vitals check.</span>",
      description:
        "Your home visit focuses on essential vital measurements that are checked, recorded, and documented during your appointment.",

      items: [
        {
          icon: "heart-pulse",
          title: "Blood Pressure",
          description:
            "Your blood pressure is measured and recorded during the home visit.",
        },
        {
          icon: "activity",
          title: "Pulse Rate",
          description:
            "Your pulse rate is checked and documented as part of your vitals assessment.",
        },
        {
          icon: "thermometer",
          title: "Temperature",
          description:
            "Your body temperature can be checked and recorded during the visit.",
        },
        {
          icon: "gauge",
          title: "Oxygen Level",
          description:
            "Your blood oxygen saturation is checked using a pulse oximeter.",
        },
      ],
    },

    visit: {
      tag: "YOUR VITALS VISIT",
      title: "A simple process from arrival <span>to completed checks.</span>",
      description:
        "Your care professional completes the required measurements in a calm and convenient home setting.",

      image: "images/service2.jpg",
      imageAlt: "Healthcare professional providing a home vitals check",

      steps: [
        {
          title: "Arrival",
          description:
            "Your scheduled care professional arrives at your home at the agreed appointment time.",
        },
        {
          title: "Vitals Check",
          description:
            "The required vital measurements are taken using appropriate monitoring equipment.",
        },
        {
          title: "Documentation",
          description:
            "Your relevant readings and visit information are recorded for your care history.",
        },
        {
          title: "Completion",
          description:
            "The visit is completed after the required checks and documentation are finished.",
        },
      ],
    },

    included: {
      tag: "WHAT'S INCLUDED",
      title: "Everything included in your <span>home vitals visit.</span>",
      description:
        "Your selected vitals service includes the essential checks and documentation completed during your appointment.",

      items: [
        {
          icon: "home",
          title: "In-Home Vitals Check",
          description:
            "Essential vital measurements are performed conveniently at your home.",
        },
        {
          icon: "clipboard-check",
          title: "Visit Documentation",
          description:
            "Relevant readings and observations from your visit are documented.",
        },
        {
          icon: "file-chart-column",
          title: "Vitals Tracking",
          description:
            "Your recorded readings can support ongoing monitoring of your vitals history.",
        },
        {
          icon: "calendar-check",
          title: "Scheduled Visit",
          description:
            "Your vitals check is completed during your selected home appointment.",
        },
      ],
    },

    audience: {
      tag: "WHO IT'S FOR",
      title: "A practical service for <span>regular vitals monitoring.</span>",
      description:
        "Vitals Checks can be useful for people who want convenient, consistent monitoring without leaving home.",

      items: [
        {
          icon: "repeat-2",
          title: "Routine Monitoring",
          description:
            "For people who need regular blood pressure or essential vitals checks.",
        },
        {
          icon: "house",
          title: "Home-Based Care",
          description:
            "A convenient option when checking your vitals at home is preferred.",
        },
        {
          icon: "chart-no-axes-combined",
          title: "Ongoing Tracking",
          description:
            "Useful for keeping a record of readings over multiple visits.",
        },
        {
          icon: "clock-3",
          title: "Convenient Check-Ins",
          description:
            "Suitable for people who prefer scheduled monitoring at home.",
        },
      ],
    },

    preparation: {
      tag: "BEFORE YOUR VISIT",
      title: "A few simple things to <span>prepare beforehand.</span>",
      description:
        "A little preparation can help your vitals visit run smoothly.",

      items: [
        {
          icon: "calendar-clock",
          title: "Keep Your Appointment Time Available",
          description:
            "Make sure you are available at your scheduled home visit time.",
        },
        {
          icon: "notebook-pen",
          title: "Keep Relevant Information Nearby",
          description:
            "Have any recent readings or relevant care information available if needed.",
        },
        {
          icon: "armchair",
          title: "Choose a Comfortable Space",
          description:
            "Have a comfortable area where your vitals can be checked without interruption.",
        },
      ],
    },

    cta: {
      tag: "READY FOR YOUR CHECK",
      title: "Keep track of your vitals <span>from home.</span>",
      description:
        "Choose a convenient appointment time for your next home vitals check.",
      button: "Book Vitals Check",
    },
  },

  /* =======================================================
     02. MEDICATION REVIEWS
  ======================================================= */

  medication: {
    hero: {
      tag: "MEDICATION REVIEWS",
      title:
        "Understand your medication routine <span>with support at home.</span>",
      description:
        "Support with medication routines, reviews, and understanding your ongoing care plan.",
      image: "images/service2.jpg",
      imageAlt: "Healthcare professional reviewing medications with patient",
      button: "Book Medication Review",
    },

    checks: {
      tag: "WHAT YOU'LL RECEIVE",
      title: "A clearer look at your <span>medication routine.</span>",
      description:
        "Your medication review focuses on understanding the medicines you currently use and the information surrounding your ongoing care routine.",

      items: [
        {
          icon: "pill",
          title: "Medication List Review",
          description:
            "Your current medication information can be reviewed during the home visit.",
        },
        {
          icon: "clock-3",
          title: "Medication Routine",
          description:
            "Your regular medication routine can be discussed and reviewed.",
        },
        {
          icon: "clipboard-list",
          title: "Care Plan Information",
          description:
            "Relevant information from your existing care plan can be discussed.",
        },
        {
          icon: "message-circle",
          title: "Questions & Concerns",
          description:
            "You can discuss medication-related questions or concerns during the review.",
        },
      ],
    },

    visit: {
      tag: "YOUR MEDICATION REVIEW",
      title:
        "A comfortable review of your <span>current medication routine.</span>",
      description:
        "The visit gives you an opportunity to review your medication information and discuss relevant questions in the comfort of your home.",

      image: "images/service2.jpg",
      imageAlt: "Healthcare professional reviewing medications with patient",

      steps: [
        {
          title: "Arrival",
          description:
            "Your scheduled care professional arrives at your home for the medication review.",
        },
        {
          title: "Medication Review",
          description:
            "Your current medication information and routine are reviewed with you.",
        },
        {
          title: "Discussion",
          description:
            "Relevant questions, concerns, and care-plan information can be discussed.",
        },
        {
          title: "Documentation",
          description:
            "Important observations and information from the review are documented.",
        },
      ],
    },

    included: {
      tag: "WHAT'S INCLUDED",
      title: "Practical support for your <span>medication routine.</span>",
      description:
        "The service is designed to help you review and better understand your existing medication routine.",

      items: [
        {
          icon: "pill",
          title: "Medication Review",
          description:
            "Your current medication information and routine are reviewed during the visit.",
        },
        {
          icon: "clipboard-check",
          title: "Care Notes",
          description:
            "Relevant observations and information from the review are documented.",
        },
        {
          icon: "messages-square",
          title: "Care Discussion",
          description:
            "You have an opportunity to discuss relevant medication and care-plan questions.",
        },
        {
          icon: "house",
          title: "In-Home Support",
          description:
            "The review takes place in the comfort and convenience of your home.",
        },
      ],
    },

    audience: {
      tag: "WHO IT'S FOR",
      title: "Helpful support for <span>ongoing medication routines.</span>",
      description:
        "Medication Reviews are designed for people who want support understanding and reviewing their existing medication routine.",

      items: [
        {
          icon: "pill",
          title: "Regular Medication Users",
          description:
            "For people who take medications as part of their ongoing care routine.",
        },
        {
          icon: "list-checks",
          title: "Routine Reviews",
          description:
            "Useful when you want to review your current medication information.",
        },
        {
          icon: "message-circle",
          title: "Questions About Medicines",
          description:
            "For people who have questions they would like to discuss during a review.",
        },
        {
          icon: "house",
          title: "Home-Based Support",
          description:
            "A convenient option for discussing medication routines from home.",
        },
      ],
    },

    preparation: {
      tag: "BEFORE YOUR VISIT",
      title: "Have your medication information <span>ready for review.</span>",
      description:
        "Having your current medication information available can make your review more useful.",

      items: [
        {
          icon: "pill",
          title: "Keep Your Medicines Nearby",
          description:
            "Have the medicines you currently take available for reference during the visit.",
        },
        {
          icon: "clipboard-list",
          title: "Prepare Your Medication List",
          description:
            "Keep a current medication list or relevant care information nearby.",
        },
        {
          icon: "message-circle",
          title: "Note Your Questions",
          description:
            "Write down any medication-related questions or concerns you would like to discuss.",
        },
      ],
    },

    cta: {
      tag: "READY FOR A REVIEW",
      title: "Make your medication routine <span>easier to understand.</span>",
      description:
        "Schedule a convenient medication review in the comfort of your home.",
      button: "Book Medication Review",
    },
  },

  /* =======================================================
     03. WELLNESS VISITS
  ======================================================= */

  wellness: {
    hero: {
      tag: "WELLNESS VISITS",
      title: "Personalized wellness support <span>at your doorstep.</span>",
      description:
        "Personalized home visits focused on ongoing wellness, comfort, and health support.",
      image: "images/service3.jpg",
      imageAlt: "Nurse providing a wellness visit at home",
      button: "Book Wellness Visit",
    },

    checks: {
      tag: "WHAT YOU'LL RECEIVE",
      title:
        "A wellness visit focused on <span>your everyday wellbeing.</span>",
      description:
        "Your wellness visit provides time to discuss general wellbeing, daily routines, comfort, and ongoing health support.",

      items: [
        {
          icon: "heart-handshake",
          title: "Wellness Check",
          description:
            "Your general wellbeing and current concerns can be discussed during the visit.",
        },
        {
          icon: "sun",
          title: "Daily Wellbeing",
          description:
            "Your everyday routine, comfort, and general wellbeing can be reviewed.",
        },
        {
          icon: "house",
          title: "Home Comfort",
          description:
            "The visit provides an opportunity to discuss comfort and support within your home routine.",
        },
        {
          icon: "activity",
          title: "Health Support",
          description:
            "Relevant health and wellness observations can be discussed and documented.",
        },
      ],
    },

    visit: {
      tag: "YOUR WELLNESS VISIT",
      title:
        "A calm and personal visit centered on <span>your wellbeing.</span>",
      description:
        "Your wellness visit gives you dedicated time with a care professional to discuss your everyday health, comfort, and support needs.",

      image: "images/service3.jpg",
      imageAlt: "Nurse providing a wellness visit at home",

      steps: [
        {
          title: "Arrival",
          description:
            "Your scheduled care professional arrives at your home at the agreed appointment time.",
        },
        {
          title: "Wellness Discussion",
          description:
            "Your general wellbeing, routine, comfort, and current concerns are discussed.",
        },
        {
          title: "Support Review",
          description:
            "Relevant observations and areas where ongoing support may be useful are reviewed.",
        },
        {
          title: "Visit Notes",
          description:
            "Important information from your wellness visit is documented for your care history.",
        },
      ],
    },

    included: {
      tag: "WHAT'S INCLUDED",
      title: "Support designed around your <span>wellness needs.</span>",
      description:
        "Your wellness visit combines personal attention, general wellbeing discussion, and useful visit documentation.",

      items: [
        {
          icon: "heart-handshake",
          title: "Personal Wellness Visit",
          description:
            "Receive dedicated wellness support in the comfort of your home.",
        },
        {
          icon: "notebook-pen",
          title: "Wellness Notes",
          description:
            "Relevant observations and information from the visit are documented.",
        },
        {
          icon: "message-circle",
          title: "Wellbeing Discussion",
          description:
            "Discuss everyday wellbeing, comfort, routines, and relevant concerns.",
        },
        {
          icon: "calendar-check",
          title: "Scheduled Home Visit",
          description:
            "Your wellness support is provided during your selected appointment.",
        },
      ],
    },

    audience: {
      tag: "WHO IT'S FOR",
      title: "A flexible option for <span>ongoing wellness support.</span>",
      description:
        "Wellness Visits can support people who value regular personal attention and health-focused check-ins at home.",

      items: [
        {
          icon: "heart-handshake",
          title: "Ongoing Wellness",
          description:
            "For people who want regular attention to their general wellbeing.",
        },
        {
          icon: "house",
          title: "Home-Based Support",
          description:
            "Useful for people who prefer wellness support within their home environment.",
        },
        {
          icon: "messages-square",
          title: "Regular Check-Ins",
          description:
            "A convenient option for discussing wellbeing and everyday health concerns.",
        },
        {
          icon: "sparkles",
          title: "Personal Attention",
          description:
            "For people who value a dedicated visit focused on their comfort and wellbeing.",
        },
      ],
    },

    preparation: {
      tag: "BEFORE YOUR VISIT",
      title:
        "Think about what you'd like to <span>discuss during your visit.</span>",
      description:
        "A little preparation can help make your wellness visit more personal and useful.",

      items: [
        {
          icon: "message-circle",
          title: "Think About Your Concerns",
          description:
            "Consider any wellbeing or everyday health concerns you would like to discuss.",
        },
        {
          icon: "notebook-pen",
          title: "Keep Relevant Information Nearby",
          description:
            "Have any useful health or care information available if needed.",
        },
        {
          icon: "armchair",
          title: "Choose a Comfortable Space",
          description:
            "Choose a comfortable and quiet space where you can have your visit.",
        },
      ],
    },

    cta: {
      tag: "READY FOR YOUR VISIT",
      title: "Make time for your <span>wellness at home.</span>",
      description:
        "Choose a convenient time for a personalized wellness visit at home.",
      button: "Book Wellness Visit",
    },
  },
};

/* =========================================================
   GET SERVICE FROM URL
========================================================= */

const serviceParams = new URLSearchParams(window.location.search);
const selectedService = serviceParams.get("service") || "vitals";

const service = serviceData[selectedService] || serviceData.vitals;

/* =========================================================
   HERO
========================================================= */

function updateHero() {
  const tag = document.getElementById("service-hero-tag");
  const title = document.getElementById("service-hero-title");
  const description = document.getElementById("service-hero-description");
  const image = document.getElementById("service-hero-image");
  const button = document.getElementById("service-hero-button");

  if (tag) {
    tag.textContent = service.hero.tag;
  }

  if (title) {
    title.innerHTML = service.hero.title;
  }

  if (description) {
    description.textContent = service.hero.description;
  }

  if (image) {
    image.src = service.hero.image;
    image.alt = service.hero.imageAlt;
  }

  if (button) {
    button.innerHTML = `
      ${service.hero.button}
      <i data-lucide="arrow-up-right"></i>
    `;

    button.href = `#pulse-service-cta-section`;
  }
}

/* =========================================================
   WHAT YOU'LL RECEIVE / CHECKS
========================================================= */

function updateChecks() {
  const tag = document.getElementById("service-checks-tag");
  const title = document.getElementById("service-checks-title");
  const description = document.getElementById("service-checks-description");

  if (tag) {
    tag.textContent = service.checks.tag;
  }

  if (title) {
    title.innerHTML = service.checks.title;
  }

  if (description) {
    description.textContent = service.checks.description;
  }

  service.checks.items.forEach((item, index) => {
    const number = index + 1;

    const icon = document.getElementById(`service-check-icon-${number}`);

    const itemTitle = document.getElementById(`service-check-title-${number}`);

    const itemDescription = document.getElementById(
      `service-check-description-${number}`,
    );

    if (icon) {
      icon.setAttribute("data-lucide", item.icon);
    }

    if (itemTitle) {
      itemTitle.textContent = item.title;
    }

    if (itemDescription) {
      itemDescription.textContent = item.description;
    }
  });
}

/* =========================================================
   YOUR VISIT
========================================================= */

function updateVisit() {
  const tag = document.getElementById("service-visit-tag");
  const title = document.getElementById("service-visit-title");
  const description = document.getElementById("service-visit-description");
  const image = document.getElementById("service-visit-image");

  if (tag) {
    tag.textContent = service.visit.tag;
  }

  if (title) {
    title.innerHTML = service.visit.title;
  }

  if (description) {
    description.textContent = service.visit.description;
  }

  if (image) {
    image.src = service.visit.image;
    image.alt = service.visit.imageAlt;
  }

  service.visit.steps.forEach((step, index) => {
    const number = index + 1;

    const stepTitle = document.getElementById(
      `service-visit-step-title-${number}`,
    );

    const stepDescription = document.getElementById(
      `service-visit-step-description-${number}`,
    );

    if (stepTitle) {
      stepTitle.textContent = step.title;
    }

    if (stepDescription) {
      stepDescription.textContent = step.description;
    }
  });
}

/* =========================================================
   WHAT'S INCLUDED
========================================================= */

function updateIncluded() {
  const tag = document.getElementById("service-included-tag");
  const title = document.getElementById("service-included-title");
  const description = document.getElementById("service-included-description");

  if (tag) {
    tag.textContent = service.included.tag;
  }

  if (title) {
    title.innerHTML = service.included.title;
  }

  if (description) {
    description.textContent = service.included.description;
  }

  service.included.items.forEach((item, index) => {
    const number = index + 1;

    const icon = document.getElementById(`service-included-icon-${number}`);

    const titleElement = document.getElementById(
      `service-included-title-${number}`,
    );

    const descriptionElement = document.getElementById(
      `service-included-description-${number}`,
    );

    if (icon) {
      icon.setAttribute("data-lucide", item.icon);
    }

    if (titleElement) {
      titleElement.textContent = item.title;
    }

    if (descriptionElement) {
      descriptionElement.textContent = item.description;
    }
  });
}

/* =========================================================
   WHO IT'S FOR
========================================================= */

function updateAudience() {
  const tag = document.getElementById("service-audience-tag");
  const title = document.getElementById("service-audience-title");
  const description = document.getElementById("service-audience-description");

  if (tag) {
    tag.textContent = service.audience.tag;
  }

  if (title) {
    title.innerHTML = service.audience.title;
  }

  if (description) {
    description.textContent = service.audience.description;
  }

  service.audience.items.forEach((item, index) => {
    const number = index + 1;

    const icon = document.getElementById(`service-audience-icon-${number}`);

    const titleElement = document.getElementById(
      `service-audience-title-${number}`,
    );

    const descriptionElement = document.getElementById(
      `service-audience-description-${number}`,
    );

    if (icon) {
      icon.setAttribute("data-lucide", item.icon);
    }

    if (titleElement) {
      titleElement.textContent = item.title;
    }

    if (descriptionElement) {
      descriptionElement.textContent = item.description;
    }
  });
}

/* =========================================================
   BEFORE YOUR VISIT
========================================================= */

function updatePreparation() {
  const tag = document.getElementById("service-preparation-tag");
  const title = document.getElementById("service-preparation-title");
  const description = document.getElementById(
    "service-preparation-description",
  );

  if (tag) {
    tag.textContent = service.preparation.tag;
  }

  if (title) {
    title.innerHTML = service.preparation.title;
  }

  if (description) {
    description.textContent = service.preparation.description;
  }

  service.preparation.items.forEach((item, index) => {
    const number = index + 1;

    const icon = document.getElementById(`service-preparation-icon-${number}`);

    const titleElement = document.getElementById(
      `service-preparation-title-${number}`,
    );

    const descriptionElement = document.getElementById(
      `service-preparation-description-${number}`,
    );

    if (icon) {
      icon.setAttribute("data-lucide", item.icon);
    }

    if (titleElement) {
      titleElement.textContent = item.title;
    }

    if (descriptionElement) {
      descriptionElement.textContent = item.description;
    }
  });
}

/* =========================================================
   FINAL CTA
========================================================= */

function updateCTA() {
  const tag = document.getElementById("service-cta-tag");
  const title = document.getElementById("service-cta-title");
  const description = document.getElementById("service-cta-description");
  const button = document.getElementById("service-cta-button");

  if (tag) {
    tag.textContent = service.cta.tag;
  }

  if (title) {
    title.innerHTML = service.cta.title;
  }

  if (description) {
    description.textContent = service.cta.description;
  }

  if (button) {
    button.innerHTML = `
      ${service.cta.button}
      <i data-lucide="arrow-up-right"></i>
    `;

    button.href = "Dashboard/dashboard.html";
  }
}

/* =========================================================
   UPDATE ALL SERVICE CONTENT
========================================================= */

function initializeServiceDetail() {
  updateHero();
  updateChecks();
  updateVisit();
  updateIncluded();
  updateAudience();
  updatePreparation();
  updateCTA();

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeServiceDetail();
});
