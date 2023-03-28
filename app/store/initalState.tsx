/** @format */
let initialState: any = {
    app: {
        data: {}, //temp holder
        input: {}, //input holder
        page: 'profile',
        permissions: {
            swipe: false, //should be set to false for deploy (can swipe)
            message: false, //should be set to false for deploy (can message)
            profile: true, //should be set to false for deploy (profile is complete)
        },
        subPage1: 'profile',//settings
        subPage2: 'image',//info
        
    },
    messages: {
        newConnections: [], 
        newMessages: [],
        messages: [],
        send: [],
        remove: [],
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
//initialState.swipe = swipe
//without Swipes
//initialState.swipe = swipeDone

//with Messages
//initialState.messages = messages
//without Messages
//initialState.messages = messagesEmpty

//------------------------------------------------
export default initialState;