import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/rootReducer'

const ProfilePage: React.FC = () => {
  const username = useSelector((state: RootState) => state.profile.username)
  const auth = useSelector((state: RootState) => state.auth)
  return (
    <div>
      <h1 className="text-center">Profile page</h1>
      <h2>{username}</h2>
    </div>
  )
}

export default ProfilePage
