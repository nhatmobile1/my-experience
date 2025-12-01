'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
export function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ _jsx(NextThemesProvider, {
        ...props,
        children: children
    });
}

