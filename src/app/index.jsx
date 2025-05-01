import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Auth from './auth/auth.jsx'
import '../styles/index.css'
import App from './App.jsx'
import '../styles/App.css'
import { useState } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);