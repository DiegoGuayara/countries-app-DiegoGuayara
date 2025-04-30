import { countries } from "./countries.js";

const cont1 = document.querySelector(".countries");

countries.map(({ country, capital, population }) => {
  const div = document.createElement("div");
  div.className = "country-card";
  div.innerHTML = `<h2>${country}</h2><p>Capital: ${capital}</p><p>Population: ${population}</p><br/> <hr/>`;

  cont1.appendChild(div);
});
