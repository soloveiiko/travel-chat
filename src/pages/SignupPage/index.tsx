import Signup from '../../components/auth/SignUp'
import PageContainer from '../../components/styled/PageContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getErrorSelector } from '../../redux/auth/selectors'
import React, { useEffect } from 'react'
import ErrorNotification from '../../components/styled/ErrorNotification'
import { clearErrorAction } from '../../redux/auth/action'

const SignUpPage = () => {
  const error = useSelector(getErrorSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearErrorAction())
  }, [dispatch])
  return (
    <PageContainer>
      {error ? <ErrorNotification>{error}</ErrorNotification> : null}
      <h1 className="text-center">Sign Up page</h1>
      <Signup />
    </PageContainer>
  )
}

export default SignUpPage
