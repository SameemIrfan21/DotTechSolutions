"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin, Mail, Phone, MessageCircle,
  ArrowRight, Send, CheckCircle, ChevronRight, Clock, Zap
} from "lucide-react";
import { Instagram, Linkedin } from "@/components/ui/SocialIcons";

/* ======================== PAGE ======================== */
export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", phone: "",
    service: "", budget: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    "Web Development", "Mobile App Development", "AI & Machine Learning",
    "UI/UX Design", "API Development", "Maintenance & Support", "Other",
  ];
  const budgets = ["< ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹10,00,000", "₹10,00,000+", "Let's discuss"];

  return (
    <div className="bg-white text-slate-800 overflow-x-hidden pt-20">

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 70%)" }}
        />
        <div className="section-container relative text-center">
          <div className="section-tag mb-6 inline-flex bg-blue-100 text-blue-700">
            <Send className="w-3 h-3" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Let&apos;s <span className="text-blue-600">Talk</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind or just want to explore what&apos;s possible?
            We&apos;d love to hear from you. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ==================== MAIN CONTENT ==================== */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ======== LEFT: Contact Info ======== */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <a
                href="mailto:info.dottechsolutions@gmail.com"
                className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 group hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email Us</div>
                  <div className="text-sm font-bold text-slate-900">info.dottechsolutions@gmail.com</div>
                  <div className="text-xs text-slate-500 mt-1">We reply within 24 hours</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto group-hover:text-blue-600 transition-colors" />
              </a>

              <a
                href="tel:+919025088044"
                className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 group hover:border-purple-300 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Call Us</div>
                  <div className="text-sm font-bold text-slate-900">+91 90250 88044</div>
                  <div className="text-xs text-slate-500 mt-1">Mon–Sat, 9 AM – 7 PM IST</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto group-hover:text-purple-600 transition-colors" />
              </a>

              <a
                href="https://wa.me/919025088044"
                target="_blank" rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 group hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="text-sm font-bold text-slate-900">+91 90250 88044</div>
                  <div className="text-xs text-slate-500 mt-1">Quick chat & project discussions</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto group-hover:text-green-600 transition-colors" />
              </a>

              {/* Social Media Cards */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/dot_techsolutions?igsh=MXNmZHo3cWo1dGZsNQ=="
                  target="_blank" rel="noopener noreferrer"
                  className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center text-center gap-3 group hover:border-pink-300 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Instagram</div>
                    <div className="text-xs text-slate-500 mt-1">@dot_techsolutions</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/dottechsolutions/"
                  target="_blank" rel="noopener noreferrer"
                  className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center text-center gap-3 group hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">LinkedIn</div>
                    <div className="text-xs text-slate-500 mt-1">dottechsolutions</div>
                  </div>
                </a>
              </div>

              {/* Response Time Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="text-sm text-slate-700">
                  Average response time is <span className="text-blue-700 font-bold">under 4 hours</span> during business hours.
                </p>
              </div>


            </div>

            {/* ======== RIGHT: Contact Form ======== */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* Success State */
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 max-w-sm mb-8 text-lg">
                    Thank you for reaching out. We&apos;ve received your message and will get back to you at{" "}
                    <span className="text-blue-600 font-semibold">{form.email}</span> within 24 hours.
                  </p>
                  <div className="flex gap-4">
                    <button onClick={() => { setSubmitted(false); setStep(1); setForm({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" }); }}
                      className="btn-ghost text-sm">
                      Send Another
                    </button>
                    <Link href="/" className="btn-brand text-sm flex items-center gap-1.5">
                      Back to Home <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 sm:p-10">
                  {/* Step Progress */}
                  <div className="flex items-center gap-3 mb-10">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          step > s ? "bg-green-500 text-white" :
                          step === s ? "bg-blue-600 text-white shadow-md shadow-blue-200" :
                          "bg-slate-100 text-slate-500"
                        }`}>
                          {step > s ? "✓" : s}
                        </div>
                        <span className={`text-sm font-semibold hidden sm:block ${step === s ? "text-slate-900" : "text-slate-500"}`}>
                          {s === 1 ? "Your Info" : s === 2 ? "Project Details" : "Message"}
                        </span>
                        {s < 3 && <div className={`h-1 flex-1 w-8 sm:w-12 rounded-full mx-2 ${step > s ? "bg-green-500" : "bg-slate-100"}`} />}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1 */}
                    {step === 1 && (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Tell us about yourself</h3>
                          <p className="text-sm text-slate-600">Basic info so we know who we&apos;re talking to.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="text-sm font-semibold text-slate-700 mb-2 block">Full Name *</label>
                            <input type="text" name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="Your full name" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-slate-700 mb-2 block">Email Address *</label>
                            <input type="email" name="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@company.com" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="text-sm font-semibold text-slate-700 mb-2 block">Company / Brand</label>
                            <input type="text" name="company" value={form.company} onChange={handleChange} className="input-field" placeholder="Optional" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-slate-700 mb-2 block">Phone / WhatsApp</label>
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="+91 XXXXX XXXXX" />
                          </div>
                        </div>
                        <div className="pt-4">
                          <button
                            type="button"
                            disabled={!form.name || !form.email}
                            onClick={() => setStep(2)}
                            className="btn-brand w-full flex items-center justify-center gap-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Continue <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Project Details</h3>
                          <p className="text-sm text-slate-600">Help us understand what you need.</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-slate-700 mb-2 block">Service Needed *</label>
                          <select name="service" required value={form.service} onChange={handleChange} className="input-field cursor-pointer bg-white">
                            <option value="">Select a service...</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-slate-700 mb-2 block">Estimated Budget</label>
                          <select name="budget" value={form.budget} onChange={handleChange} className="input-field cursor-pointer bg-white">
                            <option value="">Select a range...</option>
                            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                        <div className="flex gap-4 pt-4">
                          <button type="button" onClick={() => setStep(1)} className="btn-ghost flex-1 py-3">← Back</button>
                          <button
                            type="button"
                            disabled={!form.service}
                            onClick={() => setStep(3)}
                            className="btn-brand flex-[2] flex items-center justify-center gap-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Continue <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Your Message</h3>
                          <p className="text-sm text-slate-600">Tell us more about your project and goals.</p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-slate-700 mb-2 block">Project Description *</label>
                          <textarea
                            name="message" required rows={6} value={form.message} onChange={handleChange}
                            className="input-field resize-none"
                            placeholder="Describe your project — what you want to build, your timeline, any specific requirements..."
                          />
                        </div>
                        <div className="flex gap-4 pt-4">
                          <button type="button" onClick={() => setStep(2)} className="btn-ghost flex-1 py-3">← Back</button>
                          <button
                            type="submit"
                            disabled={!form.message}
                            className="btn-brand flex-[2] flex items-center justify-center gap-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Send className="w-5 h-5" />
                            Send Message
                          </button>
                        </div>
                      </div>
                    )}
                  </form>

                  {/* Quick contact note */}
                  <p className="text-sm text-slate-500 text-center mt-8">
                    Prefer direct contact?{" "}
                    <a href="tel:+919025088044" className="text-blue-600 hover:text-blue-700 font-semibold">Call +91 90250 88044</a>{" "}
                    or{" "}
                    <a href="https://wa.me/919025088044" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">
                      WhatsApp us
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA QUICK ACTIONS ==================== */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href="mailto:info.dottechsolutions@gmail.com"
              className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 group shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">Quick Email</div>
                <div className="text-sm text-slate-500">info.dottechsolutions@gmail.com</div>
              </div>
            </a>
            <a href="tel:+919025088044"
              className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 group shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">Call Direct</div>
                <div className="text-sm text-slate-500">+91 90250 88044</div>
              </div>
            </a>
            <a href="https://wa.me/919025088044" target="_blank" rel="noopener noreferrer"
              className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 group shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">WhatsApp Chat</div>
                <div className="text-sm text-slate-500">Fastest response</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
