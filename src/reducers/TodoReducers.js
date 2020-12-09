import { Add_Todo,Delete_Todo } from '../actions/type';

const todoState={
    todos : [],
}

export default(state=todoState,action)=>{

    switch(action.type){

        case Add_Todo :

        return {
            ...state,todos :[...state.todos,action.payload]
        }

        case Delete_Todo :

        return {
            ...state ,todos : state.todos.filter(todo => todo.id !== action.payload)
        }
        default :
        return state;
    }
}