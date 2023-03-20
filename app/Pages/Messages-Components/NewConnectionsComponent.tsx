/** @format */
import { newConnectionsItem } from "../../styles/messages"
import Constants, { ExecutionEnvironment } from 'expo-constants';
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { defaultBlurhash } from "../../utils/general";
import { ConnectionKiss, ConnectionMarry } from "../Elements/Icons";
import { CHANGE_PAGE_MESSAGE } from "../../store/taskTypes";
import store from "../../store/store";

export const NewConnectionsComponent = ({ candidate }: any) => {
    if (isExpoGo) {
        return (<TouchableOpacity onPress={() => {
            store.dispatch({ type: CHANGE_PAGE_MESSAGE, payload: { ...candidate.item } })
            console.log('new', candidate.item.name, 'clicked')
        }}>
            <Image source={{ uri: candidate.item.imageUrl }} style={newConnectionsItem} />
            {candidate.item.status === 'kiss' ? <ConnectionKiss/> : <ConnectionMarry/>}
            </TouchableOpacity>)}
    else {
        return (<TouchableOpacity onPress={() => {
            store.dispatch({ type: CHANGE_PAGE_MESSAGE, payload: { ...candidate.item } })
            console.log('new', candidate.item.name, 'clicked')
        }}>
            <Image style={newConnectionsItem}
                source={candidate.item.imageURI}
                placeholder={candidate.item.imageBlurHash?candidate.item.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={2000} />
        </TouchableOpacity>)
    }
}
