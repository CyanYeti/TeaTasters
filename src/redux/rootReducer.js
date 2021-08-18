import { combineReducers } from "redux";
import tastingNotesReducer from './TastingNotes/tastingNotes.reducer';

const rootReducer = combineReducers ({
    tastingNotesReducer,
})

export default rootReducer;