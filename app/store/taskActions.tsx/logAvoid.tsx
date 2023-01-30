function LOG_AVOID_ACTION(state:any,action:any ) {return {
    ...state, swipe: { ...state.swipe, candidates: state.swipe.candidates.filter((x: any) => x.uid !== action.payload.uid), results: { ...state.swipe.results, avoid: [...state.swipe.results.avoid, action.payload.uid] } }
} }

export default LOG_AVOID_ACTION
