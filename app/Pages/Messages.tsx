import { Text, View } from 'react-native';

import { page } from '../styles/pages';
import { useSelector } from 'react-redux';
import { NewConnections } from './Messages-Components/NewConnections';
import { newMessagesTitle } from '../styles/messages';

export const Messages = () => {
    
    let newConnections = useSelector((state : any) => state.messages.newConnections)
    let newMessages = useSelector((state: any) => state.messages.newMessages)
    let messages = useSelector((state: any) => state.messages.messages)
    return (<View style={page}>
        {newConnections ? <NewConnections newConnections={newConnections} /> : <></>}
        {newMessages ? <Text style={newMessagesTitle}>{newMessages.length} New Messages</Text> : <></> }
    </View>)
}