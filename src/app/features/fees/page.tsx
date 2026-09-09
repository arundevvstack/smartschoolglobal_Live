import type { Metadata } from "next"
import { CreditCard, TrendingUp, Wallet, Bell } from "lucide-react"
import { FeatureLayout } from "@/components/layout/feature-layout"
import { DashboardPreview } from "@/components/ui/product/DashboardPreview"
import { MetricCard } from "@/components/ui/product/MetricCard"
import { ChartPreview } from "@/components/ui/product/ChartPreview"

export const metadata: Metadata = {
  title: "Fee Collection Software | Smart School AI",
  description: "Automated invoicing, predictive collection targets, and multi-currency support. Consistently achieve 94% fee collection rates.",
}

export default function FeesFeaturePage() {
  const ProductDemo = (
    <DashboardPreview title="Finance Dashboard" className="min-h-[400px]">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <MetricCard title="Collection Rate" value="94%" trend="Target Reached" trendUp={true} delay={0.1} icon={<TrendingUp className="h-5 w-5" />} />
        <MetricCard title="Reminders Sent" value="47" delay={0.2} icon={<Bell className="h-5 w-5" />} />
      </div>
      <div className="bg-surface border rounded-xl p-6 shadow-sm">
        <h4 className="text-sm font-medium mb-4 text-foreground">Cash Flow Projection</h4>
        <ChartPreview />
      </div>
    </DashboardPreview>
  );

  const Workflow = (
    <div className="grid md:grid-cols-3 gap-8 relative">
      <div className="absolute top-1/2 start-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block z-0"></div>
      
      <div className="bg-surface border rounded-xl p-8 relative z-10 shadow-sm hover:shadow-md transition-shadow">
        <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
          <TrendingUp className="h-5 w-5" />
        </div>
        <h3 className="font-bold text-lg mb-2 text-foreground">Automate Invoicing</h3>
        <p className="text-muted-foreground text-sm">Generate and distribute fee structures to thousands of parents instantly based on grade and bus routes.</p>
      </div>

      <div className="bg-surface border rounded-xl p-8 relative z-10 shadow-sm hover:shadow-md transition-shadow">
        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
          <Bell className="h-5 w-5" />
        </div>
        <h3 className="font-bold text-lg mb-2 text-foreground">Smart Reminders</h3>
        <p className="text-muted-foreground text-sm">The system automatically triggers personalized SMS and email reminders before and after due dates.</p>
      </div>

      <div className="bg-surface border rounded-xl p-8 relative z-10 shadow-sm hover:shadow-md transition-shadow">
        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
          <Wallet className="h-5 w-5" />
        </div>
        <h3 className="font-bold text-lg mb-2 text-foreground">Integrated Payments</h3>
        <p className="text-muted-foreground text-sm">Parents pay via Stripe, PayPal, or regional banks directly through the portal with instant reconciliation.</p>
      </div>
    </div>
  );

  const Benefits = (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-foreground">Eliminate Financial Friction</h2>
        <p className="text-lg text-muted-foreground mb-6">School finance teams shouldn't operate like debt collectors. The platform provides parents with simple payment gateways while giving management deep financial forecasting.</p>
      </div>
      <div className="bg-green-900 text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-32 bg-green-800 rounded-full blur-3xl opacity-50 -z-10"></div>
        <h3 className="text-5xl font-bold mb-2">94%</h3>
        <p className="text-green-200 text-lg">Average fee collection rate achieved by our partner schools.</p>
      </div>
    </div>
  );

  return (
    <FeatureLayout
      icon={<CreditCard className="h-4 w-4" />}
      category="Financial Module"
      title="Predictive Fee Collection"
      description="Manual follow-ups on late payments create unpredictable cash flow. Smart School AI predicts payment trends and automates reminders."
      productPreview={ProductDemo}
      workflow={Workflow}
      benefits={Benefits}
    />
  )
}
