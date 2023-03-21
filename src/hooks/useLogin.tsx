import {
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
  type FormEvent,
  useMemo,
  type RefObject
} from 'react'
import { AuthService } from '../services/auth/AuthService'
import { useNavigate } from 'react-router-dom'
import { type Messages } from 'primereact/messages'
// import { useMenuStore } from '../stores/user.store'
import { useBoundStore } from '../stores'

// import { setUser, reset } from '../store/user'
interface User {
  username: string
  password: string
}

interface IUseLogin {
  user: User
  setUser: Dispatch<SetStateAction<User>>
  handleSubmit: (e: FormEvent) => Promise<void>
  messages: RefObject<Messages>
  loading: boolean
}

export const useLogin = (): IUseLogin => {
  const navigate = useNavigate()
  const addUserStore = useBoundStore(state => state.addUser)
  const [user, setUser] = useState<User>({
    username: '',
    password: ''
  })

  const [loading, setLoading] = useState<boolean>(false)
  const { login } = useMemo(() => new AuthService(), [])
  const messages = useRef<Messages>(null)

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setLoading(true)

    try {
      const { username, token } = await login(user)
      addUserStore({ username, token })

      navigate('/dashboard')
      setLoading(false)
    } catch (e) {
      setLoading(false)
      messages.current?.show({
        life: 3000,
        severity: 'error',
        detail: e?.toString()
      })
    }
  }

  // const validToken = async () => {
  // const { user } = store.getState()
  // const { entity: { userId } } = user
  // try {
  //   const result = await getToken({ user })
  //   if (userId === 0 && !!result) {
  //     dispatch(setUser(result))
  //   }
  // } catch (e) {
  //   console.log(e)
  //   throw new Error(e)
  // }
  // }

  // const logout = () => {
  // removeToken()
  // dispatch(reset)
  // }

  return {
    user,
    setUser,
    handleSubmit,
    messages,
    loading
    // validToken
    // getUser,
    // logout
  }
}
