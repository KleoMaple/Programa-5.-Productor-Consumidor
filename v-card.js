class VCard extends HTMLElement {
  constructor() {
    super();

    this.image = "";
  }

  connectedCallback() {
    if(this.getAttribute("image") != this.image){
      this.image = this.getAttribute("image");

      this.render();
    }
  }

  render() {
  this.innerHTML = `
    <div class="my-2 mx-1 text-center">
      <img src="./img/${this.image}" style="height: 110px; width: 115px;"></img>
      <br>
      ${this.id === "Productor" ? `
        <img src="img/productor.png" style="height: 50px; width: 150px;">
      ` : this.id === "Consumidor" ? `
        <img src="img/consumidor.png" style="height: 50px; width: 150px;">
      ` : ""}
      <br>
      ${isNaN(this.id) ? `
        <img src="${this.image === "pico.png" || this.image === "Hornofuego.png" ? "img/trabajando.png" : "img/Dormido.png"}" style="height: 50px; width: 150px;">
      ` : this.id >= 0 && this.id <= 19 ? `
        <img src="img/id_${this.id}.png" style="height: 50px; width: 50px;">
      ` : ""}
    </div>
  `;
}




}

customElements.define("v-card", VCard);