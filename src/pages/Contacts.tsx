import React from 'react';
import { Mail, MessageCircle, Phone, Send, MapPin } from 'lucide-react';

const Contacts = () => {
    return (
        <div className="container" style={{ padding: '6rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                    Давайте создадим<br />
                    <span className="gradient-text">что-то уникальное</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '500px' }}>
                    Мы готовы обсудить ваш проект и предложить лучшее решение.
                    Свяжитесь с нами любым удобным способом.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                            <Mail size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Email</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>hello@antigravity.com</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Telegram</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>@antigravity_manager</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                            <Phone size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>WhatsApp</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>По запросу</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                            <MapPin size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Локация</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>Киев, Украина</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h2 style={{ marginBottom: '2rem' }}>Отправить запрос</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Ваше имя</label>
                        <input type="text" placeholder="Иван Иванов" style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backgroundColor: 'rgba(255,255,255,0.02)',
                            color: 'var(--text)',
                            fontSize: '1rem'
                        }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                        <input type="email" placeholder="ivan@example.com" style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backgroundColor: 'rgba(255,255,255,0.02)',
                            color: 'var(--text)',
                            fontSize: '1rem'
                        }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Сообщение</label>
                        <textarea rows={4} placeholder="Расскажите о вашем проекте..." style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backgroundColor: 'rgba(255,255,255,0.02)',
                            color: 'var(--text)',
                            fontSize: '1rem',
                            resize: 'vertical'
                        }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        Отправить <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
