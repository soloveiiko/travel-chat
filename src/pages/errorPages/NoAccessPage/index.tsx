import React from 'react'
import ErrorPageContainer from '../../../components/styled/ErrorPageContainer'
import ErrorStatusContainer from '../../../components/styled/ErrorPageContainer/ErrorStatusContainer'
import ErrorTextContainer from '../../../components/styled/ErrorPageContainer/ErrorTextContainer'

const NoAccessPage: React.FC = () => {
  return (
    <ErrorPageContainer>
      <ErrorStatusContainer>403 Error</ErrorStatusContainer>
      <ErrorTextContainer>Forbidden: Access is denied</ErrorTextContainer>
    </ErrorPageContainer>
  )
}

export default NoAccessPage
