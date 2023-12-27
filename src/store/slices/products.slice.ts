import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { url } from "../../Utils/getConfig";
import { InitialState, Product } from "../../Interfaces/Interfaces";
import { AppDispatch } from "..";

export const productsSlice = createSlice(
    {
        name: 'counter',
        initialState: {
            products: [],
            // productsShown: [],
            // values: [0, 99999999],
            // category: [1, 2, 3, 4],

        } as InitialState,
        reducers: {
            setProductGlobal: (state, action: PayloadAction<Product[]>) => {
                state.products = action.payload
                // state.productsShown = action.payload
            },
            // setCategory: (state, action) => {
            //     state.category = action.payload
            //     state.productsShown = state.products.filter(product => {
            //         return state.category.includes(product.category.id) && state.values[0] <= +product.price && +product.price <= state.values[1]
            //     })
            // },
            // setRangeValues: (state, action) => {
            //     state.values = action.payload
            //     state.productsShown = state.products.filter(product => {
            //         return state.category.includes(product.category.id) && action.payload[0] <= +product.price && +product.price <= action.payload[1]
            //     })
            // }
        }
    }
)

export const { setProductGlobal } = productsSlice.actions;
export default productsSlice.reducer
export const getAllProducts = (signal: AbortSignal): any => (dispatch: AppDispatch): Promise<void> => {
    return axios.get(`${url}/api/productos`, { signal })
        .then((res: AxiosResponse<any>) => {
            console.log(res)
            dispatch(setProductGlobal(res.data))
        })
        .catch(err => console.log(err))
}
