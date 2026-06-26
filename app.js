/* Fisica di Irene — utilità condivise */
function toggleSol(id, btn){
  var el = document.getElementById(id);
  if(!el) return;
  var open = el.classList.toggle("open");
  if(btn) btn.textContent = open ? "🙈 Nascondi soluzioni" : "🔑 Mostra soluzioni";
}

/* Video esplicativi: carica l'iframe YouTube solo al click (pagina più leggera). */
function playVideo(box){
  if(!box || box.classList.contains("playing")) return;
  var id = box.getAttribute("data-id");
  if(!id) return;
  var ifr = document.createElement("iframe");
  ifr.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
  ifr.title = "Video esplicativo";
  ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  ifr.allowFullscreen = true;
  ifr.setAttribute("frameborder", "0");
  box.innerHTML = "";
  box.appendChild(ifr);
  box.classList.add("playing");
}
