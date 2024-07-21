import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit';
import user from '../reducers/userSlice'
import {persistStore, persistReducer} from 'redux-persist';



const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    userState: user,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

const persistor = persistStore(store);

export {store, persistor};