// debounce
// wait executing until users stops triggering the event for certain delay
// search inputs - only sends request when user stop typing input

function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Example: search box
const search = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

document.getElementById("searchBox").addEventListener("input", (e) => {
  search(e.target.value);
});

// THROTTLE
// ensures a function runs atmost once at every given interval, no matter how many events fires up
// limits fn execution
// Use case: Scroll or resize events — limit execution to avoid performance issues.

function throttle(fn, limit) {
  let inThrottle;

  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Example: window resize
const logResize = throttle(() => {
  console.log("Window resized at:", Date.now());
}, 1000);

window.addEventListener("resize", logResize);
