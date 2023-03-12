import { Text } from 'react-native';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { CandidatesInterface } from '../../utils/interfaces';
import { picture, name } from '../../styles/swipe';
import { capitalizeFirstLetter } from '../../utils/general';
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;

export const Picture = ({ candidate }: { candidate: CandidatesInterface }) => {
    if (isExpoGo) {
        return (<>
            <Image source={{ uri: candidate.imageURI }} style={picture} />
            <Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text>
        </>)}
    else {
        return (<>
            <Image style={picture}
                source={candidate.imageURI}
                placeholder={candidate.imageBlurHash}
                contentFit="cover" transition={3000} />
            <Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text>
        </>)
    }
}