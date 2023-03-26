/** @format */
function LOG_MESSAGE_ACTION(state: any, action: any) {
    return {...state, app: { ...state.app, input: action.payload.text } } }

export default LOG_MESSAGE_ACTION
