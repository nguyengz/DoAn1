import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'proSilce',
    initialState: {
        addProduct: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        addProductStart: (state) => {
            state.addProduct.isFetching = true;
        },
        addProductSuccess: (state, action) => {
            state.addProduct.isFetching = false;
            state.addProduct.error = false;
            state.addProduct.success = true;
        },
        addProductFailed: (state) => {
            state.addProduct.isFetching = false;
            state.addProduct.error = true;
        }
    }
});

export const { addProductStart, addProductSuccess, addProductFailed } = productSlice.actions;

export default productSlice.reducer;
