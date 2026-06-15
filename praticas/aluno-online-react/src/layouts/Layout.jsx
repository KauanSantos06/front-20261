
import { Outlet } from 'react-router';
import Menu from '../components/Menu';

function Layout() {
    return (  
        <>
            <aside>
                <Menu />
            </aside>
            <main>{/* Minhas páginas */}
                <Outlet /> {/* traz as paginas */}
            </main>
        </>
    );
}

export default Layout;