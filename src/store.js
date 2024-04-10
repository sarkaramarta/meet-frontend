import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./redux/userPhone"
export default configureStore({
    reducer:  {
        phone: phoneReducer
    }
});