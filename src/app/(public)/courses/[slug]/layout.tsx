import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khóa học 1 - Học lập trình từ đầu",
  description: "Khóa học 1 - Học lập trình từ đầu",
};

export default function CoureseIdLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
         <>{children}</>
    )
}
