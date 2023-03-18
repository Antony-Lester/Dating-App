import { Text, View } from 'react-native';

import { page } from '../styles/pages';
import { useSelector } from 'react-redux';

export const Messages = () => {
    
    let messages = useSelector((state : any) => state.messages)
    
    
    
    return (<View style={page}>
    
    </View>)
}