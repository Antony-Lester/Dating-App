/** @format */
import { Image } from "expo-image";
import { Text, TouchableOpacity } from "react-native";
import { capitalizeFirstLetter, defaultBlurhash, timeWaiting } from "../../utils/general";
import { MessagesKiss, MessagesMarry } from "../Elements/Icons";
import { messageItem, messagePicture, messageForcedName, messageForcedText, messageForcedWait, messageName, messageForcedPicture } from '../../styles/messages';
import { TimeLineInterface } from '../../utils/interfaces';
import store from '../../store/store';
import { CHANGE_PAGE_MESSAGE } from '../../store/taskTypes';

export const MessagesItem = ({ message }: any) => {
    let lastMessage = message.item.force ? message.item.timeline.filter((message: TimeLineInterface) => !message.sender) : undefined
    lastMessage = lastMessage ? lastMessage.pop() : undefined
    if (message.item.force) {
        return (<TouchableOpacity style={messageItem} onPress={() => {
            store.dispatch({ type: CHANGE_PAGE_MESSAGE, payload: { ...message.item } })}}>
                <Image style={messageForcedPicture}
                source={message.item.imageUrl}
                placeholder={message.item.imageBlurHash?message.item.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
                <Text style={messageForcedName}>{capitalizeFirstLetter(message.item.name)}</Text>
                {message.item.status === 'kiss' ? <MessagesKiss /> : <MessagesMarry />}
                <Text style={messageForcedWait}>{timeWaiting(new Date(lastMessage.time))}</Text>
                <Text style={messageForcedText} numberOfLines={2} ellipsizeMode='tail'>{lastMessage.message}</Text>
            </TouchableOpacity>)}
    else {
        return (<TouchableOpacity style={messageItem} onPress={() => {
            store.dispatch({ type: CHANGE_PAGE_MESSAGE, payload: { ...message.item } })}}>
            <Image style={messagePicture}
            source={message.item.imageUrl}
            placeholder={message.item.imageBlurHash?message.item.imageBlurHash:defaultBlurhash}
            contentFit="cover" transition={3000} />
            <Text style={messageName}>{capitalizeFirstLetter(message.item.name)}</Text>
            {message.item.status === 'kiss' ? <MessagesKiss /> : <MessagesMarry />}
    </TouchableOpacity>) }
}
