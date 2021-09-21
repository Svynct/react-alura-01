import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this.criarNota.bind(this)}>
        <input 
          type="text" 
          placeholder="Titulo" 
          className="form-cadastro_input" 
          onChange={this.handleMudancaTitulo.bind(this)}/>
        <textarea 
          rows={15} 
          placeholder="Escreva sua nota..." 
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}/>
        <button className="form-cadastro_submit">CRIAR NOTA</button>
      </form>
    );
  }
}

export default FormularioCadastro;