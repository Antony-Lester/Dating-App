//https://www.youtube.com/watch?v=9EoKurp6V0I


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const card: ViewStyle = {
    position: "absolute",
    height: "87.5%",
    width: "95%",
    marginTop: "2.5%",
    alignSelf: "center",
    borderRadius: 33,
    borderWidth: 4,
    borderColor: setTheme.primary,
};
const picture: ImageStyle = {
    height: "90%",
    width: "100%",
    borderRadius: 29,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: setTheme.SecondaryContainer
};
const bottomBar: ViewStyle = {
    height: '10%',
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderWidth: 0,
    borderTopWidth: 4,
    borderColor: setTheme.primary,
    backgroundColor: setTheme.primaryContainer,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
};

const buttonText: TextStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    color: setTheme.onPrimaryContainer,
    overflow: 'hidden',
}

import { setTheme } from "../../styles/theme";
import { Dimensions, ImageStyle, TouchableOpacity, View, ViewStyle, Text, TextStyle, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { useSelector } from "react-redux";
import { CameraIcon } from "../Elements/Icons";
import { page } from "../../styles/pages";
export default function () {
    const user = useSelector((state: any) => state.user)

    return (
    <View style={page}>
        <View style={card}>
            <Image style={picture}
                source={user.imageUrl}
                placeholder={user.imageBlurHash}
                contentFit="cover" transition={3000}/>
            <TouchableOpacity style={bottomBar} onPress={() => console.log('camera clicked')}>
                    <CameraIcon />
                    <Text style={buttonText}> Change Picture ?</Text>
            </TouchableOpacity>
        </View>  
    </View>)
}