import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App/App';
import Home from './components/Home';

ReactDOM.render(<Home />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import axios from 'axios';
// import reducers from './components/Redux/rootReducers';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './components/Redux/rootSaga';

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

// ReactDOM.render(
//   <Provider store={store}>
//     <Home />
//   </Provider>,
//   document.getElementById('root')
// );
