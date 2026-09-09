import type { Metadata } from "next"
import { Calendar, Users, AlertTriangle } from "lucide-react"
import { FeatureLayout } from "@/components/layout/feature-layout"
import { DashboardPreview } from "@/components/ui/product/DashboardPreview"
import { MetricCard } from "@/components/ui/product/MetricCard"
import { DataTableRow } from "@/components/ui/product/DataTableRow"
import { StatusBadge } from "@/components/ui/product/StatusBadge"

export const metadata: Metadata = {
  title: "AI Attendance Management | Smart School AI",
  description: "Automate daily logging, anomaly detection, and real-time syncing. Stop wasting teacher time on manual roll calls.",
}

export default function AttendanceFeaturePage() {
  const ProductDemo = (
    <DashboardPreview title="Attendance Sync" className="min-h-[400px]">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <MetricCard title="Daily Sync Status" value="Live" trend="Synchronized" trendUp={true} icon={<Calendar className="h-5 w-5" />} />
        <MetricCard title="Total Present" value="1,248" trend="98%" trendUp={true} icon={<Users className="h-5 w-5" />} />
      </div>
      <div className="bg-surface border rounded-xl overflow-hidden">
        <div className="bg-muted px-4 py-3 text-xs font-medium text-muted-foreground flex justify-between">
          <span>Student ID</span>
          <span>Status</span>
        </div>
        <DataTableRow columns={[<span key="1" className="font-mono">#ST-8492</span>, <StatusBadge key="2" status="success" label="Present" />]} delay={0.1} />
        <DataTableRow columns={[<span key="1" className="font-mono">#ST-8493</span>, <StatusBadge key="2" status="danger" label="Absent" />]} delay={0.2} />
        <DataTableRow columns={[<span key="1" className="font-mono">#ST-8494</span>, <StatusBadge key="2" status="warning" label="Late" />]} delay={0.3} />
      </div>
    </DashboardPreview>
  );

  const Workflow = (
    <div className="grid md:grid-cols-3 gap-8 relative">
      <div className="absolute top-1/2 start-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block z-0"></div>
      
      <div className="bg-surface border rounded-xl p-8 relative z-10 shadow-sm hover:shadow-md transition-shadow">
        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mb-4">1</div>
        <h3 className="font-bold text-lg mb-2 text-foreground">Rapid Input</h3>
        <p className="text-muted-foreground text-sm">Teachers log exceptions via the mobile app in under 10 seconds. The rest are auto-marked present.</p>
      </div>

      <div className="bg-surface border rounded-xl p-8 relative z-10 shadow-sm hover:shadow-md transition-shadow">
        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mb-4">2</div>
        <h3 className="font-bold text-lg mb-2 text-foreground">Intelligent Syncing</h3>
        <p className="text-muted-foreground text-sm">The system instantly syncs the attendance record. Over 480 attendances auto-logged simultaneously.</p>
      </div>

      <div className="bg-surface border rounded-xl p-8 relative z-10 shadow-sm hover:shadow-md transition-shadow">
        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mb-4">3</div>
        <h3 className="font-bold text-lg mb-2 text-foreground">Parent Notification</h3>
        <p className="text-muted-foreground text-sm">If a student is marked absent without prior leave, parents are instantly notified via SMS/App.</p>
      </div>
    </div>
  );

  const Benefits = (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-foreground">Stop wasting teacher time</h2>
        <p className="text-lg text-muted-foreground mb-6">Manual roll calls drain instructional hours every single week. Automating this process saves thousands of hours annually across your institution.</p>
        <ul className="space-y-4 text-foreground">
          <li className="flex gap-3">
             <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
             <span>Detect chronic absenteeism early before it becomes an academic risk.</span>
          </li>
          <li className="flex gap-3">
             <Calendar className="h-5 w-5 text-brand-500 shrink-0" />
             <span>Generate verified compliance attendance reports instantly.</span>
          </li>
        </ul>
      </div>
      <div className="bg-brand-900 text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-32 bg-brand-800 rounded-full blur-3xl opacity-50 -z-10"></div>
        <h3 className="text-5xl font-bold mb-2">3.5 hrs</h3>
        <p className="text-brand-200 text-lg">Saved per teacher per week</p>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      icon={<Calendar className="h-4 w-4" />}
      category="Core Feature"
      title="Smart Attendance Tracking"
      description="Manual attendance drains hours from instruction time every week. Smart School AI automates logging, detects chronic absenteeism early, and notifies parents instantly."
      productPreview={ProductDemo}
      workflow={Workflow}
      benefits={Benefits}
    />
  )
}
