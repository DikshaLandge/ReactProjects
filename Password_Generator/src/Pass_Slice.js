import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   updated_Str:"",
    final:[],
  }

  export const Pass_Slice=createSlice({
   
    name: 'password',
  initialState,
  reducers: {
    generate_pass:(state,action)=>{
      let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let small="abcdefghijklmnopqrstuvwxyz";
      let splchar="!@#$%^&*";
      let numbers="0123456789";
      



      let arr1 = cap.split("");
    console.log(arr1);
    let arr2=small.split("");
    console.log(arr2);
    let arr3=splchar.split("");
    console.log(arr3);
    let arr4=numbers.split("");
    console.log(arr4);

    let capital;
  //  let r=2;
      let r=Math.floor((Math.random())* 26);
      console.log(r);
        capital=arr1[r];
        console.log(capital);
      state.final.push(capital);
      // console.log(capital);
     let s;
    for(let i=0;i<4;i++){
      let r=Math.floor((Math.random())* 26);
      s=arr2[r];
      state.final.push(s);
      console.log(state.final);
    }
let s_char;

let randomval=Math.floor(Math.random()*8);
s_char=arr3[randomval];
console.log(s_char);
state.final.push(s_char);
console.log(state.final);


let num;
for(let i=0;i<2;i++){
  let r_val=Math.floor(Math.random()*10);
  num=arr4[r_val];
  console.log(num);
  state.final.push(num);
  console.log(state.final);
}

    // if(action.payload==2){
    //   state.final=[];
    // }
  
    }
   
  }

  });

  export const { generate_pass } = Pass_Slice.actions;
  export default Pass_Slice.reducer;
  