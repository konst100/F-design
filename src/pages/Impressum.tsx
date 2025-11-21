
const Impressum = () => {
    return (
        <div className="container" style={{ padding: '6rem 2rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Impressum</h1>

            <div style={{ maxWidth: '800px', lineHeight: '1.6' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Angaben gemäß § 5 TMG</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Musterfirma<br />
                    Musterstraße 1<br />
                    12345 Musterstadt
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Kontakt</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    E-Mail: hello@antigravity.agency
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Max Mustermann<br />
                    Musterstraße 1<br />
                    12345 Musterstadt
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Haftungsausschluss (Disclaimer)</h2>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Haftung für Inhalte</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                    oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Haftung für Links</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                    oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Urheberrecht</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                    der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
            </div>
        </div>
    );
};

export default Impressum;
