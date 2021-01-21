import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleOrder() {
  let order_id = useParams();
  //   console.log(order_id);
  //   console.log(order_id.order);
  const [singleOrder, setSingleOrder] = React.useState();
  const [Orderss, setorderss] = React.useState([]);
  const getOrder = async () => {
    const orders = (
      await axios.get(
        `${process.env.REACT_APP_API_URL}/products/get-all-orders`
      )
    ).data;
    setorderss(orders);
    await  setSingleOrder(
      orders.find((ord) => {
        return ord._id === order_id;
      })
    );
    // console.log(singleOrder);
    // setSingleOrder(
    //   orders.find((ord) => {
    //     return ord._id === order_id;
    //   })
    // );
    // console.log(singleOrder);
  };
  useEffect(() => {
    getOrder();
  });
  return (
    <>
      {' '}
      helo this is single order of order id :{order_id.order}{' '}
      <div>
        {/* {Orderss.map((ord) => {
          if (ord._id === order_id) {
            return (
              <>
                order id found : {ord._id} <br />{' '}
              </>
            );
          }
        })} */}
        {singleOrder ? 'found id ' : 'not found '}
      </div>{' '}
    </>
  );
}

export default SingleOrder;
