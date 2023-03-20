/** @format */
function CHANGE_PAGE_PROFILE_ACTION(state: any, action: any) {
    
    if (state.app.page === 'profile') {
        if (state.app.subPage1 !== 'settings') {
            return { ...state, app: { ...state.app, subPage1: 'settings' } }
        }
        else {return { ...state, app: { ...state.app, subPage1: 'profile'}}}
    }
    
    
    return { ...state, app: { ...state.app, page: action.payload.page } }
}

export default CHANGE_PAGE_PROFILE_ACTION
