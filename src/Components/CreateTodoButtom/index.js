import React from 'react';
import './CreateTodoButtom.css';
import { TodoContext } from '../../context/TodoContext';

function CreateTodoButtom() {
  const {openModal, setOpenModal} = React.useContext(TodoContext);

  return (
    <button 
    className='CreateTodoButtom'
    onClick={()=> {
      setOpenModal(!openModal)
    }}>
      +
    </button>
  )
}

export {CreateTodoButtom}