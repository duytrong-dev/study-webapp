import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cài đặt",
  description: "Cài đặt",
};

export default function SettingLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
         <>{children}</>
    )
}
