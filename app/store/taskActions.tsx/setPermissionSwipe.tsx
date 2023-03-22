/** @format */

function SET_PERMISSION_SWIPE_ACTION(state: any, action: any) {
	return {
		...state,
		app: {
			...state.app,
			permissions: { ...state.app.permissions, swipe: true },
		},
	};
}

export default SET_PERMISSION_SWIPE_ACTION;
