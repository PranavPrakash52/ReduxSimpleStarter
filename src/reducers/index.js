import { combineReducers } from 'redux';
import nt1 from './reducer_books';
import Active_books from './activebook';

const RootReducer=combineReducers({
book:nt1,
activebook:Active_books
// books:nt1
});
const RootReducerr=combineReducers({
books:nt1,
activebook:Active_books
// books:nt1
});

export default RootReducerr;