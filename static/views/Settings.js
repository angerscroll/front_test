import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle = "settings";
  }

  async getHtml() {
    return `<h1>settings</h1>`
  }
}