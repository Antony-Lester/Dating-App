/** @format */
function MENU_BUTTON_1_ACTION(state: any, action: any) {
    //button toggle
    if (state.app.page === 'profile') {
        if (state.app.subPage1 !== 'settings') {return { ...state, app: { ...state.app, subPage1: 'settings' } }}
        else { return { ...state, app: { ...state.app, subPage1: 'profile' } } }
    }
    //other pages
    else if (state.app.page === 'messages' && !state.app.permissions.message) { return { ...state, app: { ...state.app, page: 'profile' } } }
    else if (state.app.page === 'message' && !state.app.permissions.message) { return { ...state, app: { ...state.app, page: 'profile' } } }
    else if (state.app.page === 'swipe') { return { ...state, app: { ...state.app, page: 'profile' } } }
    else { return {...state} }
}

export default MENU_BUTTON_1_ACTION
