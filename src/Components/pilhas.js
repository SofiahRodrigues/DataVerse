// pilhas.js

import React, { useState, useEffect } from 'react';
import './pilhas.css'; // Importa estilos CSS

const Pilhas = () => {
  // Estado para o conteúdo (não utilizado no código atual)
  const [conteudo, setConteudo] = useState('Conteúdo inicial');

  // Estado para a pilha e o número máximo de elementos permitidos
  const [stack, setStack] = useState([]);
  const maxStackSize = 10;

  // Função para adicionar um novo elemento à pilha
  const pushElement = () => {
    if (stack.length < maxStackSize) {
      const newElement = Math.floor(Math.random() * 100) + 1;
      setStack((prevStack) => [...prevStack, newElement]);
    }
  };

  // Função para remover o elemento do topo da pilha
  const popElement = () => {
    if (stack.length > 0) {
      setStack((prevStack) => {
        const newStack = [...prevStack];
        newStack.pop();
        return newStack;
      });
    }
  };

  // Função para obter o elemento no topo da pilha ou indicar que a pilha está vazia
  const topElement = () => {
    return stack.length > 0 ? stack[stack.length - 1] : 'Stack is empty';
  };

  // Função para verificar se a pilha está vazia ou cheia
  const isEmpty = () => {
    return stack.length > 0 ? 'Cheia' : 'Vazia';
  };

  // Função para obter o tamanho atual da pilha
  const size = () => {
    return stack.length;
  };

  // Efeito para simular a adição e remoção de elementos da pilha em intervalos de tempo
  useEffect(() => {
    const pushInterval = setInterval(() => {
      pushElement();
    }, 1500);

    const popInterval = setInterval(() => {
      popElement();
    }, 3000);

    // Limpa os intervalos quando o componente é desmontado ou quando a pilha atinge o tamanho máximo
    return () => {
      clearInterval(pushInterval);
      clearInterval(popInterval);
    };
  }, [stack, maxStackSize]);

  return (
    <div>
      {/* Caixa de texto para a pilha */}
      <div className="caixaDeTexto">
        <div className="stack-container">
          {/* Exibe os elementos da pilha */}
          <div className="stack">
            {stack.map((element, index) => (
              <div key={index} className="stack-element">
                {element}
              </div>
            ))}
          </div>
          {/* Exibe informações formatadas sobre a pilha */}
          <div className="info-container">
            {/* Caixa colorida para o "Top" */}
            <div className="info-box">Top: {topElement()}</div>
            {/* Caixa colorida para o "IsEmpty" */}
            <div className="info-box">IsEmpty: {isEmpty()}</div>
            {/* Caixa colorida para o "Size" */}
            <div className="info-box">Size: {size()}</div>
          </div>
        </div>
      </div>

      {/* Botões na parte inferior esquerda com estilos personalizados */}
      <div className="button-container-left">
        {/* Botão para adicionar elemento à pilha */}
        <button className="botaoPush" onClick={pushElement} disabled={stack.length >= maxStackSize}>
          Push
        </button>
        {/* Botão para remover elemento do topo da pilha */}
        <button className="botaoPop" onClick={popElement} disabled={isEmpty() === 'Vazia'}>
          Pop
        </button>
      </div>
    </div>
  );
};

export default Pilhas;
