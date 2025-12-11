"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Moon, Sun, FileText } from "lucide-react";
import Link from "next/link";
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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
            className: "mb-16",
            children: [
              /*#__PURE__*/ _jsxs("div", {
                className: "flex items-start justify-between mb-8",
                children: [
                  /*#__PURE__*/ _jsxs("div", {
                    children: [
                      /*#__PURE__*/ _jsx("h1", {
                        className:
                          "text-4xl md:text-5xl font-bold mb-3 text-balance",
                        children: "Nhat Tran",
                      }),
                      /*#__PURE__*/ _jsx("p", {
                        className: "text-lg md:text-xl text-muted-foreground",
                        children: "Marketing Operations & Technology Leader",
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
                      /*#__PURE__*/ _jsx(Link, {
                        href: "/experience/summary",
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
                children: [
                  /*#__PURE__*/ _jsxs("button", {
                    onClick: () => setActiveTab("about"),
                    className: `pb-3 px-1 font-medium transition-colors relative ${
                      activeTab === "about"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`,
                    children: [
                      "About",
                      activeTab === "about" &&
                        /*#__PURE__*/ _jsx("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 h-0.5 bg-foreground",
                        }),
                    ],
                  }),
                  /*#__PURE__*/ _jsxs("button", {
                    onClick: () => setActiveTab("experience"),
                    className: `pb-3 px-1 font-medium transition-colors relative ${
                      activeTab === "experience"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`,
                    children: [
                      "Experience",
                      activeTab === "experience" &&
                        /*#__PURE__*/ _jsx("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 h-0.5 bg-foreground",
                        }),
                    ],
                  }),
                  /*#__PURE__*/ _jsxs("button", {
                    onClick: () => setActiveTab("projects"),
                    className: `pb-3 px-1 font-medium transition-colors relative ${
                      activeTab === "projects"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`,
                    children: [
                      "Projects",
                      activeTab === "projects" &&
                        /*#__PURE__*/ _jsx("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 h-0.5 bg-foreground",
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /*#__PURE__*/ _jsxs("main", {
            children: [
              activeTab === "about" && /*#__PURE__*/ _jsx(AboutSection, {}),
              activeTab === "experience" &&
                /*#__PURE__*/ _jsx(ExperienceSection, {}),
              activeTab === "projects" &&
                /*#__PURE__*/ _jsx(ProjectsSection, {}),
            ],
          }),
          /*#__PURE__*/ _jsx("footer", {
            className: "mt-24 pt-8 border-t border-border",
            children: /*#__PURE__*/ _jsxs("div", {
              className:
                "flex flex-col md:flex-row items-center justify-between gap-4",
              children: [
                /*#__PURE__*/ _jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "© 2025 Nhat Tran. Built with Next.js",
                }),
                /*#__PURE__*/ _jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    /*#__PURE__*/ _jsx("a", {
                      href: "https://github.com/nhatmobile1",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-muted-foreground hover:text-foreground transition-colors",
                      children: /*#__PURE__*/ _jsx(Github, {
                        className: "h-5 w-5",
                      }),
                    }),
                    /*#__PURE__*/ _jsx("a", {
                      href: "https://www.linkedin.com/in/nt-tran/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-muted-foreground hover:text-foreground transition-colors",
                      children: /*#__PURE__*/ _jsx(Linkedin, {
                        className: "h-5 w-5",
                      }),
                    }),
                    /*#__PURE__*/ _jsx("a", {
                      href: "mailto:nhatmobile@gmail.com",
                      className:
                        "text-muted-foreground hover:text-foreground transition-colors",
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
    className: "space-y-8",
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
                  "I'm a marketing operations professional who builds efficient systems that drive measurable results. Over the past 9 years at companies like Benchling, Intercom, and Malwarebytes, I've specialized in marketing automation, system integration, and process optimization.",
              }),
              /*#__PURE__*/ _jsx("p", {
                className:
                  "text-base leading-relaxed text-muted-foreground mt-4",
                children:
                  "My approach centers on transforming complex marketing technology stacks into streamlined operations. I've implemented automated lead nurturing systems that improved conversion efficiency, consolidated vendor tools to achieve significant cost savings, and built comprehensive documentation systems that enable teams to operate more effectively. I'm a Marketo Certified Expert with deep experience across the full marketing operations spectrum.",
              }),
              /*#__PURE__*/ _jsx("p", {
                className:
                  "text-base leading-relaxed text-muted-foreground mt-4",
                children:
                  "Whether it's designing segmentation strategies, integrating CRM platforms, optimizing lead lifecycle management, or creating data health monitoring practices, I focus on building infrastructure that reduces manual work and enables data-driven decision making. My work helps marketing teams move faster, spend smarter, and measure what matters.",
              }),
            ],
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
                desc: "Seamless data flow across marketing tech stacks and CRM platforms",
              },
              {
                title: "Data & Analytics",
                desc: "Campaign reporting, data health monitoring, and performance optimization",
              },
              {
                title: "Process Optimization",
                desc: "Standardization, documentation, and efficiency improvements",
              },
              {
                title: "Vendor Management",
                desc: "Contract negotiation, tool consolidation, and cost optimization",
              },
              {
                title: "Demand Generation",
                desc: "Lead conversion strategies and pipeline acceleration",
              },
            ].map((expertise) =>
              /*#__PURE__*/ _jsxs(
                "div",
                {
                  className: "p-4 bg-secondary/50 rounded-lg",
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
                  href: "https://github.com/nhatmobile1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    /*#__PURE__*/ _jsx(Github, {
                      className: "mr-2 h-4 w-4",
                    }),
                    "GitHub",
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
        "Led strategic vendor consolidation initiative, negotiating contracts and streamlining the marketing technology ecosystem with significant cost savings",
        "Developed standardized processes for campaign and channel management, creating automated lead nurturing workflows that enhanced demand generation",
        "Created comprehensive documentation for marketing systems and processes, streamlining onboarding and maintaining operational consistency",
        "Established ongoing data health monitoring practices, ensuring accurate data quality for effective marketing tactics and reliable reporting",
      ],
      technologies: [
        "Marketo",
        "Salesforce",
        "Data Management",
        "Process Automation",
        "Vendor Management",
      ],
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
      technologies: [
        "Marketing Automation",
        "Segmentation",
        "Email Marketing",
        "System Integration",
        "Analytics",
      ],
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
      technologies: [
        "Marketo",
        "LeanData",
        "Lead Management",
        "Customer Success",
        "Process Development",
      ],
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
      technologies: [
        "Marketo",
        "Demand Generation",
        "Email Marketing",
        "Webinars",
        "ABM",
      ],
    },
  ];
  return /*#__PURE__*/ _jsx("div", {
    className: "space-y-6",
    children: experiences.map((exp, index) =>
      /*#__PURE__*/ _jsxs(
        Card,
        {
          className: "p-6 hover:border-foreground/20 transition-colors",
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
                      "px-2.5 py-1 bg-primary/10 text-primary rounded text-xs font-medium",
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
    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
    children: projects.map((project, index) =>
      /*#__PURE__*/ _jsxs(
        Card,
        {
          className: "p-6 group hover:border-foreground/20 transition-all",
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
                      "px-2.5 py-1 bg-secondary text-secondary-foreground rounded text-xs",
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
