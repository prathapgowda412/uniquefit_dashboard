/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UniquefitLogo from '../Assets/uniquefitblacklogo.png';
import axios from 'axios';
//  for checking chnages
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '20px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AdminLogin() {
  const classes = useStyles();

  const [adminUserEmail, setadminUserEmail] = React.useState();
  const [adminPassword, setAdminPassword] = React.useState();
  const handleEmail = (event) => {
    setadminUserEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setAdminPassword(event.target.value);
  };

  const onClickLogin = async () => {
    let loginData = {
      adminEmail: adminUserEmail,
      adminPassword: adminPassword,
    };
    const resp = await axios.post(
      `${process.env.REACT_APP_API_URL}/admin/adminLogin`,
      loginData
    );
    if (resp.data.token) {
      console.log('user verified token recieved :');
      console.log(resp.data.token);
      localStorage.setItem('adminToken', resp.data.token);
      window.location.reload();
    } else {
      console.log('something wrong');
    }
    // axios
    //   .post(`${process.env.REACT_APP_API_URL}/admin/adminLogin`, loginData)
    //   .then((resp) => {
    //     console.log(resp);
    //     if (resp.data.token) {
    //       console.log('user verified token recieved :');
    //       console.log(resp.data.token);
    //       localStorage.setItem('adminToken', resp.data.token);
    //       window.location.reload();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(resp);
  };
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <img src={UniquefitLogo} height='50px' />
        <Typography component='h1' style={{ marginTop: '40px' }} variant='h5'>
          Admin Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Admin Address'
            name='email'
            autoComplete='email'
            onChange={handleEmail}
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handlePassword}
          />
          {/* <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          /> */}
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={onClickLogin}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}
export default AdminLogin;
