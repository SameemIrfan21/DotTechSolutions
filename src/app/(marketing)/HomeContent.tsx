"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Code2, Brain, Smartphone, Cloud, Palette,
  Zap, Star, ChevronDown, CheckCircle, Target, Users, Award, Shield, Layout,
  Monitor, PenTool, Database, Play
} from "lucide-react";

/* ===========================
   DATA / CONSTANTS
   =========================== */

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Custom websites, web applications, and enterprise portals built for performance and scale.",
    tag: "Full Stack",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences for iOS and Android.",
    tag: "App Dev",
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    desc: "Intelligent automation, predictive analytics, and custom LLM integrations.",
    tag: "AI/ML",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "User-centric design, wireframing, and interactive prototyping that drives engagement.",
    tag: "Design",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Transform your raw data into actionable business intelligence.",
    tag: "Data",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure, CI/CD pipelines, and cloud migration services.",
    tag: "Infrastructure",
  },
];

const processSteps = [
  { num: "01", title: "Requirement Gathering", desc: "We understand your business goals and technical needs." },
  { num: "02", title: "Planning & UI/UX", desc: "Wireframes, prototypes, and system architecture design." },
  { num: "03", title: "Development Sprint", desc: "Agile development with weekly progress reviews." },
  { num: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing for quality assurance." },
  { num: "05", title: "Deployment", desc: "Seamless launch to production environments." },
  { num: "06", title: "Support & Maintenance", desc: "Post-launch monitoring, updates, and optimization." },
];

/* ===========================
   HELPER COMPONENTS
   =========================== */

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-number text-blue-600">
      {count}{suffix}
    </div>
  );
}

/* ===========================
   MAIN HOME PAGE CONTENT
   =========================== */
export default function HomeContent() {
  return (
    <div className="bg-white text-slate-800 overflow-x-hidden pt-20">

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-80" />
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="section-container relative z-10 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Innovating Tomorrow, Building Today
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Empower Your Business With <span className="text-blue-600">Smart Software</span> Solutions.
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                DotTech Solutions is a premier technology partner delivering scalable web apps, mobile solutions, and enterprise AI integrations that drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact" className="btn-brand w-full sm:w-auto h-12">
                  Get a Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200 max-w-lg">
                <div>
                  <div className="text-3xl font-black text-slate-900 mb-1">2+</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 mb-1">2+</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 mb-1">98%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Client Retention</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative bg-white border border-slate-200 rounded-3xl shadow-xl p-8 aspect-square flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg rotate-3">
                    <Code2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">DotTech</h3>
                  <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-24 bg-slate-50 relative">
        <div className="section-container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Our High-End <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We provide comprehensive digital solutions tailored to modern business requirements, from stunning websites to robust backend systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svc.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                  <Link href="/services" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AGILE PROCESS ==================== */}
      <section className="py-24 bg-white relative">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Agile Delivery <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Our proven methodology ensures your project is delivered on time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative group overflow-hidden">
                <div className="text-6xl font-black text-slate-200 absolute -top-2 -right-2 group-hover:text-blue-100 transition-colors pointer-events-none">
                  {step.num}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                We Build Software That Drives <span className="text-blue-600">Results.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                DotTech Solutions is committed to excellence. We combine technical expertise with business acumen to create digital products that solve real-world problems.
              </p>
              
              <div className="space-y-5">
                {[
                  { title: "Expert Team", desc: "Highly skilled developers and designers with years of industry experience." },
                  { title: "Quality Assurance", desc: "Rigorous testing protocols to ensure bug-free and performant applications." },
                  { title: "Timely Delivery", desc: "Strict adherence to project timelines and agile sprint schedules." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-10 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team collaboration" 
                className="rounded-2xl w-full h-48 object-cover shadow-lg relative z-10"
              />
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                alt="Development" 
                className="rounded-2xl w-full h-48 object-cover shadow-lg relative z-10 translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" 
                alt="Presentation" 
                className="rounded-2xl w-full h-48 object-cover shadow-lg relative z-10"
              />
              <div className="rounded-2xl bg-blue-600 text-white p-6 shadow-lg relative z-10 translate-y-8 flex flex-col justify-center">
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-blue-100 text-sm font-medium">Client Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="py-24 bg-[#0F1C3F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2" />
        
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Amazing Together</span>
          </h2>
          <p className="text-blue-100/80 text-lg mb-10">
            Ready to transform your ideas into reality? Contact us today for a free consultation and project proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/50 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919025088044"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light px-8 py-4 rounded-lg font-bold flex items-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
