export const state = {
  country: {},
  search: {},
  searchRegion: {},
  detailCountry: {},
};

export const renderCountry = async function () {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  state.country = data.map((data) => {
    return {
      name: data.name.common,
      nativeName: data.name.nativeName,
      capital: data.capital,
      flag: data.flags.png,
      languages: data.languages,
      population: data.population,
      region: data.region,
      borders: data.borders,
      currencies: data.currencies,
      subregion: data.subregion,
    };
  });
};

export const findCountry = function (query) {
  state.search = state.country.find((country) => {
    if (country.name.toLowerCase() == query.toLowerCase()) {
      return country;
    }
  });
};

export const findRegion = function (query) {
  state.searchRegion = state.country.filter((country) => {
    if (country.region.toLowerCase() == query.toLowerCase()) {
      return country;
    }
  });
};

export const detailCountry = function (query) {
  console.log(query);
  state.detailCountry = state.country.find((country) => {
    if (country.name.toLowerCase() == query.toLowerCase()) {
      return country;
    }
  });
  console.log(state.detailCountry);
};
