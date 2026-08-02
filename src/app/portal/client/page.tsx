"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
  LayoutDashboard, FileText, FolderOpen, MessageSquare,
  Calendar, LogOut, CheckCircle, Clock, AlertCircle,
  TrendingUp, CreditCard, Download, Send, ChevronRight, X
} from "lucide-react";

/* ======================== TYPES & DATA ======================== */

type TabId = "dashboard" | "invoices" | "documents" | "support" | "meetings";

const navItems: { id: TabId; icon: React.ElementType; label: string }[] = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "invoices", icon: FileText, label: "Invoices" },
  { id: "documents", icon: FolderOpen, label: "Documents" },
  { id: "support", icon: MessageSquare, label: "Support" },
  { id: "meetings", icon: Calendar, label: "Meetings" },
];

/* ======================== PORTAL LAYOUT ======================== */
function PortalLayout({ children, activeTab, setActiveTab }: {
  children: React.ReactNode;
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03040A] flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ background: "rgba(8, 12, 22, 0.98)", borderRight: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(24px)" }}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-white/[0.06]">
          <Logo size="sm" showWordmark />
          <div className="mt-3 px-2 py-1.5 rounded-lg text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 inline-block">
            Client Portal
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMobileSidebarOpen(false); }}
              className={`sidebar-nav-item w-full border ${
                activeTab === item.id ? "active border-blue-500/20" : "border-transparent"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-white/[0.06] space-y-2">
          <div className="px-3 py-2 text-xs text-slate-600">
            <div className="text-slate-400 font-medium">Demo Client Account</div>
            <div>client@example.com</div>
          </div>
          <Link href="/" className="sidebar-nav-item border border-transparent w-full text-red-500 hover:text-red-400 hover:bg-red-500/5">
            <LogOut className="w-4 h-4" />
            Exit Portal
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setMobileSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="h-14 border-b border-white/[0.06] px-6 flex items-center justify-between sticky top-0 z-20"
          style={{ background: "rgba(8, 12, 22, 0.9)", backdropFilter: "blur(12px)" }}>
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-lg glass-card text-slate-400"
              onClick={() => setMobileSidebarOpen(true)}
            >☰</button>
            <h1 className="text-sm font-semibold text-white capitalize">{activeTab.replace("-", " ")}</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              C
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

/* ======================== TAB VIEWS ======================== */

function DashboardTab() {
  const milestones = [
    { label: "Project Kickoff", done: true },
    { label: "Design Approval", done: true },
    { label: "Development Phase 1", done: false },
    { label: "Testing & QA", done: false },
    { label: "Final Delivery", done: false },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Welcome back!</h2>
        <p className="text-sm text-slate-500">Here&apos;s an overview of your project status.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Project Progress", value: "40%", icon: TrendingUp, color: "text-blue-400", bg: "rgba(59,130,246,0.1)" },
          { label: "Invoices Paid", value: "2 / 3", icon: CreditCard, color: "text-green-400", bg: "rgba(16,185,129,0.1)" },
          { label: "Open Tickets", value: "1", icon: MessageSquare, color: "text-yellow-400", bg: "rgba(234,179,8,0.1)" },
          { label: "Days to Deadline", value: "28", icon: Clock, color: "text-purple-400", bg: "rgba(168,85,247,0.1)" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: stat.bg }}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-slate-600 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Project Status */}
      <div className="glass-card p-6">
        <h3 className="font-bold text-white mb-4">Project Milestones</h3>
        <div className="space-y-3">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-center gap-3">
              {m.done ? (
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-slate-700 flex-shrink-0" />
              )}
              <span className={`text-sm ${m.done ? "text-slate-400 line-through" : "text-white"}`}>{m.label}</span>
              {!m.done && m === milestones.find(x => !x.done) && (
                <span className="text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full ml-auto">In Progress</span>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-5">
          <div className="flex justify-between text-xs text-slate-600 mb-1.5">
            <span>Overall Progress</span><span>40%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "40%" }} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-6">
        <h3 className="font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: "Design mockups approved", time: "2 hours ago", type: "success" },
            { action: "Invoice #002 sent for payment", time: "1 day ago", type: "info" },
            { action: "Kickoff meeting completed", time: "3 days ago", type: "success" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${item.type === "success" ? "bg-green-400" : "bg-blue-400"}`} />
              <div>
                <div className="text-slate-300">{item.action}</div>
                <div className="text-xs text-slate-600">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InvoicesTab() {
  const invoices = [
    { id: "INV-001", desc: "Project Kickoff & Discovery", amount: "₹30,000", status: "Paid", date: "Jan 5, 2025" },
    { id: "INV-002", desc: "Design Phase Completion", amount: "₹45,000", status: "Paid", date: "Jan 28, 2025" },
    { id: "INV-003", desc: "Development Phase 1", amount: "₹60,000", status: "Pending", date: "Feb 15, 2025" },
  ];

  return (
    <div className="space-y-5 max-w-3xl">
      <h2 className="text-xl font-bold text-white">Invoices & Billing</h2>
      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Invoice</th><th>Description</th><th>Amount</th><th>Date</th><th>Status</th><th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td className="font-mono text-blue-400 text-xs">{inv.id}</td>
                <td>{inv.desc}</td>
                <td className="font-semibold text-white">{inv.amount}</td>
                <td>{inv.date}</td>
                <td>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${inv.status === "Paid" ? "status-done" : "status-pending"}`}>
                    {inv.status}
                  </span>
                </td>
                <td>
                  <button className="p-1.5 rounded glass-card text-slate-500 hover:text-white transition-colors">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DocumentsTab() {
  const docs = [
    { name: "Project Brief.pdf", size: "1.2 MB", type: "PDF", date: "Jan 3, 2025" },
    { name: "Design Mockups.fig", size: "8.5 MB", type: "Figma", date: "Jan 20, 2025" },
    { name: "API Documentation.pdf", size: "2.1 MB", type: "PDF", date: "Feb 1, 2025" },
    { name: "Contract & NDA.pdf", size: "450 KB", type: "PDF", date: "Jan 2, 2025" },
  ];
  return (
    <div className="space-y-5 max-w-3xl">
      <h2 className="text-xl font-bold text-white">Documents & Files</h2>
      <div className="space-y-3">
        {docs.map((doc) => (
          <div key={doc.name} className="glass-card p-4 flex items-center justify-between gap-4 hover:border-blue-500/20 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-xs font-bold text-blue-400">
                {doc.type}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{doc.name}</div>
                <div className="text-xs text-slate-600">{doc.size} · {doc.date}</div>
              </div>
            </div>
            <button className="p-2 rounded-lg glass-card text-slate-500 hover:text-white transition-colors flex-shrink-0">
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportTab() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "support", text: "Hello! How can we help you today?", time: "2:00 PM" },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { from: "client", text: message, time: "Now" }]);
    setMessage("");
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "support", text: "Thanks for your message! Our team will respond shortly. For urgent matters, call +91 90250 88044.", time: "Now" }]);
    }, 1000);
  };

  return (
    <div className="space-y-5 max-w-2xl">
      <h2 className="text-xl font-bold text-white">Support</h2>
      <div className="glass-card p-4 flex items-center gap-3 mb-4" style={{ background: "rgba(26,86,219,0.06)", borderColor: "rgba(26,86,219,0.2)" }}>
        <AlertCircle className="w-4 h-4 text-blue-400" />
        <p className="text-xs text-slate-400">For urgent issues, call <a href="tel:+919025088044" className="text-blue-400">+91 90250 88044</a> or email <a href="mailto:info.dottechsolutions@gmail.com" className="text-blue-400">info.dottechsolutions@gmail.com</a></p>
      </div>

      {/* Chat */}
      <div className="glass-card flex flex-col h-96">
        <div className="p-4 border-b border-white/[0.06]">
          <div className="text-sm font-bold text-white">Live Support Chat</div>
          <div className="text-xs text-green-400 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            Online
          </div>
        </div>
        <div className="flex-1 p-4 space-y-3 overflow-y-auto scroll-area">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
              <div className={msg.from === "client" ? "user-bubble" : "ai-bubble"}>
                {msg.text}
                <div className="text-xs text-slate-600 mt-1">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-white/[0.06] flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="input-field py-2 text-sm flex-1"
          />
          <button onClick={sendMessage} className="btn-brand px-3 py-2">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function MeetingsTab() {
  return (
    <div className="space-y-5 max-w-2xl">
      <h2 className="text-xl font-bold text-white">Meetings</h2>
      <div className="glass-card p-6 text-center">
        <Calendar className="w-12 h-12 text-slate-700 mx-auto mb-4" />
        <h3 className="text-slate-400 font-semibold mb-2">Schedule a Meeting</h3>
        <p className="text-sm text-slate-600 mb-5">Book a call with your project manager to discuss progress, questions, or next steps.</p>
        <a
          href="mailto:info.dottechsolutions@gmail.com?subject=Meeting Request"
          className="btn-brand inline-flex items-center gap-2 text-sm"
        >
          Book a Meeting <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ======================== MAIN PAGE ======================== */
export default function ClientPortalPage() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");

  const tabComponents: Record<TabId, React.ReactNode> = {
    dashboard: <DashboardTab />,
    invoices: <InvoicesTab />,
    documents: <DocumentsTab />,
    support: <SupportTab />,
    meetings: <MeetingsTab />,
  };

  return (
    <PortalLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {tabComponents[activeTab]}
    </PortalLayout>
  );
}
