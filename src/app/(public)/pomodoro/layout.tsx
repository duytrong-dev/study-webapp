import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomodoro",
  description: "Pomodoro",
};

export default function PomodoroLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
         <>{children}</>
    )
}
