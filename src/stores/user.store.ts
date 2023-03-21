import { type StateCreator } from 'zustand'
import type { User } from '../models/user.model'

export interface UserSlice {
  user: User
  addUser: (user: User) => void
  resetUser: () => void
}
// const resetters: (() => void)[] = []
const initialUserState = { user: { username: '', token: '' } }

export const createUserSlice: StateCreator<UserSlice> = set => ({
  ...initialUserState,
  addUser: ({ username, token }: User) => {
    set(() => ({ user: { username, token } }))
  },
  resetUser: () => {
    set(initialUserState)
  }
})
