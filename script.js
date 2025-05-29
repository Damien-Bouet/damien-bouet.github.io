function openPage(url) {
  window.location.href = url;
}

function scrollToElement(element_id){
  document.getElementById(element_id).scrollIntoView({ behavior: "smooth" });
  toggleMenu();
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const scrollPos = params.get("scroll");
  if (scrollPos) {
    document.getElementById(scrollPos).scrollIntoView({ behavior: "smooth" });
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
