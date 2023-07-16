import React from 'react'
import ErrorPageContainer from '../../../components/styled/ErrorPageContainer'
import ErrorStatusContainer from '../../../components/styled/ErrorPageContainer/ErrorStatusContainer'
import ErrorTextContainer from '../../../components/styled/ErrorPageContainer/ErrorTextContainer'

const NotFoundPage: React.FC = () => {
  return (
    <ErrorPageContainer>
      <ErrorStatusContainer>404 Error</ErrorStatusContainer>
      <ErrorTextContainer>Page Not Found</ErrorTextContainer>
    </ErrorPageContainer>
  )
}

export default NotFoundPage
