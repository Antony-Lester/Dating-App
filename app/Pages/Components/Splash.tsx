import { View } from "react-native"
import { page } from "../../styles/pages"
import { Image } from "expo-image"
import { useAssets } from "expo-asset";

export default () => {

    const [assets] = useAssets([require('../../assets/splash.png')]);

    return (<View style={page}>
        {assets ? <Image
            source={{ uri: assets[0].uri }}
            placeholder={`|J9ioRj[0dWB}]of9saexbNwa|w^jtS4a|sojtay+Zf6GHfl#7aeT1kCi^rqayT0j[nhayX8j[jaF|a}+ujZKPbHwHjZf,xvj[M_ayxuj[RjayoeEKay-Vj[NFayogbHr?WAfPkDfkaxayf7j[kCaffQf*jsjZbHW.jZo2`}
            contentFit="cover" transition={3000}
        /> : null}
    </View>)
}