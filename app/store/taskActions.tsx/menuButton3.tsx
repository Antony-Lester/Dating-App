/** @format */
function MENU_BUTTON_3_ACTION(state: any, action: any) {
	if (
		state.app.permissions.message &&
		['profile', 'swipe', 'messages', 'message'].includes(state.app.page)
	) {
		return { ...state, app: { ...state.app, page: 'messages' } };
	} else {
		return { ...state };
	}
}

export default MENU_BUTTON_3_ACTION;
