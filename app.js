import { countries } from "./countries.js";

const container = document.querySelector(".countries");
const searchInput = document.querySelector("#search-input");

// Función que renderiza los países
function renderCountries(filteredCountries) {
  container.innerHTML = ""; // Limpiar contenido anterior

  filteredCountries.forEach(({ country, capital, population }) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `
      <h2>${country}</h2>
      <hr/>
      <p>Capital: ${capital}</p>
      <p>Población: ${population.toLocaleString()}</p>
    `;
    container.appendChild(card);
  });
}

// Mostrar todos los países al cargar
renderCountries(countries);

// Escuchar cambios en el input
searchInput.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();
  const filtered = countries.filter(({ country }) =>
    country.toLowerCase().includes(searchText)
  );
  renderCountries(filtered);
});
