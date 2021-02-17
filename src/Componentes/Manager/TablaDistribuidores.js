import React, { useEffect, useState } from 'react';
import { endPoints } from '../../types/endPoints';
import axios from 'axios';
import MaterialTable from 'material-table';


export default function TablaDistribuidores() {

  const [data, setData] = useState([]); 

  useEffect(() => {
    getData();
  },[]);

  async function getData() {
    try {
      const dataPeticion = await axios.get(endPoints,{});
      const dataBase= await dataPeticion.data;
      setData(dataBase);
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
      
    { title: 'Distribuidor', field: 'nombre_distribuidor' },
    { title: 'Teléfono', field: 'telefono', type: 'numeric' },
    { title: 'Última actualización', field: 'ultima_actualizacion'},
    
  ]

  const actions = [
		{
		  icon: 'search',
		  tooltip: 'Ver Folios',
		  // onClick: (event, rowData) => history.push(`/Admin/foliosRegistrados/${rowData.user_id}/${rowData.name}`)
		}
	]

  return (
    <>
      <MaterialTable
        title="Distribuidores"
        columns={columns}
        data={data}
        options={{
          headerStyle: {
            backgroundColor: '#354b63',
            color: '#FFF',
            textAlign: "center",
            fontSize: "20px"
          },
          cellStyle: {          
            textAlign: "center",
            
          }
        }}
        actions={actions}
        localization={{                                      
          header: {
            actions: 'Folios'
          },
          pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsSelect: 'Filas',
            labelRowsPerPage: 'Filas por página:',
            firstAriaLabel: 'Primera página',
            firstTooltip: 'Primera Página',
            previousAriaLabel: 'Página anterior',
            previousTooltip: 'Página anterior',
            nextAriaLabel: 'Siguiente página',
            nextTooltip: 'Siguiente página',
            lastAriaLabel: 'Última página',
            lastTooltip: 'Última página'
          },
          toolbar: {                
            searchTooltip: 'Buscar',
            searchPlaceholder: 'Buscar'
          }
        }} 
      />
    </>
  );
}
