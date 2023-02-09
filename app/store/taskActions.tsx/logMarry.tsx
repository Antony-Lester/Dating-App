function LOG_MARRY_ACTION(state:any, action:any) {return {
    ...state, swipe: { ...state.swipe, candidates: state.swipe.candidates.filter((x: any) => x.uid !== action.payload), results: { ...state.swipe.results, marry: [...state.swipe.results.marry, action.payload] } }
} }

export default LOG_MARRY_ACTION
