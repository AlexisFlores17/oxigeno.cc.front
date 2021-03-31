import { Header } from "./Componentes/Header";
import { Buscador } from "./Componentes/Buscador";
import { MainContent } from "./Componentes/MainContent";
import { Footer } from "./Componentes/Footer";



function App() {

  return (
    <div className="App">
        <div className="pageContainer">
          <Header />
          <Buscador />
          <MainContent />
        </div>
        <Footer />
    </div>
  );
}

export default App;
