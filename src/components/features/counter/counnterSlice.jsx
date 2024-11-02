import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks:[],
}

export const counterSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
   addTask: (state, {payload}) =>{
    state.tasks.push(payload);
   }
  },
})

// Action creators are generated for each case reducer function
export const { addTask } = counterSlice.actions

export default counterSlice.reducer