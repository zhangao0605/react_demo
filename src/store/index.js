import { createStore, combineReducers } from 'redux';
import countReducer from "./reducers/countReducer";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// createStore方法是用来创建store的，combineReducers方法是用来合并多个reducer的
// 创建根reducer，利用combineReducers合并多个reducer，此处还未定义reducer，所以暂空
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};

const rootReducer = combineReducers({
    countReducer
})
const myPersistReducer = persistReducer(persistConfig, rootReducer)
// 创建初始化的state，初始化为一个空对象即可，默认的数据建议都写在reducer上
const initializeState = {}; // 定义初始化的state

// 创建store，第一个参数是根reducer，第二个参数可以是初始化的state
const store = createStore(myPersistReducer,initializeState);

// 抛出store
export const persistor = persistStore(store)
export default store;