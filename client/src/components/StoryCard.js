import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../img/CardIcon.png';
import IconButton from '@material-ui/core/IconButton'
import DeleteForever from '@material-ui/icons/DeleteForever'
import CardBg from '../img/CardBg.svg'
import { GlobalContext } from '../context/GlobalState'

const useStyles = makeStyles((theme) =>({
    contain:{
        padding:10,
        backgroundImage: `url(${CardBg})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        borderRadius:10,
        marginBottom: 30,
        overflow:'visible',
        boxShadow: ' 0px 0px 10px 3px #777777',
    },
    cardBody: {
      display: 'flex',
      flexFlow: 'row',
    },
    media: {
      backgroundImage: `url(${Image})`,
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-Repeat',
      width: 300,
      height: 230,
      marginTop:20,
      marginRight:10,
    },
    cardHeading:{
        flexBasis:'65%',
    },
    text:{
        fontSize:'1.4em',
    },
    btnGroup:{
        justifyContent: 'flex-end',
    },
    btn1:{
        fontSize:'1.1em',
        padding: '10px 20px',
        color:theme.palette.primary.main,
    },
    delBtn:{
        color:'red',
    },
    btn2:{
        fontSize:'1.1em',
        color:'#ffffff',
        padding: '10px 20px',
        background  :'linear-gradient(142deg, rgba(2,88,255,1) 12%, rgb(36 155 255) 100%)',
        // background: "linear-gradient(142deg, rgba(255,150,0,1) 12%, rgba(250,255,2,1) 100%)",
        textTransform:'capitalize',
    },
  }));
  

const StoryCard = ({story}) => {

    const style = useStyles();
    
    const { viewStory, toggleStoryPage, passedStatus, deleteStory } = useContext(GlobalContext);

    function passId(){
        viewStory(story._id);
        toggleStoryPage();
    }

    function delStory(id){
        deleteStory(id);
    }
    
    const showDelete = passedStatus==='ADMIN' ? (<IconButton className={style.delBtn} onClick={ () => delStory(story._id)} >
    <DeleteForever />
    </IconButton> ) : (<span /> );


    
    return (
        <div>
           <Card className={style.contain}>
               <CardActionArea className={style.cardBody}>
                    <Box
                    className={style.media}
                    />
                <CardContent className={style.cardHeading}>
                    <Typography gutterBottom variant="h4" component="h2">
                        {story.title}
                    </Typography>
                    <Typography className={style.text} color="textSecondary" component="p">
                        {story.lines[0].text}
                        {/* //Use state se discription ayega */}
                    </Typography>
                </CardContent>
               </CardActionArea>
               <CardActions className={style.btnGroup} >
                    <Button className={style.btn1} >
                    Share
                    </Button>
                    <Button className={style.btn2} onClick={passId}  >
                    View Story
                    </Button>
                    {showDelete}
            </CardActions>
           </Card>
        </div>
    )
}


export default StoryCard
