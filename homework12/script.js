const url = "https://swapi.dev/api";
const mainDiv = document.getElementById("mainDiv");
const div = document.getElementById("secondDiv");
const button = document.getElementById("startButton");
const mainPlanetDiv = document.getElementById("planetSlider");
const moviePosters = {
  1: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  2: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
  3: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
  4: "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/star-wars-a-new-hope-one-sheet-i28733.jpg",
  5: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  6: "https://cloud.vistaapps.elcapitantheatre.com/CDN/media/entity/get/FilmPosterGraphic/h-HO00000182",
};
getPlanets(1);

async function getValueOfEpisode() {
  div.innerHTML = "";

  const results = (await (await fetch(`${url}/films`)).json()).results;

  for (let i = 0; i < results.length; i++) {
    const { release_date, title, episode_id } = results[i];

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "newDiv");
    div.appendChild(newDiv);

    newDiv.innerHTML = `
     <h2>Ephisode${episode_id}:  ${title}</h2>
     <img src = ${moviePosters[episode_id]}>
     <h2>date of release: ${release_date}</h2>
     <button class="infoBut" onclick="getValueOfSomeEpisode(${episode_id})" >get Information</button>
    `;
  }
  getPlanets();
}

async function getValueOfSomeEpisode(per) {
  div.innerHTML = `
        <button
          class="backButton"
          onclick="getValueOfEpisode()"
        >
          back
        </button>
    `;

  let newRes = 0;
  if (per == 6 || per == 5 || per == 4) {
    newRes = per - 3;
  } else {
    newRes = per + 3;
  }

  const res = await (await fetch(`${url}/films/${newRes}`)).json();
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
  const planets = (await (await fetch(`${url}/planets/?page=${val1}`)).json())
    .results;
  for (let i = 0; i < planets.length; i++) {
    console.log(planets[i].name);
    const newUl = document.createElement("ul");
    mainPlanetDiv.appendChild(newUl);
    newUl.innerHTML = `<h2>${planets[i].name}</h2>`;
  }
}
let count1 = 2;
function rite() {
  count1++;
  mainPlanetDiv.innerHTML = "";

  if (count1 > 6) {
    count1 = 1;
  }
  console.log(count1);
  getPlanets(count1);
}
