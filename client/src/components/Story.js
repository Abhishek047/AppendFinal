import React, { useContext, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import InputLineForm from './InpurLineForm'
import { GlobalContext } from '../context/GlobalState'
import BoxBg from '../img/BoxBg.svg'
import DisplayLines from './DisplayLines'


const useStyles = makeStyles((theme) => ({
     box:{
        background:`url(${BoxBg}), #FFFFFF `,
        backgroundBlendMode: 'multiply',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'top-left',
        border:'1px solid #FFFFFF',
        boxShadow: `0px 0px 5px 5px ${theme.palette.secondary.light}` ,
        borderRadius:"10px",
        padding:"20px",

     },
    title:{
        padding:'0px',
    },
    author:{
        fontSize:"1em",
        padding:"0 10px 10px 0"
    },
    underLine:{
        backgroundColor: theme.palette.primary.light,
        borderRadius: "20px",
        marginBottom:'10px',
        marginLeft:"10%",
        height: '4px',
        width: '20%',
    },
}));


function Story() {
    
    const style = useStyles();

    const { passedStory  } = useContext(GlobalContext);
    
    function initTitle(){
        return (passedStory[0].title);
    }
    function initUser(){
        return (passedStory[0].userName);
    }
    
    const [title , setTitle] = useState(initTitle);
    const [user , setUser] = useState(initUser);


    useEffect(() => {
        setTitle(initTitle);
        setUser(initUser);
    }, [ passedStory ])


    useEffect(() => {
        setTitle(initTitle);
        setUser(initUser);
    }, [])


    return (
        <div>    
                <Grid container direction="column" className={style.box}>
                
                    <Grid item >
                        <Typography variant="h2" color= "primary" className={style.title}>
                            {title}
                        </Typography>
                        <Box className={style.underLine}></Box>
                    </Grid>
                
                    <Grid item >
                        <Typography className={style.author}>
                            -{user}
                        </Typography>
                    </Grid>
                
                    <Grid item >
                        {
                            passedStory[0].lines.map( lines => (<DisplayLines key={lines.id} line={lines} />) )
                        }
                    </Grid>
                
                    <Grid item >
                        <InputLineForm />
                    </Grid>
                
                </Grid>
        </div>
    )
}

export default Story
