import React , { createContext , useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
//initaial State

const initState = {
    //Story object has detais of ongoing story
        story:[

//OFFLINE TEST DATA
            // {
            //     _id: '1',
            //     title: "TEST",
            //     lines:[
            //         {
            //             id: '1234',
            //             text: 'xyzlmn',
            //             authName: 'testing'
            //         },
            //         {
            //             id: '134',
            //             text: 'xyzlmn',
            //             authName: 'testing'
            //         }
            //     ],
            //     userName: 'Admin'
            // },
            // {
            //     _id: '2',
            //     title: "TEST2",
            //     lines:[
            //         {
            //             id: '234',
            //             text: 'test2String',
            //             authName: 'testing'
            //         },
            //         {
            //             id: '34',
            //             text: '2ndstring',
            //             authName: 'testing'
            //         }
            //     ],
            //     userName: 'Admin'
            // },
        ],

        status:'GUEST',
        currentStoryId: '',
        storyPage: false,
        mainPage: false,
        error: null,
        loading: true,
      //  users: [],  for future use currrenty hardcoded
}

export const GlobalContext = createContext(initState);


//Provider

export const GlobalProvider = ({children}) =>{

    //function to perform
    
    function checkUser(userName, password){
        if(userName === 'Admin' &&  password === '#Alpha1111'){
             dispatch({
                 type: 'CHANGE_STATUS'
             });
             alert('SUCCESS ADMIN LOGIN')
        }
        else{
            alert('WRONG CREDENTIALS');
        }
    }

    //LOG OUT FUNCTION

    function logOut(){
            dispatch({
                 type: 'CHANGE_STATUS_LOG_OUT'
             });
             alert('LOGGED OUT')
        }

    //DISPLAY MAIN PAGE

    function toggleMainPage()
    {
        dispatch({
            type: 'TOGGLE_MAIN_PAGE'
        });
    }

    function toggleStoryPage()
    {
        dispatch({
            type: 'TOGGLE_PAGE_STORY'
        });
    }

    function viewStory(id){
        dispatch({
            type: 'SET_CURRENT_STORY',
            payload: id
        });
    }

    //FETCHING DATA FROM BACKED 

    async function getStories(){
        try{
            const res = await axios.get('/api/story');                //WE USE AWAIT BEFORE THOSE WHO SEND RESPONSE LIKE AXIOS SENDS RESPONSE WHEN A REQ IS SEND

            dispatch({
                type: 'GET_STORIES',
                payload: res.data.data
            });
                         
        } catch(err){

            dispatch({
                type: 'FETCH_ERROR',
                payload: err.response.data.error
            });
        }
    }

    //Add Line
   async function addLine( newLine, id ){
        console.log(newLine);
        const config ={
            headers:{
                'Content-Type' : 'application/json'
            }
        }
        console.log(id);
        try {
            const res = await axios.put(`/api/story/${id}` , newLine, config);

            dispatch({
                type: 'ADD_LINE',
                // payload: newLine,
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_ERROR',
                payload: 'Sry ERROR'
            });
        }
    }


//ADD_STORY
   async function addStory( newStory ){
        const config ={
            headers:{
                'Content-Type' : 'application/json'
            }
        }
        try {
            const res = await axios.post(`/api/story` , newStory, config);

            dispatch({
                type: 'ADD_LINE',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_ERROR',
                payload: 'Sry ERROR'
            });
        }
    }


//DELETE_LINE


    async function deleteLine(id, lineId){
        try {
            const res = await axios.delete(`/api/story/${id}/${lineId}`);

            dispatch({
                type: 'DELETE_LINE',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_ERROR',
                payload: 'Sry ERROR',
            });
        }
    }

//DELETE_STORY

    async function deleteStory(id){
        try {
            const res = await axios.delete(`/api/story/${id}`);

            dispatch({
                type: 'DELETE_STORY',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_ERROR',
                payload: 'Sry ERROR',
            });
        }
    }



    //Reducer calling

    const [state, dispatch] = useReducer(AppReducer, initState);

    //return
    return(
        <GlobalContext.Provider value={{
            passedStatus: state.status,
            passedError: state.error,
            passedLoading: state.loading,
            passedStory: state.story,
            passedStoryPage: state.storyPage,
            passedMainPage: state.mainPage,
            passedCurrentStoryId: state.currentStoryId,
            checkUser,
            logOut,
            addStory,
            addLine,
            getStories,
            toggleMainPage,
            viewStory,
            deleteStory,
            deleteLine,
            toggleStoryPage
        }}>
            {children}
        </GlobalContext.Provider>
    )

}