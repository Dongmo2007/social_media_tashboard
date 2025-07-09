document.getElementById("button").addEventListener("click", function () {
  var body = document.body;
  var isLight = body.classList.toggle("light-theme");
  var h = document.getElementsByTagName("h1");
  var cola = document.querySelector(".cola");
  var colb = document.querySelector(".colb");
  var colc = document.querySelector(".colc");
  var cold = document.querySelector(".cold");
  var es = document.querySelector(".es");
  var col3 = document.querySelectorAll(".col3");
  var p = document.querySelectorAll(".p");

  if (isLight) {
    body.style.backgroundColor = "hsl(0, 0%, 100%)";
    body.style.color = "black";
    for (var i = 0; i < h.length; i++) {
      h[i].style.color = "black";
    }
    for (var j = 0; j < col3.length; j++) {
      col3[j].style.backgroundColor = "hsl(227, 47%, 96%)";
    }
    for (var t = 0; t < p.length; t++) {
      p[t].style.color = "black";
    }
    cola.style.backgroundColor = "hsl(227, 47%, 96%)";
    colb.style.backgroundColor = "hsl(227, 47%, 96%)";
    colc.style.backgroundColor = "hsl(227, 47%, 96%)";
    cold.style.backgroundColor = "hsl(227, 47%, 96%)";
    es.textContent = "Mode clair activé";
    es.style.color = "black";
    es.style.marginright = "8%";
    es.style.fontWeight = "bold";
  } else {
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    body.style.color = "white";
    for (var i = 0; i < h.length; i++) {
      h[i].style.color = "white";
    }
    for (var j = 0; j < col3.length; j++) {
      col3[j].style.backgroundColor = "hsl(228, 28%, 20%)";
    }
    for (var t = 0; t < p.length; t++) {
      p[t].style.color = "hsl(227, 47%, 96%)";
    }
    cola.style.backgroundColor = "hsl(228, 28%, 20%)";
    colb.style.backgroundColor = "hsl(228, 28%, 20%)";
    colc.style.backgroundColor = "hsl(228, 28%, 20%)";
    cold.style.backgroundColor = "hsl(228, 28%, 20%)";
    es.textContent = "Mode sombre activé";
    es.style.color = "white";
  }
});
