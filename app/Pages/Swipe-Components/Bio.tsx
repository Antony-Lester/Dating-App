import { View, Text } from 'react-native'

import { CandidatesInterface } from "../../utils/interfaces"
import { capitalizeFirstLetter } from '../../utils/general'
import { name, nameBackground, info, bio, bioText } from '../../styles/swipe'
import { ScrollView } from 'react-native-gesture-handler'

export const Bio = ({ candidate }: { candidate: CandidatesInterface }) => {
    return (<View style={info}>
            <ScrollView style={bio}>
            <Text style={bioText}>{capitalizeFirstLetter(candidate.bio)}</Text>
            </ScrollView>
            <View style={nameBackground}>
            <Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text>
            </View>
        </View>)
}