import { Header } from "./Componentes/Header";
import { Buscador } from "./Componentes/Buscador";
import { MainContent } from "./Componentes/MainContent";
import { Footer } from "./Componentes/Footer";
import { useEffect, useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import { endPoints } from "./types/endPoints";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setEstado } from "./actions/filtrosAvanzadosOrigen";


function App() {

  const history = useHistory();
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);
  const endPoint = `${endPoints}estados`;
  const dispatch = useDispatch();

  useEffect(() => {
    getEstados();
  }, [])

  async function getEstados() {

        
    try {
    
      const dataPeticion = await axios.get(endPoint,{
      });

      const dataBase= await dataPeticion.data;

      const result = dataBase.results.filter( (estado) => estado.id == id);

      if (result.length > 0) {
        
        dispatch( setEstado(result[0].nombre, result[0].id, result[0].alias, result[0].header, result[0].footer))
        setCargando(false);

      }else{
        history.push("/");
      }

    } catch (error) {
      console.log(error)

    }
}

  return (
    
      cargando ?       
        <div className="tarjetas-container circularProgress col-12 col-md-9" >
          <CircularProgress className="circulo" size={100} />
        </div>:
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
