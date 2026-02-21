import { useState, useEffect } from "react";
import axios from "axios";

//los customHooks son funciones que empiezan con use y pueden usar otros hooks dentro de ellos, se usan para compartir lógica entre componentes
const useGetAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {

      }
    }
    getData();
  }, [url])

  return { data }
}

export default useGetAxios;
