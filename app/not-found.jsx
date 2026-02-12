import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";

export default function NotFound() {
  return /*#__PURE__*/ _jsx("div", {
    className: "min-h-screen bg-background text-foreground flex items-center justify-center",
    children: /*#__PURE__*/ _jsxs("div", {
      className: "text-center px-4",
      children: [
        /*#__PURE__*/ _jsx("p", {
          className: "text-6xl font-extrabold tracking-tight text-muted-foreground/30",
          children: "404",
        }),
        /*#__PURE__*/ _jsx("h1", {
          className: "text-2xl font-semibold mt-4 mb-2",
          children: "Page not found",
        }),
        /*#__PURE__*/ _jsx("p", {
          className: "text-muted-foreground mb-8",
          children: "The page you're looking for doesn't exist.",
        }),
        /*#__PURE__*/ _jsx(Link, {
          href: "/",
          className:
            "px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity",
          children: "Back to Portfolio",
        }),
      ],
    }),
  });
}
