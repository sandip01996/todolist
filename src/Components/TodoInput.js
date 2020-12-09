import React,{useState} from 'react';

import Button from '@material-ui/core/Button';

import { addTodo} from '../actions';
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@material-ui/icons/Add';

const TodoInput=()=>{
  const [text,setText]=useState('');
  
  

    const dispatch=useDispatch();
  
   const todos=useSelector(state=>state.todos);
    

   

   
      const handelTodo=()=>{
       
          dispatch(addTodo(text));
          setText('');
          

         
       
     }
     console.log(todos);
    return (
       <React.Fragment>
         <h1>TODO LIST</h1>
         <br/>
         <input value={text}
         name='input'
         type='text'
         placeholder='Add an Items'
         onChange={(e)=>setText(e.target.value)} >
         </input>
         
         <Button className='new_btn'
          onClick={handelTodo}>
           <AddIcon />
         </Button>
       </React.Fragment>
    );
}

export default TodoInput;