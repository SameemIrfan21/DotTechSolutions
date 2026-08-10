"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2, Brain, Smartphone, Cloud, Palette, Shield, Wrench,
  Package, Network, MessageSquare, ArrowRight, CheckCircle,
  ChevronRight, Zap, Search, Cpu, Rocket, BarChart3
} from "lucide-react";

/* ======================== DATA ======================== */
const services = [
  {
    id: "web",
    icon: Code2,
    title: "Web Development",
    subtitle: "Full-Stack Web Applications",
    desc: "We build performant, scalable, and beautifully designed web applications using the latest modern frameworks. From landing pages to complex SaaS platforms.",
    features: [
      "Next.js, React, TypeScript",
      "REST API & GraphQL backends",
      "PostgreSQL, Redis, Prisma ORM",
      "Authentication & role-based access",
      "SEO optimization & Core Web Vitals",
      "Progressive Web Apps (PWA)",
    ],
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    tag: "Full Stack",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android Applications",
    desc: "Cross-platform mobile apps that deliver native-quality performance with a single codebase. From MVPs to production-ready apps.",
    features: [
      "React Native & Flutter",
      "iOS & Android publishing",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "App Store Optimization (ASO)",
      "Over-the-air (OTA) updates",
    ],
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    tag: "React Native",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Software Solutions",
    desc: "Custom AI/ML integrations, LLM-powered products, computer vision, NLP, and intelligent automation that give your product a competitive edge.",
    features: [
      "LLM integration (OpenAI, Gemini, Anthropic)",
      "Custom ML model training",
      "Natural Language Processing",
      "Computer Vision & image recognition",
      "AI chatbots & assistants",
      "Predictive analytics dashboards",
    ],
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    tag: "AI / ML",
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Premium User Experiences",
    desc: "Research-driven design that converts. We craft interfaces that are visually stunning, highly usable, and aligned with your brand identity.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Figma design systems",
      "Accessibility (WCAG 2.1)",
      "Motion design & micro-animations",
      "Design handoff & dev collaboration",
    ],
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
    tag: "Figma",
  },

  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    subtitle: "Ongoing Software Care",
    desc: "Post-launch support packages to keep your software secure, performant, and up-to-date as your business evolves.",
    features: [
      "Bug fixes & patch releases",
      "Security monitoring & updates",
      "Performance optimization",
      "Uptime monitoring & alerting",
      "Dependency upgrades",
      "Feature enhancements",
    ],
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    tag: "24/7 Support",
  },

  {
    id: "api",
    icon: Network,
    title: "API Development",
    subtitle: "Robust Backend APIs",
    desc: "Design and build production-ready REST and GraphQL APIs with security, documentation, versioning, and scalability in mind.",
    features: [
      "REST & GraphQL APIs",
      "OpenAPI / Swagger documentation",
      "API versioning & deprecation strategy",
      "Rate limiting & throttling",
      "Webhook integrations",
      "Third-party API integrations",
    ],
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    tag: "Node.js / NestJS",
  },

];

const processSteps = [
  { icon: Search, step: "01", title: "Discovery", desc: "We deeply understand your business goals, technical requirements, and user needs through structured workshops." },
  { icon: Cpu, step: "02", title: "Architecture", desc: "We design a robust technical foundation — database schema, API contracts, system diagrams, and tech stack selection." },
  { icon: Code2, step: "03", title: "Build", desc: "Agile sprints with weekly demos. Full-stack development with continuous integration and transparent progress tracking." },
  { icon: Rocket, step: "04", title: "Deploy", desc: "Production deployment with CI/CD pipelines, monitoring, and zero-downtime releases on your chosen cloud platform." },
  { icon: BarChart3, step: "05", title: "Support", desc: "Ongoing maintenance, performance optimization, feature releases, and SLA-backed technical support." },
];

