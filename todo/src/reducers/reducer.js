
const initialState = {
    todos: [],
  };

const todoReducer = (state = initialState , action) =>{
   switch (action.type){
    case 'ADDTODO':
      return {
        ...state,
        todos:[...state.todos ,action.payload],
      };
      case 'REMOVETODO':
        return{
          ...state,
        }

      default:
        return state;
 
   }
}

export default todoReducer;