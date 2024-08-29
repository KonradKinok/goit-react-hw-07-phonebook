import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
});

// Typy dla Dispatch i GetState
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

// // Typ stanu aplikacji, bazujący na głównym reducerze
// export type RootState = ReturnType<typeof rootReducer>;

// export const store = configureStore({
//   reducer: rootReducer,
// });

// // Typy dla Dispatch i GetState
// export type AppDispatch = typeof store.dispatch;
// export type AppGetState = typeof store.getState;