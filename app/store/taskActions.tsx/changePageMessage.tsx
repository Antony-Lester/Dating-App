/** @format */

function CHANGE_PAGE_MESSAGE_ACTION(state: any, action: any) {
	if (state.app.permissions.message)
		return { ...state, app: { ...state.app, page: 'message', data: action.payload } };
	else {
		return { ...state };
	}
}

export default CHANGE_PAGE_MESSAGE_ACTION;
