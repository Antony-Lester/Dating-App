import { FlatList, View, Text} from "react-native"
import { newConnectionsContainer } from "../../styles/messages"
import { MessageInterface } from "../../utils/interfaces"
import { NewConnectionsComponent } from "./NewConnectionsComponent"

export const NewConnections = ({ newConnections }
    : { newConnections: Array<MessageInterface> }) => {
    return (<View style={newConnectionsContainer}>
        <Text>New Connections</Text>
        <FlatList
            data={newConnections}
            renderItem={candidate => <NewConnectionsComponent candidate={candidate} />}
        />
        </View>)
}

//key={(candidate : MessageInterface) => candidate.uid}