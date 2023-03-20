/** @format */
import { CHANGE_PAGE_PROFILE, CHANGE_PAGE_SWIPE, CHANGE_PAGE_MESSAGES, LOG_KISS, LOG_MARRY, LOG_AVOID } from "./taskTypes";

import initialState from "./initalState";

import CHANGE_PAGE_PROFILE_ACTION from "./taskActions.tsx/changePageProfile";
import CHANGE_PAGE_SWIPE_ACTION from "./taskActions.tsx/changePageSwipe";
import CHANGE_PAGE_MESSAGES_ACTION from "./taskActions.tsx/changePageMessages";

import LOG_KISS_ACTION from "./taskActions.tsx/logKiss";
import LOG_MARRY_ACTION from "./taskActions.tsx/logMarry";
import LOG_AVOID_ACTION from "./taskActions.tsx/logAvoid";


const taskReducer = (state = initialState, action : any) => {
    switch (action.type) {
        //pages
        case CHANGE_PAGE_PROFILE: return CHANGE_PAGE_PROFILE_ACTION(state, action);
        case CHANGE_PAGE_SWIPE: return CHANGE_PAGE_SWIPE_ACTION(state, action);
        case CHANGE_PAGE_MESSAGES: return CHANGE_PAGE_MESSAGES_ACTION(state, action);
        //swipe
        case LOG_KISS: return LOG_KISS_ACTION(state, action);
        case LOG_MARRY: return LOG_MARRY_ACTION(state, action);
        case LOG_AVOID: return LOG_AVOID_ACTION(state, action);
                
    default: return state;}
}
    
export default taskReducer
