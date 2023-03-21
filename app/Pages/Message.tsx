/** @format */
import { Text, View } from 'react-native';

import { page } from '../styles/pages';
import { useSelector } from 'react-redux';

export const Message = () => {
    let message = useSelector((state: any) => state.app.data)
    console.log(message)
    return(<View style={page}>
    
</View>)
}

//if time line in data is [] render 50/50 else render standard message screen