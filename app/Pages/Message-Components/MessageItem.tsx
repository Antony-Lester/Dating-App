/** @format */

import { Text } from "react-native"
import { forcedNotSender, notSender, sender } from "../../styles/message"

export const ForcedMessageItem = ({ message }: any) => {
    if (message.item.sender) { return (<Text style={sender}>{message.item.message}</Text>)}
    else { return (<Text style={forcedNotSender}>{message.item.message}</Text>)}
}
export const MessageItem = ({ message }: any) => {
    if (message.item.sender) { return (<Text style={sender}>{message.item.message}</Text>)}
    else { return (<Text style={notSender}>{message.item.message}</Text>)}
}
