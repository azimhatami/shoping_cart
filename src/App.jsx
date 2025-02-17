import { Routes, Route, Navigate } from "react-router";

import ProductsPage from './pages/ProductsPage';
import DetailsPage from './pages/DetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsProvider from './context/ProductContext';

import './App.css'

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route index element={<Navigate to='/products' replace />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<DetailsPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </ProductsProvider>
  )
}

export default App
