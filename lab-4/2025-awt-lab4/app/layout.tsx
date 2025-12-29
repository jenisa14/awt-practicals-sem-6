import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "My Creative Website",
  description: "A simple and beautiful Next.js website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f4f4f4" }}>
        <header className="bg-dark text-white p-3">
          <nav className="container d-flex justify-content-between">
            <h3 className="m-0">My Creative Site</h3>
            <ul className="nav">
              <li className="nav-item">
                <Link href="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link text-white">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link text-white">Contact</Link>
              </li>
              <li className="nav-item">
                <Link href="/product" className="nav-link text-white">Product</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container py-4">{children}</main>

        <footer className="bg-dark text-white text-center p-3 mt-4">
          © 2025 My Website
        </footer>
      </body>
    </html>
  );
}
