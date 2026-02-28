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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Pedidos</h1>
      {orders.length === 0 ? (
        <p className="text-lg">No tienes pedidos aún.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Dirección</th>
              <th className="px-4 py-2">Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-2">{order.fullName}</td>
                <td className="px-4 py-2">S/ {order.total.toFixed(2)}</td>
                <td className="px-4 py-2">{order.email}</td>
                <td className="px-4 py-2">{order.phone}</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} x {item.quantity} x S/ {item.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Orders
