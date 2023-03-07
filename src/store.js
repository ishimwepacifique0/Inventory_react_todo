import { configureStore } from "@reduxjs/toolkit";
import Authslice  from "./feather/authentication";

const Store = configureStore({
    reducer:{
        authstoredata: Authslice
    }
})

export default Store;