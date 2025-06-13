import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bài tập",
    description: "Bài tập",
};

export default function ExerciseLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <>
            {children}
        </>
    )
}
