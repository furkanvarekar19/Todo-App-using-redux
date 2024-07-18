import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addtodo} from '../action/action'

function TodoList () {
   const[data , setData] = useState('');
//    console.log(data);
      const dispatch = useDispatch()
      const todos = useSelector((state) => state.todos);

function Submittodo(){
        dispatch(addtodo(data))
        setData('')
    
}


  return (
    <div className='todo_main'>
        <input type="text" value={data}  onChange={(event)=> setData(event.target.value)} placeholder='Add your todo'/>
        <button onClick={Submittodo} className='add'>Add</button>

        <ul>
        {todos.map((todo, index) => (
          <li key={index}>
           {todo} 
           {/* <button className='remove'>Remove</button>  */}
          </li>
        ))}
        
        </ul>
            
    </div>
  )
}

export default TodoList 