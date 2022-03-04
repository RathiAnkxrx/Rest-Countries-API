import View from "./view";
import icon from "../../../icons.svg";

class SearhCountry extends View {
  _parentElement = document.querySelector(".input--country");
  _displayElement = document.querySelector(".countries");

  addinputHandler(handle) {
    this._parentElement.addEventListener("input", function (e) {
      const query = e.target.value;
      handle(query);
    });
  }
  _genrerateMarkup() {
    return `
      <div class="country">
          <button class="country__btn--back">
            <svg class="icon icon--back">
              <use href="${icon}#icon-arrow-long-left"></use>
            </svg>
            Back
          </button>

          <img
            src="${this._data.flag}"
            alt=""
            class="country--flag"
          />
          <div class="country__details">
            <h1 class="country--name">${this._data.name}</h1>
            <p class="country--population">Population: ${this._data.population}
            </p>
            <p class="country--region">Region: ${this._data.region}</p>
            <p class="country--capital">Capital: ${this._data.capital}</p>
          </div>

          <div class="country__more">
            <h1 class="country--name">${this._data.name}</h1>
            <ul class="country__list">
              <li class="country__list--items">Native name :<span>${this._nativeaName(
                this._data.nativeName
              )}
              <li class="country__list--items">Population :<span>${
                this._data.population
              }</span></li>
              <li class="country__list--items">Region : <span>${
                this._data.region
              }</span></li>
              <li class="country__list--items">Sub Region : <span>${
                this._data.subregion
              }</span></li>
              <li class="country__list--items">Capital : <span>${
                this._data.capital
              }</span></li>
              <li class="country__list--items">Currencies : <span>${this._currencyName(
                this._data.currencies
              )}
              </span></li>
              <li class="country__list--items">Language : <span>${this._traverse(
                this._data.languages
              )}</span></li>
            </ul>
            <div class="country__borders">
              <p>Border Countries :</p>
              ${this._borderList(this._data.borders)}
            </div>
          </div?
      </div>`;
  }

  _borderList(borders) {
    if (!borders) return;
    const data = borders
      .map((border) => {
        return `<p class="country__border">${border}</p>`;
      })
      .join("");
    return data;
  }

  _nativeaName(object) {
    let arr = [];
    for (const key in object) {
      let obj = object[key];
      arr.push(obj.common);
    }
    return arr;
  }
  _currencyName(object) {
    let arr = [];
    for (const key in object) {
      let obj = object[key];
      arr.push(obj.name);
    }
    return arr;
  }
  _traverse(object) {
    let arr = [];
    for (const key in object) {
      arr.push(`${object[key]}`);
    }
    return arr;
  }
}

export default new SearhCountry();
