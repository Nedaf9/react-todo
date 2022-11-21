import { legacy_createStore } from 'redux';
// 引入为Count组件服务的reducer
import countReducer  from './count';
import { composeWithDevTools } from 'redux-devtools-extension'
// 暴露store
export default legacy_createStore(countReducer,composeWithDevTools());
