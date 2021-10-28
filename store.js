import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { reducer as reduxFormReducer } from 'redux-form';
import promise from "redux-promise-middleware";
import apiReducer from "./reducers/apiReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

// const middleware2 = applyMiddleware(promise(), thunk, logger());

const initialState = {
  fetching: false,
  fetched: false,
  nextURL: null,
  error: null, 
};

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  apiReducer,
});

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
));

// console.log(middleware);

export default store;
