import View from "./view";
import icon from "../../../icons.svg";
class regionView extends View {
  _parentElement = document.querySelector(".input--region");

  _listElement = document.querySelectorAll(".list__items");
  _displayElement = document.querySelector(".countries");

  addSelectHandler(handler) {
    this._listElement.forEach((reg) => {
      reg.addEventListener("click", function (e) {
        document.querySelector(".input--region").value = e.target.innerHTML;
        handler(e.target.innerHTML);
      });
    });
  }

  _genrerateMarkup() {
    return this._data.map((con) => this._genrerateMarkupList(con)).join("");
  }

  _genrerateMarkupList(data) {
    return `
     <div class="country">
          <button class="country__btn--back">
            <svg class="icon icon--back">
              <use href="${icon}#icon-arrow-long-left"></use>
            </svg>
            Back
          </button>

          <img
            src="${data.flag}"
            alt=""
            class="country--flag"
          />
          <div class="country__details">
            <h1 class="country--name">${data.name}</h1>
            <p class="country--population">Population: ${data.population}</p>
            <p class="country--region">Region: ${data.region}</p>
            <p class="country--capital">Capital: ${data.capital}</p>
          </div>

          <div class="country__more">
            <h1 class="country--name">${data.name}</h1>
            <ul class="country__list">
              <li class="country__list--items">Native name : <span>${this._nativeaName(
                data.nativeName
              )}</span></li>
              <li class="country__list--items">Population : <span>${
                data.population
              }</span></li>
              <li class="country__list--items">Region : <span>${
                data.region
              }</span></li>
              <li class="country__list--items">Capital : <span>${
                data.capital
              }</span></li>
              <li class="country__list--items">Currencies : <span>${this._currencyName(
                data.currencies
              )}</span></li>
              <li class="country__list--items">Language : <span>${this._traverse(
                data.languages
              )}</span></li>
            </ul>
            <div class="country__borders">
              <p>Border Countries :</p>
              ${this._borderList(data.borders)}
            </div>
          </div> 
        </div>
    `;
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

export default new regionView();
