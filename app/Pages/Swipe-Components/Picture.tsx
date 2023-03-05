import { Image, Text} from 'react-native';
import { CandidatesInterface } from '../../utils/interfaces';
import { picture, name } from '../../styles/swipe';

import { capitalizeFirstLetter } from '../../utils/general';

export const Picture = ({ candidate }: { candidate: CandidatesInterface }) => {
    return (<>
        <Image source={{ uri: candidate.imageURI }} style={picture} />
        <Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text>
    </>)
}
