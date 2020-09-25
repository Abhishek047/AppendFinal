import React, { useState , useContext}  from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalContext } from '../context/GlobalState'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    contain:{
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        padding:"10px ",
        marginTop:'10px',
        boxShadow:" 0 0 2px 2px #c5c5c5"
    },
    pads:{
        padding:"10px 20px",
        color: 'white'
    },
    heading:{
        color: theme.palette.primary.main,
        fontWeight: '600'
    },
    btn:{
        color:"black",
        width:"100px",
        letterSpacing:'1px',
        background  :"linear-gradient(142deg, rgba(255,150,0,1) 12%, rgba(250,255,2,1) 100%)",
        boxShadow:" 0 0 5px 2px #c5c5c5"
    },
    control:{
        border:'1px solid black',
        borderRadius:'10px',
        padding:'10px',
        color: '#1e1e1e'
    },
}));


function InpurLineForm() {

    const style = useStyles();

    const [line , setLine] = useState(() => '');
    const [user , setUser] = useState(() => 'Anonymous');
    const [limit, setLimit] =useState(() => 0);
    const { addLine, passedCurrentStoryId } = useContext(GlobalContext);

    function textChange(e){
        if(limit < 100)
        {
            setLimit(e.target.value.length)
            setLine(e.target.value);
        }
        else{
            if(e.target.value.length < 100)
            {
            setLimit(e.target.value.length)
            setLine(e.target.value);
            alert("Please try To Be In Limit from Next time")
            }
        }
        
    }
    
    function submitLine(){

            const newLine = {
            lines: {
                authName: user,
                text: line
            },
        };

        addLine( newLine, passedCurrentStoryId );
    }

    return (
        <div>
            <div className={style.contain} >
                <div className={style.pads}>
                    <Typography variant='h5' className={style.heading} >ADD YOUR LINE TO THE STORY</Typography>
                </div>
                <div className={style.pads} >
                <TextField variant="outlined" id="user" label="User Name" value={user} onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className={style.pads}>
                <TextField
                    id="line"
                    label="Add Your Line"
                    variant="outlined"
                    fullWidth
                    multiline
                    rowsMax={4}
                    value={line}
                    onChange={textChange}
                    />
                </div>
                <div className={style.pads} >
                    <Typography component='span' display='inline' className={style.control}>
                        {limit} / 100
                    </Typography>
                </div>
                <div className={style.pads}>
                    <Button className={style.btn} onClick={submitLine} >
                        SUBMIT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InpurLineForm
