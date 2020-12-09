import React from 'react';
import TodoInput from './Components/TodoInput';
 import TodoList from './Components/TodoList';

const App=()=>{

    return (
        <div className='main_div'>
            <div className="center_div">
                <br/>
                <TodoInput/>
                <br/>
                <TodoList/>

            </div>
              </div>
    );
}

export default App;