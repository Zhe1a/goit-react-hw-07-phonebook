import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contactsSlice";
import { filterReducers } from "./filterSliceReducer";

export const store = configureStore({
  reducer: {
    tasks: contactsSliceReducer,
    filter: filterReducers,
  },
});