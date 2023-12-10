import React from 'react';
import './pilhas.css'; // Importe o arquivo CSS

class CaixaDeTextoInterativa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conteudo: 'Conteúdo inicial',
      pilhaResultados: [],
    };
  }

  // Função para atualizar o conteúdo da caixa de texto
  atualizarConteudo = (novoConteudo) => {
    this.setState((prevState) => ({
      conteudo: novoConteudo,
      pilhaResultados: [...prevState.pilhaResultados, novoConteudo],
    }));
  };

  // Função para adicionar um item à pilha (push)
  push = () => {
    if (this.state.pilhaResultados.length < 10) {
      const novoConteudo = this.state.pilhaResultados.length + 1;
      this.setState((prevState) => ({
        conteudo: novoConteudo,
        pilhaResultados: [
          ...prevState.pilhaResultados,
          <div key={novoConteudo} className="numeroDestaque">{novoConteudo}</div>,
        ],
      }));
    } else {
      alert('Número máximo de caixas atingido (10).');
    }
    
  };


  // Função para remover o último item da pilha (pop)
  pop = () => {
    if (this.state.pilhaResultados.length > 0) {
      // Remove o último item da pilha
      const [, ...novaPilhaResultados] = this.state.pilhaResultados;
      this.setState({
        pilhaResultados: novaPilhaResultados,
      });
      this.atualizarConteudo(''); // Não exibe mensagem
    }
  };

  top = () => {
    if (this.state.pilhaResultados.length > 0) {
      const topo = this.state.pilhaResultados[0].props.children;
      alert(`Topo: ${topo}`);
    } else {
      alert('A pilha de resultados está vazia.');
    }
  };
  
  
  
  // Função para verificar se a pilha está vazia
  isEmpty = () => {
    const vazia = this.state.pilhaResultados.length === 0;
    const mensagem = vazia ? 'A pilha de resultados está vazia.' : 'A pilha de resultados não está vazia.';
    alert(mensagem);
  };
  

// Função para obter o tamanho da pilha
size = () => {
  const numerosNaPilha = this.state.pilhaResultados.filter(item => !isNaN(item) && item !== '' && item !== null);
  const tamanho = numerosNaPilha.length;
  alert(`Tamanho da pilha: ${tamanho}`);
};
  
  

  // Função para limpar a caixa de texto
  limparCaixaDeTexto = () => {
    this.setState({
      conteudo: 'Conteúdo inicial',
      pilhaResultados: [],
    });
  };

  render() {
    return (
      <div>
        {/* Exibe o conteúdo dinâmico com classes de estilo */}
        <div className="caixaDeTexto">
          {this.state.pilhaResultados.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>

        {/* Botões para manipular a pilha */}
        <button className="botaoAtualizar" onClick={this.push}>
          Push
        </button>

        <button className="botaoAtualizar2" onClick={this.pop}>
          Pop
        </button>

        <button className="botaoAtualizar3" onClick={this.top}>
          Top
        </button>

        <button className="botaoAtualizar4" onClick={this.isEmpty}>
          IsEmpty
        </button>

        <button className="botaoAtualizar5" onClick={this.size}>
          Size
        </button>

        {/* Botão para limpar a caixa de texto */}
        <button className="botaoLimpar" onClick={this.limparCaixaDeTexto}>
          Limpar Informações
        </button>
      </div>
    );
  }
}

export default CaixaDeTextoInterativa;
