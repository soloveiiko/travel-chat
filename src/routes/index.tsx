import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsAuthSelector } from '../redux/auth/selectors'
import ProtectedRoute from './ProtectedRoute'
import ProfilePage from '../pages/ProfilePage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DesignElements from '../pages/DesignElements'
import SignupPage from '../pages/SignupPage'
import NotFoundPage from '../pages/errorPages/NotFoundPage'
import NoAccessPage from '../pages/errorPages/NoAccessPage'
import ServerErrorPage from '../pages/errorPages/ServerErrorPage'
import ProfileSettingsPage from '../pages/ProfilePage/ProfileSettingsPage'
import PersonalChatSettingsPage from '../pages/ProfilePage/ProfileSettingsPage/PersonalChatSettingsPage'
import PublicProfilePage from '../pages/ProfilePage/PublicProfilePage'
import HelpCenterPage from '../pages/HelpCenterPage'
import AboutUsPage from '../pages/AboutUsPage'
import ProfileLayout from '../layout/ProfileLayout'

const AppRoutes = () => {
  const isAuth = useSelector(getIsAuthSelector)
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="settings">
            <Route index element={<ProfileSettingsPage />} />
            <Route path="chat" element={<PersonalChatSettingsPage />} />
          </Route>
          <Route path="public" element={<PublicProfilePage />} />
        </Route>
      </Route>
      <Route path="/helpcenter" element={<HelpCenterPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/403" element={<NoAccessPage />} />
      <Route path="/500" element={<ServerErrorPage />} />
      <Route path="/design" element={<DesignElements />} />
    </Routes>
  )
}

export default AppRoutes
