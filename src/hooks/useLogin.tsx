import { useMemo, useRef, useState } from 'react'
// import { authService } from '../service'
// import { useDispatch, useStore, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
// import { setUser, reset } from '../store/user'

export const useLogin = () => {
  const navigate = useNavigate()
  const [user, setUSer] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  // const {
  //   login,
  //   getToken,
  //   removeToken
  // } = useMemo(() => authService, [])
  const messages = useRef(null)
  // const dispatch = useDispatch()
  // const store = useStore()
  // const userSelector = useSelector(store => store.user)

  const handleSubmit = async () => {
    // e.preventDefault()
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

  const validToken = async () => {
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
  }

  const getUser = () => {
    // const {
    //   entity: {
    //     token,
    //     ...result
    //   }
    // } = userSelector
    // return result
    return ''
  }

  const logout = () => {
    // removeToken()
    // dispatch(reset)
  }

  return {
    user,
    setUSer,
    handleSubmit,
    messages,
    loading,
    validToken,
    getUser,
    logout
  }
}
