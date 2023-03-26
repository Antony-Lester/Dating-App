/** @format */
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { page } from '../styles/pages';
import { NewConnections } from './Messages-Components/NewConnections';
import { MessagesComponent } from './Messages-Components/MessagesComponent';
import { MessageInterface } from '../utils/interfaces';
import { endsComponent, newMessagesTitle } from '../styles/messages';

export default () => {
    const newConnections = useSelector((state : any) => state.messages.newConnections)
    const newMessages = useSelector((state: any) => state.messages.newMessages)
    const messages = useSelector((state: any) => state.messages.messages)
    const messageCount: number = newMessages.length + messages.length
    const sortedMessages: Array<MessageInterface> = [
        ...newMessages?.sort((a : MessageInterface, b : MessageInterface) => a.status < b.status),
        ...messages?.sort((a: MessageInterface, b: MessageInterface) => a.status < b.status)]
    
    return (<View style={page}>
        {newConnections.length ? <NewConnections newConnections={newConnections} /> : <View style={endsComponent}></View>}
        {newMessages ?
            <Text style={newMessagesTitle}>{`${newMessages.length} New Message${newMessages.length > 1 ? 's' : ''}`}</Text> :
            messages ? <Text style={newMessagesTitle}>{messageCount} Connections</Text> : <></>}
        {messageCount ? <MessagesComponent messages={sortedMessages}/> : <Text style={newMessagesTitle}>No Messages</Text>}
    </View>)
}