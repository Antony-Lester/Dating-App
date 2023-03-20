/** @format */
import Constants, { ExecutionEnvironment } from 'expo-constants';
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;
import { View, Text, TouchableOpacity } from "react-native";
import { capitalizeFirstLetter, defaultBlurhash, timeWaiting } from "../../utils/general";
import { MessageKiss, MessageMarry } from "../Elements/Icons";
import { messageItem, messagePicture, messageForcedName, messageForcedText, messageForcedWait, messageName, messageForcedPicture } from '../../styles/messages';
import { TimeLineInterface } from '../../utils/interfaces';
import store from '../../store/store';
import { CHANGE_PAGE_MESSAGE } from '../../store/taskTypes';

export const MessagesItem = ({ message }: any) => {
    const lastMessage = message.item.force ? message.item.timeline.filter((message : TimeLineInterface) => !message.sender)[0]?.message : undefined
    
    if (isExpoGo) {
        if (message.item.force) {
            return (<TouchableOpacity style={messageItem} onPress={() => {
                store.dispatch({ type: CHANGE_PAGE_MESSAGE, payload: { page: 'message' } })
                console.log('message', message.item.name, 'clicked')
            }}>
                <Image source={{ uri: message.item.imageUrl }}
                    resizeMode="contain"
                    style={messageForcedPicture} />
                <Text style={messageForcedName}>{capitalizeFirstLetter(message.item.name)}</Text>
                {message.item.status === 'kiss' ? <MessageKiss /> : <MessageMarry />}
                <Text style={messageForcedWait}>{timeWaiting(new Date(message.item.timeline[0]?.time))}</Text>
                <Text style={messageForcedText} numberOfLines={2} ellipsizeMode='tail'>{lastMessage}</Text>
            </TouchableOpacity>)
        }
        else {
            return (<TouchableOpacity style={messageItem} onPress={() => {
                store.dispatch({ type: CHANGE_PAGE_MESSAGE, payload: { page: 'message' } })
                console.log('message', message.item.name, 'clicked')
            }}>
            <Image source={{ uri: message.item.imageUrl }}
                resizeMode="contain"
                style={messagePicture} />
            <Text style={messageName}>{capitalizeFirstLetter(message.item.name)}</Text>
            {message.item.status === 'kiss' ? <MessageKiss /> : <MessageMarry />}
        </TouchableOpacity>) }
    }
    else {
        if (message.item.force) {
            return (<View style={messageItem}>
                <Image style={messageForcedPicture}
                source={message.item.imageUrl}
                placeholder={message.item.imageBlurHash?message.item.imageBlurHash:defaultBlurhash}
                contentFit="contain" transition={3000} />
                <Text style={messageForcedName}>{capitalizeFirstLetter(message.item.name)}</Text>
                {message.item.status === 'kiss' ? <MessageKiss /> : <MessageMarry />}
                <Text style={messageForcedWait}>{timeWaiting(new Date(message.item.timeline[0]?.time))}</Text>
                <Text style={messageForcedText} numberOfLines={2} ellipsizeMode='tail'>{lastMessage}</Text>
            </View>)
        }
        else {
            return (<View style={messageItem}>
            <Image style={messagePicture}
                source={message.item.imageUrl}
                placeholder={message.item.imageBlurHash?message.item.imageBlurHash:defaultBlurhash}
                contentFit="contain" transition={3000} />
            <Text style={messageName}>{capitalizeFirstLetter(message.item.name)}</Text>
            {message.item.status === 'kiss' ? <MessageKiss /> : <MessageMarry />}
        </View>) }
    }
}
