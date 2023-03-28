import { ImageStyle, SafeAreaView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Image } from "expo-image"
import { page } from "../../styles/pages"
import { useSelector } from "react-redux"
import { setTheme } from "../../styles/theme"
import { Camera } from "../Elements/Icons"

const picture: ImageStyle = {
    height: undefined,
    width: "100%",
    aspectRatio: 9/16,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: setTheme.primary,
};
const card: ViewStyle = {
    position: "absolute",
    top: "5%",
    height: "85.0%",
    width: "95%",
    alignSelf: "center", 
};
const cameraButton: ViewStyle = {
    position: "absolute",
    height: '9%',
    width: '20%',
    bottom: '5.7%',
    right: 0,
    borderWidth: 3,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: setTheme.secondary,
    borderColor: setTheme.primary,
};
export default () => {
    let user = useSelector((state: any) => state.user)
    return (
        <SafeAreaView style={card}>
            <Image style={picture}
                source={user.imageUrl}
                placeholder={user.imageBlurHash}
                contentFit="cover" transition={3000}/>
            <TouchableOpacity style={cameraButton} onPress={()=>console.log('camera clicked')}>
                <Camera/>
            </TouchableOpacity>
        </SafeAreaView>)} 