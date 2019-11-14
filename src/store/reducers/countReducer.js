import { ADD_COUNT, REDUCE_COUNT } from '../actionTypes'

const initializeState = {
    count: 1
}
// 定义reducer，第一个参数为state，赋予默认值为上边定义的initializeState，
// 第二个参数为action，并return一个state
// 并且抛出这个countReducer
export default function countReducer(state = initializeState,action) {
    switch (action.type) {
        case ADD_COUNT:
            return { count: state.count + 1 };
        case REDUCE_COUNT:
            return { count: state.count - action.num };
        default:
            return state;
    }
}