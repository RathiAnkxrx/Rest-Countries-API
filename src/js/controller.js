import "core-js";
import "regenerator-runtime/runtime";
import searchCountry from "./View/contryView";
import * as module from "./module";
import contryView from "./View/contryView";
import regionView from "./View/regionView";
import detailsView from "./View/detailsView";

const regionIcon = document.querySelector(".icon--down");
const themeIcom = document.querySelector(".theme__section");

themeIcom.addEventListener("click", (e) => {
  document.body.classList.toggle("light-theme");
});

regionIcon.addEventListener("click", function (e) {
  const regionList = e.target.nextElementSibling;
  if (!regionList) return;
  console.log(regionList);
  regionList.classList.toggle("active");
  console.log("clicked");
});

const controlSearchCountry = async function (query) {
  module.findCountry(query);
  if (!module.state.search) return;
  contryView.render(module.state.search);
  detailsView.adddetailHandler();
  detailsView.addbackHandler();
};

const controlSearchRegion = async function (data) {
  module.findRegion(data);
  // if (!module.state.region) return;
  regionView.render(module.state.searchRegion);
  detailsView.adddetailHandler();
  detailsView.addbackHandler();
};

const init = async function () {
  await module.renderCountry();
  regionView.render(module.state.country);
  searchCountry.addinputHandler(controlSearchCountry);
  regionView.addSelectHandler(controlSearchRegion);
};

init();
