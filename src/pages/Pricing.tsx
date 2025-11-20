
import { Check, Star } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Старт',
            price: 'от $1000',
            description: 'Идеально для малого бизнеса и стартапов',
            features: ['Лендинг пейдж (до 5 блоков)', 'Адаптивный дизайн', 'Базовая SEO оптимизация', 'Домен и хостинг на 1 год', '1 месяц поддержки']
        },
        {
            name: 'Бизнес',
            price: 'от $2500',
            description: 'Комплексное решение для роста компании',
            features: ['Корпоративный сайт (до 15 стр.)', 'Уникальный UI/UX дизайн', 'CMS (WordPress/Laravel)', 'Расширенная SEO стратегия', 'Интеграция с CRM', '3 месяца поддержки'],
            featured: true
        },
        {
            name: 'E-Commerce',
            price: 'от $5000',
            description: 'Мощный инструмент для онлайн-продаж',
            features: ['Интернет-магазин "под ключ"', 'Личный кабинет пользователя', 'Интеграция платежных систем', 'Синхронизация с 1С/складом', 'PWA приложение', '6 месяцев поддержки']
        }
    ];

    return (
        <div className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h1 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Прозрачные Тарифы</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                    Инвестируйте в результат. Мы предлагаем гибкие пакеты услуг, которые окупаются.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                {plans.map((plan, index) => (
                    <div key={index} style={{
                        padding: '3rem 2rem',
                        borderRadius: '24px',
                        backgroundColor: plan.featured ? 'var(--primary)' : 'var(--surface)',
                        color: plan.featured ? 'white' : 'var(--text)',
                        position: 'relative',
                        transform: plan.featured ? 'scale(1.05)' : 'none',
                        boxShadow: plan.featured ? '0 20px 60px rgba(98, 0, 234, 0.3)' : 'none',
                        zIndex: plan.featured ? 2 : 1
                    }}>
                        {plan.featured && (
                            <div style={{
                                position: 'absolute',
                                top: '-15px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'var(--secondary)',
                                color: 'var(--text)',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '20px',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Star size={16} fill="currentColor" /> ХИТ ПРОДАЖ
                            </div>
                        )}

                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.75rem' }}>{plan.name}</h3>
                        <p style={{ marginBottom: '2rem', opacity: 0.8 }}>{plan.description}</p>

                        <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2.5rem', color: plan.featured ? 'var(--secondary)' : 'var(--primary)' }}>
                            {plan.price}
                        </div>

                        <ul style={{ listStyle: 'none', marginBottom: '3rem' }}>
                            {plan.features.map((feature, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'start', marginBottom: '1.25rem', gap: '1rem', fontSize: '1.05rem' }}>
                                    <Check size={20} color={plan.featured ? 'var(--secondary)' : 'var(--primary)'} style={{ marginTop: '3px', flexShrink: 0 }} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="btn" style={{
                            width: '100%',
                            padding: '1.25rem',
                            fontSize: '1.1rem',
                            backgroundColor: plan.featured ? 'var(--secondary)' : 'var(--primary)',
                            color: plan.featured ? 'var(--text)' : 'white',
                            border: plan.featured ? 'none' : '2px solid var(--primary)'
                        }}>
                            Заказать пакет
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
