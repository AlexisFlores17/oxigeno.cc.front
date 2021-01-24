import MyCard from "./MyCard.js"
import data from '../img/data.json'

export default function App() {  
  console.log(data[1].concentradores[0])
  const distribuidores_con_tanque = data.filter(distribuidor => distribuidor.tanques[0] != null);  //TODO:quitar este filtro
  const distribuidores_con_concentradores = data.filter(distribuidor => distribuidor.concentradores[0] != null);  //TODO:quitar este filtro
  const distribuidores_completos = data.filter(distribuidor => distribuidor.tanques[0] != null && distribuidor.concentradores[0] != null);  //TODO:quitar este filtro
  
  return (
    <div className="tarjetas-container">
      {distribuidores_completos.map((distribuidor) =>
        <MyCard 
          key={distribuidor.nombre_distribuidor}
          distribuidor = {distribuidor}
        />
      )}
      
    </div>
  );
  
}
