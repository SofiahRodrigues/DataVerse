import CaixaDeTextoInterativa from './Components/pilhas';
import './Components/pilhas.css';
import Navbar from './Components/Navbar';
import Footer from'./Components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     
     <CaixaDeTextoInterativa />

     <Footer/>
    </div>
  );
}

export default App;
