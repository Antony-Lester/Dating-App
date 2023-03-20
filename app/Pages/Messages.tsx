import { Text, View } from 'react-native';

import { page } from '../styles/pages';
import { useSelector } from 'react-redux';
import { NewConnections } from './Messages-Components/NewConnections';
import { newMessagesTitle } from '../styles/messages';
import { MessagesComponent } from './Messages-Components/MessagesComponent';
import { MessageInterface } from '../utils/interfaces';

export const Messages = () => {
    
    const newConnections = useSelector((state : any) => state.messages.newConnections)
    const newMessages = useSelector((state: any) => state.messages.newMessages)
    const messages = useSelector((state: any) => state.messages.messages)
    const messageCount : number = newMessages.length + messages.length
    const sortedMessages: Array<MessageInterface> = [
        ...newMessages.sort((a : MessageInterface, b : MessageInterface) => a.status < b.status),
        ...messages.sort((a : MessageInterface, b : MessageInterface) => a.status < b.status)]
    return (<View style={page}>
        {newConnections ? <NewConnections newConnections={newConnections} /> : <></>}
        {newMessages ?
            <Text style={newMessagesTitle}>{newMessages.length} New Messages</Text> :
            messages ? <Text style={newMessagesTitle}>{messageCount} Connections</Text> : <></>}
        {messageCount ? <MessagesComponent messages={sortedMessages}/> : <Text style={newMessagesTitle}>No Messages</Text>}
    </View>)
}