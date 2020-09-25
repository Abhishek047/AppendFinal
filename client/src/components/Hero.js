import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../img/icon.svg'
import HeroBg from '../img/heroBg.svg'
import { GlobalContext } from '../context/GlobalState'

const useStyles = makeStyles((theme) => ({
    box1:{
        position:"absolute",
        top:"50px",
        clipPath: "polygon(0 0, 100% 0, 100% 51%, 0% 100%)",
        height: '300px',
        width: '100%',
        zIndex:"-1",
        background: `url(${HeroBg}), linear-gradient(135deg, rgba(51,51,51,1) 75%, rgba(96,94,94,1) 88%)`,
        backgroundBlendMode: 'multiply',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
    },
    heading:{
        color:"white",
        letterSpacing:'0.8px',
        margin: "25px 0",
    },
    media:{
     backgroundImage: `url(${Image})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "contain",
     backgroundPosition: "center",
     height: "250px",
     marginTop: "40px"
    },

    btn:{
        // background  :"radial-gradient(circle, rgba(2,88,255,1) 36%, rgba(24,132,223,1) 88%)",
        background  :"linear-gradient(45deg, rgba(2,88,255,1) 36%, rgba(24,132,223,1) 88%)",
        fontWeight: "500",
        color:"#F1F1F1",
        borderRadius:"10px",
        padding:"5px 20px",
        boxShadow:" -4px 4px 2px rgba(123, 123, 123, 30%)"
    }
}));

function Hero() {
    
    const style = useStyles();
    const { toggleMainPage, } = useContext(GlobalContext);
    
    return (
        <div>
            <Box className={style.box1}></Box>
                <Grid container >
                    <Grid xs={1} sm={2}  item />
                    <Grid item container xs={1} sm={6} >
                        <Grid item sm={12} >
                            <Typography variant="h3" className={style.heading}>"App...enD"</Typography>
                            <Typography className={style.heading}  >Build Unique Stories with Strangers and Friend !</Typography>
                            <Button className={style.btn} onClick={toggleMainPage} > Write Story</Button>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4}  item >
                       <Box className={style.media} />
                    </Grid>
                </Grid>
        </div>
    )
}

export default Hero
