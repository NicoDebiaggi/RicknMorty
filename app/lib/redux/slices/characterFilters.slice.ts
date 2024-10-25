import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CharacterFiltersState {
  status: {
    value: string
    selected: boolean
  }[]
  name: string
  species: string
}

const characterFiltersInitialState: CharacterFiltersState = {
  status: [
    { value: 'Alive', selected: false },
    { value: 'Dead', selected: false },
    { value: 'Unknown', selected: false }
  ],
  name: '',
  species: ''
}

export const characterFiltersSlice = createSlice({
  name: 'characterFiltersSlice',
  initialState: characterFiltersInitialState,
  reducers: {
    setStatus: (state, action: PayloadAction<{
      value: string
      selected: boolean
    }[]>) => {
      state.status = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setSpecies: (state, action: PayloadAction<string>) => {
      state.species = action.payload
    }
  }
})

export const { setName, setStatus, setSpecies } = characterFiltersSlice.actions
export const characterFiltersReducer = characterFiltersSlice.reducer
