import { useState } from "react";
import { View } from 'react-native';

import { swipe } from '../MOCK-DATA';

import { Card } from './Swipe-Components/SwipeCard';

import { page } from '../styles/pages';

export const Swipe = () => {
    const [candidates, setCandidates] = useState(swipe.candidates);
    //useSetCandidates to add more to swipe list..
    //add a loading.. when empty anf fetching more..
    return (<View style={page}>
        {candidates.map(
            (candidate) => (<Card
                key={candidate.uid}
                candidate={candidate}
                
              />)
        )}
    </View>)
}
