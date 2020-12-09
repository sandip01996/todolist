import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { deleteTodo} from '../actions'

const TodoList=()=>{
   
     
        const {todos}=useSelector(state=>state.todos);
        const dispatch=useDispatch();
    
   
    if(!todos.length){
        return <h1>No todos</h1>;
      }
       return(
        <List className='list' >
        {todos.map(todo=>(
           <ListItem key={todo.id}
            alignItems='flex-start'
            button
            dense='bool'>
               <ListItemText className='list_item' >
                  {todo.label}
               </ListItemText>
               <DeleteRoundedIcon onClick={()=>dispatch(deleteTodo(todo.id))} className='delete_btn'/>
           </ListItem>
        ))}
     </List>
       );
    };

        
export default TodoList;

       