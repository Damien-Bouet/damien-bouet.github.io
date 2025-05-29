function openPage(url) {
  window.location.href = url;
}

function scrollToElement(element_id) {
  // Check if current page is not index.html
  if (!window.location.pathname.endsWith("index.html")) {
    // Save the target element id in localStorage
    localStorage.setItem("scrollTarget", element_id);

    // Navigate to index.html
    window.location.href = "index.html";
  } else {
    // If already on index.html, scroll directly
    document.getElementById(element_id).scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  }
}


window.onload = function () {
  const scrollPos = localStorage.getItem("scrollTarget");
  if (scrollPos) {
    const el = document.getElementById(scrollPos);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    localStorage.removeItem("scrollTarget");
  }
};

function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const menuButton = document.getElementById('menu-button');
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove('show');
  }
});
