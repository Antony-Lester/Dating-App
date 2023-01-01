import { Text } from "react-native";
import {
    menu,
    main,
    small,
    helper,
} from "../../styles/icons";

//--menu--
export const Profile = () => <Text style={menu}>👤</Text>
export const Swipe = () => <Text style={menu}>👀</Text>
export const Chat = () => <Text style={menu}>💬</Text>

//--main--
export const Kiss = () => <Text style={main}>💋</Text>
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
