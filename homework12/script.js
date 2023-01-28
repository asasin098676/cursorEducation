const url = "https://swapi.dev/api/films/";
const mainDiv = document.getElementById("mainDiv");
const div = document.getElementById("secondDiv");
const button = document.getElementById("startButton");
const filmValue = document.getElementById("filmNumber");
const mainPlanetDiv = document.getElementById("planetSlider");

async function getValueOfSomeEpisode() {
  div.innerHTML = "";
  const res = await (await fetch(`${url}${filmValue.value}`)).json();
  for (let i = 0; i < res.characters.length; i++) {
    const person = await (await fetch(res.characters[i])).json();
    const newDiv = document.createElement("div");
    const newP = document.createElement("h2");
    newDiv.setAttribute("class", "newDiv");

    div.appendChild(newDiv);
    newDiv.appendChild(newP);

    let name = person.name;
    let gender = person.gender;
    let dateBirth = person.birth_year;
    newP.innerHTML = `
     <h3>name: ${name}</h3>
     <img src = "" class="img" id = "${name}" />
     <p>gender: ${gender}</p>
     <p>date of birth: ${dateBirth}</p>
    `;
    getImgPerson(name);
  }
}

async function getImgPerson(name) {
  await fetch("https://akabab.github.io/starwars-api/api//all.json")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let character = response.find((val) => val.name === name);
      if (character.image) {
        document.getElementById(name).src = character.image;
      }
    });
}

async function getPlanets(val1) {
  const planets = (
    await (await fetch(`https://swapi.dev/api/planets/?page=${val1}`)).json()
  ).results;
  for (let i = 0; i < planets.length; i++) {
    const newUl = document.createElement("ul");
    mainPlanetDiv.appendChild(newUl);
    newUl.innerHTML = `<h2>${planets[i].name}</h2>`;
  }
}
let count1 = 2;
function next() {
  count1++;
  mainPlanetDiv.innerHTML = "";

  if (count1 > 6) {
    count1 = 1;
  }
  getPlanets(count1);
}
next();
