/** @format */

function CHANGE_PAGE_CAMERA_ACTION(state: any) {
    return { ...state, app: { ...state.app, page: 'camera' } };
}

export default CHANGE_PAGE_CAMERA_ACTION;
