document.getElementById("button").addEventListener("click", function () {
  var body = document.body;

  var isDark = body.classList.toggle("light-theme");
  // Changer le fond et la couleur du texte selon le thème
  if (isDark) {
    // document.querySelector(".es").textContent = "mode clair ";
    body.style.backgroundColor = "hsl(227, 47%, 96%)";
    body.style.color = "black";
    var h = document.getElementsByTagName("h1");
    h.style.color = "black";
    document.querySelector(".cola").style.backgroundColor =
      "hsl(230, 93.70%, 37.10%)";
    el.style.backgroundColor = "hsl(227, 47%, 96%)";
  } else {
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    body.style.color = "white";
    var h = document.getElementsByTagName("h1");
    h.style.color = "white";
  }
  document.querySelector(".cola").style.backgroundColor = "hsl(230, 17%, 14%)";
});
