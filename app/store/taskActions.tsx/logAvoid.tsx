function LOG_AVOID_ACTION(state:any,action:any ) {return {
    ...state, swipe: { ...state.swipe, candidates: state.swipe.candidates.filter((x: any) => x.uid !== action.payload), results: { ...state.swipe.results, avoid: [...state.swipe.results.avoid, action.payload] } }
} }

export default LOG_AVOID_ACTION
