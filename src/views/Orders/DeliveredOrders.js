/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from 'axios';
import { Button, CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { order } = props;
  // eslint-disable-next-line no-unused-vars
  const [orderProducts] = React.useState(order.products);
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const orderDate = order.orderplacedon.slice(0, 10);
  const orderTime = order.orderplacedon.slice(11, 16);

  // console.log(order);
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{order._id}</TableCell>
        <TableCell>
          {orderDate} <br />
          {orderTime}
        </TableCell>
        <TableCell>{order.username}</TableCell>
        <TableCell align='right'>{order.cartValue}</TableCell>
        <TableCell align='right'>{order.sellingPrice}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Box>
                <Typography>Order Details</Typography>
                <Typography>Adress: </Typography>
                <Typography style={{ width: '300px', fontSize: '14px' }}>
                  {order.address}
                </Typography>
              </Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell> Index</TableCell>
                    <TableCell> Product ID </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> Image </TableCell>
                    <TableCell> MRP </TableCell>
                    <TableCell> Sell Price </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderProducts.map((product) => (
                    <>
                      <TableRow
                        style={{
                          backgroundColor: '#f2f2f2',
                          borderBottom: '1px solid grey',
                        }}
                      >
                        <TableCell></TableCell>
                        <TableCell>{product.productid}</TableCell>
                        <TableCell>{product.productname}</TableCell>
                        <TableCell>
                          <img
                            height={40}
                            src={product.productimages[0]}
                            alt=''
                          />
                        </TableCell>
                        <TableCell>{product.productprice}</TableCell>
                        <TableCell>{product.productsaleprice}</TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function DeliveredOrders() {
  const [orders, setOrders] = React.useState();
  const getOrders = async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_API_URL}/products/get-all-orders`
    );
    await setOrders(resp.data);
    // console.log(resp.data);
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <Table
      aria-label='collapsible table'
      stickyHeader
      style={{ backgroundColor: '#fff' }}
    >
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Order ID</TableCell>
          <TableCell>Ordered On</TableCell>
          <TableCell>User name</TableCell>
          <TableCell align='right'>MRP</TableCell>
          <TableCell align='right'>Sellprice</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders ? (
          <>
            {orders.map((order) =>
              !'Delivered'.localeCompare(order.orderstatus, undefined, {
                sensitivity: 'base',
              }) ? (
                <Row key={order._id} order={order} />
              ) : (
                ''
              )
            )}
            {/* {orders.map((order) => {
              if (order.orderstatus === 'Delivered') {
                return <Row key={order._id} order={order} />;
              }
            })} */}
          </>
        ) : (
          <CircularProgress />
        )}
      </TableBody>
    </Table>
  );
}

export default DeliveredOrders;
