import { View, Image} from "react-native"
import { page, splash } from "../../styles/pages"
import { useAssets } from 'expo-asset';


export const Splash = () => {
    const [assets, error] = useAssets([require('../../assets/splash.png')]);
    return (<View style={page}>
        {assets ?
            <Image style={splash}
                source={assets[0]}
            placeholder={`|J9ioRj[0dWB}]of9saexbNwa|w^jtS4a|sojtay+Zf6GHfl#7aeT1kCi^rqayT0j[nhayX8j[jaF|a}+ujZKPbHwHjZf,xvj[M_ayxuj[RjayoeEKay-Vj[NFayogbHr?WAfPkDfkaxayf7j[kCaffQf*jsjZbHW.jZo2`}
            contentFit="cover" transition={3000} /> : <></>}
    </View>)
}