import { countries } from "./countries.js";

const container = document.querySelector(".countries");
const searchInput = document.querySelector("#search-input");

// Función que renderiza los países
function renderCountries(filteredCountries) {
  container.innerHTML = ""; // Limpiar tarjetas anteriores

  if (filteredCountries.length === 0) {
    // Si no hay países, mostrar mensaje
    const noResult = document.createElement("div");
    noResult.className = "country-card";
    noResult.innerHTML = `
      <h2>No countries found</h2>
      <p>Try another name.</p>
    `;
    container.appendChild(noResult);
    return;
  }

  // Si hay países, renderizarlos normalmente
  filteredCountries.forEach(({ country, capital, population }) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `
      <h2>${country}</h2>
      <p>Capital: ${capital}</p>
      <p>Population: ${population.toLocaleString()}</p>
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
