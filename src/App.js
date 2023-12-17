import React from 'react';
import Navbar from './Components/Navbar'; // Importe da Navbar 
import './Components/Navbar.css'; 
import Pilhas from './Components/pilhas'; // Importe o componente Pilhas
import './App.css'; // Importe o arquivo CSS principal, ajuste conforme necessário
import Footer from './Components/Footer'; // Importe do Footer
import './Components/Footer.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <h1>Estrutura de Pilhas</h1>
      <a>
        Pilhas, no contexto da ciência da computação, são estruturas de dados 
        fundamentais que operam sob o princípio Last In, First Out (LIFO). Isso 
        significa que o último elemento inserido é o primeiro a ser removido. 
        Assim como uma pilha de pratos, onde adicionamos e retiramos sempre do topo, 
        as pilhas são cruciais em muitos algoritmos e aplicativos. A operação "push"
         adiciona um elemento ao topo, enquanto "pop" remove o elemento mais recente. 
         Essa organização eficiente facilita o rastreamento de chamadas de funções, a 
         avaliação de expressões matemáticas e a implementação de algoritmos, tornando 
         as pilhas uma ferramenta valiosa na manipulação de dados temporários em programação.
         </a>
      <Pilhas />
        
      <Footer />
    </div>
  );
}

export default App;
