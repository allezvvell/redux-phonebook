import { createStore } from 'redux';
import reduce from './reduce/reduce';


let store = createStore(reduce)

export default store