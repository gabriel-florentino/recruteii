import AppRoutes from './routes/AppRoutes'
import Header from './layouts/Header'

import React, { Suspense } from 'react';

const Footer = React.lazy(() => import('./layouts/Footer'));

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Suspense fallback={<div>Carregando rodapé...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App
