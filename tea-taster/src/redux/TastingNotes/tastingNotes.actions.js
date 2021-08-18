import {NAME, REGION, CULTIVAR, AGE, TASTING_NOTES, ADDITIONAL_NOTES, RATING } from './tastingNotes.types';

export const setName = (payload) => {
    return {
        property: NAME,
        payload: {...payload},
    }
}

export const setName = (payload) => {
    return {
        property: NAME,
        payload: {...payload},
    }
}

export const setRegion = (payload) => {
    return {
        property: REGION,
        payload: {...payload},
    }
}

export const setCultivar = (payload) => {
    return {
        property: CULTIVAR,
        payload: {...payload},
    }
}

export const setAge = (payload) => {
    return {
        property: AGE,
        payload: {...payload},
    }
}

export const setTastingNotes = (payload) => {
    return {
        property: TASTING_NOTES,
        payload: {...payload},
    }
}


export const setAdditionalNotes = (payload) => {
    return {
        property: ADDITIONAL_NOTES,
        payload: {...payload},
    }
}

export const setRating = (payload) => {
    return {
        property: RATING,
        payload: {...payload},
    }
}
