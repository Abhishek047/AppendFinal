import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import IconF from '../img/social_github2.svg'
import IconS from '../img/social_whatsapp.svg'


const useStyles = makeStyles((theme) => ({
   
    grid:{
        height:'200px',
        background: "linear-gradient(45deg, rgba(51,51,51,1) 75%, rgba(96,94,94,1) 88%)",

    },
    box:{
        display:'flex',
        flexFlow:'row',
        justifyContent:'center'
    },
    mail:{
        color:'white',
        fontSize:'1.3em',
    },
    icon:{
        height:50,
        width:50,
        margin:'0 10px',
    },
}));

function Footer() {
    const style = useStyles();

    return (
        <div>
            <Grid container  alignItems='center' className={style.grid} >
                <Grid item xs={12} sm={6} className={style.box} >
                <Box>
                    <img src={IconF} alt='git' className={style.icon}></img>
                    <img src={IconS} alt='WhatsApp'className={style.icon}></img>
                </Box>
                </Grid>    
                <Grid item xs={12} sm={6} className={style.box} >
                    <Typography className={style.mail}>
                        E-Mail: abhi.shukla0047@gmail.com
                    </Typography>    
                </Grid>    
            </Grid>       
        </div>
    )
}

export default Footer