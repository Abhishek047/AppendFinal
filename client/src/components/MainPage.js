import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Story from './Story'
import Image1 from '../img/gutter1.svg'
import Image2 from '../img/gutter2.svg'
import StoryListPage from './StoryListPage'
import { GlobalContext } from '../context/GlobalState'

const useStyles = makeStyles((theme) => ({
    contain:{
    margin:"70px 0",
    zindex: '1'
     },
    grid1:{
        overflow:'visible'
    } ,
    gutter1:{
        marginTop:'-10vh',
        width:'110%',
        height:'100%',
        backgroundImage:`url(${Image1})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'top',
    },
    gutter2:{
        width:'90%',
        height:'100%',
        backgroundImage:`url(${Image2})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'top',
    },
}));


function MainPage() {
    
    const style = useStyles();
    const { passedStoryPage } = useContext(GlobalContext);
    const display = passedStoryPage ? < Story /> : <StoryListPage />; 
    
    return (
        <div>
            <Grid container className={style.contain}>
                
                <Grid item xs={1} lg={2} >
                    <Box className={ style.gutter2}></Box>
                </Grid>
                
                <Grid item xs={10} lg={7} >

                {display}

                </Grid>

                <Grid item xs={1} lg={2} className={style.grid1}>
                    <Box className={ style.gutter1}></Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPage
