import { Text, Image } from "react-native";
import {
    menu,
    menuFocused,
    main,
    small,
    helper,
    hint,
} from "../../styles/icons";

//--menu--
export const Profile = ({focus}: any) => <Text style={focus == 'profile' ? menuFocused : menu}>👤</Text> 
export const Swipe = ({focus}: any) => <Text style={focus == 'swipe' ? menuFocused : menu}>👀</Text>
export const Chat = ({focus}: any) => <Text style={focus == 'messages' ? menuFocused : menu}>💬</Text>

//--main--
export const Kiss = () => <Text style={[main, { transform: [{ rotate: '45deg' }] }]}>💋</Text>
export const Marry = () => <Text style={main}>💎</Text>
export const Avoid = () => <Text style={main}>⛔</Text>
export const Send = () => <Text style={main}>💌</Text>

//--small--
export const Report = () => <Text style={small}>⚠️</Text>
export const Info = () => <Text style={small}>💡</Text>

//helper
export const KissHelper = () => <Text style={helper}>💋</Text>
export const MarryHelper = () => <Text style={helper}>💎</Text>
export const AvoidHelper = () => <Text style={helper}>⛔</Text>

//arrows
export const ArrowLeft = () => <Image style={hint} source={require('../../assets/arrows/dark/arrow_left.png')}/> 
export const ArrowUp = () => <Image style={hint} source={require('../../assets/arrows/dark/arrow_up.png')}/> 
export const ArrowRight = () => <Image style={hint} source={require('../../assets/arrows/dark/arrow_right.png')}/> 