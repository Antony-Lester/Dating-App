/** @format */
function CHANGE_PAGE_SWIPE_ACTION(state: any, action: any) {
	//button toggle
	if (state.app.page === 'swipe') {
		if (state.app.subPage2 === 'image') {
			return { ...state, app: { ...state.app, subPage2: 'bio' } };
		} else {
			return { ...state, app: { ...state.app, subPage2: 'image' } };
		}
	}
	//other pages
	else if (state.app.permissions.swipe && !state.app.permissions.message) {
		return { ...state, app: { ...state.app, page: 'swipe' } };
	} else {
		return { ...state };
	}
}

export default CHANGE_PAGE_SWIPE_ACTION;
