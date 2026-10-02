const journeyTimeline = document.querySelector(".pulse-home2-timeline");
const journeyNext = document.querySelector(".pulse-home2-timeline-next");
const journeyPrev = document.querySelector(".pulse-home2-timeline-prev");

const journeyCurrent = document.querySelector(
  ".pulse-home2-timeline-progress-current",
);

const journeyTotal = document.querySelector(
  ".pulse-home2-timeline-progress-total",
);

if (
  journeyTimeline &&
  journeyNext &&
  journeyPrev &&
  journeyCurrent &&
  journeyTotal
) {
  let journeySwapped = false;

  const updateJourneyState = () => {
    journeyTimeline.classList.toggle("is-swapped", journeySwapped);

    journeyCurrent.textContent = journeySwapped ? "02" : "01";
    journeyTotal.textContent = journeySwapped ? "04" : "05";

    journeyPrev.disabled = !journeySwapped;
    journeyNext.disabled = journeySwapped;
  };

  journeyNext.addEventListener("click", () => {
    if (journeySwapped) return;

    journeySwapped = true;

    updateJourneyState();
  });

  journeyPrev.addEventListener("click", () => {
    if (!journeySwapped) return;

    journeySwapped = false;

    updateJourneyState();
  });

  updateJourneyState();
}
