function CHANGE_PAGE_SWIPE_ACTION(state:any, action:any) {return { ...state, app: { ...state.app, page: state.messages.connections.length === 0 && state.messages.new.length === 0 ? 'swipe' : 'messages', permissions: {...state.app.permissions, swipe: state.messages.connections.length === 0 &&
    state.messages.new.length === 0} }} }

export default CHANGE_PAGE_SWIPE_ACTION