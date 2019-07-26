import login from './login';
import {combineReducers} from 'redux'
const myReducer=combineReducers({
    login:login
    
});
export default myReducer;