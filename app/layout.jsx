import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
const _geist = Geist({
    subsets: [
        "latin"
    ]
});
const _geistMono = Geist_Mono({
    subsets: [
        "latin"
    ]
});
// <CHANGE> Updated metadata for portfolio
export const metadata = {
    metadataBase: new URL("https://www.nhattran.me"),
    title: "Nhat Tran - Marketing Operations Expert",
    description: "Marketing Operations expert building efficient go-to-market engines through strategic process optimization, data-driven insights, and modern marketing technology.",
    openGraph: {
        title: "Nhat Tran - Marketing Operations Expert",
        description: "Building efficient marketing systems that drive measurable results through automation, integration, and process optimization.",
        url: "https://www.nhattran.me",
        siteName: "Nhat Tran Portfolio",
        type: "website",
    },
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)"
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)"
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml"
            }
        ],
        apple: "/apple-icon.png"
    }
};
export default function RootLayout({ children }) {
    return /*#__PURE__*/ _jsx("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ _jsxs("body", {
            className: `font-sans antialiased`,
            children: [
                /*#__PURE__*/ _jsx(ThemeProvider, {
                    attribute: "class",
                    defaultTheme: "light",
                    enableSystem: true,
                    disableTransitionOnChange: true,
                    children: children
                }),
                /*#__PURE__*/ _jsx(Analytics, {})
            ]
        })
    });
}

