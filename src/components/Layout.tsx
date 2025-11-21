
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Code2, Mail } from 'lucide-react';

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, paddingTop: '80px' }}>
                <Outlet />
            </main>
            <footer style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '4rem 2rem', marginTop: 'auto' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                                <Code2 size={32} />
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Antigravity</span>
                            </div>
                            <p style={{ color: '#999', lineHeight: '1.6' }}>
                                Мы создаем цифровые продукты, которые меняют правила игры. Ваш успех — наша гравитация.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Навигация</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li><Link to="/" style={{ color: '#999', textDecoration: 'none' }}>Главная</Link></li>
                                <li><Link to="/about" style={{ color: '#999', textDecoration: 'none' }}>О нас</Link></li>
                                <li><Link to="/services" style={{ color: '#999', textDecoration: 'none' }}>Услуги</Link></li>
                                <li><Link to="/pricing" style={{ color: '#999', textDecoration: 'none' }}>Тарифы</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Контакты</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#999' }}>
                                    <Mail size={18} />
                                    hello@antigravity.agency
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: '#666', fontSize: '0.9rem' }}>
                        <div>© 2025 Antigravity Digital Agency. All rights reserved.</div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Link to="/impressum" style={{ color: '#666', textDecoration: 'none' }}>Impressum</Link>
                            <Link to="/datenschutz" style={{ color: '#666', textDecoration: 'none' }}>Datenschutz</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
