import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { company } from "../config/siteConfig";

export const metadata = {
  title: `AGB | ${company.name}`,
  description: "Allgemeine Geschäftsbedingungen für KochCopilot",
  canonicalUrlRelative: "/agb",
};

const agb = `
<h1>Allgemeine Geschäftsbedingungen (AGB)</h1>

<h2>1. Geltungsbereich</h2>
<p>Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der von ${company.name} (nachfolgend "wir" oder "uns") unter ${company.url} bereitgestellten Dienste und Anwendungen.</p>

<h2>2. Leistungsbeschreibung</h2>
<p>${company.name} ist eine KI-gestützte Rezept-App, die Nutzern basierend auf vorhandenen Zutaten Rezeptvorschläge unterbreitet. Die App befindet sich derzeit in der Entwicklungsphase.</p>

<h2>3. Registrierung und Newsletter</h2>
<p>3.1. Für die Vorregistrierung ist lediglich die Angabe einer gültigen E-Mail-Adresse erforderlich.</p>
<p>3.2. Mit der Registrierung erklären Sie sich einverstanden, von uns Informationen über den Start und die Entwicklung der App zu erhalten.</p>
<p>3.3. Sie können sich jederzeit vom Newsletter abmelden.</p>

<h2>4. Datenschutz</h2>
<p>Die Erhebung und Verarbeitung Ihrer personenbezogenen Daten erfolgt gemäß unserer Datenschutzerklärung, die Sie separat einsehen können.</p>

<h2>5. Haftungsausschluss</h2>
<p>5.1. Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.</p>
<p>5.2. Die Nutzung der später verfügbaren App erfolgt auf eigene Gefahr. Wir haften nicht für Schäden, die durch die Nutzung der App entstehen können.</p>

<h2>6. Änderungsvorbehalt</h2>
<p>Wir behalten uns vor, diese AGB jederzeit ohne Nennung von Gründen zu ändern. Die geänderten Bedingungen werden wir Ihnen per E-Mail zusenden.</p>

<h2>7. Schlussbestimmungen</h2>
<p>7.1. Es gilt das Recht der Bundesrepublik Deutschland.</p>
<p>7.2. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>

<p class="mt-8 text-sm text-gray-600">Stand: März 2024</p>
`;

const AGBPage = () => {
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
          dangerouslySetInnerHTML={{ __html: agb }}
        />
      </div>
    </main>
  );
};

export default AGBPage;
