/** @format */
function LOG_MESSAGE_ACTION(state: any, action: any) {
    return {
        ...state, app: { ...state.app, data: action.payload} 
} }

export default LOG_MESSAGE_ACTION
