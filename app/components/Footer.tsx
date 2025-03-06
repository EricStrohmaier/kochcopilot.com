import { company, colors } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer
      className={`bg-[${colors.dark}] py-12 border-t border-[${colors.black}]`}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {company.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`text-[${colors.light}] hover:text-[${colors.accent}] transition-colors font-medium`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className={`text-sm text-[${colors.lightAlt}]`}>
          {company.copyright}
          {company.legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`ml-4 hover:text-[${colors.accent}] transition-colors text-[${colors.light}]`}
            >
              {link.name}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
}
