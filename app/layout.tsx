import './globals.css'
import Navbar from "@/components/Navbar";

export const metadata = {
    title: 'Financeer',
    description: 'Financeer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={"bg-background text-white"}>
        <Navbar/>
        <main className="min-h-screen">
            {children}
        </main>
        </body>
        </html>
    )
}
