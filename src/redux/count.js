// 初始值
const initState = {
  num: 0
}

export default function countReducer(state = initState, action) {
  const { type } = action;
  switch (type) {
    case 'increment':
    return {...state, num: state.num + 1 };
    default:
      return state;
  }
}
