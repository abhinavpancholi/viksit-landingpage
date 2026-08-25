import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DepartmentsPage from './pages/DepartmentsPage'

export default function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
