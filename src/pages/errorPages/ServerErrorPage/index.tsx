import React from 'react'
import ErrorStatusContainer from '../../../components/styled/ErrorPageContainer/ErrorStatusContainer'
import ErrorTextContainer from '../../../components/styled/ErrorPageContainer/ErrorTextContainer'
import ErrorPageContainer from '../../../components/styled/ErrorPageContainer'

const ServerErrorPage: React.FC = () => {
  return (
    <ErrorPageContainer>
      <ErrorStatusContainer>500 Error</ErrorStatusContainer>
      <ErrorTextContainer>Internal Server Error</ErrorTextContainer>
    </ErrorPageContainer>
  )
}

export default ServerErrorPage
