import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle = "Puzzles";
  }

  async getHtml() {
    return `
      <h1>welcome Puzzles page</h1>
    `
  }
}