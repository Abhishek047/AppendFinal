export default(state ,action) =>{
    switch(action.type){
        case 'TOGGLE_PAGE_STORY':
            return{
                ...state,
                storyPage: !state.storyPage
            }
        case 'TOGGLE_MAIN_PAGE':
            return{
                ...state,
                mainPage: !state.mainPage
            }
        case 'SET_CURRENT_STORY':
            return{
                ...state,
                story: state.story.filter(story => story._id === action.payload),
                currentStoryId: action.payload
            }
        case 'GET_STORIES':
            return{
                ...state,
                loading: false,
                story: action.payload
            }
        case 'ADD_LINE' :
            return {
                ...state, 
                story: action.payload  
            }
        case 'DELETE_LINE' :
            return {
                ...state, 
                story: action.payload  
            }
        case 'DELETE_STORY' :
            return {
                ...state, 
                story: state.story.filter( (psStory) => psStory._id !== action.payload)  
            }
        case 'CHANGE_STATUS' :
            return {
                ...state, 
                status: 'ADMIN'  
            }
        case 'CHANGE_STATUS_LOG_OUT' :
            return {
                ...state, 
                status: 'GUEST'  
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                error: action.payload
            }
    default:
        return state
    }

}