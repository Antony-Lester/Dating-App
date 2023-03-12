import { Text } from 'react-native'

import { CandidatesInterface } from "../../utils/interfaces"
import { capitalizeFirstLetter } from '../../utils/general'
import { name } from '../../styles/swipe'

export const Bio = ({ candidate }: { candidate: CandidatesInterface }) => {
    return (<>
    <Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text>
    </>)
}


//{image ? <><Image source={{ uri: candidate.imageURI }} style={picture}/>
//<Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text></> : <></>}