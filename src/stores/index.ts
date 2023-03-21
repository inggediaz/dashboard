import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { createUserSlice, type UserSlice } from './user.store'
import { createAppSlice, type AppSlice } from './app.store'

export const useBoundStore = create<UserSlice & AppSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createUserSlice(...a),
        ...createAppSlice(...a)
      }),
      {
        name: 'assetStore',
        version: 1,
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)
