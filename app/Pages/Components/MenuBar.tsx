//@ts-nocheck
import { View, Text, TouchableOpacity } from "react-native"
import { createNavigationContainerRef } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { menuBar, menuItem, menuItemDisabled, menuItemFocused, menuText, menuTextDisabled, menuTextFocused } from "../../styles/menuBar"
import { Chat, Profile, Swipe } from "../Elements/Icons"

import store from "../../store/store";
import { CHANGE_PAGE_MESSAGES, CHANGE_PAGE_PROFILE, CHANGE_PAGE_SWIPE } from "../../store/taskTypes";

export const navigationRef = createNavigationContainerRef()

export const MenuBar = () => { 
    let page = useSelector(state => state.app.page)
    let permissions = useSelector(state => state.app.permissions)

    return(
        <View style={menuBar}>
            <TouchableOpacity style={page === 'profile' ? menuItemFocused : menuItem}
                onPress={() => store.dispatch({type: CHANGE_PAGE_PROFILE, payload: {page: 'profile'}})}>
                <Profile focus={page} />
                <Text style={page == 'profile' ? menuTextFocused : menuText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={page == 'swipe' ? menuItemFocused : permissions.swipe ? menuItem : menuItemDisabled}
                onPress={() => store.dispatch({type: CHANGE_PAGE_SWIPE})}>
                <Swipe focus={page}/>
                <Text style={page == 'swipe' ? menuTextFocused : permissions.swipe ? menuText : menuTextDisabled}>Swipe</Text>
            </TouchableOpacity>

            <TouchableOpacity style={page == 'messages' ? menuItemFocused : permissions.message ? menuItem : menuItemDisabled}
                onPress={() => store.dispatch({type: CHANGE_PAGE_MESSAGES})}>
                <Chat focus={page}/>
                <Text style={page == 'messages' ? menuTextFocused : permissions.message ? menuText : menuTextDisabled}>Chat</Text>
            </TouchableOpacity>
        </View>)
}