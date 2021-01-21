import { Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function RecievedOrders() {
  const [orders, setOrders] = React.useState([]);
  const getOrders = async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_API_URL}/products/get-all-orders`
    );
    let orders = resp.data;
    setOrders(orders);
    // console.log(orders);
  };
  useEffect(() => {
    getOrders();
  });
  // console.log(orders);
  return (
    <>
      {orders ? (
        <>
          {orders.map((order) => {
            return (
              <>
                <Typography> email: {order.email} </Typography>
                <Typography> email: {order._id} </Typography>
                <Typography>
                  email:{' '}
                  <Link to={`/single-order/${order._id}`}>to orders</Link>
                </Typography>
              </>
            );
          })}
        </>
      ) : (
        '..'
      )}
    </>
  );
}

export default RecievedOrders;
