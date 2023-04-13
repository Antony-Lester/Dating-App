/** @format */
function LOG_BIO_ACTION(state: any, action: any) {
    return {
        ...state,
        app: { ...state.app, save: true },
        user: { ...state.user, bio: action.payload },
    }
}

export default LOG_BIO_ACTION