/** @format */

function REVOKE_PERMISSION_SWIPE_ACTION(state: any, action: any) {
	return {
		...state,
		app: {
			...state.app,
			permissions: { ...state.app.permissions, swipe: false },
		},
	};
}

export default REVOKE_PERMISSION_SWIPE_ACTION;
