import {
  type MutableRefObject,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
  type FormEvent
} from 'react'
// import { authService } from '../service'
import { useNavigate } from 'react-router-dom'

// import { setUser, reset } from '../store/user'
interface User {
  username: string
  password: string
}

interface IUseLogin {
  user: User
  setUser: Dispatch<SetStateAction<User>>
  handleSubmit: (e: FormEvent) => void
  messages: MutableRefObject<null>
  loading: boolean
}

export const useLogin = (): IUseLogin => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>({
    username: '',
    password: ''
  })

  const [loading, setLoading] = useState<boolean>(false)
  // const {
  //   login,
  //   getToken,
  //   removeToken
  // } = useMemo(() => authService, [])
  const messages = useRef(null)
  // const dispatch = useDispatch()
  // const store = useStore()
  // const userSelector = useSelector(store => store.user)

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    setLoading(true)
    navigate('/dashboard')
    // try {
    //   const result = await login(user)
    //   // dispatch(setUser(result))
    //   navigate('/')
    //   setLoading(false)
    // } catch (e) {
    //   setLoading(false)
    //   console.log(e.toString())
    //   messages.current.show({
    //     life: 3000,
    //     severity: 'error',
    //     detail: e.toString()
    //   })
    // }
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
