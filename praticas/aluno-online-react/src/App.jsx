import { Routes, Route } from 'react-router';
import Layout from "./layouts/Layout";
import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import Notas from './pages/Notas';
import Login from "./pages/Login"


function App() {
    return <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="faltas" element={<Faltas />} />
          <Route path="boletos" element={<Boletos />} />
          <Route path="requerimentos" element={<Requerimentos />} />
          <Route path="notas" element={<Notas />} />
        </Route>

        <Route path="/login" element={<Login />} />

      </Routes>
}

export default App;