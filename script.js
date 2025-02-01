function openProject(url) {
  window.location.href = url;
}

function toggleExpand() {
  const content = document.querySelector(".expand-content");
  const title = document.querySelector(".expander h2");
  if (title.innerHTML == "Coordonnées ▽") {
      content.style.display = "block";
      content.style.top = "193px";
      title.innerHTML = "Coordonnées △"
  } else {
      content.style.top = "0px";
      title.innerHTML = "Coordonnées ▽"
  }
}