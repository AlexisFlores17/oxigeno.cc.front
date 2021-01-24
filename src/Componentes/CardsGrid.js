import MyCard from "./MyCard.js"
import data from '../img/data.json'

export default function App() {  
  console.log(data[1].concentradores[0])
  const distribuidores_con_tanque = data.filter(distribuidor => distribuidor.tanques[0] != null);  
  
  return (
    <div className="tarjetas-container">
      {distribuidores_con_tanque.map((distribuidor) =>
        <MyCard 
          key={distribuidor.nombre_distribuidor}
          distribuidor = {distribuidor}
        />
      )}
      
    </div>
  );
  
}
