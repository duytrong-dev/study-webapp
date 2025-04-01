export default function LandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="container">
            {children}
        </main>
    )
}