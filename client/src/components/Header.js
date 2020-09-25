import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { DialogTitle, DialogContentText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import {GlobalContext} from '../context/GlobalState'

const useStyles = makeStyles((theme) => ({
    nav:{
        backgroundColor: '#000000',
        padding: "10px 10px",
        display:"flex",
        flexFlow: "row",
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    btn:{
        borderRadius:'2px',
        color:"black",
        fontSize:'1em',
        marginLeft:'20px',
        padding:'5px 20px',
        letterSpacing:'1px',
        background  :"linear-gradient(142deg, rgba(255,150,0,1) 12%, rgba(250,255,2,1) 100%)",
    },
    dialog:{
    padding:0,
    }
}));


function Header() {
    const [open , setOpen] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const style = useStyles();
    const { checkUser, logOut, passedStatus } = useContext(GlobalContext);

    const textValue = passedStatus === 'GUEST' ? "LOGIN" : "LOGOUT";

    function toggleDialog(){
        setOpen(!open);
    }

    function login()
    {
        console.log(user , password);
        checkUser(user, password);
        toggleDialog();
    }
    function buttonType(e){
      if(e.target.innerHTML === 'LOGIN'){
        toggleDialog();
      }
      else{
        logOut();
      }
    }

    return (
        <div>
           <AppBar position="static" >
                <Box className={style.nav}>
                <Typography variant="h6"  >
                    App...End
                </Typography>
                <Button className={style.btn}  onClick={ (e) => buttonType(e)}>
                    {textValue}
                </Button>
                </Box>

                <Dialog open={open} onClose={toggleDialog} aria-labelledby="form-dialog-title" disableScrollLock={true}>
                  <DialogTitle id="form-dialog-title">Login</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                          Login to Customize Stories
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="User"
                      type="text"
                      value={user}
                      variant='outlined'
                      onChange={ (e) => setUser(e.target.value)}
                    />
                    <br />
                    <TextField
                      margin="dense"
                      id="password"
                      label="Password"
                      type="password"
                      password={password}
                      variant='outlined'
                      onChange={ (e) => setPassword(e.target.value)}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={toggleDialog} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={() => login()} color="primary">
                      Login
                    </Button>
                  </DialogActions>
                </Dialog>
                

            </AppBar>
                </div>
    )
}

export default Header
