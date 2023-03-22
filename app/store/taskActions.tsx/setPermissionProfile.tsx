/** @format */

function SET_PERMISSION_PROFILE_ACTION(state: any, action: any) {
	return {
		...state,
		app: {
			...state.app,
			permissions: { ...state.app.permissions, profile: true },
		},
	};
}

export default SET_PERMISSION_PROFILE_ACTION;
