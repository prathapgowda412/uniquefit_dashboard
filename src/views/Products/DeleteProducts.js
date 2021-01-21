import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Container,
  Button,
  Box,
  Paper,
  IconButton,
} from '@material-ui/core';
import { DeleteRounded } from '@material-ui/icons';
import Axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  main: {},
  deletetab: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  deleteinput: {
    width: '350px',
    margin: '5px 0px',
  },
  deletebuton: {
    backgroundColor: 'red',
    marginTop: '20px',
    width: '300px',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  cardpaper: {
    height: 'fit-content',
    width: '440px',
    display: 'flex',
    alignItems: 'center',
  },
}));

function DeleteProducts() {
  var [product, setProduct] = React.useState([]);
  const [productid, setproductid] = React.useState('');
  const [sucessmsg, setsuccessmsg] = React.useState('');
  const [errmsg, seterrmsg] = React.useState('');
  const deleteidchange = (event) => {
    setproductid(event.target.value);
    seterrmsg('');
    seterrmsg('');
  };
  // console.log(productid);

  const handleDelete = async () => {
    // let idData = { productid: productid };
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-productid': productid,
      },
    };

    let resp = await Axios(
      `${process.env.REACT_APP_API_URL}/products/delete-product-by-id`,
      config
    );
    // let resp = await Axios(`${process.env.REACT_APP_API_URL}/products/delete-product-by-id`, { idData });
    console.log(resp);
    if (resp.status === 200) {
      setsuccessmsg('Done deleting');
      toast.success('Product Deleted');
    } else {
      seterrmsg('wrong id');
    }
  };
  const showClick = async () => {
    if (productid) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-productid': productid,
        },
      };
      let resp = await Axios.get(
        `${process.env.REACT_APP_API_URL}/products/getproduct-byid`,
        config
      );
      let pro = resp.data;
      setProduct(pro);
    } else {
      toast.warning('please enter product ID');
    }
  };

  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.main}>
      <Container className={classes.deletetab}>
        <Typography> Delete Product</Typography>
        <TextField
          variant='outlined'
          className={classes.deleteinput}
          placeholder='Product id'
          onChange={deleteidchange}
        />
        <Typography style={{ color: 'red' }}> {errmsg} </Typography>
        <Button color='primary' onClick={showClick}>
          {' '}
          show
        </Button>
        <Box>
          {product && product.productimages ? (
            <Paper className={classes.cardpaper}>
              <img alt='' src={product.productimages[0]} height={180} />
              <Box style={{ paddingLeft: '8px', width: '330px' }}>
                <Typography>ID : {product.productid} </Typography>
                <Typography>Name : {product.productname} </Typography>
                <Typography>MRP: {product.productprice} </Typography>
                <Typography>Sale Price: {product.productsaleprice} </Typography>
                <IconButton onClick={handleDelete} style={{ floast: 'right' }}>
                  <DeleteRounded style={{ color: 'red', float: 'right' }} />
                </IconButton>
              </Box>
            </Paper>
          ) : (
            'No Product Selected '
          )}
        </Box>

        <Typography style={{ color: 'green' }}> {sucessmsg} </Typography>
      </Container>
    </Grid>
  );
}

export default DeleteProducts;
