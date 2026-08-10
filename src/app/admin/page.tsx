"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
  LayoutDashboard, Users, FolderKanban, DollarSign,
  Briefcase, LogOut, TrendingUp, UserCheck, FileText,
  Plus, Activity
} from "lucide-react";
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from "recharts";

type TabId = "dashboard" | "clients" | "employees" | "projects" | "finance" | "crm" | "cms";

const navItems: { id: TabId; icon: React.ElementType; label: string }[] = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "clients", icon: UserCheck, label: "Clients" },
  { id: "employees", icon: Users, label: "Employees" },
  { id: "projects", icon: FolderKanban, label: "Projects" },
  { id: "crm", icon: Briefcase, label: "CRM / Leads" },
  { id: "finance", icon: DollarSign, label: "Finance" },
  { id: "cms", icon: FileText, label: "CMS" },
];

const revenueData = [
  { month: "Aug", revenue: 120000, expenses: 60000 },
  { month: "Sep", revenue: 145000, expenses: 70000 },
  { month: "Oct", revenue: 130000, expenses: 65000 },
  { month: "Nov", revenue: 190000, expenses: 80000 },
  { month: "Dec", revenue: 220000, expenses: 90000 },
  { month: "Jan", revenue: 175000, expenses: 75000 },
  { month: "Feb", revenue: 210000, expenses: 85000 },
];

