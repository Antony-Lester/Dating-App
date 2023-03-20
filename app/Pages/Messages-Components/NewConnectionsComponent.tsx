/** @format */
import { newConnectionsItem } from "../../styles/messages"
import Constants, { ExecutionEnvironment } from 'expo-constants';
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { defaultBlurhash } from "../../utils/general";
import { ConnectionKiss, ConnectionMarry } from "../Elements/Icons";

export const NewConnectionsComponent = ({ candidate }: any) => {
    if (isExpoGo) {
        return (<TouchableOpacity onPress={() => {console.log('new',candidate.item.name, 'clicked') }}>
            <Image source={{ uri: candidate.item.imageUrl }} style={newConnectionsItem} />
            {candidate.item.status === 'kiss' ? <ConnectionKiss/> : <ConnectionMarry/>}
            </TouchableOpacity>)}
    else {
        return (<TouchableOpacity onPress={() => { console.log('new', candidate.item.name, 'clicked') }}>
            <Image style={newConnectionsItem}
                source={candidate.item.imageURI}
                placeholder={candidate.item.imageBlurHash?candidate.item.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={2000} />
        </TouchableOpacity>)
    }
}
