import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../modules';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

const configureStore = (initialState) =>
  createStoreWithMiddlewares(
    rootReducer,
    initialState,
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined
  );
export default configureStore();
// sagaMiddleware.run(rootSaga);
