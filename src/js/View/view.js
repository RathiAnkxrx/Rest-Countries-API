export default class View {
  _data;

  render(data) {
    this._data = data;
    if (!this._data) return;
    const markup = this._genrerateMarkup();
    this.clear();
    this._displayElement.insertAdjacentHTML("beforeend", markup);
  }

  clear() {
    this._displayElement.innerHTML = "";
  }
}
