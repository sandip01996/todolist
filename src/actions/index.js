import { Add_Todo,Delete_Todo } from './type';

export const addTodo=todo=>{
    return{
        type : Add_Todo,
        payload: {
            label : todo,
            id : Math.ceil(Math.random() * 100)
        }
    }
};

export const deleteTodo=id=>{

    return {
        type : Delete_Todo,
        payload : id
    }
};