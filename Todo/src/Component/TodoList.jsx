import React from 'react';

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='delete'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }} ></i>
        </span>
    </li>
  )
}

export default Todolist