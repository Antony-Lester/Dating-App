function LOG_MARRY_ACTION(state:any, action:any) {return {
    ...state, swipe: { ...state.swipe, candidates: state.swipe.candidates.filter((x: any) => x.uid !== action.payload.uid), results: { ...state.swipe.results, marry: [...state.swipe.results.marry, action.payload.uid] } }
} }

export default LOG_MARRY_ACTION
