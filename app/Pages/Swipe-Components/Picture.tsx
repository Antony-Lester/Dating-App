/** @format */
import { Image } from 'expo-image';
import { CandidatesInterface } from '../../utils/interfaces';
import { picture } from '../../styles/swipe';
import { defaultBlurhash } from "../../utils/general";


export const Picture = ({ candidate }: { candidate: CandidatesInterface }) => {
        return (<>
            <Image style={picture}
                source={candidate.imageURI}
                placeholder={candidate.imageBlurHash?candidate.imageBlurHash:defaultBlurhash}
                contentFit="cover" transition={3000} />
        </>)
    
}