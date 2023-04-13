import {  View, Text, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { useSelector } from "react-redux";

import store from "../../store/store";
import { CHANGE_PAGE_CAMERA } from "../../store/taskTypes";

import { CameraIcon } from "../Elements/Icons";

import { card, page } from "../../styles/pages";
import { bottomBar, buttonText, picture } from "../../styles/profile/picture";


export default function () {
    const user = useSelector((state: any) => state.user)
    return (
    <View style={page}>
        <View style={card}>
            <Image style={picture}
                source={user.imageUrl}
                placeholder={user.imageBlurHash}
                contentFit="cover" transition={3000}/>
                <TouchableOpacity style={bottomBar} onPress={() => store.dispatch({ type: CHANGE_PAGE_CAMERA })}>
                <CameraIcon />
                <Text style={buttonText}> Change Picture ?</Text>  
            </TouchableOpacity>
        </View>  
    </View>)
}

