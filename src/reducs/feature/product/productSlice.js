import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import { basURL } from './basURL';


const initialState={
    products: [],
    productById:{},
    //idle have panding fullfile rejected
    status: "idle",
    error:null
}
// export const fectProduct = createAsyncThunk("products/fectProduct",async () =>{
//         const resporn = await fectProduct(`https://store.istad.co/api/products`);
//         const data= await resporn.json()
//          console.log("sdfghjklkjhgfdsadfghjklkjhgfdsdrftgyhuj",data);
//         return await data;
       
//     }
// );
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const response = await fetch(`https://store.istad.co/api/products`);
    const data = await response.json();
    // console.log("Product data:", data.results);
    return data.results;
  }
);

//fetchProductById
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await fetch(`https://store.istad.co/api/products/${id}`);
    const data = await response.json();
    // console.log("Product data sdfghjkl;lkjhgfdsdfghjk:", data);
    return data;
  }
);
export const productSlice=createSlice({
    name:"prouct",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{// extraReducers handle action all in api update value state
        builder

          .addCase(fetchProduct.pending, (state) => {
            //pending is geting
            state.status = "loding";
          })

          .addCase(fetchProduct.fulfilled, (state, action) => {
            // success for get data in api
            state.status = "success";
            state.products = action.payload; //add product to products [] (data trasfer https store in payload)
          })
          .addCase(fetchProduct.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })

          //fectproductById

          .addCase(fetchProductById.pending, (state) => {
            //pending is geting
            state.status = "loding";
          })

          .addCase(fetchProductById.fulfilled, (state, action) => {
            // success for get data in api
            state.status = "success";
            state.productById = action.payload; //add product to products [] (data trasfer https store in payload)
          })
          .addCase(fetchProductById.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
    }
})
//export reducer
export default productSlice.reducer;
export const getallProducts = (state) => state.product.products;// product get in store name is product 

// export const seleteProductById=(state)=> state.product.productById
        

    
