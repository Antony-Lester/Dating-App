/** @format */

function REVOKE_PERMISSION_MESSAGE_ACTION(state: any, action: any) {
	return {
		...state,
		app: {
			...state.app,
			permissions: { ...state.app.permissions, message: false },
		},
	};
}

export default REVOKE_PERMISSION_MESSAGE_ACTION;
