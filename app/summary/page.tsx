"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Printer, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SummaryPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Print button bar - hidden in print */}
      <div className="print:hidden sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button onClick={handlePrint} size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button onClick={handlePrint} variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Printable content */}
      <div className="container mx-auto px-4 py-8 print:py-0">
        <div className="max-w-5xl mx-auto bg-card dark:bg-card print:bg-white rounded-lg shadow-sm print:shadow-none p-8 print:p-0">
          {/* Header */}
          <header className="mb-8 pb-6 border-b border-border print:border-gray-300">
            <h1 className="text-4xl font-bold mb-2 print:text-black">Nhat Tran</h1>
            <p className="text-xl text-muted-foreground mb-3 print:text-gray-700">
              Marketing Operations & Technology Leader
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground print:text-gray-600">
              <span>nhatmobile@gmail.com</span>
              <span>linkedin.com/in/nhattran</span>
              <span>github.com/nhatmobile1</span>
            </div>
          </header>

          {/* Executive Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 print:text-black">Executive Summary</h2>
            <p className="text-base leading-relaxed text-muted-foreground print:text-gray-800">
              Marketing operations professional with 9 years of experience building efficient systems that
              drive measurable results. Specialized in marketing automation, system integration, and process
              optimization at leading technology companies including Benchling, Intercom, and Malwarebytes.
              Marketo Certified Expert with proven track record of implementing automated lead nurturing
              systems, consolidating vendor tools for significant cost savings, and improving key metrics
              like customer seat usage from 50-60% to 95%.
            </p>
          </section>

          {/* Core Competencies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 print:text-black">Core Competencies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Marketing Automation (Marketo)",
                "CRM Integration (Salesforce)",
                "Lead Lifecycle Management",
                "Campaign Workflow Design",
                "Data Quality & Analytics",
                "Vendor & Cost Management",
                "Process Documentation",
                "Demand Generation",
                "System Integration",
                "Team Training & Enablement",
                "Account-Based Marketing",
                "Email Marketing & Segmentation",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-2.5 bg-secondary/60 print:bg-gray-100 rounded-md text-sm font-medium print:text-black"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 print:text-black">Professional Experience</h2>
            <div className="space-y-6">
              {/* Benchling */}
              <div className="border-l-2 border-primary print:border-gray-400 pl-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold print:text-black">
                    Senior Manager, Marketing Systems and Operations
                  </h3>
                  <p className="text-sm text-muted-foreground print:text-gray-700">
                    Benchling | February 2022 — Present
                  </p>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground print:text-gray-800">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Led strategic vendor consolidation initiative with significant cost savings through
                      contract negotiation and marketing technology ecosystem streamlining
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Developed standardized processes for campaign and channel management, creating
                      automated lead nurturing workflows that enhanced demand generation
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Created comprehensive documentation for marketing systems and processes, streamlining
                      onboarding and maintaining operational consistency
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Established ongoing data health monitoring practices, ensuring accurate data quality
                      for effective marketing tactics and reliable reporting
                    </span>
                  </li>
                </ul>
              </div>

              {/* Intercom */}
              <div className="border-l-2 border-primary print:border-gray-400 pl-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold print:text-black">Marketing Operations Manager</h3>
                  <p className="text-sm text-muted-foreground print:text-gray-700">
                    Intercom | July 2019 — February 2022
                  </p>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground print:text-gray-800">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Developed sophisticated segmentation strategies and automated campaign workflows
                      including data mapping, user journeys, and triggered email sequences
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Managed marketing automation platform and integrated multiple systems to optimize
                      marketing operations and improve campaign execution efficiency
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Maintained database health while monitoring system metrics to track usage trends and
                      enable data-driven decision making
                    </span>
                  </li>
                </ul>
              </div>

              {/* Malwarebytes */}
              <div className="border-l-2 border-primary print:border-gray-400 pl-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold print:text-black">Marketing Automation Manager</h3>
                  <p className="text-sm text-muted-foreground print:text-gray-700">
                    Malwarebytes | December 2017 — July 2019
                  </p>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground print:text-gray-800">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Built comprehensive campaign operations process from ground up, implementing intake
                      tool and training program for entire marketing team
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Implemented efficiency tools including LeanData and developed automated processes that
                      dramatically reduced lead-to-conversion times
                    </span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      <strong className="print:text-black">
                        Launched first customer nurture program, improving seat usage from 50-60% to 95%
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>

              {/* WhiteHat Security */}
              <div className="border-l-2 border-primary print:border-gray-400 pl-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold print:text-black">Demand Generation Specialist</h3>
                  <p className="text-sm text-muted-foreground print:text-gray-700">
                    WhiteHat Security | August 2016 — November 2017
                  </p>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground print:text-gray-800">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Designed, built, and executed demand generation programs in Marketo</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>
                      Implemented account-based marketing strategies with Sales Development team
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 print:text-black">Key Achievements</h2>
            <div className="grid gap-4">
              <Card className="p-4 print:border print:border-gray-300 print:shadow-none">
                <h3 className="font-semibold mb-1 print:text-black">Marketing Tech Stack Consolidation</h3>
                <p className="text-sm text-muted-foreground print:text-gray-800">
                  Led strategic vendor consolidation at Benchling, achieving significant cost savings while
                  improving system performance and team efficiency
                </p>
              </Card>
              <Card className="p-4 print:border print:border-gray-300 print:shadow-none">
                <h3 className="font-semibold mb-1 print:text-black">
                  Customer Engagement Transformation
                </h3>
                <p className="text-sm text-muted-foreground print:text-gray-800">
                  Increased customer seat usage from 50-60% to 95% at Malwarebytes through strategic nurture
                  program design and personalized content delivery
                </p>
              </Card>
              <Card className="p-4 print:border print:border-gray-300 print:shadow-none">
                <h3 className="font-semibold mb-1 print:text-black">Lead Lifecycle Optimization</h3>
                <p className="text-sm text-muted-foreground print:text-gray-800">
                  Implemented LeanData and automated processes that dramatically reduced lead-to-conversion
                  times, accelerating pipeline velocity
                </p>
              </Card>
            </div>
          </section>

          {/* Technical Expertise */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 print:text-black">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/60 print:bg-gray-50 rounded-md">
                <h3 className="font-semibold mb-2 text-sm print:text-black">Marketing Platforms</h3>
                <p className="text-sm text-muted-foreground print:text-gray-800">
                  Marketo (Certified Expert), Salesforce, LeanData, HubSpot, Pardot
                </p>
              </div>
              <div className="p-4 bg-secondary/60 print:bg-gray-50 rounded-md">
                <h3 className="font-semibold mb-2 text-sm print:text-black">Analytics & Reporting</h3>
                <p className="text-sm text-muted-foreground print:text-gray-800">
                  Campaign analytics, data quality monitoring, attribution modeling, KPI dashboards
                </p>
              </div>
              <div className="p-4 bg-secondary/60 print:bg-gray-50 rounded-md">
                <h3 className="font-semibold mb-2 text-sm print:text-black">Integration Tools</h3>
                <p className="text-sm text-muted-foreground print:text-gray-800">
                  API integrations, Zapier, webhook management, data synchronization
                </p>
              </div>
              <div className="p-4 bg-secondary/60 print:bg-gray-50 rounded-md">
                <h3 className="font-semibold mb-2 text-sm print:text-black">Campaign Management</h3>
                <p className="text-sm text-muted-foreground print:text-gray-800">
                  Email marketing, drip campaigns, lead scoring, nurture streams, A/B testing
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-6 border-t border-border print:border-gray-300 text-center">
            <p className="text-sm text-muted-foreground print:text-gray-600">
              This summary represents a high-level overview. For detailed project information and full
              portfolio, visit the main website or connect via LinkedIn.
            </p>
          </footer>
        </div>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          @page {
            margin: 0.75in;
            size: letter;
          }
          .print\\:text-black {
            color: #000 !important;
          }
          .print\\:text-gray-800 {
            color: #1f2937 !important;
          }
          .print\\:text-gray-700 {
            color: #374151 !important;
          }
          .print\\:text-gray-600 {
            color: #4b5563 !important;
          }
          .print\\:bg-white {
            background: white !important;
          }
          .print\\:bg-gray-100 {
            background: #f3f4f6 !important;
          }
          .print\\:bg-gray-50 {
            background: #f9fafb !important;
          }
          .print\\:border-gray-300 {
            border-color: #d1d5db !important;
          }
          .print\\:border-gray-400 {
            border-color: #9ca3af !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}
