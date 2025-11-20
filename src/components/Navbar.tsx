import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Главная', path: '/' },
        { name: 'О нас', path: '/about' },
        { name: 'Услуги', path: '/services' },
        { name: 'Тарифы', path: '/pricing' },
        { name: 'Контакты', path: '/contacts' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav style={{ backgroundColor: 'var(--background)', borderBottom: '1px solid #eee', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                        <Code2 size={32} />
                        <span>Antigravity</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{ display: 'none', gap: '2rem' }}>
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    fontWeight: 500,
                                    color: isActive(link.path) ? 'var(--primary)' : 'var(--text)',
                                    position: 'relative'
                                }}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        backgroundColor: 'var(--secondary)'
                                    }} />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'none', color: 'var(--text)' }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'var(--background)',
                    padding: '1rem 0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    borderTop: '1px solid #eee'
                }}>
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    padding: '0.5rem 0',
                                    fontWeight: 500,
                                    color: isActive(link.path) ? 'var(--primary)' : 'var(--text)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
