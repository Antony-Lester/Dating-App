import { View } from "react-native"
import { newConnectionsContainer } from "../../styles/messages"
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { picture } from '../../styles/swipe';
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;

import { defaultBlurhash } from "../../utils/general";

export const NewConnectionsComponent = ({ candidate } : any ) => {
    console.log(candidate.item)

    if (isExpoGo) {
        return (<View style={newConnectionsContainer}>
            <Image source={{ uri: candidate.imageURI }} style={picture} />
            </View>)}
    else {
        return (<View style={newConnectionsContainer}>
            <Image style={picture}
                source={candidate.imageURI}
                placeholder={candidate.imageBlurHash?candidate.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
        </View>)
    }
}
