// import { Typography } from '@material-ui/core';
// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// function RecievedOrders() {
//   const [orders, setOrders] = React.useState([]);
//   const getOrders = async () => {
//     const resp = await axios.get(
//       `${process.env.REACT_APP_API_URL}/products/get-all-orders`
//     );
//     let orders = resp.data;
//     setOrders(orders);
//     // console.log(orders);
//   };
//   useEffect(() => {
//     getOrders();
//   });
//   // console.log(orders);
//   return (
//     <>
//       {orders ? (
//         <>
//           {orders.map((order) => {
//             return (
//               <>
//                 <Typography> email: {order.email} </Typography>
//                 <Typography> email: {order._id} </Typography>
//                 <Typography>
//                   email:{' '}
//                   <Link to={`/single-order/${order._id}`}>to orders</Link>
//                 </Typography>
//               </>
//             );
//           })}
//         </>
//       ) : (
//           '..'
//         )}
//     </>
//   );
// }

// export default RecievedOrders;


// // import React from 'react';

// // function Products() {
// //   return <div> this is products </div>;
// // }

// // export default Products;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'order id', label: 'order id', minWidth: 100 },
  { id: 'Username', label: 'Username', minWidth: 100 },
  { id: 'No. of Products', label: 'No. of Products', minWidth: 100 },
  { id: 'Order value', label: 'Order value', minWidth: 100 },
  { id: 'No.of Products', label: 'No.of Products', minWidth: 100 },

];

function createData(name, productid, population, size) {
  const density = population / size;
  return { name, productid, population, size, density };
}

const rows = [
  createData('23459857', 23356768),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}