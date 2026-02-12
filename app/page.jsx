"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Moon, Sun, FileText } from "lucide-react";
const TABS = ["about", "experience", "projects"];
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash.replace("#", "");
    if (TABS.includes(hash)) {
      setActiveTab(hash);
    }
    const handlePopState = () => {
      const h = window.location.hash.replace("#", "");
      setActiveTab(TABS.includes(h) ? h : "about");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.history.pushState(null, "", `#${tab}`);
  };

  const handleTabKeyDown = (e) => {
    const idx = TABS.indexOf(activeTab);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleTabChange(TABS[(idx + 1) % TABS.length]);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handleTabChange(TABS[(idx - 1 + TABS.length) % TABS.length]);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return /*#__PURE__*/ _jsx("div", {
    className: "min-h-screen bg-background text-foreground",
    children: /*#__PURE__*/ _jsx("div", {
      className: "container mx-auto px-4 py-8 md:py-16",
      children: /*#__PURE__*/ _jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [
          /*#__PURE__*/ _jsxs("header", {
            className: "mb-16 animate-fade-in",
            children: [
              /*#__PURE__*/ _jsxs("div", {
                className: "flex items-start justify-between mb-8",
                children: [
                  /*#__PURE__*/ _jsxs("div", {
                    children: [
                      /*#__PURE__*/ _jsx("h1", {
                        className:
                          "text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-balance",
                        children: /*#__PURE__*/ _jsx("span", {
                          className: "name-accent",
                          children: "Nhat Tran",
                        }),
                      }),
                      /*#__PURE__*/ _jsx("p", {
                        className: "text-lg md:text-xl text-muted-foreground",
                        children:
                          "Marketing Operations & Technology Professional",
                      }),
                      /*#__PURE__*/ _jsx("p", {
                        className:
                          "text-sm md:text-base text-muted-foreground mt-2 max-w-xl text-pretty",
                        children:
                          "Building efficient marketing systems that drive measurable results through automation, integration, and process optimization.",
                      }),
                    ],
                  }),
                  /*#__PURE__*/ _jsxs("div", {
                    className: "flex gap-2 shrink-0",
                    children: [
                      /*#__PURE__*/ _jsx("a", {
                        href: "https://www.nhattran.me/summary",
                        children: /*#__PURE__*/ _jsx(Button, {
                          variant: "outline",
                          size: "icon",
                          title: "View Summary for Recruiters",
                          className: "btn-icon-enhanced",
                          children: /*#__PURE__*/ _jsx(FileText, {
                            className: "h-5 w-5",
                          }),
                        }),
                      }),
                      /*#__PURE__*/ _jsx(Button, {
                        variant: "ghost",
                        size: "icon",
                        onClick: toggleTheme,
                        "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                        className: "btn-icon-enhanced",
                        children: mounted
                          ? theme === "dark"
                            ? /*#__PURE__*/ _jsx(Sun, {
                                className: "h-5 w-5",
                              })
                            : /*#__PURE__*/ _jsx(Moon, {
                                className: "h-5 w-5",
                              })
                          : /*#__PURE__*/ _jsx("div", {
                              className: "h-5 w-5",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              /*#__PURE__*/ _jsxs("nav", {
                className: "flex gap-8 border-b border-border",
                role: "tablist",
                onKeyDown: handleTabKeyDown,
                children: TABS.map((tab) =>
                  /*#__PURE__*/ _jsxs("button", {
                    onClick: () => handleTabChange(tab),
                    role: "tab",
                    "aria-selected": activeTab === tab,
                    tabIndex: activeTab === tab ? 0 : -1,
                    className: `pb-3 px-1 transition-colors relative focus-enhanced rounded-sm ${
                      activeTab === tab
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground font-medium"
                    }`,
                    children: [
                      tab.charAt(0).toUpperCase() + tab.slice(1),
                      activeTab === tab &&
                        /*#__PURE__*/ _jsx("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 h-0.5 bg-foreground tab-underline",
                        }),
                    ],
                  }, tab)
                ),
              }),
            ],
          }),
          /*#__PURE__*/ _jsx("main", {
            children: /*#__PURE__*/ _jsx(
              "div",
              {
                className: "tab-content",
                children:
                  activeTab === "about"
                    ? /*#__PURE__*/ _jsx(AboutSection, {})
                    : activeTab === "experience"
                      ? /*#__PURE__*/ _jsx(ExperienceSection, {})
                      : /*#__PURE__*/ _jsx(ProjectsSection, {}),
              },
              activeTab
            ),
          }),
          /*#__PURE__*/ _jsx("footer", {
            className: "mt-24 pt-8 border-t border-border",
            children: /*#__PURE__*/ _jsxs("div", {
              className:
                "flex flex-col md:flex-row items-center justify-between gap-4",
              children: [
                /*#__PURE__*/ _jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "© 2026 Nhat Tran. Built with Next.js",
                }),
                /*#__PURE__*/ _jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    /*#__PURE__*/ _jsx("a", {
                      href: "https://www.linkedin.com/in/nt-tran/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": "LinkedIn profile",
                      className:
                        "text-muted-foreground hover:text-foreground social-link",
                      children: /*#__PURE__*/ _jsx(Linkedin, {
                        className: "h-5 w-5",
                      }),
                    }),
                    /*#__PURE__*/ _jsx("a", {
                      href: "mailto:nhatmobile@gmail.com",
                      "aria-label": "Send email",
                      className:
                        "text-muted-foreground hover:text-foreground social-link",
                      children: /*#__PURE__*/ _jsx(Mail, {
                        className: "h-5 w-5",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function AboutSection() {
  return /*#__PURE__*/ _jsxs("div", {
    className: "space-y-8 animate-fade-in",
    children: [
      /*#__PURE__*/ _jsxs("section", {
        children: [
          /*#__PURE__*/ _jsx("h2", {
            className: "text-2xl font-semibold mb-4",
            children: "About Me",
          }),
          /*#__PURE__*/ _jsxs("div", {
            className: "prose prose-neutral dark:prose-invert max-w-none",
            children: [
              /*#__PURE__*/ _jsx("p", {
                className: "text-base leading-relaxed text-muted-foreground",
                children:
                  "I'm a marketing operations professional who builds efficient systems that drive measurable results. Over the past 9 years at companies like Benchling, Intercom, and Malwarebytes, I've specialized in marketing automation, systems integrations, data governance, AI workflow implementation, and process optimization.",
              }),
              /*#__PURE__*/ _jsx("p", {
                className:
                  "text-base leading-relaxed text-muted-foreground mt-4",
                children:
                  "My approach centers on transforming complex marketing technology stacks into streamlined operations. I've implemented automated lead nurturing systems that improved conversion efficiency, consolidated vendor tools to achieve substantial cost savings, and built documentation systems that help teams operate more effectively. I'm a Marketo Certified Expert with deep experience across the full marketing operations spectrum.",
              }),
              /*#__PURE__*/ _jsx("p", {
                className:
                  "text-base leading-relaxed text-muted-foreground mt-4",
                children:
                  "Whether it's designing segmentation strategies, integrating CRM platforms, improving lead lifecycle management, or creating data health monitoring practices, I focus on building infrastructure that reduces manual work and supports data-driven decision making. My work helps marketing teams move faster, spend smarter, and measure what matters.",
              }),
            ],
          }),
          /*#__PURE__*/ _jsx("div", {
            className: "mt-5",
            children: /*#__PURE__*/ _jsx("span", {
              className:
                "px-3 py-1.5 bg-primary/10 text-primary rounded-sm text-xs font-semibold tracking-wide uppercase",
              children: "Marketo Certified Expert",
            }),
          }),
        ],
      }),
      /*#__PURE__*/ _jsxs("section", {
        children: [
          /*#__PURE__*/ _jsx("h2", {
            className: "text-2xl font-semibold mb-4",
            children: "Expertise",
          }),
          /*#__PURE__*/ _jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
              {
                title: "Marketing Automation",
                desc: "Marketo, campaign workflows, lead nurturing, and drip sequences",
              },
              {
                title: "System Integration",
                desc: "Connecting marketing tech stacks and CRM platforms for reliable data flow",
              },
              {
                title: "Data & Analytics",
                desc: "Campaign reporting, data health monitoring, and performance analysis",
              },
              {
                title: "Process Optimization",
                desc: "Standardization, documentation, and efficiency improvements",
              },
              {
                title: "Vendor Management",
                desc: "Contract negotiation, tool consolidation, and budget management",
              },
              {
                title: "Demand Generation",
                desc: "Lead conversion strategies and funnel acceleration",
              },
            ].map((expertise, index) =>
              /*#__PURE__*/ _jsxs(
                "div",
                {
                  className: `p-4 bg-secondary/50 rounded-md animate-fade-in-up expertise-card stagger-${index + 1}`,
                  children: [
                    /*#__PURE__*/ _jsx("h3", {
                      className: "font-semibold text-base mb-1",
                      children: expertise.title,
                    }),
                    /*#__PURE__*/ _jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: expertise.desc,
                    }),
                  ],
                },
                expertise.title
              )
            ),
          }),
        ],
      }),
      /*#__PURE__*/ _jsxs("section", {
        children: [
          /*#__PURE__*/ _jsx("h2", {
            className: "text-2xl font-semibold mb-4",
            children: "Let's Connect",
          }),
          /*#__PURE__*/ _jsx("p", {
            className: "text-base leading-relaxed text-muted-foreground mb-6",
            children:
              "I'm always interested in hearing about new opportunities and connecting with fellow marketing operations professionals. Feel free to reach out.",
          }),
          /*#__PURE__*/ _jsxs("div", {
            className: "flex flex-wrap gap-3",
            children: [
              /*#__PURE__*/ _jsx(Button, {
                asChild: true,
                className: "btn-primary-enhanced",
                children: /*#__PURE__*/ _jsxs("a", {
                  href: "mailto:nhatmobile@gmail.com",
                  children: [
                    /*#__PURE__*/ _jsx(Mail, {
                      className: "mr-2 h-4 w-4",
                    }),
                    "Email Me",
                  ],
                }),
              }),
              /*#__PURE__*/ _jsx(Button, {
                variant: "outline",
                asChild: true,
                className: "btn-outline-enhanced",
                children: /*#__PURE__*/ _jsxs("a", {
                  href: "https://www.linkedin.com/in/nt-tran/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    /*#__PURE__*/ _jsx(Linkedin, {
                      className: "mr-2 h-4 w-4",
                    }),
                    "LinkedIn",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Manager, Marketing Systems and Operations",
      company: "Benchling",
      period: "February 2022 — Present",
      highlights: [
        "Own the marketing technology stack end-to-end, leading vendor evaluation, contract negotiations, and system integrations to improve performance and reduce operational costs",
        "Architect scalable campaign operations framework with standardized intake workflows, execution playbooks, and post-campaign analysis across Marketo, Salesforce, and Airtable",
        "Establish data governance and quality monitoring practices that maintain cross-system consistency for reliable attribution, funnel reporting, and revenue analytics",
        "Drive AI and automation adoption across marketing operations, implementing workflows for campaign planning, audience research, and performance analysis",
        "Partner with Demand Generation, Sales Operations, and Analytics teams to refine lead flow architecture and improve funnel velocity",
        "Build self-service documentation and training programs to scale marketing operations capabilities across the organization",
      ],
      technologies: [
        "Marketo",
        "Salesforce",
        "Airtable",
        "Workato",
        "Clay",
        "Sigma",
        "AI Automation",
        "Data Governance",
      ],
    },
    {
      title: "Marketing Operations Manager",
      company: "Intercom",
      period: "July 2019 — February 2022",
      highlights: [
        "Architected global privacy compliance framework for GDPR and CASL with automated consent management, expiration tracking, and region-based segmentation",
        "Designed lead lifecycle and scoring system with automated routing logic, MQL qualification triggers, and CRM integration for sales handoff",
        "Built multi-touch attribution model capturing lead source data across the customer journey for revenue reporting and channel performance",
        "Developed centralized nurture architecture with prioritization segmentation for proper audience management and preventing program overlap",
        "Managed marketing automation platform performance, led QA protocols for campaign execution, and partnered with Sales and Product on GTM initiatives",
      ],
      technologies: [
        "Zapier",
        "Tableau",
        "Asana",
        "Lead Scoring",
        "Attribution",
        "Privacy Compliance",
      ],
    },
    {
      title: "Marketing Automation Manager",
      company: "Malwarebytes",
      period: "December 2017 — July 2019",
      highlights: [
        "Built campaign operations infrastructure from the ground up, implementing intake workflows, SLA management, and QA protocols for marketing request processing",
        "Implemented lead routing and scoring system using LeanData, optimizing lead-to-sales handoff times and improving sales team response rates",
        "Designed and launched customer lifecycle nurture program that drove significant improvements in product adoption and seat utilization",
        "Created operational playbooks and training programs to upskill the marketing team on automation best practices and platform capabilities",
      ],
      technologies: [
        "LeanData",
        "Demandbase",
        "Wrike",
        "Lifecycle Nurture",
        "Lead Routing",
      ],
    },
    {
      title: "Demand Generation Specialist",
      company: "WhiteHat Security",
      period: "August 2016 — November 2017",
      highlights: [
        "Executed multi-channel demand generation campaigns in Marketo supporting pipeline targets across email, webinar, and digital channels",
        "Built and optimized email nurture streams with audience segmentation strategies to improve engagement metrics and conversion rates",
        "Managed webinar programs end-to-end including promotion workflows, registration tracking, and post-event follow-up automation",
        "Partnered with Sales Development on account-based marketing initiatives, lead qualification criteria, and handoff process improvements",
      ],
      technologies: [
        "Demand Generation",
        "Email Nurture",
        "Webinars",
        "ABM",
      ],
    },
  ];
  return /*#__PURE__*/ _jsx("div", {
    className: "space-y-6 animate-fade-in",
    children: experiences.map((exp, index) =>
      /*#__PURE__*/ _jsxs(
        Card,
        {
          className: `p-6 hover:border-foreground/20 transition-colors animate-fade-in-up card-hover stagger-${index + 1}`,
          children: [
            /*#__PURE__*/ _jsxs("div", {
              className:
                "flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2",
              children: [
                /*#__PURE__*/ _jsxs("div", {
                  children: [
                    /*#__PURE__*/ _jsx("h3", {
                      className: "text-lg font-semibold",
                      children: exp.title,
                    }),
                    /*#__PURE__*/ _jsx("p", {
                      className: "text-base text-muted-foreground",
                      children: exp.company,
                    }),
                  ],
                }),
                /*#__PURE__*/ _jsx("span", {
                  className:
                    "text-sm text-muted-foreground md:text-right shrink-0",
                  children: exp.period,
                }),
              ],
            }),
            /*#__PURE__*/ _jsx("ul", {
              className: "space-y-2 mb-4",
              children: exp.highlights.map((highlight, idx) =>
                /*#__PURE__*/ _jsxs(
                  "li",
                  {
                    className:
                      "text-sm leading-relaxed text-muted-foreground flex",
                    children: [
                      /*#__PURE__*/ _jsx("span", {
                        className: "mr-2 text-primary",
                        children: "•",
                      }),
                      /*#__PURE__*/ _jsx("span", {
                        children: highlight,
                      }),
                    ],
                  },
                  idx
                )
              ),
            }),
            exp.metric &&
              /*#__PURE__*/ _jsxs("p", {
                className: "text-sm font-medium text-primary mb-3",
                children: ["📊 ", exp.metric],
              }),
            /*#__PURE__*/ _jsx("div", {
              className: "flex flex-wrap gap-2",
              children: exp.technologies.map((tech) =>
                /*#__PURE__*/ _jsx(
                  "span",
                  {
                    className:
                      "px-2.5 py-1 bg-primary/10 text-primary rounded-sm text-xs font-medium",
                    children: tech,
                  },
                  tech
                )
              ),
            }),
          ],
        },
        index
      )
    ),
  });
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
      title: "Global Privacy Compliance Framework",
      company: "Intercom",
      description:
        "Architected GDPR and CASL compliance framework with automated consent management, expiration tracking, and region-based segmentation to ensure marketing compliance across all markets.",
      tags: ["Privacy Compliance", "GDPR/CASL", "Marketo"],
    },
    {
      title: "Lead Lifecycle & Attribution System",
      company: "Intercom",
      description:
        "Designed lead lifecycle processing with automated MQL qualification and Salesforce integration. Built multi-touch attribution framework for lead source categorization and pipeline analysis.",
      tags: ["Lead Lifecycle", "Attribution", "Salesforce"],
    },
    {
      title: "Centralized Nurture Architecture",
      company: "Intercom",
      description:
        "Built nurture management system with prioritization segmentation ensuring mutually exclusive audiences across all engagement programs with automated qualification workflows.",
      tags: ["Nurture Programs", "Segmentation", "Automation"],
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
      tags: [
        "Lead Management",
        "Process Automation",
        "Conversion Optimization",
      ],
    },
    {
      title: "Data Health Monitoring System",
      company: "Benchling",
      description:
        "Established ongoing data health monitoring practices, ensuring accurate and relevant data quality for effective marketing tactics and reliable reporting across all campaigns.",
      tags: ["Data Quality", "System Monitoring", "Process Automation"],
    },
  ];
  return /*#__PURE__*/ _jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in",
    children: projects.map((project, index) =>
      /*#__PURE__*/ _jsxs(
        Card,
        {
          className: `p-6 group hover:border-foreground/20 transition-all animate-fade-in-up card-hover stagger-${index + 1}`,
          children: [
            /*#__PURE__*/ _jsxs("div", {
              className: "mb-2",
              children: [
                /*#__PURE__*/ _jsx("h3", {
                  className: "text-xl font-semibold mb-1",
                  children: project.title,
                }),
                /*#__PURE__*/ _jsx("p", {
                  className: "text-sm text-primary font-medium",
                  children: project.company,
                }),
              ],
            }),
            /*#__PURE__*/ _jsx("p", {
              className: "text-sm text-muted-foreground leading-relaxed mb-4",
              children: project.description,
            }),
            project.impact &&
              /*#__PURE__*/ _jsxs("p", {
                className: "text-sm font-medium text-primary mb-4",
                children: ["📊 ", project.impact],
              }),
            /*#__PURE__*/ _jsx("div", {
              className: "flex flex-wrap gap-2",
              children: project.tags.map((tag) =>
                /*#__PURE__*/ _jsx(
                  "span",
                  {
                    className:
                      "px-2.5 py-1 bg-secondary text-secondary-foreground rounded-sm text-xs",
                    children: tag,
                  },
                  tag
                )
              ),
            }),
          ],
        },
        index
      )
    ),
  });
}
