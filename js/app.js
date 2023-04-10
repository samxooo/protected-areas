const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const title = document.querySelector(".title");
const scrollBtn = document.getElementById("scrollbtn");
const hiddenElement = document.querySelectorAll(".hidden");

bar.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
});

onHome = () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
};

onAbout = () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
};

onProtectedAreas = () => {
  document
    .getElementById("protected-areas")
    .scrollIntoView({ behavior: "smooth" });
};

onBiodiversity = () => {
  document
  .getElementById("biodiversity")
  .scrollIntoView({ behavior: "smooth" });
};

scrollBtn.addEventListener("click", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const targetScroll = 0;

  const distance = targetScroll - scrollTop;
  const duration = 500;

  function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const scrollY = easeOutQuad(progress, scrollTop, distance, duration);
    window.scrollTo(0, scrollY);
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
});

const observer = new IntersectionObserver((item) => {
  item.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("show");
    } else {
      item.target.classList.remove("show");
    }
  });
});

hiddenElement.forEach((item) => observer.observe(item));
