
const Contacts = () => {
    return (
        <div className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h1 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Свяжитесь с нами</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                    Готовы обсудить ваш проект? Заполните форму ниже, и мы свяжемся с вами.
                </p>
            </div>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '24px' }}>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Отправить запрос</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Ваше имя</label>
                            <input type="text" placeholder="Иван Иванов" style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                fontSize: '1rem'
                            }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input type="email" placeholder="ivan@example.com" style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                fontSize: '1rem'
                            }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Сообщение</label>
                            <textarea rows={4} placeholder="Расскажите о вашем проекте..." style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                fontSize: '1rem',
                                resize: 'vertical'
                            }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
