/** @format */
import { Text, useWindowDimensions } from "react-native";
import {
    menu,
    menuFocused,
    main,
    small,
} from "../../styles/icons";

import { helper, helperKiss, helperMarry, helperAvoid } from "../../styles/swipe";
import { newConnectionsIcon, messagesIcon, connectionIconKiss, connectionIconMarry } from "../../styles/messages";
import { messageIcon } from "../../styles/message";
import { cameraIcon } from "../Profile-Components/Picture";

//--menu--
//button-1
export const Profile = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={focus == 'profile' ? menuFocused(fontScale) : menu(fontScale)}>👤</Text>
}
export const Settings = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={focus == 'profile' ? menuFocused(fontScale) : menu(fontScale)}>⚙️</Text>
}
export const Remove = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={!focus ? menuFocused(fontScale) : menu(fontScale)}>⛔</Text>
}
//button-2
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
export const Send = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={!focus ? menuFocused(fontScale) : menu(fontScale)}>💌</Text>
}
//button-3
export const Chat = ({ focus }: any) => {
    const { fontScale } = useWindowDimensions()
    return <Text style={!focus ? menuFocused(fontScale) : menu(fontScale)}>💬</Text>
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

//messages
export const ConnectionKiss = () => <Text style={{ ...newConnectionsIcon, ...connectionIconKiss }}>💋</Text>
export const ConnectionMarry = () => <Text style={{ ...newConnectionsIcon, ...connectionIconMarry }}>💎</Text>  
export const MessagesKiss = () => <Text style={{ ...messagesIcon, ...{ transform: [{ rotate: '65deg' }] }}}>💋</Text>
export const MessagesMarry = () => <Text style={{ ...messagesIcon }}>💎</Text>
//message
export const MessageForcedKiss = '💋'
export const MessageForcedMarry = '💎'
export const MessageKiss = () => <Text style={{ ...messageIcon, ...{ transform: [{ rotate: '65deg' }] }}}>💋</Text>
export const MessageMarry = () => <Text style={{ ...messageIcon }}>💎</Text>
//profile
export const Camera = () => <Text style={{
    alignSelf: 'center', textAlign: 'center', justifyContent: 'space-around',
    fontSize: 38}}>📷</Text>