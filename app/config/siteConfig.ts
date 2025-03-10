// Site configuration file for KochCopilot

// Color Palette
export const colors = {
  primary: "#2F4238", // Deep Forest Green
  accent: "#C76F41", // Rust/Burnt Orange
  dark: "#1A3A3A", // Dark Charcoal/Navy
  black: "#1C1C1C", // Charcoal
  light: "#F5F1E6", // Warm Sand Beige
  lightAlt: "#EAD8C0", // Slightly dunkler Sandton
  white: "#FFFFFF", // Weiß für Kontraste
  text: {
    dark: "#1C1C1C",
    light: "#F5F1E6",
    muted: "#6B7280", // Grauton für weniger wichtige Texte
  },
};

export const keywords = [
  "Rezepte",
  "Koch-App",
  "Kochen leicht gemacht",
  "Traditionelle deutsche Küche",
  "Smart Cooking",
  "Kühlschrank Zutaten Rezepte",
];

// Unternehmensinformationen
export const company = {
  name: "KochCopilot",
  fullName: "KochCopilot – Deine smarte Küchenhilfe",
  email: "support@kochcopilot.com",
  foundingYear: 2024,
  copyright: `© ${new Date().getFullYear()} KochCopilot. Alle Rechte vorbehalten.`,
  socialLinks: [
    { name: "", url: "" },
  ],
  legalLinks: [
    { name: "Datenschutz", url: "/datenschutz" },
    { name: "AGB", url: "/agb" },
  ],
};

// Hero-Section
export const hero = {
  title: "Die richtige Rezeptidee – genau dann, wenn du sie brauchst",
  description:
    "Du hast Zutaten, aber keine Idee? Unsere App schlägt dir das perfekte Rezept vor – basierend auf deinen Vorräten und echten Geheimtipps aus der traditionellen Küche.",
  ctaText: "Jetzt ausprobieren",
  image: "/kochcopilot-hero.jpg",
};

// Produktfeatures
export const productFeatures = {
  title: "Warum KochCopilot?",
  features: [
    "🔎 Gibt Rezeptvorschläge basierend auf deinen Zutaten",
    "📖 Kombiniert traditionelle Rezepte mit smarten Empfehlungen",
    "🚀 Spart Zeit – kein langes Suchen oder Grübeln mehr",
    "👵 Exklusive Oma-Geheimtipps für authentischen Geschmack",
    "📱 Einfach zu bedienen – perfekte Rezepte mit nur wenigen Klicks",
  ],
  videoSrc: "/kochcopilot-demo.mp4",
};

// FAQ-Bereich
export const faqs = {
  title: "Häufig gestellte Fragen",
  questions: [
    {
      question: "Wie funktioniert die App?",
      answer:
        "Gib einfach ein, welche Zutaten du zu Hause hast – die App schlägt dir passende Rezepte vor. Zusätzlich kannst du Vorlieben und Ernährungsgewohnheiten anpassen, damit die Vorschläge genau zu dir passen.",
    },
    {
      question: "Sind die Rezepte wirklich von Oma?",
      answer:
        "Ja! Wir haben traditionelle deutsche Rezepte gesammelt, modernisiert und mit **echten Geheimtipps** ergänzt, die man sonst nur von Oma kennt.",
    },
    {
      question: "Ist die App kostenlos?",
      answer:
        "Du kannst die Basisfunktionen kostenlos nutzen. Für zusätzliche Features wie personalisierte Vorschläge, exklusive Rezepte und detaillierte Anleitungen gibt es eine optionale Premium-Version.",
    },
  ],
};

// Testimonials
export const testimonials = {
  title: "Was unsere Nutzer sagen",
  items: [
    {
      quote:
        "Endlich nutze ich meine Kochbücher wieder – aber digital!",
      name: "Lisa, 38, Berlin",
      title: "Hobbyköchin",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop",
    },
    {
      quote: "Perfekt für den Alltag! Kein Rätselraten mehr, was ich kochen soll.",
      name: "Tobias, 42, Hamburg",
      title: "Berufstätiger Vater",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop",
    },
    {
      quote:
        "Kochen wie früher – aber smarter.",
      name: "Sarah, 29, München",
      title: "Foodie",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=256&h=256&fit=crop",
    },
  ],
};

// Letzte Call-to-Action Sektion
export const finalCta = {
  title: "Nie wieder ratlos vor dem Kühlschrank stehen!",
  description:
    "Sag der App, was du zu Hause hast – und koche sofort los mit perfekt passenden Rezepten. Jetzt kostenlos testen!",
  ctaText: "Jetzt ausprobieren",
};

// Email Capture
// Email Capture Section
export const emailCapture = {
  title: "Werde Beta-Tester!",
  heading: "KI-Revolution in deiner Küche",
  description: {
    before: "Sei einer der Ersten, die ",
    highlight: "KI-gestützte Rezeptvorschläge",
    after: " testen und mitgestalten können.",
  },
  placeholder: "Deine E-Mail-Adresse",
  ctaText: "Beta-Zugang sichern",
  stats: "Limitierte Plätze für Beta-Tester verfügbar",
  successHeading: "Perfekt - du bist dabei!",
  successMessage: "Du erhältst als eine(r) der Ersten Zugang zu unserer KI-Koch-Innovation.",
  image: "/email-capture-kitchen.jpg",
};

