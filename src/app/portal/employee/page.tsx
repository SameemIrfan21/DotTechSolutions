"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
  LayoutDashboard, CheckSquare, Clock, Calendar, DollarSign,
  BookOpen, LogOut, ClockIcon, ChevronRight, Plus, X, Send
} from "lucide-react";

type TabId = "dashboard" | "attendance" | "tasks" | "meetings" | "salary" | "knowledge";

const navItems: { id: TabId; icon: React.ElementType; label: string }[] = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "attendance", icon: ClockIcon, label: "Attendance & Leave" },
  { id: "tasks", icon: CheckSquare, label: "My Tasks" },
  { id: "meetings", icon: Calendar, label: "Meetings" },
  { id: "salary", icon: DollarSign, label: "Salary" },
  { id: "knowledge", icon: BookOpen, label: "Knowledge Base" },
];

/* ======================== DASHBOARD TAB ======================== */
function DashboardTab() {
  const [clockedIn, setClockedIn] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (clockedIn) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [clockedIn]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600).toString().padStart(2, "0");
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Good day, Team Member! 👋</h2>
        <p className="text-sm text-slate-500">Here&apos;s your daily overview.</p>
      </div>

      {/* Clock In/Out */}
      <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6"
        style={{ background: clockedIn ? "rgba(16,185,129,0.06)" : "rgba(13,21,37,0.65)", borderColor: clockedIn ? "rgba(16,185,129,0.25)" : undefined }}>
        <div className="text-center">
          <div className="text-4xl font-mono font-black text-white">{formatTime(time)}</div>
          <div className="text-xs text-slate-600 mt-1">{clockedIn ? "Session active" : "Not clocked in"}</div>
        </div>
        <div className="flex-1" />
        <button
          onClick={() => { setClockedIn(!clockedIn); if (clockedIn) setTime(0); }}
          className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
            clockedIn
              ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
              : "btn-brand"
          }`}
        >
          {clockedIn ? "Clock Out" : "Clock In"}
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Tasks Today", value: "5", color: "text-blue-400", bg: "rgba(59,130,246,0.1)" },
          { label: "Tasks Done", value: "3", color: "text-green-400", bg: "rgba(16,185,129,0.1)" },
          { label: "Leave Days Left", value: "12", color: "text-purple-400", bg: "rgba(168,85,247,0.1)" },
          { label: "Meetings Today", value: "2", color: "text-yellow-400", bg: "rgba(234,179,8,0.1)" },
        ].map((s) => (
          <div key={s.label} className="glass-card p-4">
            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-600 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Today's Tasks Preview */}
      <div className="glass-card p-6">
        <h3 className="font-bold text-white mb-4">Today&apos;s Priority Tasks</h3>
        <div className="space-y-2">
          {[
            { task: "Review design mockups for Client A", done: true, priority: "high" },
            { task: "Fix bug in authentication module", done: true, priority: "high" },
            { task: "Update API documentation", done: false, priority: "medium" },
            { task: "Code review — PR #47", done: false, priority: "medium" },
            { task: "Weekly progress report", done: false, priority: "low" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-white/[0.04] last:border-0">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                t.priority === "high" ? "bg-red-400" : t.priority === "medium" ? "bg-yellow-400" : "bg-green-400"
              }`} />
              <span className={`text-sm flex-1 ${t.done ? "text-slate-600 line-through" : "text-slate-300"}`}>{t.task}</span>
              {t.done && <CheckSquare className="w-3.5 h-3.5 text-green-400" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ======================== ATTENDANCE TAB ======================== */
function AttendanceTab() {
  const [leaveForm, setLeaveForm] = useState(false);

  const attendance = [
    { date: "Mon, Feb 3", clockIn: "9:02 AM", clockOut: "6:15 PM", hours: "9h 13m", status: "Present" },
    { date: "Tue, Feb 4", clockIn: "8:55 AM", clockOut: "6:00 PM", hours: "9h 5m", status: "Present" },
    { date: "Wed, Feb 5", clockIn: "--", clockOut: "--", hours: "--", status: "Leave" },
    { date: "Thu, Feb 6", clockIn: "9:10 AM", clockOut: "6:30 PM", hours: "9h 20m", status: "Present" },
    { date: "Fri, Feb 7", clockIn: "9:00 AM", clockOut: "5:45 PM", hours: "8h 45m", status: "Present" },
  ];

  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Attendance & Leave</h2>
        <button onClick={() => setLeaveForm(true)} className="btn-brand text-xs px-4 py-2 flex items-center gap-1.5">
          <Plus className="w-3.5 h-3.5" /> Apply Leave
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="data-table">
          <thead>
            <tr><th>Date</th><th>Clock In</th><th>Clock Out</th><th>Hours</th><th>Status</th></tr>
          </thead>
          <tbody>
            {attendance.map((a, i) => (
              <tr key={i}>
                <td className="text-slate-300">{a.date}</td>
                <td>{a.clockIn}</td>
                <td>{a.clockOut}</td>
                <td className="font-medium text-white">{a.hours}</td>
                <td>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${a.status === "Present" ? "status-done" : "status-pending"}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Leave Application Modal */}
      {leaveForm && (
        <div className="modal-overlay" onClick={() => setLeaveForm(false)}>
          <div className="glass-card w-full max-w-md p-7" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLeaveForm(false)} className="absolute top-4 right-4 w-7 h-7 glass-card flex items-center justify-center text-slate-500 hover:text-white"><X className="w-3.5 h-3.5" /></button>
            <h3 className="text-lg font-bold text-white mb-5">Apply for Leave</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setLeaveForm(false); }}>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Leave Type</label>
                <select className="input-field">
                  <option>Casual Leave</option>
                  <option>Sick Leave</option>
                  <option>Earned Leave</option>
                  <option>Work from Home</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">From Date</label>
                  <input type="date" className="input-field" />
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">To Date</label>
                  <input type="date" className="input-field" />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Reason</label>
                <textarea rows={3} className="input-field resize-none" placeholder="Brief reason for leave..." />
              </div>
              <button type="submit" className="btn-brand w-full">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ======================== TASKS TAB (KANBAN) ======================== */
function TasksTab() {
  const cols = [
    { id: "todo", label: "To Do", color: "text-slate-400", border: "border-slate-700" },
    { id: "inprogress", label: "In Progress", color: "text-blue-400", border: "border-blue-700/40" },
    { id: "review", label: "Review", color: "text-yellow-400", border: "border-yellow-700/40" },
    { id: "done", label: "Done", color: "text-green-400", border: "border-green-700/40" },
  ];
  const [tasks] = useState({
    todo: [
      { id: 1, title: "Write unit tests for auth module", priority: "medium" },
      { id: 2, title: "Update README documentation", priority: "low" },
    ],
    inprogress: [
      { id: 3, title: "Implement payment gateway integration", priority: "high" },
      { id: 4, title: "Fix responsive layout on mobile", priority: "medium" },
    ],
    review: [
      { id: 5, title: "Code review — user dashboard PR", priority: "high" },
    ],
    done: [
      { id: 6, title: "Setup CI/CD pipeline", priority: "high" },
      { id: 7, title: "Database schema design", priority: "high" },
    ],
  });

  const priorityColor: Record<string, string> = { high: "text-red-400", medium: "text-yellow-400", low: "text-green-400" };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Kanban Board</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cols.map((col) => (
          <div key={col.id} className={`glass-card p-4 border-t-2 ${col.border}`}>
            <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${col.color}`}>
              {col.label} · {tasks[col.id as keyof typeof tasks].length}
            </div>
            <div className="space-y-2">
              {tasks[col.id as keyof typeof tasks].map((task) => (
                <div key={task.id} className="kanban-card">
                  <p className="text-xs font-medium text-slate-300 mb-2 leading-relaxed">{task.title}</p>
                  <span className={`text-xs font-semibold ${priorityColor[task.priority]}`}>
                    ● {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ======================== SALARY TAB ======================== */
function SalaryTab() {
  return (
    <div className="space-y-5 max-w-2xl">
      <h2 className="text-xl font-bold text-white">Salary & Payslips</h2>
      <div className="glass-card p-6">
        <h3 className="font-bold text-white mb-4">Current Month Breakdown</h3>
        <div className="space-y-3">
          {[
            { label: "Basic Salary", amount: "₹40,000", type: "credit" },
            { label: "HRA", amount: "₹16,000", type: "credit" },
            { label: "Conveyance Allowance", amount: "₹1,600", type: "credit" },
            { label: "PF Deduction", amount: "- ₹4,800", type: "debit" },
            { label: "Professional Tax", amount: "- ₹200", type: "debit" },
            { label: "TDS", amount: "- ₹2,000", type: "debit" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/[0.04]">
              <span className="text-sm text-slate-400">{item.label}</span>
              <span className={`text-sm font-semibold ${item.type === "credit" ? "text-green-400" : "text-red-400"}`}>{item.amount}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3">
            <span className="font-bold text-white">Net Pay</span>
            <span className="text-xl font-black text-blue-400">₹50,600</span>
          </div>
        </div>
      </div>
      <div className="glass-card p-5 text-center">
        <p className="text-xs text-slate-600 mb-3">For salary queries, contact HR at</p>
        <a href="mailto:info.dottechsolutions@gmail.com" className="text-blue-400 text-sm">info.dottechsolutions@gmail.com</a>
      </div>
    </div>
  );
}

/* ======================== KNOWLEDGE BASE TAB ======================== */
function KnowledgeTab() {
  const articles = [
    { title: "Developer Onboarding Guide", category: "Getting Started", icon: "🚀" },
    { title: "Git Workflow & Branching Strategy", category: "Engineering", icon: "🌿" },
    { title: "Code Review Guidelines", category: "Engineering", icon: "🔍" },
    { title: "API Design Standards", category: "Engineering", icon: "⚙️" },
    { title: "UI/UX Design System", category: "Design", icon: "🎨" },
    { title: "Deployment & DevOps Runbook", category: "DevOps", icon: "☁️" },
  ];
  return (
    <div className="space-y-5 max-w-3xl">
      <h2 className="text-xl font-bold text-white">Knowledge Base</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {articles.map((a) => (
          <div key={a.title} className="glass-card-hover p-4 flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-dark-700 flex items-center justify-center text-lg">{a.icon}</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">{a.title}</div>
              <div className="text-xs text-slate-600">{a.category}</div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-blue-400 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ======================== MEETINGS TAB ======================== */
function MeetingsTab() {
  return (
    <div className="space-y-5 max-w-2xl">
      <h2 className="text-xl font-bold text-white">Meetings</h2>
      <div className="space-y-3">
        {[
          { title: "Weekly Team Standup", time: "Mon, 9:30 AM", type: "Recurring", attendees: "Full Team" },
          { title: "Client A — Progress Review", time: "Tue, 3:00 PM", type: "Client Call", attendees: "Dev + PM" },
          { title: "Sprint Planning", time: "Fri, 11:00 AM", type: "Internal", attendees: "Engineering" },
        ].map((m, i) => (
          <div key={i} className="glass-card p-4 flex items-center gap-4 hover:border-blue-500/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-white">{m.title}</div>
              <div className="text-xs text-slate-600">{m.time} · {m.attendees}</div>
            </div>
            <span className="text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full">{m.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ======================== MAIN PAGE ======================== */
export default function EmployeePortalPage() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabComponents: Record<TabId, React.ReactNode> = {
    dashboard: <DashboardTab />,
    attendance: <AttendanceTab />,
    tasks: <TasksTab />,
    meetings: <MeetingsTab />,
    salary: <SalaryTab />,
    knowledge: <KnowledgeTab />,
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
          <div className="mt-3 px-2 py-1.5 rounded-lg text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 inline-block">
            Employee Portal
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`sidebar-nav-item w-full border ${activeTab === item.id ? "active border-purple-500/20" : "border-transparent"}`}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/[0.06]">
          <Link href="/" className="sidebar-nav-item border border-transparent w-full text-red-500 hover:text-red-400">
            <LogOut className="w-4 h-4" />Exit Portal
          </Link>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="h-14 border-b border-white/[0.06] px-6 flex items-center justify-between sticky top-0 z-20"
          style={{ background: "rgba(8,12,22,0.9)", backdropFilter: "blur(12px)" }}>
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-lg glass-card text-slate-400" onClick={() => setSidebarOpen(true)}>☰</button>
            <h1 className="text-sm font-semibold text-white capitalize">{activeTab.replace("-", " ")}</h1>
          </div>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-xs font-bold">E</div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{tabComponents[activeTab]}</main>
      </div>
    </div>
  );
}
