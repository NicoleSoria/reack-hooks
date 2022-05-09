import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { Navbar } from './Navbar';


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <div className='container'>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/about" element={<AboutScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route path='*' element={<Navigate replace to='/' />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}
