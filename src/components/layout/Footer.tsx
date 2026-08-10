"use client";

import Link from "next/link";
import { Mail, Phone, MessageCircle, ArrowRight, Zap, MapPin } from "lucide-react";
import { Instagram, Linkedin, Github } from "@/components/ui/SocialIcons";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "AI Solutions", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security", href: "/security" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#0F1C3F] text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 xl:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="xl:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-black tracking-tight text-white">
                  DotTech
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Innovating Tomorrow, Building Today. We deliver enterprise-grade software, AI solutions, and digital transformation for modern businesses.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:info.dottechsolutions@gmail.com" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                info.dottechsolutions@gmail.com
              </a>
              <a href="tel:+919025088044" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +91 90250 88044
              </a>

            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-b border-white/10 py-10 my-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
            <p className="text-slate-400 text-sm">Get the latest insights in tech, AI, and software development.</p>
          </div>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-slate-500 text-sm">
              © {currentYear} DotTech Solutions. All rights reserved.
            </p>
            {/* Visitor Counter Badge */}
            <div 
              className="flex items-center justify-center bg-white/5 rounded-lg px-3 py-1.5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 w-full sm:w-auto shadow-sm backdrop-blur-sm" 
              title="Total Website Visitors"
            >
              <img 
                src="https://komarev.com/ghpvc/?username=dottechsolutions&label=VISITORS&color=3B82F6&style=for-the-badge" 
                alt="Visitor Counter" 
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/dot_techsolutions?igsh=MXNmZHo3cWo1dGZsNQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dottechsolutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
