//@ts-nocheck
import { View, Text, TouchableOpacity, useWindowDimensions} from "react-native"
import { createNavigationContainerRef } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { menuBar, menuItem, menuItemDisabled, menuItemFocused, menuText, menuTextDisabled, menuTextFocused } from "../../styles/menuBar"
import { Chat, Info, Profile, Picture, Swipe, Settings} from "../Elements/Icons"

import store from "../../store/store";
import { CHANGE_PAGE_MESSAGES, CHANGE_PAGE_PROFILE, CHANGE_PAGE_SWIPE } from "../../store/taskTypes";
import { capitalizeFirstLetter } from '../../utils/general'

export const navigationRef = createNavigationContainerRef()

export const MenuBar = () => { 
    let page = useSelector(state => state.app.page)
    let permissions = useSelector(state => state.app.permissions)
    let subPage1 = useSelector(state => state.app.subPage1)
    let subPage2 = useSelector(state => state.app.subPage2)

    const { fontScale } = useWindowDimensions()
    
    return(
        <View style={menuBar}>

            <TouchableOpacity style={page === 'profile' ? menuItemFocused : menuItem}
                onPress={() => store.dispatch({ type: CHANGE_PAGE_PROFILE, payload: { page: 'profile' } })}>
                {subPage1 !== 'profile' ? <Settings focus={page}/> : <Profile focus={page}/> }
                
                
                {page === 'profile' ? <Text style={menuTextFocused(fontScale)}>{capitalizeFirstLetter(subPage1)}</Text> : <></>}
            </TouchableOpacity>

            <TouchableOpacity style={page == 'swipe' ? menuItemFocused : permissions.swipe ? menuItem : menuItemDisabled}
                disabled={!permissions.swipe}
                onPress={() => store.dispatch({type: CHANGE_PAGE_SWIPE})}>
                {page !== 'swipe' ? <Swipe focus={page}/> :subPage2 === 'image'? <Info focus={page}/> : <Picture focus={page}/>}
                {page == 'swipe' ? <Text style={menuTextFocused(fontScale)}>{page !== 'swipe' ? 'swipe':subPage2 === 'image'? 'Info' : 'Face'}</Text> : <></>}
            </TouchableOpacity>

            <TouchableOpacity style={page == 'messages' ? menuItemFocused : permissions.message ? menuItem : menuItemDisabled}
                disabled={!permissions.message}
                onPress={() => store.dispatch({type: CHANGE_PAGE_MESSAGES})}>
                <Chat focus={page} />
                {page == 'messages' ? <Text style={menuTextFocused(fontScale)}>Chat</Text> : <></> }
            </TouchableOpacity>
        </View>)
}