import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle = "PuzzlesView";
    console.log(params.id);
  }

  async getHtml() {
    return `
      <h1>welcome Puzzles page</h1>
    `
  }
}