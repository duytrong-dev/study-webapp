import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lịch học",
    description: "Lịch học",
};

export default function StudyScheduleLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <>
            {children}
        </>
    )
}
