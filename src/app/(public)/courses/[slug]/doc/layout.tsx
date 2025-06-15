import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khóa học lập trình python cơ bản",
  description: "Khóa học lập trình python cơ bản - Học lập trình từ đầu",
};

export default function CoureseIdDocLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
         <>{children}</>
    )
}
