import { Text } from "react-native";
import {
    menu,
    menuFocused,
    main,
    small,
} from "../../styles/icons";

import { helper, helperKiss, helperMarry, helperAvoid } from "../../styles/swipe";

//--menu--
//-1
export const Profile = ({ focus }: any) => <Text style={focus == 'profile' ? menuFocused : menu}>👤</Text> 
export const Settings = ({ focus }: any) => <Text style={focus == 'profile' ? menuFocused : menu}>⚙️</Text> 
//-2
export const Swipe = ({ focus }: any) => <Text style={focus == 'swipe' ? menuFocused : menu}>👀</Text>
export const Info = () => <Text style={menuFocused}>🧠</Text>
export const Picture = () => <Text style={menuFocused}>😐</Text> 
//-3
export const Chat = ({focus}: any) => <Text style={focus == 'messages' ? menuFocused : menu}>💬</Text>

//--swipe--
export const Kiss = () => <Text style={[menuFocused, { transform: [{ rotate: '45deg' }] }]}>💋</Text>
export const Marry = () => <Text style={menuFocused}>💎</Text>
export const Avoid = () => <Text style={menuFocused}>⛔</Text>

//--main--

export const Send = () => <Text style={main}>💌</Text>

//--small--
export const Report = () => <Text style={small}>⚠️</Text>

//helper
export const HelperKiss = () => <Text style={{ ...helper, ...helperKiss
}}>💋</Text>
export const HelperMarry = () => <Text style={{ ...helper, ...helperMarry }}>💎</Text>
export const HelperAvoid = () => <Text style={{ ...helper, ...helperAvoid }}>⛔</Text>

