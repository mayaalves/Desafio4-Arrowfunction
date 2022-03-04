import React, { Component } from "react";

class App extends Component {
  mensagem = () => {
    return "Este é o Desafio Arrow Function!";
  };
  calcular2 = (x) => {
    return x * 2;
  };
  render() {
    return (
      <div>
        <h1>Desafio Arrow function</h1>
        <p>{this.mensagem()}</p>
        <p>O dobro é: {this.calcular2(6)}.</p>
      </div>
    );
  }
}
export default App;
