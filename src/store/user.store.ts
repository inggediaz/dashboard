import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

interface UserStore {
  username: string
  token: string
  add: () => void
}

export const useMenuStore = create<UserStore>()(
  devtools(
    persist(
      set => ({
        username: '',
        token: '',
        add: () => {
          set(state => ({ username: state.username, token: state.token }))
        }
      }),
      {
        name: 'assetStore',
        version: 1,
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)
