/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  TextField,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Axios from 'axios';

import { toast } from 'react-toastify';
// import DropZone from './../../../common/Dropzone';
import DropZone from './../Common/Dropzone';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  menulinks: {
    textAlign: 'left',
    // backgroundColor: '#387A76',
    // color: '#387A76',
    labelAlign: 'left',
  },
  lefttabs: {
    alignItems: 'left',
    backgroundColor: 'transparent',
    // backgroundColor: '#f2f2f2',
  },
  updateproductcont: {
    minHeight: '250px',
    // backgroundColor: 'lightblue',
    alignSelf: 'left',
  },
  updateproductlabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '24px',
    margin: '10px 5px',
  },
  formbox: {
    height: 'fit-content',
    // backgroundColor: 'purple',
  },
  labelname: {
    color: '#2c2c2c',
    fontSize: '19px',
    fontWeight: '600',
  },
  formcontainer: {
    // backgroundColor: 'green',
    width: '90%',
  },
  righttabpanel: {
    width: '100%',
  },
  updateproductbutton: {
    backgroundColor: '#387A76',
    height: '48px',
    width: '80%',
    color: 'white',
    // borderRadius: '10px',
    margin: '20px 10px',
    '&:hover': {
      backgroundColor: '#387A76',
      borderBottom: '1px solid white',
    },
  },
  avatrbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
  },
  imagepreviewbox: {
    height: '150px',
  },
  main: {
    backgroundColor: 'white',
    borderRadius: '5px',
    justifyContent: 'center',
  },
}));

