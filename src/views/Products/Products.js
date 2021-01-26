// import React from 'react';

// function Products() {
//   return <div> this is products </div>;
// }

// export default Products;

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';

const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'productId', label: 'product id', minWidth: 100 },
  { id: 'mrpPrice', label: 'MRP Price', minWidth: 100 },
  { id: 'salePrice', label: 'sale price', minWidth: 100 },
];

function createData(name, productId, mrpPrice, salePrice) {
  return { name, productId, mrpPrice, salePrice };
}

let productsAll;
const name = 'df',
  productId = '155',
  mrpPrice = 1599,
  salePrice = 1299;
const rows = [
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
  { name, productId, mrpPrice, salePrice },
];

// function proData() {
//   productsAll.
// }

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
  },
});

export default function StickyHeadTable() {
  const [products, setProducts] = React.useState();
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
  const getProducts = async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_API_URL}/products/get-products`
    );
    // console.log(resp);
    setProducts(resp.data);
    // console.log(products);
  };
  const setProductsTo = () => {
    productsAll = products;
  };
  useEffect(() => {
    getProducts();
    setProductsTo();
    // console.log(productsAll);
  });
  return (
    <Paper elevation={0} className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
