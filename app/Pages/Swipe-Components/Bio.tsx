import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CandidatesInterface } from "../../utils/interfaces"
import { capitalizeFirstLetter } from '../../utils/general'
import { info, bioHolder, bio, bioText } from '../../styles/swipe'


export const Bio = ({ candidate }: { candidate: CandidatesInterface }) => {
    return (<View style={info}>
        <View style={bioHolder}>
                <ScrollView style={bio}>
                    <Text style={bioText}>{capitalizeFirstLetter(candidate.bio)}</Text>
                </ScrollView>
            </View>
        </View>)
}