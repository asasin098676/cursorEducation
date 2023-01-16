function keyFind(event) {
  const met = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  for (i in met) {
    const but = document.getElementById("h1");

    if (event === met[i]) {
      but.innerHTML = event;
      let som = document.getElementById(met[i]);
      let audio = som.children[0];
      audio.play();
    }
  }
}

onkeydown = (event) => {
  keyFind(event.key);
};
