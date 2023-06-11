// Collapsible Hugo code blocks
// by Jiri De Jagere, @JiriDJ

var height = "300px";

if (
  document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  makeCollapsible();
} else {
  document.addEventListener("DOMContentLoaded", makeCollapsible);
}

function toggle(e) {
  e.preventDefault();
  var link = e.target;
  var div = link.parentElement.parentElement;

  if (link.innerHTML == "Mostrar código completo&nbsp;") {
    link.innerHTML = "Mostrar menos&nbsp;";
    div.style.maxHeight = "";
    div.style.overflow = "none";
  }
  else {
    link.innerHTML = "Mostrar código completo&nbsp;";
    div.style.maxHeight = height;
    div.style.overflow = "hidden";
    div.scrollIntoView({ behavior: 'smooth' });
  }
}

function makeCollapsible() {
  var divs = document.querySelectorAll('.highlight-wrapper');

  for (i=0; i < divs.length; i++) {
    var div = divs[i];
    if (div.offsetHeight > parseInt(height, 10)) {
      div.style.maxHeight = height;
      div.style.overflow = "hidden";

      var e = document.createElement('div');
      e.className = "highlight-link";

      var html = '<a href="">Mostrar código completo&nbsp;</a>';
      e.innerHTML = html;
      div.appendChild(e);
    }
  }

  var links = document.querySelectorAll('.highlight-link');
  for (i=0; i<links.length; i++) {
    var link = links[i];
    link.addEventListener('click', toggle);
  }
}
