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
            "max-w-5xl mx-auto bg-card dark:bg-card print:bg-white rounded-lg shadow-sm print:shadow-none p-8 print:p-0",
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
                    /*#__PURE__*/ _jsx("span", {
                      children: "github.com/nhatmobile1",
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
                    "Marketing operations professional with 9 years of experience building efficient systems that drive measurable results. Specialized in marketing automation, system integration, and process optimization at leading technology companies including Benchling, Intercom, and Malwarebytes. Marketo Certified Expert with proven track record of implementing automated lead nurturing systems, consolidating vendor tools for significant cost savings, and improving key metrics like customer seat usage from 50-60% to 95%.",
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
                    "Campaign Workflow Design",
                    "Data Quality & Analytics",
                    "Vendor & Cost Management",
                    "Process Documentation",
                    "Demand Generation",
                    "System Integration",
                    "Team Training & Enablement",
                    "Account-Based Marketing",
                    "Email Marketing & Segmentation",
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
                        "border-l-2 border-primary print:border-gray-400 pl-4",
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
                                    "Led strategic vendor consolidation initiative with significant cost savings through contract negotiation and marketing technology ecosystem streamlining",
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
                                    "Developed standardized processes for campaign and channel management, creating automated lead nurturing workflows that enhanced demand generation",
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
                                    "Created comprehensive documentation for marketing systems and processes, streamlining onboarding and maintaining operational consistency",
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
                                    "Established ongoing data health monitoring practices, ensuring accurate data quality for effective marketing tactics and reliable reporting",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "border-l-2 border-primary print:border-gray-400 pl-4",
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
                                    "Developed sophisticated segmentation strategies and automated campaign workflows including data mapping, user journeys, and triggered email sequences",
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
                                    "Managed marketing automation platform and integrated multiple systems to optimize marketing operations and improve campaign execution efficiency",
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
                                    "Maintained database health while monitoring system metrics to track usage trends and enable data-driven decision making",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "border-l-2 border-primary print:border-gray-400 pl-4",
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
                                    "Built comprehensive campaign operations process from ground up, implementing intake tool and training program for entire marketing team",
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
                                    "Implemented efficiency tools including LeanData and developed automated processes that dramatically reduced lead-to-conversion times",
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
                                  children: /*#__PURE__*/ _jsx("strong", {
                                    className: "print:text-black",
                                    children:
                                      "Launched first customer nurture program, improving seat usage from 50-60% to 95%",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className:
                        "border-l-2 border-primary print:border-gray-400 pl-4",
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
                                    "Designed, built, and executed demand generation programs in Marketo",
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
                                    "Implemented account-based marketing strategies with Sales Development team",
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
                            "Increased customer seat usage from 50-60% to 95% at Malwarebytes through strategic nurture program design and personalized content delivery",
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
                            "Implemented LeanData and automated processes that dramatically reduced lead-to-conversion times, accelerating pipeline velocity",
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
                            "Marketo (Certified Expert), Salesforce, LeanData, HubSpot, Pardot",
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
                          children: "Analytics & Reporting",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Campaign analytics, data quality monitoring, attribution modeling, KPI dashboards",
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
                          children: "Integration Tools",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "API integrations, Zapier, webhook management, data synchronization",
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
                          children: "Campaign Management",
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          className:
                            "text-sm text-muted-foreground print:text-gray-800",
                          children:
                            "Email marketing, drip campaigns, lead scoring, nurture streams, A/B testing",
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
