function createBlock() {
  for (let i = 0; i < 25; i++) {
    let newDiv = document.createElement("div");
    const mainDiv = document.getElementById("mainDiv");
    newDiv.setAttribute("class", "newDiv");
    newDiv.setAttribute("id", "newDiv");
    mainDiv.appendChild(newDiv);

    newDiv.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}
createBlock();

function generateBlocksInterval() {
  for (let i = 0; i < 25; i++) {
    let newDiv = document.createElement("div");
    const mainDiv = document.getElementById("mainDiv");
    newDiv.setAttribute("class", "newDiv");
    newDiv.setAttribute("id", "newDiv");
    mainDiv.appendChild(newDiv);
    setInterval(() => {
      newDiv.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);
  }
}
