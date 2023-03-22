/** @format */
import { newConnectionsItem } from "../../styles/messages"
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import { defaultBlurhash } from "../../utils/general";
import { ConnectionKiss, ConnectionMarry } from "../Elements/Icons";
import { CHANGE_PAGE_MESSAGE } from "../../store/taskTypes";
import store from "../../store/store";

export const NewConnectionsComponent = ({ candidate }: any) => {
    
    return (
        <TouchableOpacity onPress={() => { store.dispatch({ type: CHANGE_PAGE_MESSAGE, payload: { ...candidate.item } }) }}>
        <Image
            style={newConnectionsItem}
            source={candidate.item.imageUrl}
            placeholder={candidate.item.imageBlurHash?candidate.item.imageBlurHash:defaultBlurhash}
            contentFit="cover"
            transition={4000}/>
        {candidate.item.status === 'kiss' ? <ConnectionKiss/> : <ConnectionMarry/>}
        </TouchableOpacity>)
}