
import { Users, Target, Award } from 'lucide-react';

const About = () => {
    return (
        <div>
            {/* Hero */}
            <section style={{ padding: '6rem 0 4rem', backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <h1 style={{ color: 'var(--primary)', marginBottom: '2rem', fontSize: '3rem' }}>О нас</h1>
                    <p style={{ fontSize: '1.5rem', maxWidth: '800px', lineHeight: '1.6', color: 'var(--text)' }}>
                        Antigravity — это команда перфекционистов, влюбленных в код и дизайн.
                        Мы базируемся в Киеве, но мыслим глобально, создавая проекты мирового уровня.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Наша Миссия</h2>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                                Мы верим, что каждый бизнес заслуживает уникального цифрового лица. В эпоху шаблонов мы создаем индивидуальность.
                                Наша цель — не просто "сдать проект", а дать вам инструмент, который будет работать на вас 24/7.
                            </p>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
                                За 5 лет работы на рынке Украины и Европы мы реализовали более 100 проектов: от стартапов до корпоративных порталов крупных холдингов.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ padding: '2rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '16px', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--secondary)' }}>5+</div>
                                <div>Лет опыта</div>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '16px', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--primary)' }}>100+</div>
                                <div>Проектов</div>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '16px', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--primary)' }}>20+</div>
                                <div>Экспертов</div>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '16px', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--secondary)' }}>TOP</div>
                                <div>Рейтинги</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Наши Ценности</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                                <Target size={32} />
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>Результат</h3>
                            <p style={{ color: 'var(--text-light)' }}>Мы работаем на KPI и реальные показатели вашего бизнеса.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                                <Users size={32} />
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>Прозрачность</h3>
                            <p style={{ color: 'var(--text-light)' }}>Честные сметы, регулярные отчеты и постоянная связь.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                                <Award size={32} />
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>Качество</h3>
                            <p style={{ color: 'var(--text-light)' }}>Двойной контроль качества кода и дизайна перед запуском.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
