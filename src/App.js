import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './screens/LandingPage';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App = () => {
	return (
		<div>
			<BrowserRouter>
      <Routes>
	  <Route path="/"element={<LandingPage />} exact></Route>
    
      <Route path="/login" element={<Login />} exact></Route>
      <Route path="/register" element={<Register />} exact></Route>
      <Route path="/dashboard" element={<Dashboard />} exact></Route>
         
				
        </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App