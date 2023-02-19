import { Text, Image, View } from "react-native";
import {
    menu,
    menuFocused,
    main,
    small,
    hint,
} from "../../styles/icons";

import { helper, helperKiss, helperMarry, helperAvoid } from "../../styles/swipe";

//--menu--
export const Profile = ({focus}: any) => <Text style={focus == 'profile' ? menuFocused : menu}>👤</Text> 
export const Swipe = ({focus}: any) => <Text style={focus == 'swipe' ? menuFocused : menu}>👀</Text>
export const Chat = ({focus}: any) => <Text style={focus == 'messages' ? menuFocused : menu}>💬</Text>

//--main--
export const Kiss = () => <Text style={[main, { transform: [{ rotate: '45deg' }] }]}>💋</Text>
export const Marry = () => <Text style={main}>💎</Text>
export const Avoid = () => <Text style={main}>⛔</Text>
export const Send = () => <Text style={main}>💌</Text>
export const Info = () => <Text style={main}>🧠</Text>
export const Picture = () => <Text style={main}>😐</Text> 

//--small--
export const Report = () => <Text style={small}>⚠️</Text>

//helper
export const HelperKiss = () => <Text style={{ ...helper, ...helperKiss
}}>💋</Text>
export const HelperMarry = () => <Text style={{ ...helper, ...helperMarry }}>💎</Text>
export const HelperAvoid = () => <Text style={{ ...helper, ...helperAvoid }}>⛔</Text>

