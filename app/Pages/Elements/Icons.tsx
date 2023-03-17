import { Text, useWindowDimensions } from "react-native";
import {
    menu,
    menuFocused,
    main,
    small,
} from "../../styles/icons";

import { helper, helperKiss, helperMarry, helperAvoid } from "../../styles/swipe";

//--menu--
//-1
export const Profile = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={focus == 'profile' ? menuFocused(fontScale) : menu(fontScale)}>👤</Text>
}
export const Settings = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={focus == 'profile' ? menuFocused(fontScale) : menu(fontScale)}>⚙️</Text>
}
//-2
export const Swipe = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={focus == 'swipe' ? menuFocused(fontScale) : menu(fontScale)}>👀</Text>
}
export const Info = () => {
    const { fontScale } = useWindowDimensions()
    return <Text style={menuFocused(fontScale)}>🧠</Text>
}
export const Picture = () => {
    const { fontScale } = useWindowDimensions()
    return <Text style={menuFocused(fontScale)}>😐</Text>
}
//-3
export const Chat = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={focus == 'messages' ? menuFocused(fontScale) : menu(fontScale)}>💬</Text>
}

//--swipe--
export const Kiss = () => {
    const { fontScale } = useWindowDimensions()
    return <Text style={[menuFocused(fontScale), { transform: [{ rotate: '45deg' }] }]}>💋</Text>
}
export const Marry = () => {
    const { fontScale } = useWindowDimensions()
    return <Text style={menuFocused(fontScale)}>💎</Text>
}
export const Avoid = () => {
    const { fontScale } = useWindowDimensions()
    return <Text style={menuFocused(fontScale)}>⛔</Text>
}

//--main--
export const Send = () => {
    const { fontScale } = useWindowDimensions()
    return <Text style={main(fontScale)}>💌</Text>
}

//--small--
export const Report = () => {
    const { fontScale } = useWindowDimensions()
    return <Text style={small(fontScale)}>⚠️</Text>
}

//helper
export const HelperKiss = () => <Text style={{ ...helper, ...helperKiss
}}>💋</Text>
export const HelperMarry = () => <Text style={{ ...helper, ...helperMarry }}>💎</Text>
export const HelperAvoid = () => <Text style={{ ...helper, ...helperAvoid }}>⛔</Text>

