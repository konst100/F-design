import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contacts = () => {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 style={{ color: 'var(--primary)', marginBottom: '3rem', textAlign: 'center' }}>Контакты</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Contact Info */}
                <div>
                    <h2 style={{ marginBottom: '2rem' }}>Свяжитесь с нами</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '50%', color: 'var(--primary)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Email</div>
                                <div style={{ color: 'var(--text-light)' }}>hello@antigravity.dev</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '50%', color: 'var(--primary)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Телефон</div>
                                <div style={{ color: 'var(--text-light)' }}>+7 (999) 000-00-00</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '50%', color: 'var(--primary)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Офис</div>
                                <div style={{ color: 'var(--text-light)' }}>Киев, ул. Крещатик, 1</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '16px' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Ваше имя</label>
                        <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} placeholder="Иван Иванов" />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                        <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} placeholder="ivan@example.com" />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Сообщение</label>
                        <textarea rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }} placeholder="Расскажите о вашем проекте..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Отправить <Send size={18} style={{ marginLeft: '0.5rem' }} />
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;
