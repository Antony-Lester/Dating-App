/** @format */
import { KeyboardAvoidingView, Text, View, } from 'react-native';
import { Image } from 'expo-image';
import { page } from '../styles/pages';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter, defaultBlurhash, timeWaiting } from '../utils/general';
import { MessageForcedKiss, MessageForcedMarry } from './Elements/Icons';
import { bio, bioText, body, chat, forcedNameText, forcedPicture, forcedWait, header, input, nameText, picture, } from '../styles/message';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { ForcedMessageItem, MessageItem } from './Message-Components/MessageItem';
import { setTheme } from '../styles/theme';
import { ForcedMessageReport, MessageReport } from './Message-Components/MessageReport';
import store from '../store/store';
import { LOG_MESSAGE } from '../store/taskTypes';
import { forcedPlaceholder, placeholder } from '../utils/placeholder';

export default () => {
    let message = useSelector((state: any) => state.app.data)
    //@ts-expect-error
    const messages = message?.timeline?.sort((a, b) => new Date(b.time) - new Date(a.time))

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
                {messages.length ? <Text style={forcedWait}>{timeWaiting(new Date(messages[0]?.time))}</Text> : <></>}
                {messages.length ? <ForcedMessageReport message={message} /> : <MessageReport message={message} />}
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
                    <View style={bio}>
                        <Text style={bioText}>{message.bio}</Text>
                        </View>
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
                    placeholder={`${forcedPlaceholder(message.name)}`}
                    returnKeyType="send"
                    selectionColor={setTheme.secondary}
                    placeholderTextColor={setTheme.secondary}
                    textAlign={'right'}
                    textBreakStrategy={'simple'}
                    onChange={({ nativeEvent: { text } }) => {
                        store.dispatch({ type: LOG_MESSAGE, payload: { text } })
                    }}
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
                    placeholder={placeholder()}
                    returnKeyType="send"
                    selectionColor={setTheme.onSecondaryContainer}
                    placeholderTextColor={setTheme.secondary}
                    textAlign={'right'}
                    textBreakStrategy={'simple'}
                    onChange={({ nativeEvent: { text } }) => {
                        store.dispatch({ type: LOG_MESSAGE, payload: { ...message, text: message.text ? message.text + text : text } })
                    }}
                />
            </KeyboardAvoidingView>
        </View>)
    }
}
