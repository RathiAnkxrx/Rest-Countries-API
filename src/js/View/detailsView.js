import View from "./view";
import icon from "../../../icons.svg";

class detailView {
  _displayElement = document.querySelector(".countries");
  _btn = document.querySelector(".country__btn--back");

  adddetailHandler() {
    console.log("entered at first");
    this._displayElement.addEventListener("click", function (e) {
      const target = e.target.closest(".country");
      target.classList.add("active");
    });
  }

  addbackHandler() {
    this._displayElement.addEventListener("click", function (e) {
      if (e.target.closest(".country__btn--back")) {
        e.target.closest(".country").classList.remove("active");
      }
    });
  }

  // addbackHandler(country) {
  //   console.log(this._btn);
  //   this._btn.addEventListener("click", function (e) {
  //     console.log("clicked");
  //   });
  // }
}

export default new detailView();
