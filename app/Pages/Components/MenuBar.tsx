//@ts-nocheck
import { View, Text, TouchableOpacity } from "react-native"
import { createNavigationContainerRef } from '@react-navigation/native';
import { useState, useEffect } from "react";

import { menuBar, menuItem, menuItemDisabled, menuItemFocused, menuText, menuTextDisabled, menuTextFocused } from "../../styles/menuBar"
import { Chat, Profile, Swipe } from "../Elements/Icons"
import { available as messagesAvailable } from "../../utils/messages";
import { available as swipeAvailable } from "../../utils/swipe";

//MOCK-DATA
//import { messages } from "../../MOCK-DATA";
import { messagesEmpty as messages } from "../../MOCK-DATA";

export const navigationRef = createNavigationContainerRef()

export const MenuBar = () => {
    const [page, setPage] = useState('swipe')
    const [swipe, setSwipe] = useState(false)
    const [message, setMessage] = useState(false)

    useEffect(() => {
        setPage(messagesAvailable(messages) ? 'messages' : swipeAvailable(messages) ? 'swipe' : 'profile')
        setSwipe(swipeAvailable(messages))
        setMessage(messagesAvailable(messages))
      }, []);

    function profileOnPress() {
        navigationRef.navigate('profile');
        setPage('profile');
    };

    function swipeOnPress() { 
        if (swipeAvailable(messages)) { navigationRef.navigate('swipe'); setPage('swipe'); setSwipe(true) }
        else { navigationRef.navigate('messages'); setPage('messages'); setSwipe(false) };
    };

    function messagesOnPress() { 
        if (messagesAvailable(messages)) { navigationRef.navigate('messages'); setPage('messages'); setMessage(true) }
        else { navigationRef.navigate('swipe'); setPage('swipe'); setMessage(false)}
    }
        
    return(
        <View style={menuBar}>
            <TouchableOpacity style={page == 'profile' ? menuItemFocused : menuItem}
                onPress={profileOnPress}>
                <Profile focus={page} />
                <Text style={page == 'profile' ? menuTextFocused : menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={page == 'swipe' ? menuItemFocused : swipe ? menuItem : menuItemDisabled}
                onPress={swipeOnPress}>
                <Swipe focus={page}/>
                <Text style={page == 'swipe' ? menuTextFocused : swipe ? menuText : menuTextDisabled}>Swipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={page == 'messages' ? menuItemFocused : message ? menuItem : menuItemDisabled}
                onPress={messagesOnPress}>
                <Chat focus={page}/>
                <Text style={page == 'messages' ? menuTextFocused : message ? menuText : menuTextDisabled}>Chat</Text>
            </TouchableOpacity>
        </View>)
}