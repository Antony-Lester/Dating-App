/** @format */
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { CandidatesInterface } from '../../utils/interfaces';
import { picture } from '../../styles/swipe';
import { defaultBlurhash } from "../../utils/general";
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;

export const Picture = ({ candidate }: { candidate: CandidatesInterface }) => {
    if (isExpoGo) {
        return (<>
            <Image source={{ uri: candidate.imageURI }} style={picture} />
        </>)}
    else {
        return (<>
            <Image style={picture}
                source={candidate.imageURI}
                placeholder={candidate.imageBlurHash?candidate.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
        </>)
    }
}