import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

// styled-components issus solution
import StyledComponentsRegistry from "./StyledComponentsRegistry";

// fontawesome issue solution
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// font-family addition
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "텍스트 도구 : Text Editor",
  description: "원하는 텍스트를 추가, 수정, 삭제 하세요! add text, edit text, delete text as you like!",
  openGraph: {
    type: "website",
    title: "텍스트 도구 : Text Editor",
    description: "원하는 텍스트를 추가, 수정, 삭제 하세요! add text, edit text, delete text as you like!",
    url: "https://www.textool.site/",
    locale: "ko_KR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
