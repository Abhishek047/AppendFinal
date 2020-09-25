import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import DeleteForever from '@material-ui/icons/DeleteForever'
import { GlobalContext } from '../context/GlobalState'
// import DeleteButton from './DeleteButton'


const useStyles = makeStyles((theme) => ({

    contain:{
        paddingLeft:'20px',
        paddingBottom:'10px',
        display:'flex ',
        flexFlow:'column',
    },
    action:{
        display:'flex',
        flexFlow:'row',
        justifyContent:'space-between',
    },
    body:{
        fontSize: "1.4em",
    },
    author:{
        fontFamily:'Roboto',
        padding:'0px 20px',
        fontSize:'1em'
    },


}));


function DisplayLines(props) {
    const { line } = props;
    const style = useStyles();

    const { passedCurrentStoryId, deleteLine, passedStatus } = useContext(GlobalContext);
    
    function deleteLines(id)
    {
        deleteLine(passedCurrentStoryId, id);
    }

    const showDelete = passedStatus==='ADMIN' ? 
    (<Box className={style.action}>
    <Typography className={style.author} >
        -{line.authName}
    </Typography>
    <IconButton color='primary' onClick={ () => deleteLines(line._id)} >
    <DeleteForever />
    </IconButton> 
    </Box>
    ) : 
    (<span /> );

    return (
        <div>
        <Box className={style.contain}>
            <Typography  className={style.body} > 
                {line.text}
            </Typography>
                  {showDelete}         
        </Box>    
        </div>
    )
}

export default DisplayLines
