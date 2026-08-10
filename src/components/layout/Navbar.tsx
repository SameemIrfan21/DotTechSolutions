"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/SocialIcons";
import Logo from "@/components/ui/Logo";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];



const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dot_techsolutions?igsh=MXNmZHo3cWo1dGZsNQ==",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dottechsolutions/",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-slate-200"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo size="sm" showWordmark />

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded-lg text-slate-700 hover:text-blue-600 text-sm font-semibold transition-colors duration-200"
                      onMouseEnter={() => setCompanyOpen(true)}
                      onMouseLeave={() => setCompanyOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                    </button>
                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg transition-all duration-200 ${
                        companyOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      onMouseEnter={() => setCompanyOpen(true)}
                      onMouseLeave={() => setCompanyOpen(false)}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors first:rounded-t-xl last:rounded-b-xl"
                        >
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                      pathname === link.href
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                )
              )}
            </div>

            {/* Right Side: Socials + Portal + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-1">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`p-2 rounded-lg text-slate-400 transition-colors duration-200 hover:bg-slate-100 ${s.color}`}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-slate-200 mx-1" />



              {/* CTA Button */}
              <Link href="/contact" className="btn-brand">
                Get a Proposal
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 lg:hidden bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
            <Logo size="sm" showWordmark />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1 space-y-1 overflow-y-auto">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 mb-1">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="flex items-center gap-2 pl-6 pr-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}


          </nav>

          {/* Mobile Footer: Socials + CTA */}
          <div className="pt-6 border-t border-slate-100 mt-auto">
            <div className="flex gap-3 mb-4 justify-center">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm font-medium text-slate-500 hover:bg-white transition-colors ${s.color}`}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <Link href="/contact" className="btn-brand w-full">
              Get a Proposal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
