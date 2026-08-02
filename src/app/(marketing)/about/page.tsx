"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Target, Eye, Heart, Zap, Users, Code2, Rocket, Globe, ArrowRight,
  CheckCircle, Clock, MessageCircle, Shield, Lightbulb
} from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/SocialIcons";

/* ======================== DATA ======================== */

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We challenge the status quo and embrace cutting-edge technologies to solve complex problems in creative ways.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Quality Without Compromise",
    desc: "Every line of code, every design decision, every deployment is held to the highest standard of craftsmanship.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Users,
    title: "People Over Process",
    desc: "Our team and clients are at the center of everything we do. We build relationships that outlast any project.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Globe,
    title: "Think Globally",
    desc: "We design solutions that work at global scale — performant, accessible, and adaptable across cultures and markets.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Clock,
    title: "Deliver on Time",
    desc: "Deadlines are commitments. We plan meticulously, communicate transparently, and deliver what we promise.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Heart,
    title: "Passion Drives Us",
    desc: "We genuinely love what we build. That passion is visible in every product we ship.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const timeline = [
  {
    year: "2020",
    title: "DotTech Founded",
    desc: "DotTech Solutions was established with a mission to bring world-class software development to businesses of all sizes.",
    side: "right",
  },
  {
    year: "2021",
    title: "First Enterprise Clients",
    desc: "Secured our first enterprise-level projects, delivering full-stack web platforms and mobile applications.",
    side: "left",
  },
  {
    year: "2022",
    title: "AI Practice Launch",
    desc: "Expanded into AI/ML development — integrating machine learning and intelligent automation into client products.",
    side: "right",
  },
  {
    year: "2023",
    title: "Team & Capability Growth",
    desc: "Grew the team across development, design, DevOps, and consulting disciplines. Launched our UI/UX studio.",
    side: "left",
  },
  {
    year: "2024",
    title: "Cloud & SaaS Specialization",
    desc: "Deepened expertise in cloud architecture, SaaS product development, and enterprise digital transformation.",
    side: "right",
  },
  {
    year: "2025+",
    title: "Scaling Globally",
    desc: "Continuing to scale our team and client base internationally, with a focus on AI-powered enterprise software.",
    side: "left",
  },
];

/* ======================== TEAM SECTION ======================== */
const team: Array<{
  name: string;
  role: string;
  bio: string;
  avatar: string;
  gradient: string;
  instagram?: string;
  linkedin?: string;
}> = [];

/* ======================== PAGE ======================== */
export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);

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
            <Users className="w-3 h-3" />
            About DotTech Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Who We <span className="text-blue-600">Are</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            DotTech Solutions is a passionate software development and AI solutions company.
            We help businesses transform their ideas into scalable, world-class digital products.
          </p>

          {/* Social proof bar */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <a
              href="https://www.instagram.com/dot_techsolutions?igsh=MXNmZHo3cWo1dGZsNQ=="
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-sm text-sm text-slate-600 hover:text-pink-600 hover:border-pink-200 transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/dottechsolutions/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-sm text-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ==================== MISSION / VISION / STORY ==================== */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Our Story */}
            <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-blue-50 -translate-y-1/2 translate-x-1/2" />
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Story</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                DotTech Solutions was founded with a clear purpose: to make exceptional
                software development accessible and impactful. We started as a small,
                passionate team and have grown into a full-service technology partner
                for companies ranging from early-stage startups to scaling enterprises.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our name reflects our identity — precise (Dot), technical (Tech),
                and solution-oriented. Every project we take on is driven by the
                tagline: <span className="text-blue-600 font-bold">Innovating Tomorrow, Building Today.</span>
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 relative overflow-hidden group hover:border-blue-300 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-purple-50 -translate-y-1/2 translate-x-1/2" />
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with innovative, scalable, and reliable software
                solutions that create real competitive advantage. We build products
                that don&apos;t just function — they transform the way our clients operate.
              </p>
              <div className="mt-6 space-y-3">
                {["Build with purpose", "Ship with precision", "Scale with confidence"].map((m) => (
                  <div key={m} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 relative overflow-hidden group hover:border-cyan-300 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-cyan-50 -translate-y-1/2 translate-x-1/2" />
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                To become the most trusted technology partner for ambitious companies
                worldwide — known for crafting software that is both technically excellent
                and deeply aligned with business goals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We envision a world where every great business idea has access to the
                engineering quality it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Our Core <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-slate-600 text-lg">
              These principles guide every decision we make, every line of code we write,
              and every client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${v.bg}`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Company <span className="text-blue-600">Timeline</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-6 md:gap-0 ${item.side === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}
                  onClick={() => setActiveTimeline(activeTimeline === i ? null : i)}
                >
                  {/* Card */}
                  <div className={`w-full md:w-5/12 cursor-pointer bg-white border border-slate-200 shadow-sm rounded-xl p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-md ${activeTimeline === i ? "border-blue-500 ring-1 ring-blue-500" : ""} ${item.side === "right" ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-blue-600 tracking-wider">{item.year}</span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM ==================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="section-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">The Team</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Meet the <span className="text-blue-600">People</span> Behind DotTech
            </h2>
            <p className="text-slate-600 text-lg">
              A diverse team of engineers, designers, and strategists united by a love for great software.
            </p>
          </div>

          {team.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}>
                    {member.avatar}
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-pink-100 hover:text-pink-600 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center max-w-lg mx-auto">
              <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-slate-900 font-bold text-lg mb-2">Team Coming Soon</h3>
              <p className="text-slate-600">
                Team profiles will appear here. Add real team members to the team array in about/page.tsx.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 bg-[#0F1C3F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2" />
        
        <div className="section-container relative text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Want to Work Together?
          </h2>
          <p className="text-blue-100/80 text-lg mb-10">
            Whether you have a project in mind or just want to learn more, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919025088044"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline-light px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
