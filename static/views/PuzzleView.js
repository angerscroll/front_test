import AbstractView from "./AbstractView.js";

const getData = async () => {
  const result = await fetch("http://localhost:3000/post",{
    method: "POST"
  });
}

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle = "PuzzlesView";
    this.html = `1`;
    console.log(params.id);
    getData();
  }

  async getHtml() {
    return this.html;
  }
}