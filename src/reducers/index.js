/**
 * Created by Ibrahim on 18/03/2017.
 */

import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
