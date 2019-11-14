
const initState = {
    list: ''
}

export default (state = initState, action) => {
    if(action.type === 'change_value'){
        const newState = JSON.parse(JSON.stringify(state)); //简单的深拷贝
        newState.list = action.value;
        return newState;
    }
    return state;
}