// Smooth scroll to journey
document.getElementById("startJourney").addEventListener("click", () => {
  document.getElementById("journey").scrollIntoView({
    behavior: "smooth",
  });
});

// Simple scroll reveal (lightweight)
const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.2 },
);

items.forEach((item) => {
  item.classList.add(
    "opacity-0",
    "translate-y-10",
    "transition",
    "duration-700",
  );
  observer.observe(item);
});
