"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const shouldReduce = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F] border-b border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-3 md:py-4 lg:py-5">

          {/* Left group: logo + nav */}
          <div className="flex items-center gap-4 xl:gap-10">

            {/* Logo */}
            <Link href="/" className="shrink-0" aria-label={SITE_NAME}>
              <Image
                src="/lavelle-logo.png"
                alt={SITE_NAME}
                width={200}
                height={64}
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-2.5 xl:px-4 py-2 text-[10px] xl:text-xs text-white/80 hover:text-white font-sans font-semibold tracking-widest uppercase rounded-lg hover:bg-white/8 transition-colors duration-150"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={shouldReduce ? {} : { opacity: 0, y: -8 }}
                      animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
                      exit={shouldReduce ? {} : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 min-w-52 rounded-xl bg-[#003F72] border border-white/10 shadow-2xl"
                    >
                      {item.children.map((child, index) => (
                        <div 
                          key={child.href} 
                          className="relative"
                          onMouseEnter={() => child.children && setActiveSubDropdown(child.label)}
                          onMouseLeave={() => setActiveSubDropdown(null)}
                        >
                          <Link
                            href={child.href}
                            className={`flex items-center justify-between px-4 py-3 text-xs text-white/75 hover:text-white hover:bg-white/8 transition-colors duration-150 font-sans font-medium tracking-wider uppercase ${index === 0 ? "rounded-t-xl" : ""} ${index === item.children!.length - 1 ? "rounded-b-xl" : ""}`}
                          >
                            {child.label}
                            {child.children && <ChevronDown size={14} className="-rotate-90" />}
                          </Link>
                          
                          <AnimatePresence>
                            {child.children && activeSubDropdown === child.label && (
                              <motion.div
                                initial={shouldReduce ? {} : { opacity: 0, x: -8 }}
                                animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
                                exit={shouldReduce ? {} : { opacity: 0, x: -8 }}
                                transition={{ duration: 0.15 }}
                                className="absolute top-0 left-full pl-1 z-[100]"
                              >
                                <div className="min-w-64 rounded-xl bg-[#003F72] border border-white/10 shadow-2xl overflow-hidden">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.href}
                                      href={subChild.href}
                                      className="block px-4 py-3 text-xs text-white/75 hover:text-white hover:bg-white/8 transition-colors duration-150 font-sans font-medium tracking-wider uppercase"
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setActiveSubDropdown(null);
                                      }}
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          </div>{/* end left group */}

          {/* Right: CTA */}
          <div className="hidden xl:flex items-center">
            <Link href="/contact">
              <Button variant="primary" size="sm" className="tracking-widest uppercase whitespace-nowrap xl:px-6 xl:py-3 xl:text-base">
                Know More!
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={shouldReduce ? {} : { height: 0, opacity: 0 }}
            animate={shouldReduce ? {} : { height: "auto", opacity: 1 }}
            exit={shouldReduce ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden overflow-hidden bg-[#003F72] border-t border-white/10"
          >
            <nav className="px-6 py-6 space-y-1 max-h-[calc(100svh-4rem)] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-xs text-white/80 hover:text-white font-sans font-semibold tracking-widest uppercase border-b border-white/8 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 border-b border-white/8">
                      {item.children.map((child) => (
                        <div key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-3 text-xs text-white/70 hover:text-white font-sans font-medium tracking-widest uppercase"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                          {child.children && (
                            <div className="pl-4">
                              {child.children.map((subChild) => (
                                <Link
                                  key={subChild.href}
                                  href={subChild.href}
                                  className="block py-2 text-[10px] text-white/60 hover:text-white font-sans font-medium tracking-widest uppercase"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {subChild.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" size="md" className="w-full justify-center">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
