/** @format */
import { newConnectionsContainer, newConnectionsItem } from "../../styles/messages"
import Constants, { ExecutionEnvironment } from 'expo-constants';
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;
import { View } from "react-native";
import { defaultBlurhash } from "../../utils/general";
import { ConnectionKiss, ConnectionMarry } from "../Elements/Icons";

export const NewConnectionsComponent = ({ candidate }: any) => {
    if (isExpoGo) {
        return (<View>
            <Image source={{ uri: candidate.item.imageUrl }} style={newConnectionsItem} />
            {candidate.item.status === 'kiss' ? <ConnectionKiss/> : <ConnectionMarry/>}
            </View>)}
    else {
        return (<View>
            <Image style={newConnectionsItem}
                source={candidate.item.imageURI}
                placeholder={candidate.item.imageBlurHash?candidate.item.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={2000} />
        </View>)
    }
}
