import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './movies.reducer';

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [...getDefaultMiddleware({serializableCheck: false})]
});

export default store;
