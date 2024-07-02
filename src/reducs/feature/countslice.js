import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0

}
export const countSlice = createSlice({
  name: "counter", // counter is name for reducer
  initialState, // initialState is = (state=initialState)
  reducers:{//in reducer have any action alot of
    //name action
    increment:(state)=>{
        state.value += 1;
    },
    decrement:(state)=>{
        state.value -= 1;
    },
    //payload store state and action
    incrementAmount:(state,action)=>{
        state.value +=action.payload;
    }

  }
});
export const {increment,decrement,incrementAmount} =countSlice.actions//all the action is out countSlice all

//export reducer to out
export  default countSlice.reducer

export const seleteValue= state=>state.counter.value;