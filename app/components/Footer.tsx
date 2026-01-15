import { Facebook, Instagram, Globe } from "lucide-react";
import Image from "next/image";
const footerLinks = [
  {
    title: "SEO Title",
    hasAccent: true,
    links: ["SEO Title", "SEO Title", "Shop", "Popular", "Business Automation"],
  },
  {
    title: "SEO Title",
    links: [
      "Popular",
      "Business Automation",
      "Shop",
      "Popular",
      "Business Automation",
    ],
  },
  {
    title: "SEO Title",
    links: [
      "Popular",
      "Business Automation",
      "Shop",
      "Popular",
      "Business Automation",
    ],
  },
  {
    title: "SEO Title",
    links: [
      "Popular",
      "Business Automation",
      "Shop",
      "Popular",
      "Business Automation",
    ],
  },
  {
    title: "SEO Title",
    links: ["Popular", "Business Automation", "Shop", "Popular"],
  },
];

const categories = [
  {
    title: "Categories",
    links: [
      "Popular",
      "Business Automation",
      "Shop",
      "Popular",
      "Business Automation",
      "Shop",
    ],
  },
  {
    title: "Cities",
    links: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Telavi", "Svaneti"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container mx-auto px-6 py-12">
        {/* Main Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3
                className={`relative font-semibold text-foreground mb-6 ${
                  idx === 0
                    ? "after:absolute after:left-0 after:-bottom-2 after:h-px after:w-290 after:bg-[#DDDDDDDD]"
                    : ""
                }`}
              >
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors text-sm">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Categories, Cities, Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors text-sm">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + Social + Store */}
          <div className="flex h-full flex-col">
            {/* Contact info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground text-sm">
                  Direct customer questions
                </li>
                <li className="text-muted-foreground text-sm">info@meway.ge</li>
                <li className="text-muted-foreground text-sm">
                  +995 32 212 34 56
                </li>
              </ul>
            </div>

            {/* ⬇️ THIS block gets pushed down */}
          </div>
          <div className="mt-auto flex flex-col  gap-2">
            {/* Social icons */}
            <div className="flex gap-4 pr-6">
              <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted cursor-pointer">
                <Facebook className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted cursor-pointer">
                <Instagram className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted cursor-pointer">
                <TikTokIcon />
              </span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted cursor-pointer">
                <XIcon />
              </span>
            </div>
            {/* Store buttons */}
            <div className="flex gap-3 ml-3.75">
              <Image
                src="/googleplay.svg"
                width={120}
                height={40}
                alt="Google Play"
              />
              <Image
                src="/applestore.svg"
                width={120}
                height={40}
                alt="App Store"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>© 2025 meway</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">
                Terms and Conditions
              </span>
              <span className="hover:text-foreground cursor-pointer transition-colors">
                Privacy Policy
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2 hover:text-foreground cursor-pointer transition-colors">
                <Globe className="w-4 h-4" />
                English
              </span>
              <span className="flex items-center gap-1 hover:text-foreground cursor-pointer transition-colors">
                <span className="font-medium">$</span>
                USD
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default Footer;
