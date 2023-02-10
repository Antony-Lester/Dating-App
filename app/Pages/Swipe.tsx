import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from './Swipe-Components/Card';
import { page } from '../styles/pages';
import { CandidatesInterface } from '../utils/interfaces';

export const Swipe = () => {
    
    let candidates = useSelector((state : any) => state.swipe.candidates)
    return (<>
        <SafeAreaView style={page}>
            {candidates.map((candidate: CandidatesInterface, index: any) => (<Card key={candidate.uid} candidate={{ ...candidate, index }}/>))}
        </SafeAreaView>
    </>)
}
