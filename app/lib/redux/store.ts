import { configureStore } from '@reduxjs/toolkit'
import { characterFiltersReducer, characterPageReducer } from './slices'

export const makeStore = () => {
  return configureStore({
    reducer: {
      characterFilters: characterFiltersReducer,
      characterPage: characterPageReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']