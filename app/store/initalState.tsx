let initialState : any = {
    app: {
        fontScale: 1,
        page: 'profile',
        subPage1: 'profile',//settings
        subPage2: 'image',//info
        permissions: {
            swipe: true, //should be set to false for deploy
            message: true, //should be set to false for deploy
        }
    },
    messages: {
        connections: [], 
        new: [],
        messages: []
    },
    swipe: { 
        candidates: [],
        results: {
            kiss: [],
            marry: [],
            avoid: [],
         },
    },
    user: {},
}
//--------------------TESTING---------------------
import { userEmpty, userUid, userFull, messagesEmpty, messages, swipe, swipeDone }
    from "../MOCK-DATA";
//NEW user
//initialState.user = userEmpty
//EXisting user
initialState.user = userFull

//with Swipes
initialState.swipe = swipe
//without Swipes
//initialState.swipe = swipeDone

//with Messages
initialState.messages = messages
//without Messages
//initialState.messages = messagesEmpty

//------------------------------------------------
export default initialState;