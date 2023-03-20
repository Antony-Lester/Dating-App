/** @format */
import { FlatList, View } from "react-native"
import { messageContainer, messageItem } from "../../styles/messages"
import { MessageInterface } from "../../utils/interfaces"
import { MessagesItem } from "./MessagesItem"

export const MessagesComponent = ({ messages }
    : { messages: Array<MessageInterface> }) => {
    return (
        <FlatList
            style={messageContainer}
            data={messages}
            renderItem={message => <MessagesItem message={message}/>}
            keyExtractor={item => item.uid.toString()}
            horizontal={false}
            showsHorizontalScrollIndicator={true}
            initialNumToRender={5}
            
        />)
    }
/*
ListHeaderComponent={<NewConnectionsEndsComponent/>}
            ItemSeparatorComponent={() => <NewConnectionsSeparatorComponent/>}
            ListFooterComponent={<NewConnectionsEndsComponent/>}

*/