/**
 * © Code-Theft_ 2024. All rights reserved.
 *
 * This code is the property of [Your Name] and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 */

import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codetheft Portfolio Website",
  description: "Created with NextJS and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