function UpdateProducts() {
  const productnamechange = (e) => {
    setproductname(e.target.value);
  }; //done
  const productpatternchange = (e) => {
    setproductpattern(e.target.value);
  }; //done
  const productColorChange = (event) => {
    setProductcolor(event.target.value);
  };
  const productPriceChange = (event) => {
    setproductprice(event.target.value);
  };
  const productSalePriceChange = (event) => {
    setproductSalePrice(event.target.value);
  };
  const productTypeChange = (event) => {
    setproductType(event.target.value);
  };
  const productMaterialChange = (event) => {
    setProductMaterial(event.target.value);
  };

  const [files, setfiles] = React.useState();
  const [selectedfile, setselectedfile] = React.useState();
  const [preview, setpreview] = React.useState();

  useEffect(() => {
    if (!selectedfile) {
      setpreview(undefined);
      return;
    }

    const objecturl = URL.createObjectURL(selectedfile);
    setpreview(objecturl);

    return () => URL.revokeObjectURL(objecturl);
  }, [selectedfile]);

  const [productid, setproductid] = React.useState('');
  const [productname, setproductname] = React.useState('');
  const [productpattern, setproductpattern] = React.useState('');
  const [productcolor, setProductcolor] = React.useState('');
  const [productprice, setproductprice] = React.useState('');
  const [productsaleprice, setproductSalePrice] = React.useState('');
  const [productType, setproductType] = React.useState('');
  const [productMaterial, setProductMaterial] = React.useState('');
  // const [productcategory, setproductcategory] = React.useState();

  const onsubmitproduct = async () => {
    const proData = {
      productid: proId,
      productname: productname,
      productcolor: productcolor,
      productsaleprice: productsaleprice,
      productprice: productprice,
      productmaterial: productMaterial,
      productpattern: productpattern,
      producttype: productType,
    };
    // console.log(proData);

    // const productdata = new FormData();
    // productdata.append('productname', productname);
    // productdata.append('productpattern', productpattern);
    // productdata.append('productprice', +productprice);
    // productdata.append('productcolor', productcolor);
    // productdata.append('productsaleprice', +productsaleprice);
    // productdata.append('productmaterial', productMaterial);
    // productdata.append('producttype', productType);

    // console.log(productdata);
    const resp = await axios.post(
      `${process.env.REACT_APP_API_URL}/products/update-product-by-id`,
      proData
    );
    // console.log(resp);
    if (resp.status === 200) {
      console.log('Product Updated Successfully');
      setStatusMsg('Success');
      setProduct('');
    }
  };
  const proIdChange = (e) => {
    settProId(e.target.value);
  };
  const [proId, settProId] = React.useState();
  const [product, setProduct] = React.useState([]);
  const showClick = async () => {
    if (proId) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-productid': proId,
        },
      };
      let resp = await Axios.get(
        `${process.env.REACT_APP_API_URL}/products/getproduct-byid`,
        config
      );
      // console.log(resp.data);
      let pro = resp.data;
      setproductname(pro.productname);
      setproductprice(pro.productprice);
      setproductSalePrice(pro.productsaleprice);
      setProductcolor(pro.productcolor);
      setProductMaterial(pro.productmaterial);
      setproductType(pro.producttype);
      setproductpattern(pro.productpattern);
      //
      setProduct(pro);
    } else {
      toast.warning('please enter product ID');
    }
  };
  const [statusMsg, setStatusMsg] = React.useState('Not Selected');
  const ShowMessage = () => {
    if (statusMsg === 'Not Selected') {
      return <Typography> Product not selected </Typography>;
    } else if (statusMsg === 'Success') {
      return (
        <Typography style={{ color: 'green' }}>
          Product updated Successfully
        </Typography>
      );
    }
  };
  // console.log(product);
  const classes = useStyles();
  return (
    <Grid item xs={8} className={classes.main}>
      <Box style={{ marginBottom: '20px' }}>
        <Typography className={classes.updateproductlabel}>
          Enter Product code
        </Typography>
        <TextField
          variant='outlined'
          className={classes.deleteinput}
          placeholder='Product id'
          onChange={proIdChange}
        />
        <Button color='primary' onClick={showClick}>
          show
        </Button>
      </Box>
      {product && product.productimages ? (
        <FormControl className={classes.formcontainer}>
          <FormLabel className={classes.updateproductlabel}>
            Update Product
          </FormLabel>
          <FormGroup encty>
            <Container maxWidth='sm' className={classes.updateproductcont}>
              <Grid
                item
                container
                className={classes.formbox}
                direction='row'
                alignItems='center'
              >
                <Grid item xs={5}>
                  <FormLabel className={classes.labelname}>
                    Product id :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <Typography> {product.productid} </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.formbox}
                direction='row'
                alignItems='center'
              >
                <Grid item xs={5}>
                  <FormLabel className={classes.labelname}>
                    Product Name :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    value={productname}
                    onChange={productnamechange}
                    label='Name'
                    variant='outlined'
                    margin='normal'
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.formbox}
                direction='row'
                alignItems='center'
              >
                <Grid item xs={5}>
                  <FormLabel className={classes.labelname}>
                    Product Pattern :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    value={productpattern}
                    onChange={productpatternchange}
                    label='Pattern'
                    variant='outlined'
                    margin='normal'
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.formbox}
                direction='row'
                alignItems='center'
              >
                <Grid item xs={5}>
                  <FormLabel className={classes.labelname}>
                    Product Color :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    value={productcolor}
                    onChange={productColorChange}
                    label='Color'
                    variant='outlined'
                    margin='normal'
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.formbox}
                direction='row'
                alignItems='center'
              >
                <Grid item xs={5}>
                  <FormLabel className={classes.labelname}>
                    Product material :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    value={productMaterial}
                    onChange={productMaterialChange}
                    label='Material'
                    variant='outlined'
                    margin='normal'
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.formbox}
                direction='row'
                alignItems='center'
              >
                <Grid item xs={5}>
                  <FormLabel className={classes.labelname}>
                    Product Type :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    value={productType}
                    onChange={productTypeChange}
                    label='Type'
                    variant='outlined'
                    margin='normal'
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.formbox}
                direction='row'
                alignItems='center'
              >
                <Grid item xs={5}>
                  <FormLabel className={classes.labelname}>
                    Product Price :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    value={productprice}
                    onChange={productPriceChange}
                    label='Price'
                    variant='outlined'
                    margin='normal'
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                className={classes.formbox}
                direction='row'
                alignItems='center'
              >
                <Grid item xs={5}>
                  <FormLabel className={classes.labelname}>
                    Product Sale Price :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    value={productsaleprice}
                    onChange={productSalePriceChange}
                    label='sale price'
                    variant='outlined'
                    margin='normal'
                  />
                </Grid>
              </Grid>

              <Grid>
                <Button
                  onClick={onsubmitproduct}
                  className={classes.updateproductbutton}
                >
                  Update Product
                </Button>
              </Grid>
            </Container>
          </FormGroup>
        </FormControl>
      ) : (
        <ShowMessage />
      )}
    </Grid>
  );
}

export default UpdateProducts;
