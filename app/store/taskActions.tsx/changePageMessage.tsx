/** @format */
function CHANGE_PAGE_MESSAGE_ACTION(state: any, action: any) { return { ...state, app: { ...state.app, page: 'message'} } }

export default CHANGE_PAGE_MESSAGE_ACTION
