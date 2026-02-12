"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default function Error({ error, reset }) {
  return /*#__PURE__*/ _jsx("div", {
    className: "min-h-screen bg-background text-foreground flex items-center justify-center",
    children: /*#__PURE__*/ _jsxs("div", {
      className: "text-center px-4",
      children: [
        /*#__PURE__*/ _jsx("p", {
          className: "text-6xl font-extrabold tracking-tight text-muted-foreground/30",
          children: "Error",
        }),
        /*#__PURE__*/ _jsx("h1", {
          className: "text-2xl font-semibold mt-4 mb-2",
          children: "Something went wrong",
        }),
        /*#__PURE__*/ _jsx("p", {
          className: "text-muted-foreground mb-8",
          children: error?.message || "An unexpected error occurred.",
        }),
        /*#__PURE__*/ _jsx("button", {
          onClick: reset,
          className:
            "px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity",
          children: "Try again",
        }),
      ],
    }),
  });
}
