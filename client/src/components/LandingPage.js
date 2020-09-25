import React, { useContext } from 'react'
import MainPage from './MainPage'
import { GlobalContext } from '../context/GlobalState'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { Button, Typography } from '@material-ui/core'
import LandingBg from '../img/LandingBg.svg'


const useStyles = makeStyles((theme) => ({

    heading:{
        padding:'4% 5%',
    },
    box:{
        marginTop:'50px',
    },
    body:{
        height:'600px',
        backgroundImage:`url(${LandingBg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
    },
    bodyText:{
        padding:'50px 13% 0',
        letterSpacing:'0.5px',
        color:'white'
    },
    grid1:{
        marginTop: '70px'
    },
    btn:{  
        margin: '20px auto 50px',
        padding: '20px',
        background  :'linear-gradient(142deg, rgba(2,88,255,1) 12%, rgb(36 155 255) 100%)',
        color:'#FFFFFF',
        fontSize: '1.3em',
        textTransform: 'capitalize',
    }
}));


function LandingPage() {

  const style = useStyles();

  const { passedMainPage, toggleMainPage, } = useContext(GlobalContext);
  const x = passedMainPage ?  (<MainPage />) :
  (
      <div>
          <Box >
            <Typography variant='h2' className={style.heading}> What is Append ? </Typography>
          </Box> 
        <Grid container className={style.body}>
            <Grid item xs={12} sm={6} className={style.grid1}>  
            <Typography variant='h5' className={style.bodyText}> It’s an Online app To Write a Story with your Friends </Typography>
            <Typography variant='h5' className={style.bodyText}> Here EveryOne contributes a line to a Story and Help to End it.</Typography>
            <Typography variant='h5' className={style.bodyText}>  You Can Invite Your Friends To Complete Your Story. </Typography>
            </Grid>
        </Grid>
        <Box display='flex' justifyContent="center" alignItems="center" >
        <Button onClick={toggleMainPage} className={style.btn}  > AppEnd Your Line NOW </Button>
        </Box>
      </div>
                   
  ) ;

    return (
        <div>
            {x}            
        </div>
    )
}

export default LandingPage
