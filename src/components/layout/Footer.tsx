import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Twitter, Youtube } from "lucide-react";
import { SITE_NAME, SITE_EMAIL } from "@/lib/constants";
import { FOOTER_CONTENT } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label={SITE_NAME}>
              <Image
                src="/lavelle-logo.png"
                alt={SITE_NAME}
                width={160}
                height={52}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs font-sans">
              {FOOTER_CONTENT.tagline}
            </p>
            <div className="flex items-center gap-2 mt-6">
              <a
                href="mailto:contact@lavellenetworks.com"
                className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors font-sans"
              >
                <Mail size={14} />
                {SITE_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-4 mt-6">
              {[
                { href: "https://linkedin.com/company/lavelle-networks", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com/lavellenetworks", Icon: Twitter, label: "Twitter" },
                { href: "https://youtube.com/@lavellenetworks", Icon: Youtube, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#0078D4] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_CONTENT.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-sm font-sans font-semibold uppercase tracking-widest mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/35 font-sans text-center sm:text-left">
            © {year} {SITE_NAME} Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Use", "E-Waste Management"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs text-white/35 hover:text-white/70 transition-colors font-sans"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
