import { Header } from "./Componentes/Header";
import { Buscador } from "./Componentes/Buscador";
import { MainContent } from "./Componentes/MainContent";
import {Provider} from "react-redux"
import { store } from "./store/store";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Buscador />
        <MainContent />
      </Provider>


    </div>
  );
}

export default App;
