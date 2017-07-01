import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes'

//注意当使用了conbineRecuders之后，这里的state对应的是state中的todos字段的值
export default (state = [], action) => {
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    
    case TOGGLE_TODO:
      let targetItem = state.filter((todoItem) => todoItem.id === action.id)
      return [
        ...state,
        {
          ...targetItem,
          completed: !targetItem.completed
        }
      ];

    case REMOVE_TODO:
      return state.filter((todoItem) => {
        return todoItem.id !== action.id
      })

    default:
      return state
  }
}