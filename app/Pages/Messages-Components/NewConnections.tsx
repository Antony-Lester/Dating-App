import { FlatList, Text} from "react-native"
import { newConnectionsContainer, newConnectionsTitle } from "../../styles/messages"
import { MessageInterface } from "../../utils/interfaces"
import { NewConnectionsComponent } from "./NewConnectionsComponent"
import { NewConnectionsSeparatorComponent } from "./NewConnectionsSeparatorComponent"
import { NewConnectionsEndsComponent } from "./NewConnectionsEndsComponent"

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
            ListHeaderComponent={<NewConnectionsEndsComponent/>}
            ItemSeparatorComponent={() => <NewConnectionsSeparatorComponent/>}
            ListFooterComponent={<NewConnectionsEndsComponent/>}
        />
    </>)
}

//key={(candidate : MessageInterface) => candidate.uid}