import { createStore, applyMiddleware } from 'redux';
import { rootReducer, rootEpic } from './root';
import epicMiddleware from './epicMiddleware';

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
