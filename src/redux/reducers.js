import{createSlice} from "@reduxjs/toolkit";

const initialState = {
    toggle: false
}


const reducerc = createSlice({
    name: "reducer",
    initialState, 
    reducers: {
        Toggle: state => {state.toggle = !state.toggle}
    }
})

export const {Toggle} = reducerc.actions;
export default reducerc.reducer