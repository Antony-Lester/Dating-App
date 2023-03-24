/** @format */
import { MENU_BUTTON_1, MENU_BUTTON_2, MENU_BUTTON_3, LOG_KISS, LOG_MARRY, LOG_AVOID, CHANGE_PAGE_MESSAGE, SET_PERMISSION_PROFILE, SET_PERMISSION_SWIPE, SET_PERMISSION_MESSAGE, REVOKE_PERMISSION_PROFILE, REVOKE_PERMISSION_SWIPE, REVOKE_PERMISSION_MESSAGE, LOG_MESSAGE } from "./taskTypes";

import initialState from "./initalState";

import MENU_BUTTON_1_ACTION from "./taskActions.tsx/menuButton1";
import MENU_BUTTON_2_ACTION from "./taskActions.tsx/menuButton2";
import MENU_BUTTON_3_ACTION from "./taskActions.tsx/menuButton3";

import LOG_KISS_ACTION from "./taskActions.tsx/logKiss";
import LOG_MARRY_ACTION from "./taskActions.tsx/logMarry";
import LOG_AVOID_ACTION from "./taskActions.tsx/logAvoid";
import CHANGE_PAGE_MESSAGE_ACTION from "./taskActions.tsx/changePageMessage";
import SET_PERMISSION_PROFILE_ACTION from "./taskActions.tsx/setPermissionProfile";
import SET_PERMISSION_SWIPE_ACTION from "./taskActions.tsx/setPermissionSwipe";
import SET_PERMISSION_MESSAGE_ACTION from "./taskActions.tsx/setPermissionMessage";
import REVOKE_PERMISSION_PROFILE_ACTION from "./taskActions.tsx/revokePermissionProfile";
import REVOKE_PERMISSION_SWIPE_ACTION from "./taskActions.tsx/revokePermissionSwipe";
import REVOKE_PERMISSION_MESSAGE_ACTION from "./taskActions.tsx/revokePermissionMessage";
import LOG_MESSAGE_ACTION from "./taskActions.tsx/logMessage";


const taskReducer = (state = initialState, action : any) => {
    switch (action.type) {
        //pages
        case MENU_BUTTON_1: return MENU_BUTTON_1_ACTION(state, action);
        case MENU_BUTTON_2: return MENU_BUTTON_2_ACTION(state, action);
        case MENU_BUTTON_3: return MENU_BUTTON_3_ACTION(state, action);

        case CHANGE_PAGE_MESSAGE: return CHANGE_PAGE_MESSAGE_ACTION(state, action);
        //permissions
            //set
        case SET_PERMISSION_PROFILE: return SET_PERMISSION_PROFILE_ACTION(state, action);
        case SET_PERMISSION_SWIPE: return SET_PERMISSION_SWIPE_ACTION(state, action);
        case SET_PERMISSION_MESSAGE: return SET_PERMISSION_MESSAGE_ACTION(state, action);
            //revoke
        case REVOKE_PERMISSION_PROFILE: return REVOKE_PERMISSION_PROFILE_ACTION(state, action);
        case REVOKE_PERMISSION_SWIPE: return REVOKE_PERMISSION_SWIPE_ACTION(state, action);
        case REVOKE_PERMISSION_MESSAGE: return REVOKE_PERMISSION_MESSAGE_ACTION(state, action);
        //swipe
        case LOG_KISS: return LOG_KISS_ACTION(state, action);
        case LOG_MARRY: return LOG_MARRY_ACTION(state, action);
        case LOG_AVOID: return LOG_AVOID_ACTION(state, action);
        //message
        case LOG_MESSAGE: return LOG_MESSAGE_ACTION(state, action);
                
    default: return state;}
}
    
export default taskReducer
