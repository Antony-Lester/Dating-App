function CHANGE_PAGE_PROFILE_ACTION(state: any, action: any) { return { ...state, app: { ...state.app, page: action.payload.page } } }

export default CHANGE_PAGE_PROFILE_ACTION
