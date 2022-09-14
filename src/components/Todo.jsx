import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { TiEdit } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if(edit.id){
    return <TodoForm edit = {edit} onSubmit = {submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));

  // (
  //   <div className="todo-container" key={props.obj.id}>
  //     <h3 className="todo-text">{props.obj.text}</h3>
  //     <div className="buttons">
  //       <button>hh</button>
  //       <button>hhh</button>
  //     </div>
  //   </div>
  // );
};

export default Todo;
