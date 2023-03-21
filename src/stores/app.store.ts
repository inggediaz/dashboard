import { type StateCreator } from 'zustand'

export interface AppSlice {
  collapse: boolean
  toggle: () => void
}

export const createAppSlice: StateCreator<AppSlice> = set => ({
  collapse: true,
  toggle: () => {
    set(state => ({ collapse: !state.collapse }))
  }
})
