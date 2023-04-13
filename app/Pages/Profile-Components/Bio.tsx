import { TouchableOpacity, View, Text, KeyboardAvoidingView, TextInput } from "react-native"

import { bottomBar, buttonText } from "../../styles/profile/picture"
import { input, page } from "../../styles/profile/bio"
import { setTheme } from "../../styles/theme"
import { useSelector } from "react-redux"
import store from "../../store/store"
import { LOG_BIO } from "../../store/taskTypes"
import { card } from "../../styles/pages"
import { useState } from "react"

export default () => {
    let bio = useSelector((state: any) => state.user.bio)
    let save = useSelector((state: any) => state.app.save)
    return (
        <KeyboardAvoidingView style={page}>
            <View style={card}>
            <TextInput
                    style={input}
                    autoCorrect={true}
                    autoFocus={true}
                    blurOnSubmit={true}
                    inputMode={'text'}
                    keyboardAppearance={'default'}
                    maxLength={1000}
                    multiline={true}
                    placeholder={
                        `You Need to 
                    tell us about you...`
                    }
                    returnKeyType="send"
                    selectionColor={setTheme.secondary}
                    placeholderTextColor={setTheme.secondary}
                    textAlign={'center'}
                    textBreakStrategy={'highQuality'}
                    onChangeText={
                        (text) => {
                            store.dispatch({ type: LOG_BIO, payload: text })
                        }}
                    value={bio}
                />
                {save ? <TouchableOpacity style={bottomBar} onPress={() => console.log('save bio clicked send to api and app.save: false')}>
                    <Text style={buttonText}> Save Bio ?</Text>
                </TouchableOpacity> : <></>}
            </View>  
        </KeyboardAvoidingView>)
} 