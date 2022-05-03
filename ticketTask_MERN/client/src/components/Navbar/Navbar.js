import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    console.log(user);

    const logout = () => {
      dispatch({ type: 'LOGOUT' });

      navigate('/')

      setUser(null);
    }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit" style={{flexDirection: 'row'}}>
        <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">
            TicketBar 
          </Typography>
        </div> 

        <Toolbar className={classes.toolbar}>
        {
                <div className={classes.profile}>
                    <Avatar className = {classes.purple} alt={user.name} src={user.imageURL} sx ={{backgroundColor: 'darkblue'}}>{user.usrname.charAt(0).toUpperCase()}</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.usrname}</Typography>
                    <Button className={classes.logout} variant='contained' onClick={logout} style={{backgroundColor: "darkblue"}}>Logout</Button>
                </div>
        }
        </Toolbar>
        </AppBar>
  )
}

export default Navbar



