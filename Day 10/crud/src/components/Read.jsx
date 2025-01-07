import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Read.css'; 

const Read = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get('https://6777b13980a79bf9190296e8.mockapi.io/cakeshop/cake');
    setOrders(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleted = async (id) => {
    await axios.delete(`https://6777b13980a79bf9190296e8.mockapi.io/cakeshop/cake/${id}`);
    getData();
  };

  return (
    <div>
      <p>Order List Table</p>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Cake</th>
            <th>Weight</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.weight}</td>
              <td
                className="actions edit"
                onClick={() => {
                  navigate(`/update/${order.id}`);
                }}
              >
                Edit
              </td>
              <td
                className="actions delete"
                onClick={() => {
                  deleted(order.id);
                }}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
