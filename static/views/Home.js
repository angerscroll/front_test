import AbstractView from "./AbstractView.js"; // important .js

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle = "Home";
  }

  async getHtml() {
    return `<h1>hi guys, welcome to my HomePage</h1>`
  }
}