// import PageContainer from '../../components/styled/PageContainer'
const map = require('../../assets/mapline.png')

const mapStyle = {
  backgroundImage: `url(${map})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  // backgroundSize: 'contain',
  height: '736px',
}

const HomePage = () => {
  return (
    <div>
      <div style={mapStyle}>
        <div className="relative top-[50%] mx-3 my-auto translate-y-[-50%] md:mx-0">
          <h1 className=" text-left text-[3.2rem] md:text-center md:text-7xl">
            Where traveller meets conversation
          </h1>
          <h1 className="mt-11 text-left text-xl md:text-center">
            Organize trips, communicate with other travelers and access
            real-time recommendations to enhance your travel experience.
          </h1>
          <div className="mx-auto mt-11 flex max-w-sm flex-row gap-3">
            <button className="btn btn-primary grow">SignIn</button>
            <button className="btn btn-white grow text-blue-800">
              Discover
            </button>
          </div>
        </div>
      </div>
      <h1>Hello</h1>
    </div>
  )
}

export default HomePage
