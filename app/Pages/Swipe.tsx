import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Card } from './Swipe-Components/Card';

import { page } from '../styles/pages';
import { ButtonBar } from "./Swipe-Components/ButtonBar";
import { CandidatesInterface } from '../utils/interfaces';

export const Swipe = () => {
    
    let candidates = useSelector((state : any) => state.swipe.candidates)
    return (<>
        <View style={page}>
            {candidates.map((candidate: CandidatesInterface, index: any) => (<Card key={candidate.uid} candidate={{ ...candidate, index }}/>))}
        </View>
        <ButtonBar/>
    </>)
}
