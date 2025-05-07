import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default store;
