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
      const dataPeticion = await axios.get(`${endPoints}data`,{});
      const dataBase= await dataPeticion.data;
      setData(dataBase);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
oliwis
    </div>
  );
}
