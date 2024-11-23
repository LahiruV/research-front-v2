import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainBaseLayout, RegLogLayout } from '@zenra/layouts';
import { Amount, Home, Login, Register } from '@zenra/pages';
import './css/main.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const renderMainBaseLayout = (showSidebar: boolean, Component: React.FC) => (
    <MainBaseLayout showSidebar={showSidebar}>
      <Component />
    </MainBaseLayout>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RegLogLayout>
                <Login />
              </RegLogLayout>
            }
          />
          <Route
            path="/register"
            element={
              <RegLogLayout>
                <Register />
              </RegLogLayout>
            }
          />
          <Route path="/home" element={renderMainBaseLayout(true, Home)} />
          <Route path="/amount-predict" element={renderMainBaseLayout(true, Amount)} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;