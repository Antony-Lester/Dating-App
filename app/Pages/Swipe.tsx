import { useState } from "react";
import { View } from 'react-native';

import { swipe } from '../MOCK-DATA';

import { Card } from './Swipe-Components/Card';

import { page } from '../styles/pages';
import { ButtonBar } from "./Swipe-Components/ButtonBar";

export const Swipe = () => {
    const [candidates, setCandidates] = useState(swipe.candidates);
    //useSetCandidates to add more to swipe list..
    //add a loading.. when empty anf fetching more..
    return (<>
        <View style={page}>
            {candidates.map((candidate, index) => (<Card key={candidate.uid} candidate={{ ...candidate, index }}/>))}
        </View>
        <ButtonBar/>
    </>)
}
