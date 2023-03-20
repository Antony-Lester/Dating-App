/** @format */
import { FlatList, Text } from "react-native"
import { newConnectionsContainer, newConnectionsTitle } from "../../styles/messages"
import { MessageInterface } from "../../utils/interfaces"
import { NewConnectionsComponent } from "./NewConnectionsComponent"
import { SeparatorComponent } from "./SeparatorComponent"
import { EndsComponent } from "./EndsComponent"
import { StartComponent } from "./StartComponent"

export const NewConnections = ({ newConnections }
    : { newConnections: Array<MessageInterface> }) => {
    const length = newConnections.length
    return (<><Text style={newConnectionsTitle}>{length} New Connections</Text>
        <FlatList
            style={newConnectionsContainer}
            data={newConnections}
            renderItem={candidate => <NewConnectionsComponent candidate={candidate} />}
            keyExtractor={item => item.uid.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            initialNumToRender={5}
            ListHeaderComponent={<StartComponent/>}
            ItemSeparatorComponent={() => <SeparatorComponent/>}
            ListFooterComponent={<EndsComponent/>}
        />
    </>)
}

//key={(candidate : MessageInterface) => candidate.uid}