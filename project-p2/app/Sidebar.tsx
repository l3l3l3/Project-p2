
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  CircleHelp,
  Users,
  UserRound,
  ShieldCheck,
  History,
  Files,
  FileText,
  ClipboardCheck,
  FolderOpen,
  ScrollText,
  ChevronDown,
  ChevronRight,
  Clock3,
  Bell,
  Settings,
  Trash2,
} from "lucide-react";

const groups = [
  {
    title: "ภาพรวม",
    items: [
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
      
    ],
  },
  {
    title: "จัดการพนักงาน",
    key: "staff",
    icon: Users,
    items: [
      { label: "ผู้ใช้งาน", href: "/staff/users", icon: UserRound },
      { label: "บทบาทและสิทธิ์", href: "/staff/roles", icon: ShieldCheck },
      {
        label: "ประวัติการเข้าสู่ระบบ",
        href: "/staff/login-history",
        icon: History,
      },
    ],
  },
  {
    title: "จัดการเอกสาร",
    key: "documents",
    icon: Files,
    items: [
      { label: "เอกสารทั้งหมด", href: "/documents", icon: Files },
      { label: "เอกสารของฉัน", href: "/documents/my", icon: FileText },
      {
        label: "ส่งตรวจสอบเอกสาร",
        href: "/documents/review",
        icon: ClipboardCheck,
      },
      {
        label: "คลังไฟล์และเผยแพร่",
        href: "/documents/archive",
        icon: FolderOpen,
      },
      {
        label: "ประวัติเวอร์ชัน",
        href: "/documents/versions",
        icon: History,
      },
    ],
  },
  {
    title: "ตรวจสอบระบบ",
    items: [
      { label: "งานรออนุมัติ", href: "/approvals", icon: Clock3 },
      {
        label: "การแจ้งเตือน",
        href: "/notifications",
        icon: Bell,
      },
      { label: "Audit Log", href: "/audit-log", icon: ScrollText },
    ],
  },
  {
    title: "ตั้งค่าระบบ",
    items: [
      { label: "ตั้งค่าทั่วไป", href: "/settings", icon: Settings },
      { label: "ถังขยะ", href: "/trash", icon: Trash2 },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    staff: true,
    documents: true,
  });

  return (
    <aside className="ml-[10px] mt-4 flex h-[calc(100vh-80px)] w-[280px] shrink-0 flex-col rounded-xl bg-white">
      {/* Logo */}
      <div className="border-b border-pink-100 px-5 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-500 text-lg font-bold text-white">
            ต
          </div>

          <div>
            <div className="text-base font-bold tracking-wide text-slate-800">
              ตราสารหนี้
            </div>
            <div className="text-[10px] tracking-wider text-slate-400">
              DOCUMENT MANAGEMENT
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="min-h-0 flex-1 space-y-5 overflow-y-auto px-3 py-5">
        {groups.map((group) => {
          const GroupIcon = "icon" in group ? group.icon : undefined;
          const isExpandable = "key" in group;
const groupKey = "key" in group ? group.key : undefined;

const isExpanded =
  groupKey !== undefined ? (expanded[groupKey] ?? false) : true;

          return (
            <section key={group.title}>
              {isExpandable ? (
                <button
                  type="button"
                  onClick={() => {
                if (groupKey === undefined) return;

                setExpanded((prev) => ({
                ...prev,
                [groupKey]: !prev[groupKey],
                }));
                }}
                  className="mb-2 flex w-full items-center gap-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-pink-500 hover:text-pink-700"
                >
                  {GroupIcon && <GroupIcon size={15} />}
                  <span className="flex-1 text-left">{group.title}</span>
                  {isExpanded ? (
                    <ChevronDown size={15} />
                  ) : (
                    <ChevronRight size={15} />
                  )}
                </button>
              ) : (
                <h2 className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-pink-500">
                  {group.title}
                </h2>
              )}

              {isExpanded && (
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex min-h-10 items-center gap-3 rounded-md px-3 py-2 text-[13px] transition-colors ${
                          active
                            ? "bg-fuchsia-200 font-semibold text-slate-900"
                            : "text-slate-600 hover:bg-fuchsia-100 hover:text-slate-900"
                        }`}
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.8}
                          className="shrink-0 text-pink-500"
                        />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-pink-100 px-4 py-3 text-xs text-slate-400">
        ระบบจัดการตราสารหนี้
        <div className="mt-1">Internal Management System</div>
      </div>
    </aside>
  );
}
