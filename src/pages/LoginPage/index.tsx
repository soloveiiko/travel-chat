import FormContainer from '../../components/styled/FormContainer'
import PageContainer from '../../components/styled/PageContainer'
import SignIn from '../../components/auth/SignIn'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getErrorSelector } from '../../redux/auth/selectors'
import ErrorNotification from '../../components/styled/ErrorNotification'
import { clearErrorAction } from '../../redux/auth/action'

const LoginPage = () => {
  const error = useSelector(getErrorSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearErrorAction())
  }, [dispatch])
  return (
    <PageContainer>
      {error ? <ErrorNotification>{error}</ErrorNotification> : null}
      <FormContainer>
        <h1 className="text-center">Login page</h1>
        <SignIn />
      </FormContainer>
    </PageContainer>
  )
}

export default LoginPage
