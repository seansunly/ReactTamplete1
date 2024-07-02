import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalItems: 0,
  quantity: 0,
  
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  // extraReducers not use becuse not fek api
  reducers: {
    addToCase: (state, action) => {
         state.totalItems += 1;
      // console.log("action paylaod :",action)
       state.items.push(action.payload)

      //check if product is exite
      //const productexite=state.items.some((item)=>item.id=== action.payload.id)
      const productexite = state.items.some(
        (item) => item.id === action.payload.id
      );
      //  console.log("product iteams ",item.id);
      //  console.log("iteams ", action.payload.id);

      // console.log("product aciton ",action.payload.id)
      console.log("extiting product is :",productexite)
       if(productexite){
        console.log("teate play")
         state.items.map((product)=>{
          console.log("test product in map ",product)
          if(product.id===action.payload.id){
            product.qty +=1
            console.log("hello kiki",product.qty)
          }
          // else{
          //   state.totalItems += 1;
          //   console.log("action paylaod :", action);
          //    state.items.push(action.payload);
          // }
        })
       }
       
    },
  },
});
//export
export const { addToCase } = cardSlice.actions;
//export default reducer
export default cardSlice.reducer;
export const seletetotalItems = (state) => state?.card?.totalItems;
export const seleteitems=(state)=>state?.card?.items;
