//@ts-nocheck
import { View, Text, TouchableOpacity } from "react-native"
import { createNavigationContainerRef } from '@react-navigation/native';
import { useState } from "react";

import { menuBar, menuItem, menuItemFocused, menuText, menuTextFocused } from "../../styles/menuBar"
import { Chat, Profile, Swipe } from "../Elements/Icons"

export const navigationRef = createNavigationContainerRef()

export const MenuBar = () => {
    const [page, setPage] = useState('swipe')
    return(
        <View style={menuBar}>
            <TouchableOpacity style={page == 'profile' ? menuItemFocused : menuItem}
                onPress={() => { navigationRef.navigate('profile'); setPage('profile')}}>
                <Profile focus={page} />
                <Text style={page == 'profile' ? menuTextFocused : menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={page == 'swipe' ? menuItemFocused : menuItem}
               onPress={() => {navigationRef.navigate('swipe'); setPage('swipe')}}>
                <Swipe focus={page}/>
                <Text style={page == 'swipe' ? menuTextFocused : menuText}>Swipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={page == 'messages' ? menuItemFocused : menuItem}
                onPress={() => {navigationRef.navigate('messages'); setPage('messages')}}>
                <Chat focus={page}/>
                <Text style={page == 'messages' ? menuTextFocused : menuText}>Chat</Text>
            </TouchableOpacity>
        </View>)
}