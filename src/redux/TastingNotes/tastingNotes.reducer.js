import {NAME, REGION, CULTIVAR, AGE, TASTING_NOTES, ADDITIONAL_NOTES, RATING } from './tastingNotes.types';

const INITIAL_STATE = {
    name: '',
    region: '',
    cultivar: '',
    age: -1,
    tastingNotes: '',
    additionalNotes: '',
    rating: -1,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.property) {
        case NAME:
            return {
                ...state,
                name: action.payload,
            }
        case REGION:
            return {
                ...state,
                region: action.payload,
            }
        case CULTIVAR:
            return {
                ...state,
                cultivar: action.payload,
            }
        case AGE:
            return {
                ...state,
                age: action.payload,
            }
        case TASTING_NOTES:
            return {
                ...state,
                tastingNotes: action.payload,
            }
        case ADDITIONAL_NOTES:
            return {
                ...state,
                additionalNotes: action.payload,
            }
        case RATING:
            return {
                ...state,
                rating: action.payload,
            }
        default: return state;
    }
}

export default reducer;