import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from '@/components/pages/home-page'
import TestPage from '@/components/pages/test-page'
import NavbarLayout from '@/components/layouts/navbar-layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test/:id" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
