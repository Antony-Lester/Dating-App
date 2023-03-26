/** @format */
function MENU_BUTTON_3_ACTION(state: any, action: any) {
	return { ...state, app: { ...state.app, page: 'messages' } };
}

export default MENU_BUTTON_3_ACTION;
