import { MessageInterface } from "../../utils/interfaces"

/** @format */
function LOG_SEND_MESSAGE_ACTION(state: any) {
    const uidCheck = (item: MessageInterface) => item?.uid !== state.app.data.uid
    const newConnections = state.messages.newConnections ? [...state.messages.newConnections.filter(uidCheck)] : []
    const newMessages = state.messages.newMessages ? [...state.messages.newMessages.filter(uidCheck)] : []
    const messages = state.messages.messages ? [...state.messages.messages.filter(uidCheck)] : []

    const send = [...state.messages.send,
        { uid: state.user.uid, toUid: state.app.data.uid, time: Date.now(), message: state.app.input, }]
    const timeline = [...state.app.data.timeline].unshift({ message: state.app.input, sender: true, time: Date.now() })
    messages.unshift({ ...state.app.data, force: false, timeline })

    return {...state,
        app: {...state.app, page: 'messages'},
        messages: {...state.messages,
            newConnections,
            newMessages,
            messages,  
            send,
        }
    }
}

export default LOG_SEND_MESSAGE_ACTION
