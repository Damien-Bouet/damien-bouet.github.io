function openPage(url) {
  window.location.href = url;
}

function scrollToElement(element_id){
  document.getElementById(element_id).scrollIntoView({ behavior: "smooth" });
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const scrollPos = params.get("scroll");
  if (scrollPos) {
    document.getElementById(scrollPos).scrollIntoView({ behavior: "smooth" });
  }
};