function CHANGE_PAGE_SWIPE_ACTION(state:any, action:any) {
    
    if (state.app.page === 'swipe') {
        if (state.app.subPage2 === 'image') {return { ...state, app: { ...state.app, subPage2: 'bio'}}}
        else {return { ...state, app: { ...state.app, subPage2: 'image'}}}
    }
    
    return { ...state, app: { ...state.app, page: state.messages.connections.length === 0 && state.messages.new.length === 0 ? 'swipe' : 'messages', permissions: {...state.app.permissions, swipe: state.messages.connections.length === 0 &&
    state.messages.new.length === 0} }} }

export default CHANGE_PAGE_SWIPE_ACTION