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
import { LinearProgress } from '@material-ui/core';

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

const rows = [createData('23459857', 23356768)];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
    position: 'relative',
  },
});
function AllProducts() {
  const [products, setProducts] = React.useState();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  // console.log(products);
  let [productsLength, setProductsLength] = React.useState();
  // setProductsLength(() => (products ? '' : products.length));
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const getProducts = async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_API_URL}/products/get-products`
    );
    // console.log(resp);
    setProducts(resp.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

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
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell>Product id</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>MRP Price</TableCell>
              <TableCell>Sale Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products ? (
              <>
                {/* {' '}
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}
                {products.map((product) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={product.productid}
                    >
                      <TableCell key={product.id} align={product.align}>
                        {product.productid}
                      </TableCell>
                      <TableCell key={product.id} align={product.align}>
                        <img
                          height={40}
                          src={product.productimages[0]}
                          alt=''
                        />
                      </TableCell>
                      <TableCell key={product.id} align={product.align}>
                        {product.productname}
                      </TableCell>
                      <TableCell key={product.id} align={product.align}>
                        {product.productprice}
                      </TableCell>
                      <TableCell key={product.id} align={product.align}>
                        {product.productsaleprice}
                      </TableCell>
                    </TableRow>
                  );
                })}{' '}
              </>
            ) : (
              <LinearProgress
                style={{ marginTop: '20px', marginBottom: '20px' }}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={productsLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}

export default AllProducts;
