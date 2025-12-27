/** @format */

import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import './style.css';
const inter = Inter({
    subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/png" href="/assets/img/logo/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/assets/img/logo/favicon.svg" />
                <link rel="shortcut icon" href="/assets/img/logo/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/logo/apple-touch-icon.png" />
            </head>
            <body
                style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <RootProvider
                    search={{
                        options: {
                            type: "static",
                            api: "/docs/search"
                        },
                    }}
                >
                    {children}
                </RootProvider>
            </body>
        </html>
    );
}
