import { MessageInterface, SendMessageInterface } from "../../utils/interfaces"

/** @format */
function LOG_REMOVE_ACTION(state: any) {
    const uidCheck = (item: MessageInterface) => item?.uid !== state.app.data.uid
    const sendUidCheck = (item: SendMessageInterface) => item?.toUid !== state.app.data.uid
    const data = { uid: state.user?.uid, toUid: state.app.data?.uid, time: Date.now() }
    
    const newConnections = state.messages.newConnections ? [...state.messages.newConnections.filter(uidCheck)] : []
    const newMessages = state.messages.newMessages ? [...state.messages.newMessages.filter(uidCheck)] : []
    const messages = state.messages.messages ? [...state.messages.messages.filter(uidCheck)] : []
    const send = state.messages.send ? [...state.messages.send.filter(sendUidCheck)] : []
    const remove = state.messages.remove? [...state.messages.remove, data] : [data]
    return {
        ...state,
        app: { ...state.app, page: 'messages', data: {}, input: {} },
        messages: {
            ...state.messages,
            newConnections,
            newMessages,
            messages,
            remove,
            send
        }
    }
}

export default LOG_REMOVE_ACTION


