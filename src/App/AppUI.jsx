import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { TodoLoading } from '../Components/TodoLoading';
import { TodoError } from '../Components/TodoError';
import { TodoEmpty } from '../Components/TodoEmpty';
import { CreateTodoButtom } from '../Components/CreateTodoButtom';
import { TodoForm } from '../Components/TodoForm';
import { TodoContext } from '../context/TodoContext';
import { Modal } from '../Components/Modal';
import React from 'react';


function AppUI() {
  const { loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,  
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />


      <TodoList>
        {(loading) && <TodoLoading />}
        {(error) && <TodoError />}
        {(!loading && searchedTodos.length === 0) && <TodoEmpty />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.task}
            task={todo.task}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.task)}
            onDelete={() => deleteTodo(todo.task)}
          />
        ))}
      </TodoList>

      <CreateTodoButtom />

      { (openModal) &&

      <Modal>
        <TodoForm />
      </Modal>

      }

    </>
  );
}

export { AppUI };