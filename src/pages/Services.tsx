
import { Smartphone, Palette, Globe, LifeBuoy, Search, Megaphone } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Globe size={48} />,
            title: 'Веб-разработка',
            description: 'От лендингов до высоконагруженных порталов. Мы используем React, Next.js и Node.js для создания быстрых и безопасных сайтов.'
        },
        {
            icon: <Smartphone size={48} />,
            title: 'Мобильные приложения',
            description: 'Нативная (Swift, Kotlin) и кроссплатформенная (React Native) разработка. Ваше приложение будет в топе App Store и Google Play.'
        },
        {
            icon: <Palette size={48} />,
            title: 'UI/UX Дизайн',
            description: 'Проектируем удобные интерфейсы, которые влюбляют в себя пользователей. Глубокая аналитика и креативный подход.'
        },
        {
            icon: <Search size={48} />,
            title: 'SEO Продвижение',
            description: 'Выводим сайты в ТОП-10 Google. Комплексный аудит, внутренняя оптимизация и качественное наращивание ссылочной массы.'
        },
        {
            icon: <Megaphone size={48} />,
            title: 'Контекстная реклама',
            description: 'Настройка Google Ads и таргетинга в соцсетях. Приводим целевых клиентов уже в первый день запуска кампании.'
        },
        {
            icon: <LifeBuoy size={48} />,
            title: 'Техническая поддержка',
            description: 'Обеспечиваем стабильную работу ваших проектов 24/7. Регулярные обновления, бэкапы и защита от атак.'
        }
    ];

    return (
        <div className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Наши Услуги</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                    Мы предлагаем полный спектр digital-услуг для масштабирования вашего бизнеса.
                    Каждое решение адаптируется под специфику вашей ниши.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {services.map((service, index) => (
                    <div key={index} style={{
                        padding: '2.5rem',
                        borderRadius: '16px',
                        backgroundColor: 'var(--surface)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: '1px solid transparent'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.borderColor = 'var(--secondary)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{service.icon}</div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
