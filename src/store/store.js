import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './movies.reducer';

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware({serializableCheck: false})],
        preloadedState,
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./movies.reducer', () => store.replaceReducer(rootReducer))
    }

    return store;
}
