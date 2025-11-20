
import { ArrowRight, CheckCircle, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: '8rem 0 6rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ marginBottom: '1.5rem', fontSize: '3.5rem', lineHeight: '1.1' }}>
                        Ваш бизнес <span style={{ color: 'var(--secondary)' }}>взлетит</span><br />с нашими решениями
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9, lineHeight: '1.6' }}>
                        Antigravity — это digital-агентство полного цикла в Киеве. Мы не просто создаем сайты и приложения,
                        мы строим цифровые экосистемы, которые приносят прибыль и оставляют конкурентов позади.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contacts" className="btn" style={{ backgroundColor: 'var(--secondary)', color: 'var(--text)', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Обсудить проект <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <Link to="/services" className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Наши кейсы
                        </Link>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,214,0,0.2) 0%, rgba(98,0,234,0) 70%)' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(98,0,234,0) 70%)' }}></div>
            </section>

            {/* Advantages Section */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--background)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Почему выбирают нас?</h2>
                        <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                            Мы объединяем креатив, технологии и маркетинг для достижения ваших бизнес-целей.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '16px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Zap size={40} /></div>
                            <h3 style={{ marginBottom: '1rem' }}>Скорость и Качество</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Используем передовые технологии (React, Node.js), чтобы ваши продукты работали молниеносно и без сбоев.
                            </p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '16px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><TrendingUp size={40} /></div>
                            <h3 style={{ marginBottom: '1rem' }}>Рост Продаж</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Наши дизайны и стратегии ориентированы на конверсию. Мы превращаем посетителей в лояльных клиентов.
                            </p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '16px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><CheckCircle size={40} /></div>
                            <h3 style={{ marginBottom: '1rem' }}>Комплексный Подход</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                От идеи до запуска и поддержки. Вам не нужно искать разных подрядчиков — мы берем все на себя.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
