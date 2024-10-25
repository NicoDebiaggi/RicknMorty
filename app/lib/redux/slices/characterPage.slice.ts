import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CharacterPageState } from '@/app/lib/models'

const characterPageInitialState: CharacterPageState = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
    current: 1
  },
  results: []
}

export const characterPageSlice = createSlice({
  name: 'characterPageSlice',
  initialState: characterPageInitialState,
  reducers: {
    setResults: (_state, action: PayloadAction<CharacterPageState>) => {
      return action.payload
    },
    clearResults: () => {
      return characterPageInitialState
    }
  }
})

export const { setResults, clearResults } = characterPageSlice.actions
export const characterPageReducer = characterPageSlice.reducer
