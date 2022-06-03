import { createSlice } from '@reduxjs/toolkit'
import { filteredProducts,  loadCategories, loadProducts } from './product.action';
const initialState = {
  categories : [],
  filteredProducts : [],
  status : "idle"
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      clearproductError: (state) => {
        state.error = '';
      },
    },

    extraReducers : (builder)=>{
        builder.addCase( loadCategories.pending,(state)=>{
                state.status = 'pending'
        });

        builder.addCase( loadCategories.fulfilled,(state,{payload})=>{
                state.status = "resolved";
                state.categories = payload
        })

        builder.addCase( loadCategories.rejected, (state,{payload})=>{
                state.status ="rejected";
                
        })

        builder.addCase(filteredProducts.pending,(state)=>{
          state.status = 'pending'
        });

        builder.addCase(filteredProducts.fulfilled,(state,{payload})=>{
                state.status = "resolved";
                state.filteredProducts = payload
        })

        builder.addCase(filteredProducts.rejected, (state)=>{
                state.status ="rejected";
                
        })

        builder.addCase(loadProducts.pending,(state)=>{
                state.status = 'pending'
              });
      
              builder.addCase(loadProducts.fulfilled,(state,{payload})=>{
                      state.status = "resolved";
                      state.filteredProducts = payload
              })
      
              builder.addCase(loadProducts.rejected, (state)=>{
                      state.status ="rejected";
                      
              })
    }
})

// Action creators are generated for each case reducer function
export const { clearproductError  } = productSlice.actions

export default productSlice.reducer