import { useState, useEffect, use } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAuthStore } from "../store/useAuthStore";
import { db } from "../config/configFirebase";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useAuthStore();
  console.log( user )

  useEffect(() => {
    //creamos una consulta a la colección "orders" donde el campo "userId" sea igual al uid del usuario logueado
    const consulta = query(collection(db, "orders"), where("userId", "==", user.uid));
    //unsubscribe, es la funcion que nos devuelve onSnapshot para poder detener el listener cuando el componente se desmonte, prevenir fugas de memoria
    const unsubscribe = onSnapshot(consulta, (querySnapshot) => {
      const ordersData = [];
      //querySnapshot es un objeto especial de firebase con los documentos que cumplen con la consulta, podemos iterar sobre ellos con forEach y obtener los datos de cada documento con doc.data() y el id con doc.id
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        // console.log("Document data:", doc.data());
        ordersData.push({ id: doc.id, ...doc.data() });
      });
      // console.log(ordersData);
      setOrders(ordersData);
    });

    //limpiamos el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return (
    <div>Orders</div>
  )
}

export default Orders
