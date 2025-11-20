
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <footer style={{ backgroundColor: '#111', color: '#fff', padding: '3rem 0', marginTop: 'auto' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Antigravity</h3>
                            <p style={{ color: '#999' }}>Создаем цифровое будущее для вашего бизнеса.</p>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem' }}>Контакты</h4>
                            <p style={{ color: '#999', marginBottom: '0.5rem' }}>hello@antigravity.dev</p>
                            <p style={{ color: '#999' }}>+7 (999) 000-00-00</p>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem' }}>Адрес</h4>
                            <p style={{ color: '#999' }}>Киев, ул. Крещатик, 1</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #333', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: '#666' }}>
                        © {new Date().getFullYear()} Antigravity. Все права защищены.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
