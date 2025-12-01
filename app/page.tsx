"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Moon, Sun, FileText } from "lucide-react"
import Link from "next/link"

type Tab = "about" | "experience" | "projects"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("about")
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">Nhat Tran</h1>
                <p className="text-lg md:text-xl text-muted-foreground">Marketing Operations & Technology Leader</p>
                <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl text-pretty">
                  Building efficient marketing systems that drive measurable results through automation, integration, and process optimization.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Link href="/summary">
                  <Button variant="outline" size="icon" title="View Summary for Recruiters">
                    <FileText className="h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
            </div>

              {/* Navigation */}
              <nav className="flex gap-8 border-b border-border">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  About
                  {activeTab === "about" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />}
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "experience" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Experience
                  {activeTab === "experience" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Projects
                  {activeTab === "projects" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />}
                </button>
              </nav>
            </header>

            {/* Content */}
            <main>
              {activeTab === "about" && <AboutSection />}
              {activeTab === "experience" && <ExperienceSection />}
              {activeTab === "projects" && <ProjectsSection />}
            </main>

            {/* Footer */}
            <footer className="mt-24 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">© 2025 Nhat Tran. Built with Next.js</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/nhatmobile1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nhattran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:nhatmobile@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
  )
}

function AboutSection() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm a marketing operations professional who builds efficient systems that drive measurable results. Over the past 9 years at companies like Benchling, Intercom, and Malwarebytes, I've specialized in marketing automation, system integration, and process optimization.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground mt-4">
            My approach centers on transforming complex marketing technology stacks into streamlined operations. I've implemented automated lead nurturing systems that improved conversion efficiency, consolidated vendor tools to achieve significant cost savings, and built comprehensive documentation systems that enable teams to operate more effectively. I'm a Marketo Certified Expert with deep experience across the full marketing operations spectrum.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground mt-4">
            Whether it's designing segmentation strategies, integrating CRM platforms, optimizing lead lifecycle management, or creating data health monitoring practices, I focus on building infrastructure that reduces manual work and enables data-driven decision making. My work helps marketing teams move faster, spend smarter, and measure what matters.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Marketing Automation", desc: "Marketo, campaign workflows, lead nurturing, and drip sequences" },
            { title: "System Integration", desc: "Seamless data flow across marketing tech stacks and CRM platforms" },
            { title: "Data & Analytics", desc: "Campaign reporting, data health monitoring, and performance optimization" },
            { title: "Process Optimization", desc: "Standardization, documentation, and efficiency improvements" },
            { title: "Vendor Management", desc: "Contract negotiation, tool consolidation, and cost optimization" },
            { title: "Demand Generation", desc: "Lead conversion strategies and pipeline acceleration" },
          ].map((expertise) => (
            <div key={expertise.title} className="p-4 bg-secondary/50 rounded-lg">
              <h3 className="font-semibold text-base mb-1">{expertise.title}</h3>
              <p className="text-sm text-muted-foreground">{expertise.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-6">
          I'm always interested in hearing about new opportunities and connecting with fellow marketing operations professionals. Feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="mailto:nhatmobile@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/nhatmobile1" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/nhattran" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Manager, Marketing Systems and Operations",
      company: "Benchling",
      period: "February 2022 — Present",
      highlights: [
        "Led strategic vendor consolidation initiative, negotiating contracts and streamlining the marketing technology ecosystem with significant cost savings",
        "Developed standardized processes for campaign and channel management, creating automated lead nurturing workflows that enhanced demand generation",
        "Created comprehensive documentation for marketing systems and processes, streamlining onboarding and maintaining operational consistency",
        "Established ongoing data health monitoring practices, ensuring accurate data quality for effective marketing tactics and reliable reporting",
      ],
      technologies: ["Marketo", "Salesforce", "Data Management", "Process Automation", "Vendor Management"],
    },
    {
      title: "Marketing Operations Manager",
      company: "Intercom",
      period: "July 2019 — February 2022",
      highlights: [
        "Developed sophisticated segmentation strategies and automated campaign workflows including data mapping, user journeys, and triggered email sequences",
        "Managed the marketing automation platform and integrated multiple systems to optimize marketing operations and improve campaign execution efficiency",
        "Maintained the accuracy and health of prospect and customer databases while monitoring system metrics to track usage trends and enable data-driven decision making",
      ],
      technologies: ["Marketing Automation", "Segmentation", "Email Marketing", "System Integration", "Analytics"],
    },
    {
      title: "Marketing Automation Manager",
      company: "Malwarebytes",
      period: "December 2017 — July 2019",
      highlights: [
        "Built comprehensive campaign operations process from the ground up, implementing an intake tool and training program for the entire marketing team",
        "Implemented efficiency tools including LeanData and developed automated processes that dramatically reduced lead-to-conversion times",
        "Developed and launched the company's first customer nurture program, driving seat usage from 50-60% to 95% through strategic engagement campaigns",
      ],
      technologies: ["Marketo", "LeanData", "Lead Management", "Customer Success", "Process Development"],
      metric: "Improved seat usage from 50-60% to 95%",
    },
    {
      title: "Demand Generation Specialist",
      company: "WhiteHat Security",
      period: "August 2016 — November 2017",
      highlights: [
        "Designed, built, and executed demand generation programs in Marketo",
        "Developed and optimized email nurture streams",
        "Organized and managed webinars across various platforms",
        "Implemented account-based marketing strategies with Sales Development",
      ],
      technologies: ["Marketo", "Demand Generation", "Email Marketing", "Webinars", "ABM"],
    },
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="p-6 hover:border-foreground/20 transition-colors">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
            <div>
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-base text-muted-foreground">{exp.company}</p>
            </div>
            <span className="text-sm text-muted-foreground md:text-right shrink-0">{exp.period}</span>
          </div>
          <ul className="space-y-2 mb-4">
            {exp.highlights.map((highlight, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-muted-foreground flex">
                <span className="mr-2 text-primary">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          {exp.metric && (
            <p className="text-sm font-medium text-primary mb-3">📊 {exp.metric}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "Marketing Tech Stack Consolidation",
      company: "Benchling",
      description:
        "Led strategic vendor consolidation initiative, negotiating contracts and streamlining the marketing technology ecosystem. Achieved significant cost savings while improving system performance and team efficiency.",
      tags: ["Vendor Management", "Cost Optimization", "System Integration"],
      impact: "Significant cost savings",
    },
    {
      title: "Automated Lead Nurturing System",
      company: "Benchling",
      description:
        "Developed standardized processes for campaign and channel management, creating automated lead nurturing workflows that enhanced demand generation and improved lead conversion efficiency.",
      tags: ["Marketing Automation", "Lead Conversion", "Process Design"],
    },
    {
      title: "Advanced Segmentation & Campaign Automation",
      company: "Intercom",
      description:
        "Developed sophisticated segmentation strategies and automated campaign workflows including data mapping, user journeys, drip campaigns, and triggered email sequences that significantly improved engagement and conversion rates.",
      tags: ["Segmentation", "Email Marketing", "Workflow Automation"],
    },
    {
      title: "Customer Nurture Stream Launch",
      company: "Malwarebytes",
      description:
        "Developed and launched the company's first customer nurture program, driving seat usage from 50-60% to 95% through strategic engagement campaigns and personalized content delivery.",
      tags: ["Customer Success", "Nurture Campaigns", "Product Adoption"],
      impact: "Improved seat usage from 50-60% to 95%",
    },
    {
      title: "Lead Lifecycle Efficiency Transformation",
      company: "Malwarebytes",
      description:
        "Implemented multiple efficiency tools including LeanData and developed automated processes that dramatically reduced lead-to-conversion times, accelerating pipeline velocity and improving sales team productivity.",
      tags: ["Lead Management", "Process Automation", "Conversion Optimization"],
    },
    {
      title: "Data Health Monitoring System",
      company: "Benchling",
      description:
        "Established ongoing data health monitoring practices, ensuring accurate and relevant data quality for effective marketing tactics and reliable reporting across all campaigns.",
      tags: ["Data Quality", "System Monitoring", "Process Automation"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="p-6 group hover:border-foreground/20 transition-all">
          <div className="mb-2">
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-primary font-medium">{project.company}</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
          {project.impact && (
            <p className="text-sm font-medium text-primary mb-4">📊 {project.impact}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
