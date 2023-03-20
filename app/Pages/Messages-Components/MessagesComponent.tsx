/** @format */
import { FlatList, View } from "react-native"
import { messageContainer, messageItem } from "../../styles/messages"
import { MessageInterface } from "../../utils/interfaces"
import { MessagesItem } from "./MessagesItem"
import { SeparatorComponent } from "./SeparatorComponent"
import { EndsComponent } from "./EndsComponent"

export const MessagesComponent = ({ messages }
    : { messages: Array<MessageInterface> }) => {
    return (
        <FlatList
            style={messageContainer}
            data={messages}
            renderItem={message => <MessagesItem message={message}/>}
            keyExtractor={item => item.uid.toString()}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
            ItemSeparatorComponent={() => <SeparatorComponent />}
            ListFooterComponent={<EndsComponent/>}
        />)
    }
/*
ListHeaderComponent={<NewConnectionsEndsComponent/>}
            ItemSeparatorComponent={() => <NewConnectionsSeparatorComponent/>}
            ListFooterComponent={<NewConnectionsEndsComponent/>}

*/