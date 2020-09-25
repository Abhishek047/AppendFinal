import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { DialogTitle, DialogContentText, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import StoryCard from './StoryCard'
import { GlobalContext } from '../context/GlobalState'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme)=>({
    
    fab:{
        float:'left',
        background  :"linear-gradient(142deg, rgba(255,150,0,1) 12%, rgba(250,255,2,1) 100%)",
        color: 'black',
    },
    text:{
        fontSize:'1.4em',
    },

}));



function StoryListPage() {
       
    function toggleDialog(){
        setOpen(!open);
    }
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [line, setLine] = useState('');
    const [limit, setLimit] =useState(() => 0);
    
    function textChange(e){
        if(limit < 100)
        {
            setLimit(e.target.value.length)
            setLine(e.target.value);
        }
        else{
            if(e.target.value.length < 150)
            {
            setLimit(e.target.value.length)
            setLine(e.target.value);
            alert("Please try To Be In Limit from Next time")
            }
        }
        
    }

    function onSubmit(){
        if( title && line && user)
        {
            const newStory ={
                     userName : user,
                     title ,
                     lines :{
                        authName: user,
                        text: line
                     }
            }
            addStory(newStory);
        }
        toggleDialog();
    }

    const { passedStory, getStories, addStory, passedStatus } = useContext(GlobalContext);

    const style = useStyles();

    const addStoriesIcon = passedStatus === 'ADMIN' ? ( <Fab  className={style.fab}  aria-label="add" onClick={toggleDialog}><AddIcon /></Fab>) : 
                                                      (<span></span>);

    useEffect(() =>{
        getStories();
    }, []);

    useEffect(()=> {
        getStories();
    }, [passedStory]);
    
    return (
        <div>
            <Grid container >
                <Grid item xs={12} >
                {
                passedStory.map( story => (<StoryCard key={story._id} story={ story }/>))
                }
                </Grid>
            </Grid>
            {addStoriesIcon}
            <Dialog open={open} onClose={toggleDialog} aria-labelledby="form-dialog-title" disableScrollLock={true}>
                  <DialogTitle id="form-dialog-title">Login</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                          Enter The Details To Add A New Story
                    </DialogContentText>
                    <TextField
                      margin="dense"
                      id="name"
                      label="User"
                      type="text"
                      InputProps={{
                        classes:{
                            input: style.text
                        }
                    }}
                      value={user}
                      className={style.text}
                      variant='outlined'
                      onChange={ (e) => setUser(e.target.value)}
                    />
                    <br />
                    <TextField
                      margin="dense"
                      id="title"
                      label="Tilte"
                      type="text"
                      value={title}
                      className={style.text}
                      InputProps={{
                        classes:{
                            input: style.text
                        }
                    }}
                      variant='outlined'
                      onChange={ (e) => setTitle(e.target.value)}
                    />
                    <TextField
                    id="line"
                    label="Add Your Line"
                    variant="outlined"
                    fullWidth
                    multiline
                    InputProps={{
                        classes:{
                            input: style.text
                        }
                    }
                    }
                    rowsMax={4}
                    value={line}
                    onChange={textChange}
                    />
                    <Typography  >
                        {limit} / 150
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={toggleDialog} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={() => onSubmit()} color="primary">
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>
        
        
        
        
        
        </div>
    )
}

export default StoryListPage
