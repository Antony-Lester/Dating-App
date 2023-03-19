import { newConnectionsContainer, newConnectionsItem } from "../../styles/messages"
import Constants, { ExecutionEnvironment } from 'expo-constants';
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;
import { Text, View } from "react-native";
import { defaultBlurhash } from "../../utils/general";

export const NewConnectionsComponent = ({ candidate }: any) => {
    if (isExpoGo) {
        return (<View style={newConnectionsItem}>
            <Image source={{ uri: candidate.item.imageUrl }} style={newConnectionsContainer} />
            </View>)}
    else {
        return (<View>
            <Image style={newConnectionsItem}
                source={candidate.imageURI}
                placeholder={candidate.imageBlurHash?candidate.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
        </View>)
    }
}


/*
if (isExpoGo) {
        return (
            <Image source={{ uri: candidate.item.imageUrl }} style={newConnectionsContainer} />
            )}
    else {
        return (
            <Image style={newConnectionsContainer}
                source={candidate.imageURI}
                placeholder={candidate.imageBlurHash?candidate.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
        )
    }

*/