let initialState : any = {
    app: {
        page: 'profile',
        permissions: {
            swipe: false,
            message: false,
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
//initialState.messages = messages
//without Messages
//initialState.messages = messagesEmpty

//------------------------------------------------
export default initialState;