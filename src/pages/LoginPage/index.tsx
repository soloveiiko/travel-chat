import FormContainer from '../../components/styled/FormContainer'
import PageContainer from '../../components/styled/PageContainer'
import SignIn from '../../components/auth/SignIn'

const LoginPage = () => {
  return (
    <PageContainer>
      <FormContainer>
        <h1 className="text-center">Login page</h1>
        <SignIn />
      </FormContainer>
    </PageContainer>
  )
}

export default LoginPage
