import { combineReducers } from 'redux';
import Breducer from './reducer_books';

const RootReducer=combineReducers({
books:Breducer
});

export default RootReducer;