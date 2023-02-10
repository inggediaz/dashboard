import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

interface UseMenu {
  collapse: boolean
  toggle: () => void
}

export const useMenuStore = create<UseMenu>()(
  devtools(
    persist(
      (set) => ({
        collapse: true,
        toggle: () => set(state => ({ collapse: !state.collapse }))
      }),
      {
        name: 'assetStore',
        version: 1,
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)
