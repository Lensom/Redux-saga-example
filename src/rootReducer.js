import { combineReducers } from 'redux';
import { dogReducer } from './components/Recommendations/reducer'

const rootReducer = combineReducers({
  dogReducer
});

export default rootReducer;