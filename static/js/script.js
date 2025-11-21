// Animate on slide
const carousel = document.querySelector('#hero-slider-totop');
carousel.addEventListener('slide.bs.carousel', (e) => {
  const captions = e.relatedTarget.querySelectorAll('.carousel-caption > *');
  captions.forEach(el => {
    el.classList.remove('animate__fadeInDown', 'animate__fadeInUp');
    void el.offsetWidth; // trigger reflow
    if(el.tagName === 'H2') el.classList.add('animate__fadeInDown');
    else el.classList.add('animate__fadeInUp');
  });
});


// ----aboutus section slide-----------

const track = document.getElementById("sliderTrack");
const card = document.querySelectorAll(".review-card");
let index = 0;

// Clone for infinite seamless loop
const cloneCount = 2;
for (let i = 0; i < cloneCount; i++) {
  const clone = card[i].cloneNode(true);
  track.appendChild(clone);
}

function slideNext() {
  const total = track.children.length;
  index++;
  track.style.transition = "transform 1s ease-in-out";
  track.style.transform = `translateX(-${index * 600}px)`; // width = 600px

  // Reset when reaching cloned end
  if (index >= total - cloneCount) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 0;
      track.style.transform = "translateX(0)";
    }, 1100);
  }
}

// Move one by one with pause
setInterval(slideNext, 4000);


// --------counter--------

// new WOW().init(); // Commented out as WOW is not loaded



document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll("#ngo-impact .counter-number");
const speed = 200;


const animateCounter = (counter) => {
const text = counter.textContent.trim();
const endValue = parseInt(text.replace(/[^0-9]/g, "")) || 0;
const suffix = text.replace(/[0-9]/g, "");
let current = 0;


const updateCount = () => {
const increment = endValue / speed;
current += increment;
if (current < endValue) {
counter.textContent = Math.floor(current) + suffix;
requestAnimationFrame(updateCount);
} else {
counter.textContent = endValue.toLocaleString() + suffix;
}
};
updateCount();
};


const observer = new IntersectionObserver(
(entries, obs) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
if (/\d/.test(entry.target.textContent)) {
animateCounter(entry.target);
}
obs.unobserve(entry.target);
}
});
},
{ threshold: 0.5 }
);


counters.forEach((counter) => observer.observe(counter));
});

// NGO slider time and date----

function updateDateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const date = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  document.querySelectorAll('#ngo-slider [id^="current-time"]').forEach(el => el.textContent = time);
  document.querySelectorAll('#ngo-slider [id^="current-date"]').forEach(el => el.textContent = date);
}
setInterval(updateDateTime,1000);
updateDateTime();
// -------------------------
const slider = document.querySelector('.card-slider');
    slider.addEventListener('animationiteration', () => {
      // optional: could randomize cards or images when loop restarts
    });


    // -----map section js---------

document.addEventListener("DOMContentLoaded", () => {
    // Change map when clicking on a center card
    const cards = document.querySelectorAll(".location-card");
    const mapFrame = document.getElementById("mapFrame");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        // Remove active from all cards
        cards.forEach(c => c.classList.remove("active"));

        // Set this one active
        card.classList.add("active");

        // Change map iframe source
        const mapSrc = card.getAttribute("data-map");
        mapFrame.src = mapSrc;
      });
    });
});


 