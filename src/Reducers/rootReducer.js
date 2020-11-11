import feedbackRdeucer from "./feedbackReducer"
import authreducer from "./authReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    feedback: feedbackRdeucer,
    auth: authreducer
})

export default rootReducer;