import { Routes, Route } from 'react-router';
import Layout from "./layouts/Layout";
import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Erro404 from "./pages/Erro";
import Requerimentos from './pages/Requerimentos';
import Notas from './pages/Notas';
import Login from "./pages/Login"
import { useAuth } from './contexts/AuthContext';


function App() {
    const {logado} = useAuth();

    return (
    <Routes>
      {logado ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="faltas" element={<Faltas />} />
          <Route path="boletos" element={<Boletos />} />
          <Route path="requerimentos" element={<Requerimentos />} />
          <Route path="notas" element={<Notas />} />
        </Route>

        ) : (

        <Route path="/login" element={<Login />} />

        )}

        <Route path="*" element={<Erro404 />} />

      </Routes>
    );
}

export default App;