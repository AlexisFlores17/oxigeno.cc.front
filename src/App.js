import { Header } from "./Componentes/Header";
import { Buscador } from "./Componentes/Buscador";
import { MainContent } from "./Componentes/MainContent";
import CardsGrid from './Componentes/CardsGrid'


function App() {
  return (
    <div className="App">
      <Header />
      <Buscador />
      <MainContent />
      {/* <CardsGrid /> */}
    </div>
  );
}

export default App;
