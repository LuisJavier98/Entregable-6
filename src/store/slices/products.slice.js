import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice(
    {
        name: 'counter',
        initialState: null,
        reducers: {
            setProductGlobal: (state, action) => action.payload
        }
    }
)
export const { setProductGlobal } = productsSlice.actions;
export default productsSlice.reducer
export const getAllProducts = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL)
        .then(res => dispatch(setProductGlobal(res.data.data.products)))
        .catch(ww => console.log(err))
}
