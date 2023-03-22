/** @format */

function SET_PERMISSION_MESSAGE_ACTION(state: any, action: any) {
	return {
		...state,
		app: {
			...state.app,
			permissions: { ...state.app.permissions, message: true },
		},
	};
}

export default SET_PERMISSION_MESSAGE_ACTION;
