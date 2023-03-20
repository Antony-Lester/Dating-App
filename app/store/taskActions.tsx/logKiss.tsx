/** @format */
function LOG_KISS_ACTION(state: any, action: any) { 
    return {
    ...state, swipe: { ...state.swipe, candidates: state.swipe.candidates.filter((x: any) => x.uid !== action.payload), results: { ...state.swipe.results, kiss: [...state.swipe.results.kiss, action.payload] } }
}}

export default LOG_KISS_ACTION
