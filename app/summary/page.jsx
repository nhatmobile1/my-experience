"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Printer, ArrowLeft } from "lucide-react";
export default function SummaryPage() {
  const handlePrint = () => {
    window.print();
  };
  return /*#__PURE__*/ _jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      /*#__PURE__*/ _jsx("div", {
        className:
          "print:hidden sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border",
        children: /*#__PURE__*/ _jsx("div", {
          className: "container mx-auto px-4 py-3",
          children: /*#__PURE__*/ _jsxs("div", {
            className:
              "flex items-center justify-between max-w-5xl mx-auto gap-2",
            children: [
              /*#__PURE__*/ _jsx("a", {
                href: "https://www.nhattran.me/",
                children: /*#__PURE__*/ _jsxs(Button, {
                  variant: "ghost",
                  size: "sm",
                  children: [
                    /*#__PURE__*/ _jsx(ArrowLeft, {
                      className: "h-4 w-4 sm:mr-2",
                    }),
                    /*#__PURE__*/ _jsx("span", {
                      className: "hidden sm:inline",
                      children: "Back to Experience",
                    }),
                  ],
                }),
              }),
              /*#__PURE__*/ _jsxs("div", {
                className: "flex gap-2",
                children: [
                  /*#__PURE__*/ _jsxs(Button, {
                    onClick: handlePrint,
                    size: "sm",
                    children: [
                      /*#__PURE__*/ _jsx(Printer, {
                        className: "h-4 w-4 sm:mr-2",
                      }),
                      /*#__PURE__*/ _jsx("span", {
                        className: "hidden sm:inline",
                        children: "Print",
                      }),
                    ],
                  }),
                  /*#__PURE__*/ _jsxs(Button, {
                    onClick: handlePrint,
                    variant: "outline",
                    size: "sm",
                    children: [
                      /*#__PURE__*/ _jsx(Download, {
                        className: "h-4 w-4 sm:mr-2",
                      }),
                      /*#__PURE__*/ _jsx("span", {
                        className: "hidden sm:inline",
                        children: "Download PDF",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      /*#__PURE__*/ _jsx("div", {
        className: "container mx-auto px-4 py-8 print:py-0",
        children: /*#__PURE__*/ _jsxs("div", {
          className:
            "max-w-5xl mx-auto bg-card dark:bg-card print:bg-white rounded-md shadow-sm print:shadow-none p-8 print:p-0",
          children: [
            /*#__PURE__*/ _jsxs("header", {
              className:
                "mb-8 pb-6 border-b border-border print:border-gray-300",
              children: [
                /*#__PURE__*/ _jsx("h1", {
                  className: "text-4xl font-bold mb-2 print:text-black",
                  children: "Nhat Tran",
                }),
                /*#__PURE__*/ _jsx("p", {
                  className:
                    "text-xl text-muted-foreground mb-3 print:text-gray-700",
                  children: "Marketing Operations & Technology Professional",
                }),
                /*#__PURE__*/ _jsxs("div", {
                  className:
                    "flex flex-wrap gap-4 text-sm text-muted-foreground print:text-gray-600",
                  children: [
                    /*#__PURE__*/ _jsx("span", {
                      children: "nhatmobile@gmail.com",
                    }),
                    /*#__PURE__*/ _jsx("span", {
                      children: "linkedin.com/in/nt-tran/",
                    }),
                  ],
                }),
              ],
            }),
            /*#__PURE__*/ _jsxs("section", {
              className: "mb-8",
              children: [
                /*#__PURE__*/ _jsx("h2", {
                  className: "text-2xl font-bold mb-4 print:text-black",
                  children: "Executive Summary",
                }),
                /*#__PURE__*/ _jsx("p", {
                  className:
                    "text-base leading-relaxed text-muted-foreground print:text-gray-800",
                  children:
                    "Marketing operations leader with 9 years of experience building systems that drive measurable results. Specialized in marketing automation, data governance, AI workflow implementation, and collaboration with Marketing, Sales, Operations, and Customer Success teams at technology companies including Benchling, Intercom, and Malwarebytes. Marketo Certified Expert with proven track record of building global privacy compliance systems (GDPR/CASL), consolidating vendor tools for substantial cost savings, and designing customer lifecycle programs that drove revenue growth and product adoption.",
                }),
              ],
            }),
            /*#__PURE__*/ _jsxs("section", {
              className: "mb-8",
              children: [
                /*#__PURE__*/ _jsx("h2", {
                  className: "text-2xl font-bold mb-4 print:text-black",
                  children: "Core Competencies",
                }),
                /*#__PURE__*/ _jsx("div", {
                  className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                  children: [
                    "Marketing Automation (Marketo)",
                    "CRM Integration (Salesforce)",
                    "Lead Lifecycle Management",
                    "AI & Workflow Automation",
                    "Data Governance & Quality",
                    "Privacy Compliance (GDPR/CASL)",
                    "Vendor & Cost Management",
                    "Cross-Functional GTM Leadership",
                    "System Integration",
                    "Attribution & Analytics",
                    "Account-Based Marketing",
                    "Team Enablement & Documentation",
                  ].map((skill) =>
                    /*#__PURE__*/ _jsx(
                      "div",
                      {
                        className:
                          "px-3 py-2.5 bg-secondary/60 print:bg-gray-100 rounded-md text-sm font-medium print:text-black",
                        children: skill,
                      },
                      skill
                    )
                  ),
                }),
              ],
            }),
            /*#__PURE__*/ _jsxs("section", {
              className: "mb-8",
              children: [
                /*#__PURE__*/ _jsx("h2", {
                  className: "text-2xl font-bold mb-4 print:text-black",
                  children: "Professional Experience",
                }),
                /*#__PURE__*/ _jsxs("div", {
                  className: "space-y-6",
                  children: [
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "border-l border-border print:border-gray-300 pl-4",
                      children: [
                        /*#__PURE__*/ _jsxs("div", {
                          className: "mb-2",
                          children: [
                            /*#__PURE__*/ _jsx("h3", {
                              className:
                                "text-lg font-semibold print:text-black",
                              children:
                                "Senior Manager, Marketing Systems and Operations",
                            }),
                            /*#__PURE__*/ _jsx("p", {
                              className:
                                "text-sm text-muted-foreground print:text-gray-700",
                              children: "Benchling | February 2022 — Present",
                            }),
                          ],
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                          className:
                            "space-y-1.5 text-sm text-muted-foreground print:text-gray-800",
                          children: [
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Own marketing technology stack end-to-end, leading vendor evaluation, contract negotiations, and system integrations",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Architect scalable campaign operations framework with standardized intake workflows, execution playbooks, and post-campaign analysis",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Establish data governance and quality monitoring practices that maintain cross-system consistency for attribution and revenue analytics",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Drive AI and automation adoption across marketing operations for campaign planning and performance analysis",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "border-l border-border print:border-gray-300 pl-4",
                      children: [
                        /*#__PURE__*/ _jsxs("div", {
                          className: "mb-2",
                          children: [
                            /*#__PURE__*/ _jsx("h3", {
                              className:
                                "text-lg font-semibold print:text-black",
                              children: "Marketing Operations Manager",
                            }),
                            /*#__PURE__*/ _jsx("p", {
                              className:
                                "text-sm text-muted-foreground print:text-gray-700",
                              children: "Intercom | July 2019 — February 2022",
                            }),
                          ],
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                          className:
                            "space-y-1.5 text-sm text-muted-foreground print:text-gray-800",
                          children: [
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Architected global privacy compliance framework for GDPR and CASL with automated consent management and region-based segmentation",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Designed lead lifecycle and scoring system with automated routing logic, MQL qualification, and CRM integration",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Built multi-touch attribution model for revenue reporting and centralized nurture architecture with prioritization segmentation",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "border-l border-border print:border-gray-300 pl-4",
                      children: [
                        /*#__PURE__*/ _jsxs("div", {
                          className: "mb-2",
                          children: [
                            /*#__PURE__*/ _jsx("h3", {
                              className:
                                "text-lg font-semibold print:text-black",
                              children: "Marketing Automation Manager",
                            }),
                            /*#__PURE__*/ _jsx("p", {
                              className:
                                "text-sm text-muted-foreground print:text-gray-700",
                              children:
                                "Malwarebytes | December 2017 — July 2019",
                            }),
                          ],
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                          className:
                            "space-y-1.5 text-sm text-muted-foreground print:text-gray-800",
                          children: [
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Built campaign operations infrastructure from the ground up with intake workflows, SLA management, and QA protocols",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Implemented lead routing and scoring using LeanData, optimizing lead-to-sales handoff times and response rates",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Designed and launched customer lifecycle nurture program that delivered notable gains in product adoption and retention",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "border-l border-border print:border-gray-300 pl-4",
                      children: [
                        /*#__PURE__*/ _jsxs("div", {
                          className: "mb-2",
                          children: [
                            /*#__PURE__*/ _jsx("h3", {
                              className:
                                "text-lg font-semibold print:text-black",
                              children: "Demand Generation Specialist",
                            }),
                            /*#__PURE__*/ _jsx("p", {
                              className:
                                "text-sm text-muted-foreground print:text-gray-700",
                              children:
                                "WhiteHat Security | August 2016 — November 2017",
                            }),
                          ],
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                          className:
                            "space-y-1.5 text-sm text-muted-foreground print:text-gray-800",
                          children: [
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Executed multi-channel demand generation campaigns in Marketo across email, webinar, and digital channels",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Built and optimized email nurture streams with audience segmentation to improve engagement and conversion",
                                }),
                              ],
                            }),
                            /*#__PURE__*/ _jsxs("li", {
                              className: "flex",
                              children: [
                                /*#__PURE__*/ _jsx("span", {
                                  className: "mr-2",
                                  children: "•",
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                  children:
                                    "Partnered with Sales Development on ABM initiatives, lead qualification, and handoff optimization",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /*#__PURE__*/ _jsxs("section", {
              className: "mb-8",
              children: [
                /*#__PURE__*/ _jsx("h2", {
                  className: "text-2xl font-bold mb-4 print:text-black",
                  children: "Key Achievements",
                }),
                /*#__PURE__*/ _jsxs("div", {
                  className: "grid gap-4",
                  children: [
                    /*#__PURE__*/ _jsxs(Card, {
                      className:
                        "p-4 print:border print:border-gray-300 print:shadow-none",
                      children: [
                        /*#__PURE__*/ _jsx("h3", {
                          className: "font-semibold mb-1 print:text-black",
                          children: "Marketing Tech Stack Consolidation",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Led strategic vendor consolidation at Benchling, achieving significant cost savings while improving system performance and team efficiency",
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs(Card, {
                      className:
                        "p-4 print:border print:border-gray-300 print:shadow-none",
                      children: [
                        /*#__PURE__*/ _jsx("h3", {
                          className: "font-semibold mb-1 print:text-black",
                          children: "Customer Engagement Transformation",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Designed customer lifecycle nurture program at Malwarebytes that delivered substantial gains in product adoption and retention through strategic engagement and personalized content delivery",
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs(Card, {
                      className:
                        "p-4 print:border print:border-gray-300 print:shadow-none",
                      children: [
                        /*#__PURE__*/ _jsx("h3", {
                          className: "font-semibold mb-1 print:text-black",
                          children: "Global Privacy Compliance Framework",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Architected GDPR and CASL compliance framework at Intercom with automated consent management, expiration tracking, and region-based segmentation",
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs(Card, {
                      className:
                        "p-4 print:border print:border-gray-300 print:shadow-none",
                      children: [
                        /*#__PURE__*/ _jsx("h3", {
                          className: "font-semibold mb-1 print:text-black",
                          children: "Lead Lifecycle Optimization",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Implemented LeanData and automated processes that dramatically reduced lead-to-conversion times, accelerating funnel velocity",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /*#__PURE__*/ _jsxs("section", {
              className: "mb-8",
              children: [
                /*#__PURE__*/ _jsx("h2", {
                  className: "text-2xl font-bold mb-4 print:text-black",
                  children: "Technical Expertise",
                }),
                /*#__PURE__*/ _jsxs("div", {
                  className: "grid md:grid-cols-2 gap-4",
                  children: [
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "p-4 bg-secondary/60 print:bg-gray-50 rounded-md",
                      children: [
                        /*#__PURE__*/ _jsx("h3", {
                          className:
                            "font-semibold mb-2 text-sm print:text-black",
                          children: "Marketing Platforms",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Marketo (Certified Expert), Salesforce, LeanData, Demandbase, Airtable",
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "p-4 bg-secondary/60 print:bg-gray-50 rounded-md",
                      children: [
                        /*#__PURE__*/ _jsx("h3", {
                          className:
                            "font-semibold mb-2 text-sm print:text-black",
                          children: "Analytics & BI",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Sigma, Tableau, attribution modeling, data quality monitoring, KPI dashboards",
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "p-4 bg-secondary/60 print:bg-gray-50 rounded-md",
                      children: [
                        /*#__PURE__*/ _jsx("h3", {
                          className:
                            "font-semibold mb-2 text-sm print:text-black",
                          children: "Automation & Integration",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Workato, Zapier, Clay, API integrations, AI workflow automation",
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "p-4 bg-secondary/60 print:bg-gray-50 rounded-md",
                      children: [
                        /*#__PURE__*/ _jsx("h3", {
                          className:
                            "font-semibold mb-2 text-sm print:text-black",
                          children: "Project & Campaign Ops",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Asana, Wrike, lead scoring, nurture streams, campaign workflows",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /*#__PURE__*/ _jsx("footer", {
              className:
                "pt-6 border-t border-border print:border-gray-300 text-center",
              children: /*#__PURE__*/ _jsx("p", {
                className: "text-sm text-muted-foreground print:text-gray-600",
                children:
                  "This summary represents a high-level overview. For detailed project information and full portfolio, visit the main website or connect via LinkedIn.",
              }),
            }),
          ],
        }),
      }),
      /*#__PURE__*/ _jsx("style", {
        dangerouslySetInnerHTML: {
          __html: `
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
      `,
        },
      }),
    ],
  });
}
