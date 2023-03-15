import { Text, View } from 'react-native';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { CandidatesInterface } from '../../utils/interfaces';
import { picture, name, nameBackground } from '../../styles/swipe';
import { capitalizeFirstLetter } from '../../utils/general';
const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Image = isExpoGo ? require('react-native').Image : require('expo-image').Image;

const defaultBlurhash : String = '|IIX%9t7uPoe-pj[ROayRj0KWBt7ofxua#aefjRjtRf+wIjZM{WBozWBofEMoL%NWVD%oLWBf6tR%Nayn~WVRPj[bHf6j[s.oLayWBR+ofj[j[aeo}ayRjWCoKofkCj[t7-:fkIUjts:ayoea#WDxafkM|f6kCa}xaayR*'

export const Picture = ({ candidate }: { candidate: CandidatesInterface }) => {
    if (isExpoGo) {
        return (<>
            <Image source={{ uri: candidate.imageURI }} style={picture} />
            <View style={nameBackground}>
            <Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text>
            </View>
        </>)}
    else {
        return (<>
            
            <Image style={picture}
                source={candidate.imageURI}
                placeholder={candidate.imageBlurHash?candidate.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
            <View style={nameBackground}>
            <Text style={name}>{capitalizeFirstLetter(candidate.name)}</Text>
            </View>
        </>)
    }
}