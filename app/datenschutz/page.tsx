import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { company } from "../config/siteConfig";

export const metadata = {
    title: `Datenschutzerklärung | ${company.name}`,
    description: "Datenschutzerklärung für KochCopilot - Informationen zum Umgang mit Ihren Daten",
    canonicalUrlRelative: "/datenschutz",
};

const privacy = `
<h1>Datenschutzerklärung</h1>

<h2>1. Verantwortliche Stelle</h2>
<p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
<p>${company.name}<br/>
${company.email}</p>

<h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
<p>2.1. Bei der Nutzung unserer Website werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.</p>

<p>2.2. Bei der Newsletter-Anmeldung erheben wir folgende Daten:</p>
<ul>
  <li>E-Mail-Adresse</li>
  <li>Zeitpunkt der Anmeldung</li>
</ul>

<h2>3. Verwendung Ihrer Daten</h2>
<p>3.1. Ihre E-Mail-Adresse nutzen wir ausschließlich, um Sie über:</p>
<ul>
  <li>Den Start der ${company.name} App</li>
  <li>Wichtige Entwicklungen und Updates</li>
  <li>Mögliche Beta-Test-Einladungen</li>
</ul>
<p>zu informieren.</p>

<h2>4. Datensicherheit</h2>
<p>4.1. Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.</p>

<h2>5. Ihre Rechte</h2>
<p>Sie haben folgende Rechte:</p>
<ul>
  <li>Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten</li>
  <li>Recht auf Berichtigung oder Löschung</li>
  <li>Recht auf Einschränkung der Verarbeitung</li>
  <li>Recht auf Widerspruch gegen die Verarbeitung</li>
  <li>Recht auf Datenübertragbarkeit</li>
</ul>

<h2>6. Cookies und Analyse-Tools</h2>
<p>6.1. Wir verwenden auf unserer Website nur technisch notwendige Cookies. Diese sind für den reibungslosen Betrieb der Website erforderlich.</p>

<h2>7. Newsletter-Tracking</h2>
<p>7.1. Unsere Newsletter können einen Zählpixel enthalten, der uns mitteilt, ob und wann Sie den Newsletter geöffnet haben. Dies hilft uns, unseren Service zu verbessern.</p>
<p>7.2. Sie können dem Newsletter-Tracking jederzeit widersprechen, indem Sie sich vom Newsletter abmelden.</p>

<h2>8. Änderungen der Datenschutzerklärung</h2>
<p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen.</p>

<p class="mt-8 text-sm text-gray-600">Stand: März 2024</p>
`;

const PrivacyPage = () => {
    return (
        <main className="max-w-4xl mx-auto py-8 px-4">
            <div className="space-y-6">
                <Button variant="link" asChild className="mb-4 -ml-4">
                    <Link href="/">
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />
                        Zurück zur Startseite
                    </Link>
                </Button>
                <div
                    className="prose prose-stone max-w-none"
                    dangerouslySetInnerHTML={{ __html: privacy }}
                />
            </div>
        </main>
    );
};

export default PrivacyPage;
