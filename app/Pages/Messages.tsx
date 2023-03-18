import { Text, View } from 'react-native';

import { page } from '../styles/pages';
import { useSelector } from 'react-redux';
import { NewConnections } from './Messages-Components/NewConnections';

export const Messages = () => {
    
    let newConnections = useSelector((state : any) => state.messages.newConnections)
    let newMessages = useSelector((state: any) => state.messages.newMessages)
    let messages = useSelector((state : any) => state.messages.messages)


    return (<View style={page}>
        {newConnections ? <NewConnections newConnections={newConnections} /> : <></>}
        

    </View>)
}