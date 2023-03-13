import { View, Text } from 'react-native'

import { CandidatesInterface } from "../../utils/interfaces"
import { capitalizeFirstLetter } from '../../utils/general'
import { name, info } from '../../styles/swipe'

export const Bio = ({ candidate }: { candidate: CandidatesInterface }) => {
    return (<View style={info}>
    <Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text>
    </View>)
}


//{image ? <><Image source={{ uri: candidate.imageURI }} style={picture}/>
//<Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text></> : <></>}