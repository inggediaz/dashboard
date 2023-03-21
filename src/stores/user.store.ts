import { type StateCreator } from 'zustand'
import type { User } from '../models/user.model'

export interface UserSlice {
  username: string
  token: string
  addUser: (user: User) => void
  resetUser: () => void
}
// const resetters: (() => void)[] = []
const initialUserState = { username: '', token: '' }

export const createUserSlice: StateCreator<UserSlice> = set => ({
  ...initialUserState,
  addUser: ({ username, token }: User) => {
    set(() => ({ username, token }))
  },
  resetUser: () => {
    set(initialUserState)
  }
})
