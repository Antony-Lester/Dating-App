/** @format */
import { KeyboardAvoidingView, Text, View, } from 'react-native';
import { Image } from 'expo-image';
import { page } from '../styles/pages';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter, defaultBlurhash, timeWaiting } from '../utils/general';
import { MessageForcedKiss, MessageForcedMarry } from './Elements/Icons';
import { bio, body, chat, forcedNameText, forcedPicture, forcedWait, header, input, nameText, picture, } from '../styles/message';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { ForcedMessageItem, MessageItem } from './Message-Components/MessageItem';
import { setTheme } from '../styles/theme';
import { ForcedMessageReport, MessageReport } from './Message-Components/MessageReport';
import store from '../store/store';
import { LOG_MESSAGE } from '../store/taskTypes';

export const Message = () => {
    let message = useSelector((state: any) => state.app.data)
    //@ts-expect-error
    const messages = message.timeline.sort((a, b) => new Date(b.time) - new Date(a.time))
    console.log(messages.length, message.bio, messages)
    if (message.force) {
        return (<View style={page}>
            <View style={header}>
                <Image style={forcedPicture}
                source={message.imageUrl}
                placeholder={message.imageBlurHash?message.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
                <Text style={forcedNameText}>{
                    `${message.status === 'kiss' ? MessageForcedKiss : MessageForcedMarry} ${capitalizeFirstLetter(message.name)}`
                }</Text>
                <Text style={forcedWait}>{timeWaiting(new Date(messages[0]?.time))}</Text>
                <ForcedMessageReport message={message} />
            </View>
            <KeyboardAvoidingView style={body}>
                {messages.length ? <FlatList
                    style={chat}
                    data={messages}
                    renderItem={message => <ForcedMessageItem message={message} />}
                    keyExtractor={(_item, index) => index.toString()}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={10}
                    inverted={true}
                    initialScrollIndex={0} />
                    : 
                    <Text style={chat}>{message.bio}</Text>
                }
            <TextInput
                    style={input}
                    autoCorrect={true}
                    autoFocus={true}
                    blurOnSubmit={true}
                    inputMode={'text'}
                    keyboardAppearance={'default'}
                    maxLength={1000}
                    multiline={true}
                    placeholder={`you need to message ${capitalizeFirstLetter(message.name)}...             `}
                    returnKeyType="send"
                    selectionColor={setTheme.secondary}
                    placeholderTextColor={setTheme.secondary}
                    textAlign={'right'}
                    textBreakStrategy={'highQuality'}
                    onChange={(e) => store.dispatch({ type: LOG_MESSAGE, payload: e.target.valueOf })}
                />
            </KeyboardAvoidingView>
        </View>)
    }
    else { 
        return (<View style={page}>
            <View style={header}>   
                <Image style={picture}
                source={message.imageUrl}
                placeholder={message.imageBlurHash?message.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
                <Text style={nameText}>{
                    `${message.status === 'kiss' ? MessageForcedKiss : MessageForcedMarry} ${capitalizeFirstLetter(message.name)}`
                }</Text>
                <MessageReport message={message} />
            </View>
            <KeyboardAvoidingView style={body}>
                <FlatList
                    style={chat}
                    data={messages}
                    renderItem={message => <MessageItem message={message} />}
                    keyExtractor={(_item, index) => index.toString()}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={10}
                    inverted={true}
                    initialScrollIndex={0}
                />
                <TextInput
                    style={input}
                    autoCorrect={true}
                    autoFocus={true}
                    blurOnSubmit={true}
                    inputMode={'text'}
                    keyboardAppearance={'default'}
                    maxLength={1000}
                    multiline={true}
                    placeholder={`lets follow up with ${capitalizeFirstLetter(message.name)}...             `}
                    returnKeyType="send"
                    selectionColor={setTheme.onSecondaryContainer}
                    placeholderTextColor={setTheme.secondary}
                    textAlign={'right'}
                    textBreakStrategy={'highQuality'}
                    onChange={(e) => store.dispatch({ type: LOG_MESSAGE, payload: e.target.valueOf })}
                />
            </KeyboardAvoidingView>
        </View>)
    }
}

//if time line in data is [] render 50/50 else render standard message screen
