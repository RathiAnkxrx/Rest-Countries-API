import "core-js";
import "regenerator-runtime/runtime";
import searchCountry from "./View/contryView";
import * as module from "./module";
import contryView from "./View/contryView";
import regionView from "./View/regionView";
import detailsView from "./View/detailsView";

if (module.hot) {
  module.hot.accept();
}

const regionIcon = document.querySelector(".icon--down");

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
  searchCountry.addinputHandler(controlSearchCountry);
  regionView.addSelectHandler(controlSearchRegion);
};

init();

let a = Math.round(prompt("").trim());
let b = Math.round(prompt("").trim());
const arr1 = [],
  arr2 = [],
  arr3 = [];

for (let i = 2; i < a; ) {
  if (a % i === 0) {
    arr1.push(i);
  }
  i++;
}
for (let i = 2; i < b; ) {
  if (b % i === 0) {
    arr2.push(i);
  }
  i++;
}
for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) arr3.push(arr1[i]);
  }
}
console.log(arr3.length + 1);
