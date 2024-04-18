
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute >
              <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}

export default App
