import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initiall State
const initialState = {
  todos: [{ id: 1, text: "Hello Moto" }],
};  

// Create Slice & Assign the Reducers
export const todoSlice = createSlice({   //we need 3 things to create Slide 
  //  (1)name (2)initialState (3)reducers
  name: "todo",
  initialState,
  reducers: {
    // 1st Method
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      // Update State
      state.todos.push(todo);
    },

    // 2nd Method
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // console.log("State Value:- ",state);
    },


  },
});

// Export  --  2 steps:-
// (1. export functionality indidualy for Components like this:-)
// (2. export for store file Or Register Reducers in store.js)

// 1. Export Functionality indiduals  (it will use in our components)
export const { addTodo, removeTodo } = todoSlice.actions;

// 2. Register all reducers in store.js
export default todoSlice.reducer;
