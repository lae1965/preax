import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const API_URL = import.meta.env.VITE_API_URL

export interface Theme {
  id: number
  name: string
  background: {
    light: string
    dark: string
  }
  quizzes: []
}

type ThemeState = {
  themes: Theme[]
  selectedThemes: [Theme | null, Theme | null, Theme | null]
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState: ThemeState = {
  themes: [],
  selectedThemes: [null, null, null],
  status: 'idle',
  error: null
}

export const getThemes = createAsyncThunk<Theme[], void, { rejectValue: string }>(
  'themes',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}/3-quiz/themes`)

      if (!res.ok) {
        throw new Error('Ошибка соединения.')
      }

      const data: Theme[] = await res.json()
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue('Неизвестная ошибка')
      }
    }
  }
)

const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    reset: () => initialState,
    select: (state, action) => {
      if (state.selectedThemes.filter(Boolean).length < 3) {
        const index = state.selectedThemes.findIndex(theme => !theme)
        state.selectedThemes[index] = action.payload
      }
    },
    deselect: (state, action) => {
      const index = state.selectedThemes.findIndex(theme => theme?.id === action.payload.id)
      if (index !== -1) {
        state.selectedThemes[index] = null
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getThemes.pending, state => {
        state.status = 'loading'
      })
      .addCase(getThemes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
      .addCase(getThemes.fulfilled, (state, action) => {
        state.status = 'idle'
        state.themes = action.payload
      })
  }
})

export default themesSlice.reducer
export const { select, deselect, reset } = themesSlice.actions
