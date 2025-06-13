import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission",
  description: "Mission",
};

export default function MissionLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
         <>{children}</>
    )
}
