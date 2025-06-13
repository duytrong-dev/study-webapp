import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tạo khóa học bằng AI",
    description: "Tạo khóa học bằng AI",
};

export default function CreateCourseByAILayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <>
            {children}
        </>
    )
}
