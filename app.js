document.addEventListener("DOMContentLoaded", () => {
  let searchBtn = document.getElementById("search-btn");
  let countryInp = document.getElementById("country-inp");
  let result = document.getElementById("result");
  let loadingScrn = document.getElementById("Loading");

  searchBtn.addEventListener("click", async () => {
    let countryName = countryInp.value.trim();
    let URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(URL);
    loadingScrn.classList.remove("invisible");

    try {
      let response = await fetch(URL);
      let data = await response.json();

      console.log(data[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].capital[0]);
      console.log(data[0].continents[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(Object.values(data[0].languages).toString());

      // result HTML...
      result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img"/>
            <p id="country">Country : ${data[0].name.common}</p>
            <p>Capital : ${data[0].capital[0]}</p>
            <p>Continent : ${data[0].continents[0]}</p>
            <p>Currency : ${
              data[0].currencies[Object.keys(data[0].currencies)].name
            }</p>
            <p>Language Spoken : ${Object.values(
              data[0].languages
            ).toString()}</p>
        `;
    } catch (erro) {
      result.innerHTML = "<p>Error fetching data..<p/>";
    } finally {
      loadingScrn.classList.add("invisible");
    }
  });
});

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0]);
//     console.log(data[0].flags.svg);
//     console.log(data[0].name.common);
//     console.log(data[0].capital[0]);
//     console.log(data[0].continents[0]);
//     console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
//     console.log(Object.values(data[0].languages).toString());
//     result.innerHTML = `
//       <img src="${data[0].flags.svg}" class="flag-img"/>
//       <p id="country">Country : ${data[0].name.common}</>
//       <p>Capital : ${data[0].capital[0]}</>
//       <p>Continent : ${data[0].continents[0]}</>
//       <p>Currency : ${
//         data[0].currencies[Object.keys(data[0].currencies)].name
//       }</>
//       <p>Language Spoken : ${Object.values(data[0].languages).toString()}</>
//       `;
//   })
//   .catch(() => {
//     if (countryName.length == 0) {
//       result.innerHTML = `<h3>Please Enter Country Name</h3>`;
//     } else {
//       result.innerHTML = `<h3>Please Enter a valid Country Name</h3>`;
//     }
//   });
