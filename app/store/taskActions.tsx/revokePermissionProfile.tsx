/** @format */

function REVOKE_PERMISSION_PROFILE_ACTION(state: any, action: any) {
	return {
		...state,
		app: {
			...state.app,
			permissions: { ...state.app.permissions, profile: false },
		},
	};
}

export default REVOKE_PERMISSION_PROFILE_ACTION;
