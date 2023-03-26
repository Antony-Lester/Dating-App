
//@ts-nocheck
import {Keyboard, View, Text, TouchableOpacity, useWindowDimensions } from "react-native"
import React, {useState, useEffect} from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { menuBar, menuItem, menuItemDisabled, menuItemFocused, menuText, menuTextDisabled, menuTextFocused } from "../../styles/menuBar"

import store from "../../store/store";
import { MENU_BUTTON_3, MENU_BUTTON_1, MENU_BUTTON_2, LOG_SEND_MESSAGE } from "../../store/taskTypes";
import { Chat, Info, Profile, Picture, Swipe, Settings, Remove, Send} from "../Elements/Icons"
import { capitalizeFirstLetter } from '../../utils/general'
import { removeCheck } from "../../utils/alerts";







export default () => { 
    let page = useSelector(state => state.app.page);
    let permissions = useSelector(state => state.app.permissions);
    let subPage1 = useSelector(state => state.app.subPage1);
    let subPage2 = useSelector(state => state.app.subPage2);
    let forceMessages = useSelector((state: any) => state.messages.newConnections.length)
        + useSelector((state: any) => state.messages.newMessages.length);
    let candidateName = useSelector((state: any) => state.app?.data)
    const { fontScale } = useWindowDimensions()

    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardStatus(false);
        });

        return () => {
        showSubscription.remove();
        hideSubscription.remove();
        };
    }, []);


    return(
        <View style={menuBar}>
            
            <TouchableOpacity
                style={page === 'profile' || page === 'message' ? menuItemFocused : forceMessages ? menuItemDisabled : menuItem}
                onPress={() => page === 'message' ? removeCheck(candidateName) : store.dispatch({ type: MENU_BUTTON_1})}>
                
                {subPage1 === 'profile' ?
                    <Profile focus={page}/> :
                    page === 'message' ?
                    <Remove focus={keyboardStatus}/> :
                    <Settings focus={page} />}
                
                {!keyboardStatus ? page === 'profile' ? <Text style={menuTextFocused(fontScale)}>{capitalizeFirstLetter(subPage1)}</Text> : page === 'message' ? <Text style={menuTextFocused(fontScale)}>Avoid</Text> :<></>: <></>}

            </TouchableOpacity>

            <TouchableOpacity
                style={page == 'swipe' || page === 'message' ? menuItemFocused : forceMessages ? menuItemDisabled : menuItem }
                onPress={() => page === 'message' ? store.dispatch({ type: LOG_SEND_MESSAGE }) : store.dispatch({ type: MENU_BUTTON_2 })}>
                
                {page !== 'swipe' ? page === 'message' ?
                    <Send focus={keyboardStatus} /> : <Swipe focus={page} />
                    : subPage2 === 'image' ? <Info focus={page} /> : <Picture focus={page} />}
                
                {!keyboardStatus ? page === 'swipe' || page === 'message' ? <Text style={menuTextFocused(fontScale)}>{page !== 'swipe' ? page === 'message'? 'Send' : 'swipe' : subPage2 === 'image' ? 'Info' : 'Face'}</Text> : <></> : <></>}

            </TouchableOpacity>

            <TouchableOpacity style={page === 'messages' || page === 'message' ? menuItemFocused : permissions.message ? menuItem : menuItemDisabled}
                onPress={() => store.dispatch({type: MENU_BUTTON_3})}>
                
                <Chat focus={page === 'messages' || page === 'message'? keyboardStatus: true} />

                {!keyboardStatus ? page === 'messages' || page === 'message' ? <Text style={menuTextFocused(fontScale)}>Chat</Text> : <></> : <></>}
                
            </TouchableOpacity>
        </View>)
}