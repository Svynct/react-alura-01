import React, { Component } from 'react';
import "./assets/App.css";
import './assets/index.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    this.setState({
      notas: novoArrayNotas
    });
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({
      notas: arrayNotas
    });
  }

  adicionarCategoria(categoria) {
    let arrayCategorias = [...this.state.categorias, categoria]
    this.setState({
      categorias: arrayCategorias
    })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}/>
          <ListaDeNotas 
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}

export default App;
