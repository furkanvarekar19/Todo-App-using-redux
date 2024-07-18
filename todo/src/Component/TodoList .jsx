import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addtodo,removetodo} from '../action/action'

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
         <div className='list'>
        <ul>
        {todos.map((todo, index) => (
          <div className='list-item'>
          <li key={index}> 
           {todo} 
           <button className='remove' onClick={() => dispatch(removetodo(index))}><i class="fa-solid fa-trash"></i></button> 
          
          </li>
          </div>
        ))}
        
        </ul>
       </div> 
    </div>
  )
}

export default TodoList 