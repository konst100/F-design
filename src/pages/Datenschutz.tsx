
const Datenschutz = () => {
    return (
        <div className="container" style={{ padding: '6rem 2rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Datenschutzerklärung</h1>

            <div style={{ maxWidth: '800px', lineHeight: '1.6' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Datenschutz auf einen Blick</h2>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Allgemeine Hinweise</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                    Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Datenschutz</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich
                    und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Hinweis zur verantwortlichen Stelle</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    Musterfirma<br />
                    Musterstraße 1<br />
                    12345 Musterstadt<br />
                    E-Mail: hello@antigravity.agency
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Datenerfassung auf dieser Website</h2>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Kontaktformular</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
                    Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
                    oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse
                    an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                    sofern diese abgefragt wurde.
                </p>
            </div>
        </div>
    );
};

export default Datenschutz;
