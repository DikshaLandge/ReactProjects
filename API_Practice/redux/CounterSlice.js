import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  multiple:1,
  bgcolor:true,
 
}




export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.value += 1
    },
    
    decrement:(state)=>{
        state.value -=1
    },

    multiply:(state)=>{
        state.multiple= state.value*2
    },

    changeColor:(state)=>{
        if(state.bgcolor==true){
            state.bgcolor=false
        }
        else if(state.bgcolor==false){
            state.bgcolor=true
        }
  }
   

    }
  },
)

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions
export const {decrement} =counterSlice.actions
export const {multiply} =counterSlice.actions
export const {changeColor} =counterSlice.actions

export default counterSlice.reducer