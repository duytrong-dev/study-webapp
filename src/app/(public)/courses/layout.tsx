import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khóa học",
  description: "Khóa học",
};

export default function CoureseLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <>
            {children}
        </>
    )
}
