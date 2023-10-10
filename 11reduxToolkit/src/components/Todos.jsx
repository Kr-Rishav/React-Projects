import React from "react";
import { useSelector, useDispatch } from "react-redux";
// for DELETE option
import { removeTodo } from "../Features/todo/todoSlice";




function Todos() {
  // syntax
  const todos = useSelector((state) => state.todos);
  console.log("Todos hai ye:- ", todos);

  return (
    <>
      <div className="mt-5 border rounded">Todos  List</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
           </li>
        ))}
      </ul>
    </>
  );
}
export default Todos;
