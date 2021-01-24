// import React, { useEffect } from 'react';
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
} from '@material-ui/core';
import Axios from 'axios';

import { toast } from 'react-toastify';
// import DropZone from './../../../common/Dropzone';
import DropZone from './../Common/Dropzone';

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
  addproductcont: {
    minHeight: '250px',
    // backgroundColor: 'lightblue',
    alignSelf: 'left',
  },
  addproductlabel: {
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
  addproductbutton: {
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
  const productpricechange = (e) => {
    setproductprice(e.target.value);
  }; //done
  const productsalepricechange = (e) => {
    setproductsaleprice(e.target.value);
  }; //done
  const productmaterialchange = (e) => {
    setproductmaterial(e.target.value);
  }; //doe
  const producttypechange = (e) => {
    setproducttype(e.target.value);
  }; //done
  const productdescriptionchange = (e) => {
    setproductdescription(e.target.value);
  }; //done
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

  const [productname, setproductname] = React.useState();
  const [productprice, setproductprice] = React.useState();
  const [productsaleprice, setproductsaleprice] = React.useState();
  const [productmaterial, setproductmaterial] = React.useState();
  const [productcolor, setproductcolor] = React.useState();
  // const [productcategory, setproductcategory] = React.useState();
  const [producttype, setproducttype] = React.useState();
  const [productdescription, setproductdescription] = React.useState();
  const [productpattern, setproductpattern] = React.useState();
  const [productoccasion, setproductoccasion] = React.useState();
  const [productfeel, setproductfeel] = React.useState();

  const onsubmitproduct = async () => {
    // const productdata = {
    // 	productname: productname,
    // 	productprice: productprice,
    // 	productsaleprice: productsaleprice,
    // 	productmaterial: productmaterial,
    // 	productcolor: productcolor,
    // 	producttype: producttype,
    // 	productdescription: productdescription,
    // 	productpattern: productpattern,
    // 	productoccasion: productoccasion,
    // 	productfeel: productfeel,
    // 	productimages: files,
    // };
    const productdata = new FormData();

    productdata.append('productid', Math.round(Math.random() * 100000000));
    productdata.append('productname', productname);
    productdata.append('productprice', +productprice);
    productdata.append('productcolor', productcolor);
    productdata.append('productdescription', productdescription);
    productdata.append('productsaleprice', +productsaleprice);
    productdata.append('productmaterial', productmaterial);
    productdata.append('productfeel', productfeel);
    productdata.append('productoccasion', productoccasion);
    productdata.append('producttype', producttype);
    productdata.append('productpattern', productpattern);
    console.log(files);
    files.map((file) => {
      productdata.append('pimages', file);
    });
    console.log(productdata);

    let resp = await Axios.post(
      `${process.env.REACT_APP_API_URL}/products/insert-product`,
      productdata
    );
    console.log(resp);
    console.log(resp.data.message);
    console.log(resp.status);
    if (resp.status === 200) {
      window.location.reload();
      console.log('done succes');
      toast.success('success uploading');
      toast.done('done');
      toast('Product added Successfully');
    }
  };

  const classes = useStyles();
  return (
    <Grid item xs={8} className={classes.main}>
      <form autoComplete='true' encType='multipart/form-data'>
        <FormControl className={classes.formcontainer}>
          <FormLabel className={classes.addproductlabel}>Product Details</FormLabel>
          <FormGroup encty>
            <Container maxWidth='sm' className={classes.addproductcont}>
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
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    onChange={productnamechange}
                    label='Product id'
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
                    Product Name :
                  </FormLabel>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    size='medium'
                    required
                    fullWidth
                    onChange={productpricechange}
                    label='product Name'
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
                    onChange={productsalepricechange}
                    label='product pattern'
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
                    onChange={productmaterialchange}
                    label='product pattern'
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
                    onChange={productdescriptionchange}
                    label='product pattern'
                    variant='outlined'
                    margin='normal'
                    multiline
                  />
                </Grid>
              </Grid>


























              <Grid>
                {/* <input
														className={classes.addproductbutton}
														type="submit"
														onSubmit={onsubmitproduct}
														placeholder="Submit"
													/> */}
                <Button
                  onClick={onsubmitproduct}
                  className={classes.addproductbutton}
                >
                  Update
                </Button>
              </Grid>
            </Container>
          </FormGroup>
        </FormControl>
      </form>
    </Grid>
  );
}

export default UpdateProducts;