/* ======================== DASHBOARD ======================== */
function DashboardTab() {
  const metrics = [
    { label: "Total Revenue (MTD)", value: "₹2,10,000", change: "+18%", positive: true, icon: TrendingUp, color: "text-green-400", bg: "rgba(16,185,129,0.1)" },
    { label: "Active Projects", value: "8", change: "+2", positive: true, icon: FolderKanban, color: "text-blue-400", bg: "rgba(59,130,246,0.1)" },
    { label: "Total Clients", value: "24", change: "+3", positive: true, icon: UserCheck, color: "text-purple-400", bg: "rgba(168,85,247,0.1)" },
    { label: "Open Leads", value: "12", change: "-4", positive: false, icon: Briefcase, color: "text-yellow-400", bg: "rgba(234,179,8,0.1)" },
    { label: "Total Employees", value: "18", change: "+1", positive: true, icon: Users, color: "text-cyan-400", bg: "rgba(6,182,212,0.1)" },
    { label: "Pending Invoices", value: "₹85,000", change: "3 invoices", positive: false, icon: FileText, color: "text-red-400", bg: "rgba(239,68,68,0.1)" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Admin Dashboard</h2>
        <p className="text-sm text-slate-500">Business overview for DotTech Solutions</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs text-slate-600 mb-1">{m.label}</div>
                <div className={`text-xl font-black ${m.color}`}>{m.value}</div>
              </div>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: m.bg }}>
                <m.icon className={`w-4 h-4 ${m.color}`} />
              </div>
            </div>
            <div className={`text-xs font-semibold mt-2 ${m.positive ? "text-green-400" : "text-red-400"}`}>
              {m.change} {m.positive ? "↑" : "↓"}
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="glass-card p-6">
        <h3 className="font-bold text-white mb-4">Revenue vs Expenses (6 months)</h3>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1A56DB" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#1A56DB" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false}
              tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ background: "rgba(13,21,37,0.95)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", fontSize: "12px" }}
              labelStyle={{ color: "#94A3B8" }}
              formatter={(v: unknown) => [`₹${Number(v).toLocaleString()}`, ""]}
            />
            <Area type="monotone" dataKey="revenue" stroke="#1A56DB" strokeWidth={2} fill="url(#rev)" name="Revenue" />
            <Area type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} fill="url(#exp)" name="Expenses" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="glass-card p-5">
          <h4 className="font-bold text-white mb-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-400" />Recent Activity
          </h4>
          <div className="space-y-3">
            {[
              { text: "New lead added — Enterprise Client", time: "30 min ago", color: "bg-blue-400" },
              { text: "Invoice #INV-008 paid — ₹60,000", time: "2h ago", color: "bg-green-400" },
              { text: "New employee onboarded — Frontend Dev", time: "1 day ago", color: "bg-purple-400" },
              { text: "Project Horizon marked complete", time: "2 days ago", color: "bg-cyan-400" },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <div className={`w-1.5 h-1.5 ${a.color} rounded-full mt-1.5 flex-shrink-0`} />
                <div>
                  <div className="text-slate-300">{a.text}</div>
                  <div className="text-slate-600">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <h4 className="font-bold text-white mb-3 flex items-center gap-2">
            <FolderKanban className="w-4 h-4 text-purple-400" />Active Projects
          </h4>
          <div className="space-y-3">
            {[
              { name: "Project Alpha", client: "Client A", progress: 75, status: "On Track" },
              { name: "Project Beta", client: "Client B", progress: 40, status: "In Progress" },
              { name: "Project Gamma", client: "Client C", progress: 90, status: "Near Complete" },
            ].map((p, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <div>
                    <div className="text-xs font-medium text-slate-300">{p.name}</div>
                    <div className="text-xs text-slate-600">{p.client}</div>
                  </div>
                  <span className="text-xs text-blue-400">{p.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ======================== CLIENTS TAB ======================== */
function ClientsTab() {
  const clients = [
    { name: "Client Alpha Corp", contact: "John D.", email: "john@alpha.com", projects: 2, revenue: "₹1,80,000", status: "Active" },
    { name: "Client Beta Ltd.", contact: "Sarah M.", email: "sarah@beta.com", projects: 1, revenue: "₹95,000", status: "Active" },
    { name: "Client Gamma Inc.", contact: "Raj K.", email: "raj@gamma.in", projects: 3, revenue: "₹2,40,000", status: "Active" },
    { name: "Client Delta", contact: "Ana P.", email: "ana@delta.io", projects: 1, revenue: "₹60,000", status: "Inactive" },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Client Management</h2>
        <button className="btn-brand text-xs px-4 py-2 flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" />Add Client</button>
      </div>
      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>Client</th><th>Contact</th><th>Projects</th><th>Revenue</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {clients.map((c, i) => (
              <tr key={i}>
                <td>
                  <div className="font-medium text-white text-sm">{c.name}</div>
                  <div className="text-xs text-slate-600">{c.email}</div>
                </td>
                <td>{c.contact}</td>
                <td>{c.projects}</td>
                <td className="font-semibold text-green-400">{c.revenue}</td>
                <td><span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.status === "Active" ? "status-active" : "status-closed"}`}>{c.status}</span></td>
                <td><button className="text-xs text-blue-400 hover:text-blue-300">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ======================== EMPLOYEES TAB ======================== */
function EmployeesTab() {
  const employees = [
    { name: "Team Member 1", role: "Full Stack Developer", dept: "Engineering", status: "Active", joined: "Jan 2023" },
    { name: "Team Member 2", role: "UI/UX Designer", dept: "Design", status: "Active", joined: "Mar 2023" },
    { name: "Team Member 3", role: "Backend Developer", dept: "Engineering", status: "Active", joined: "Jun 2023" },
    { name: "Team Member 4", role: "Project Manager", dept: "Operations", status: "Active", joined: "Sep 2023" },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Employee Management</h2>
        <button className="btn-brand text-xs px-4 py-2 flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" />Add Employee</button>
      </div>
      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>Employee</th><th>Role</th><th>Department</th><th>Joined</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {employees.map((e, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                      {e.name.charAt(0)}
                    </div>
                    <div className="font-medium text-white text-sm">{e.name}</div>
                  </div>
                </td>
                <td>{e.role}</td>
                <td>{e.dept}</td>
                <td>{e.joined}</td>
                <td><span className="status-active px-2.5 py-0.5 rounded-full text-xs font-semibold">{e.status}</span></td>
                <td><button className="text-xs text-blue-400">Manage</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ======================== PROJECTS TAB ======================== */
function ProjectsTab() {
  const projects = [
    { name: "Project Alpha", client: "Client A", lead: "Dev 1", status: "In Progress", due: "Mar 15", priority: "high" },
    { name: "Project Beta", client: "Client B", lead: "Dev 2", status: "Planning", due: "Apr 1", priority: "medium" },
    { name: "Project Gamma", client: "Client C", lead: "Dev 1", status: "Review", due: "Feb 28", priority: "high" },
    { name: "Project Delta", client: "Client D", lead: "Dev 3", status: "Done", due: "Feb 10", priority: "low" },
  ];
  const statusClass: Record<string, string> = {
    "In Progress": "status-pending", "Planning": "status-review", "Review": "status-active", "Done": "status-done"
  };
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Project Management</h2>
        <button className="btn-brand text-xs px-4 py-2 flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" />New Project</button>
      </div>
      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead><tr><th>Project</th><th>Client</th><th>Lead</th><th>Due Date</th><th>Priority</th><th>Status</th></tr></thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={i}>
                <td className="font-medium text-white text-sm">{p.name}</td>
                <td>{p.client}</td>
                <td>{p.lead}</td>
                <td>{p.due}</td>
                <td><span className={`priority-${p.priority} text-xs font-semibold capitalize`}>● {p.priority}</span></td>
                <td><span className={`${statusClass[p.status]} px-2.5 py-0.5 rounded-full text-xs font-semibold`}>{p.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ======================== CRM TAB ======================== */
function CRMTab() {
  const pipeline = [
    { stage: "New Lead", leads: ["Lead A — E-commerce App", "Lead B — AI Dashboard"], color: "border-blue-500/30" },
    { stage: "Discovery", leads: ["Lead C — ERP System"], color: "border-yellow-500/30" },
    { stage: "Proposal Sent", leads: ["Lead D — Mobile App", "Lead E — SaaS Platform"], color: "border-purple-500/30" },
    { stage: "Negotiation", leads: ["Lead F — Web Platform"], color: "border-orange-500/30" },
    { stage: "Won ✓", leads: ["Lead G — AI Integration"], color: "border-green-500/30" },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">CRM — Lead Pipeline</h2>
        <button className="btn-brand text-xs px-4 py-2 flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" />Add Lead</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 overflow-x-auto">
        {pipeline.map((col) => (
          <div key={col.stage} className={`glass-card p-3 border-t-2 ${col.color} min-w-40`}>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{col.stage}</div>
            <div className="space-y-2">
              {col.leads.map((lead) => (
                <div key={lead} className="kanban-card text-xs text-slate-300 p-2.5">{lead}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ======================== FINANCE TAB ======================== */
function FinanceTab() {
  const invoices = [
    { id: "INV-006", client: "Client A", amount: "₹60,000", status: "Paid", date: "Jan 15" },
    { id: "INV-007", client: "Client B", amount: "₹45,000", status: "Paid", date: "Jan 28" },
    { id: "INV-008", client: "Client C", amount: "₹85,000", status: "Pending", date: "Feb 5" },
    { id: "INV-009", client: "Client D", amount: "₹30,000", status: "Overdue", date: "Jan 31" },
  ];
  const statusClass: Record<string, string> = { "Paid": "status-done", "Pending": "status-pending", "Overdue": "status-closed" };
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-white">Finance & Invoices</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Revenue (Feb)", value: "₹2,10,000", color: "text-green-400" },
          { label: "Expenses (Feb)", value: "₹85,000", color: "text-red-400" },
          { label: "Net Profit", value: "₹1,25,000", color: "text-blue-400" },
          { label: "Outstanding", value: "₹1,15,000", color: "text-yellow-400" },
        ].map((s) => (
          <div key={s.label} className="glass-card p-4">
            <div className="text-xs text-slate-600 mb-1">{s.label}</div>
            <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-white/[0.06] flex justify-between items-center">
          <h3 className="font-bold text-white text-sm">Recent Invoices</h3>
          <button className="btn-brand text-xs px-3 py-1.5 flex items-center gap-1"><Plus className="w-3 h-3" />New Invoice</button>
        </div>
        <table className="data-table">
          <thead><tr><th>Invoice</th><th>Client</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td className="font-mono text-blue-400 text-xs">{inv.id}</td>
                <td>{inv.client}</td>
                <td className="font-semibold text-white">{inv.amount}</td>
                <td>{inv.date}</td>
                <td><span className={`${statusClass[inv.status]} px-2.5 py-0.5 rounded-full text-xs font-semibold`}>{inv.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ======================== CMS TAB ======================== */
function CMSTab() {
  return (
    <div className="space-y-5 max-w-3xl">
      <h2 className="text-xl font-bold text-white">Content Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Blog Posts", count: 0, icon: "📝", desc: "Published articles", action: "Add Post" },
          { label: "Job Listings", count: 0, icon: "💼", desc: "Active openings", action: "Add Job" },
          { label: "Newsletter", count: 0, icon: "📧", desc: "Subscribers", action: "View List" },
        ].map((item) => (
          <div key={item.label} className="glass-card p-5 text-center">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="text-2xl font-black text-white mb-0.5">{item.count}</div>
            <div className="text-xs text-slate-600 mb-3">{item.label} · {item.desc}</div>
            <button className="btn-ghost text-xs px-4 py-2">{item.action}</button>
          </div>
        ))}
      </div>
      <div className="glass-card p-5"
        style={{ borderColor: "rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.04)" }}>
        <p className="text-xs text-slate-500 text-center">
          CMS integration with a database backend (NestJS + PostgreSQL) will be available in the full production version.
          For now, manage content directly in the source data files.
        </p>
      </div>
    </div>
  );
}

/* ======================== MAIN PAGE ======================== */
export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabComponents: Record<TabId, React.ReactNode> = {
    dashboard: <DashboardTab />,
    clients: <ClientsTab />,
    employees: <EmployeesTab />,
    projects: <ProjectsTab />,
    crm: <CRMTab />,
    finance: <FinanceTab />,
    cms: <CMSTab />,
  };

  return (
    <div className="min-h-screen bg-[#03040A] flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ background: "rgba(8,12,22,0.98)", borderRight: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(24px)" }}
      >
        <div className="p-5 border-b border-white/[0.06]">
          <Logo size="sm" showWordmark />
          <div className="mt-3 px-2 py-1.5 rounded-lg text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 inline-block">
            Admin Panel
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`sidebar-nav-item w-full border ${activeTab === item.id ? "active border-cyan-500/20" : "border-transparent"}`}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/[0.06]">
          <Link href="/" className="sidebar-nav-item border border-transparent w-full text-red-500 hover:text-red-400">
            <LogOut className="w-4 h-4" />Exit Admin
          </Link>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="h-14 border-b border-white/[0.06] px-6 flex items-center justify-between sticky top-0 z-20"
          style={{ background: "rgba(8,12,22,0.9)", backdropFilter: "blur(12px)" }}>
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-lg glass-card text-slate-400" onClick={() => setSidebarOpen(true)}>☰</button>
            <h1 className="text-sm font-semibold text-white capitalize">{activeTab}</h1>
          </div>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">A</div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{tabComponents[activeTab]}</main>
      </div>
    </div>
  );
}
