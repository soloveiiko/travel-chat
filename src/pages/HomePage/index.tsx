import PageContainer from '../../components/styled/PageContainer'
const pic = require('../../assets/travel.png')

const HomePage = () => {
  return (
    <PageContainer>
      <img src={pic} alt="pic" />
    </PageContainer>
  )
}

export default HomePage