/* ======================== PAGE ======================== */
export default function ServicesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const selectedService = services.find((s) => s.id === selected);

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden pt-20">

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 70%)" }}
        />
        <div className="section-container relative text-center">
          <div className="section-tag mb-6 inline-flex bg-blue-100 text-blue-700">
            <Zap className="w-3 h-3" />
            What We Build
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From concept to production — we deliver full-stack software, AI, cloud, design,
            and consulting services tailored to your business stage and goals.
          </p>
          <button
            onClick={() => setQuoteOpen(true)}
            className="btn-brand flex items-center gap-2 mx-auto"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ==================== SERVICES GRID ==================== */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setSelected(svc.id === selected ? null : svc.id)}
                className={`bg-white border text-left p-6 rounded-2xl shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-md ${selected === svc.id ? "border-blue-500 ring-1 ring-blue-500 bg-blue-50/50" : "border-slate-200 hover:border-blue-300"}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${svc.bg} border ${svc.border}`}
                >
                  <svc.icon className={`w-6 h-6 ${svc.color}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${svc.color} block mb-2`}>{svc.tag}</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-2">{svc.subtitle}</p>
                <div className={`flex items-center gap-1.5 mt-4 text-sm font-bold transition-colors ${selected === svc.id ? "text-blue-600" : "text-slate-500 group-hover:text-blue-600"}`}>
                  {selected === svc.id ? "Hide details" : "See details"}
                  <ChevronRight className={`w-4 h-4 transition-transform ${selected === svc.id ? "rotate-90" : ""}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Expanded Detail Panel */}
          {selectedService && (
            <div className="mt-8 bg-white border border-blue-200 shadow-lg rounded-2xl p-8 sm:p-10 animate-fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${selectedService.bg} border ${selectedService.border}`}>
                      <selectedService.icon className={`w-7 h-7 ${selectedService.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">{selectedService.title}</h3>
                      <span className={`text-sm font-bold ${selectedService.color}`}>{selectedService.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed mb-8">{selectedService.desc}</p>
                  <div className="flex gap-4">
                    <button onClick={() => setQuoteOpen(true)} className="btn-brand px-6 py-3 flex items-center gap-2">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link href="/contact" className="btn-ghost px-6 py-3">
                      Talk to Us
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What&apos;s Included</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-lg p-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${selectedService.color}`} />
                        <span className="text-sm font-medium text-slate-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Our <span className="text-blue-600">Development Process</span>
            </h2>
            <p className="text-slate-600 text-lg">
              A structured, transparent, and agile approach that delivers results on time and on budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute top-12 left-[calc(100%+0.5rem)] right-[-0.5rem] h-0.5 bg-blue-100 hidden lg:block z-10" />
                )}
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center group hover:border-blue-300 transition-all duration-300">
                  <div className="text-sm font-black text-blue-200 tracking-widest mb-4">{step.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 bg-[#0F1C3F]">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-blue-100/80 text-lg mb-10">
            Book a free 30-minute consultation and our team will help you find the right solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setQuoteOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2">
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="/contact" className="btn-outline-light px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== QUOTE MODAL ==================== */}
      {quoteOpen && (
        <div className="modal-overlay" onClick={() => setQuoteOpen(false)}>
          <div
            className="bg-white border border-slate-200 shadow-2xl rounded-2xl w-full max-w-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuoteOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors font-bold"
            >
              ✕
            </button>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Request a Free Quote</h3>
            <p className="text-base text-slate-600 mb-8">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setQuoteOpen(false); }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Your Name *</label>
                  <input type="text" required className="input-field" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Email *</label>
                  <input type="email" required className="input-field" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Service Needed</label>
                <select className="input-field cursor-pointer bg-white">
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Project Description *</label>
                <textarea required rows={4} className="input-field resize-none" placeholder="Brief description of what you need built..." />
              </div>
              <button type="submit" className="btn-brand w-full flex items-center justify-center gap-2 py-4">
                Send Quote Request
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-sm text-slate-600 text-center mt-6">
              Or email us directly at{" "}
              <a href="mailto:info.dottechsolutions@gmail.com" className="text-blue-600 font-semibold hover:underline">
                info.dottechsolutions@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
